const express = require('express');
const expenseController = require('../controllers/expenseC');
const router = express.Router();

// add a new expense
router.post('/expenses', expenseController.createExpense);

//get all expenses
router.get('/expenses/:userId', expenseController.getUserExpenses);

module.exports = router;
