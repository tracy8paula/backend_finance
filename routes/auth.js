import { Router } from 'express';
import { login, register, logout } from '../controllers/authC.js';

const router = Router();

// Route for user login
router.post('/login', login);

// Route for user registration
router.post('/register', register);

// route to logout
router.post('/logout', logout);

export default router;
