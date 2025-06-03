const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const {
  createCourse,
  approveCourse,
  getAllCourses
} = require('../controllers/courseController');

router.post('/create', verifyToken, createCourse);
router.post('/approve', verifyToken, approveCourse);
router.get('/', verifyToken, getAllCourses);

module.exports = router;
