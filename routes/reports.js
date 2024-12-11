import { Router } from 'express';
import { generateReport } from '../controllers/reportC.js';

const router = Router();

// Route to generate a report for a user
router.get('/reports/:userId', generateReport);

export default router;
