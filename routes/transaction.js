import { Router } from 'express';
import { getTransactions, createTransaction } from '../controllers/transactionC.js';

const router = Router();

// Route to get transactions (from Firebase or local DB)
router.get('/transactions', getTransactions);

// Route to create a new transaction (in Firebase or local DB)
router.post('/transactions', createTransaction);

export default router;
