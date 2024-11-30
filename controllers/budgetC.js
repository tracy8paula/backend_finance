const { createBudget, getBudgetsByUser, deleteBudget } = require('../models/budget');

// Add a new budget
exports.createBudget = (req, res) => {
  const { userId, name, totalAmount, startDate, endDate } = req.body;

  // Validate all required fields
  if (!userId || !name || !totalAmount || !startDate || !endDate) {
    return res.status(400).json({ error: 'All fields (userId, name, totalAmount, startDate, endDate) are required' });
  }

  createBudget(userId, name, totalAmount, startDate, endDate, (err, result) => {
    if (err) {
      console.error('Error creating budget:', err);
      return res.status(500).json({ error: 'Failed to add budget', details: err.message || err });
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
      console.error('Error fetching budgets:', err);
      return res.status(500).json({ error: 'Failed to retrieve budgets', details: err.message || err });
    }
    res.status(200).json({ message: 'Budgets retrieved successfully', data: results });
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
      console.error('Error deleting budget:', err);
      return res.status(500).json({ error: 'Failed to delete budget', details: err.message || err });
    }
    res.status(200).json({ message: 'Budget deleted successfully', data: result });
  });
};
