const express = require('express');
const budgetController = require('../controllers/budgetC');

const router = express.Router();

// adding budgets
router.post('/budgets', budgetController.createBudget);
// getting all budgets
router.get('/budgets/:userId', budgetController.getUserBudgets);
// Route to delete a budget
router.delete('/budgets/:budgetId', budgetController.deleteBudget);

module.exports = router;
