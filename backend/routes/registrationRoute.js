const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const { finalRegister } = require('../controllers/registrationController');

router.post('/', verifyToken, finalRegister);

module.exports = router;
