import { Router } from 'express';
import { createIncome, getUserIncomes, deleteIncome } from '../controllers/incomeC.js';

const router = Router();

// Route to create a new income
router.post('/incomes', createIncome);

// Route to get all incomes for a user
router.get('/incomes/:userId', getUserIncomes);

// Route to delete an income
router.delete('/incomes/:incomeId', deleteIncome);

export default router;
