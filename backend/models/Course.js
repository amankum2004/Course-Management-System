const courseSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  title: String,
  ltpc: String,
  programme: String,
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  slot: { type: String, enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'FS1', 'FS2', 'NS'], default: 'NS' },
  school: String,
  approvedByChair: { type: Boolean, default: false }
});

module.exports = mongoose.model('Course', courseSchema);