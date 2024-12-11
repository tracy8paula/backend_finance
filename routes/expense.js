import { Router } from 'express';
import { createExpense, getUserExpenses } from '../controllers/expenseC.js';
const router = Router();

// add a new expense
router.post('/expenses', createExpense);

//get all expenses
router.get('/expenses/:userId', getUserExpenses);

export default router;
