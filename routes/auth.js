const express = require('express');
const authController = require('../controllers/authC');

const router = express.Router();

// Route for user login
router.post('/login', authController.login);

// Route for user registration
router.post('/register', authController.register);

// route to logout
router.post('/logout', authController.logout);

module.exports = router;
