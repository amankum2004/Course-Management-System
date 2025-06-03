const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const {
  preRegisterCourse,
  handlePreRegistration,
  getPreRegistrations
} = require('../controllers/preRegistrationController');

router.post('/', verifyToken, preRegisterCourse);
router.put('/', verifyToken, handlePreRegistration);
router.get('/:courseId', verifyToken, getPreRegistrations);

module.exports = router;
