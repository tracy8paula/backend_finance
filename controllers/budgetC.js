const {createBudget, getBudgetsByUser, deleteBudget} = require('../models/budget');

// Add a new budget
exports.createBudget = (req, res) => {
  const { userId, name, totalAmount } = req.body;

  if (!userId || !name || !totalAmount) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  createBudget(userId, name, totalAmount, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add budget' });
    }
    res.status(201).json({ message: 'Budget added successfully', data: result });
  });
};

// Get all budgets for a user
exports.getUserBudgets = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  getBudgetsByUser(userId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve budgets' });
    }
    res.status(200).json({ data: results });
  });
};

// Delete a budget
exports.deleteBudget = (req, res) => {
  const { budgetId } = req.params;

  if (!budgetId) {
    return res.status(400).json({ error: 'Budget ID is required' });
  }

  deleteBudget(budgetId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete budget' });
    }
    res.status(200).json({ message: 'Budget deleted successfully' });
  });
};
