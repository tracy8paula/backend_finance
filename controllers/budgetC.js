import { createBudget as createBudgetModel, getBudgetsByUser, deleteBudget as deleteBudgetModel } from '../models/budget.js';

// Add a new budget
export const createBudget = (req, res) => {
  const { userId, name, totalAmount, startDate, endDate } = req.body;

  // Validate all required fields
  if (!userId || !name || !totalAmount || !startDate || !endDate) {
    return res.status(400).json({ error: 'All fields (userId, name, totalAmount, startDate, endDate) are required' });
  }

  // Call the createBudgetModel function to create the budget
  createBudgetModel(userId, name, totalAmount, startDate, endDate, (err, result) => {
    if (err) {
      console.error('Error creating budget:', err);
      return res.status(500).json({ error: 'Failed to add budget', details: err.message || err });
    }
    res.status(201).json({ message: 'Budget added successfully', data: result });
  });
};

// Get all budgets for a user
export const getUserBudgets = (req, res) => {
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
export const deleteBudget = (req, res) => {
  const { budgetId } = req.params;

  if (!budgetId) {
    return res.status(400).json({ error: 'Budget ID is required' });
  }

  deleteBudgetModel(budgetId, (err, result) => {
    if (err) {
      console.error('Error deleting budget:', err);
      return res.status(500).json({ error: 'Failed to delete budget', details: err.message || err });
    }
    res.status(200).json({ message: 'Budget deleted successfully', data: result });
  });
};
