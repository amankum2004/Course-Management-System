const prisma = require('../prismaClient');

// Student final registration (after approval)
exports.finalRegister = async (req, res) => {
  const { courseId } = req.body;
  const studentId = req.user.id;

  try {
    // Check if course was approved
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course.approvedByChair) {
      return res.status(400).json({ error: "Course not approved by chair." });
    }

    // Check if student's preregistration was approved
    const prereg = await prisma.preRegistration.findFirst({
      where: { courseId, studentId, status: 'approved' }
    });

    if (!prereg) {
      return res.status(400).json({ error: "Pre-registration not approved." });
    }

    // Check slot conflict
    const existing = await prisma.registration.findMany({
      where: {
        studentId,
        course: { slot: course.slot },
        status: 'registered'
      },
      include: { course: true }
    });

    if (existing.length > 0 && course.slot !== 'NS') {
      return res.status(400).json({ error: `Slot conflict with course: ${existing[0].course.code}` });
    }

    const registration = await prisma.registration.create({
      data: {
        studentId,
        courseId,
        facultyId: course.facultyId,
        semester: "2025-Jan"
      }
    });

    res.status(201).json(registration);
  } catch (err) {
    res.status(500).json({ error: "Final registration failed." });
  }
};
