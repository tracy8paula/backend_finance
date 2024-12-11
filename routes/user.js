import { Router } from 'express';
import { getUserProfile, getUserByEmail } from '../controllers/userC.js';
import { register, login } from '../controllers/authC.js';
const router = Router();

// User registration (sign-up)
router.post('/sign-up', register);

// User login
router.post('/login', login);

// User profile (authenticated)
router.post('/users/profile', getUserProfile);

// Get user by email
router.get('/users/:email', getUserByEmail);

export default router;
