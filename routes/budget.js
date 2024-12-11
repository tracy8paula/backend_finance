import { Router } from 'express';
import { createBudget, getUserBudgets, deleteBudget } from '../controllers/budgetC.js';

const router = Router();

// adding budgets
router.post('/budgets', createBudget);
// getting all budgets
router.get('/budgets/:userId', getUserBudgets);
// Route to delete a budget
router.delete('/budgets/:budgetId', deleteBudget);

export default router;
