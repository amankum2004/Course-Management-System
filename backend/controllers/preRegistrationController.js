const prisma = require('../prismaClient');

exports.submitPreReg = async (req, res) => {
  const { courseId } = req.body;
  try {
    const prereg = await prisma.preRegistration.create({
      data: {
        studentId: req.user.id,
        courseId
      }
    });
    res.status(201).json(prereg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPreRegs = async (req, res) => {
  try {
    const preregs = await prisma.preRegistration.findMany({
      include: { course: true, student: true }
    });
    res.json(preregs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approvePreReg = async (req, res) => {
  const preregId = parseInt(req.params.id);
  const { status } = req.body; // approved or rejected
  try {
    const updated = await prisma.preRegistration.update({
      where: { id: preregId },
      data: { status }
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
