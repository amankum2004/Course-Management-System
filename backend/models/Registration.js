const registrationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['registered', 'dropped', 'completed'], default: 'registered' },
  semester: String,
  grade: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);