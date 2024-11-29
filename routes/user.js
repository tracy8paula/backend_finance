const express = require('express');
const userController = require('../controllers/userC'); 
const router = express.Router();

// Route to create a new user
router.post('/users', userController.createUser);

// Route to get a user by email
router.get('/users/:email', userController.getUserByEmail);

// A route to get user profile by userId from the request body (no authentication middleware)
router.post('/profile', userController.getUserProfile);

module.exports = router;
