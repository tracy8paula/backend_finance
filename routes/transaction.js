const express = require('express');
const transactionController = require('../controllers/transactionC');

const router = express.Router();

// Route to get transactions (from Firebase or local DB)
router.get('/transactions', transactionController.getTransactions);

// Route to create a new transaction (in Firebase or local DB)
router.post('/transactions', transactionController.createTransaction);

module.exports = router;
