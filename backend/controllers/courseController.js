const prisma = require('../prismaClient');

// Faculty creates a course to request to teach
exports.createCourse = async (req, res) => {
  const { code, title, ltpc, programme, school } = req.body;
  try {
    const course = await prisma.course.create({
      data: {
        code,
        title,
        ltpc,
        programme,
        facultyId: req.user.id,
        school
      }
    });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: 'Course creation failed' });
  }
};

// Chairperson approves course and assigns slot
exports.approveCourse = async (req, res) => {
  const { courseId, slot } = req.body;
  try {
    const course = await prisma.course.update({
      where: { id: parseInt(courseId) },
      data: {
        approvedByChair: true,
        slot
      }
    });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Approval failed' });
  }
};

// List all courses
exports.getAllCourses = async (req, res) => {
  const courses = await prisma.course.findMany({
    include: { faculty: true }
  });
  res.json(courses);
};
