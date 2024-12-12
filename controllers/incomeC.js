import { addIncome, getIncomeByUser, deleteIncome as deleteIncomeModel } from '../models/income.js';

// Add a new income
export function createIncome(req, res) {
  const { userId, source, amount, date } = req.body;

  if (!userId || !source || !amount || !date) {
    return res.status(400).json({ error: 'All fields (userId, source, amount, date) are required' });
  }

  addIncome(userId, source, amount, date, (err, result) => {
    if (err) {
      console.error('Error adding income:', err);
      return res.status(500).json({ error: 'Failed to add income', details: err.message || err });
    }
    res.status(201).json({ message: 'Income added successfully', data: result });
  });
};

// Get all incomes for a user
export function getUserIncomes(req, res) {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  getIncomeByUser(userId, (err, results) => {
    if (err) {
      console.error('Error fetching incomes:', err);
      return res.status(500).json({ error: 'Failed to retrieve incomes', details: err.message || err });
    }
    res.status(200).json({ message: 'Incomes fetched successfully', data: results });
  });
};

// Delete an income
export const deleteIncome = (req, res) => {
  const { incomeId } = req.params;

  if (!incomeId) {
    return res.status(400).json({ error: 'Income ID is required' });
  }

  deleteIncomeModel(incomeId, (err, result) => {
    if (err) {
      console.error('Error deleting income:', err);
      return res.status(500).json({ error: 'Failed to delete income', details: err.message || err });
    }
    res.status(200).json({ message: 'Income deleted successfully', data: result });
  });
};
