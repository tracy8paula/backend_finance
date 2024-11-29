const express = require('express');
const incomeController = require('../controllers/incomeC');

const router = express.Router();

// Route to create a new income
router.post('/incomes', incomeController.createIncome);

// Route to get all incomes for a user
router.get('/incomes/:userId', incomeController.getUserIncomes);

// Route to delete an income
router.delete('/incomes/:incomeId', incomeController.deleteIncome);

module.exports = router;
