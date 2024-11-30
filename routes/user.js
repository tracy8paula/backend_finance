const express = require('express');
const userController = require('../controllers/userC');
const authController = require('../controllers/authC');
const router = express.Router();

// User registration (sign-up)
router.post('/sign-up', authController.register);

// User login
router.post('/login', authController.login);

// User profile (authenticated)
router.post('/users/profile', userController.getUserProfile);

// Get user by email
router.get('/users/:email', userController.getUserByEmail);

module.exports = router;
