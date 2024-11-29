const {addIncome, getIncomesByUser, deleteIncome} = require('../models/income');

// Add a new income
exports.createIncome = (req, res) => {
  const { userId, source, amount, date } = req.body;

  if (!userId || !source || !amount || !date) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  addIncome(userId, source, amount, date, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add income' });
    }
    res.status(201).json({ message: 'Income added successfully', data: result });
  });
};

// Get all incomes for a user
exports.getUserIncomes = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  getIncomesByUser(userId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve incomes' });
    }
    res.status(200).json({ data: results });
  });
};

// Delete an income
exports.deleteIncome = (req, res) => {
  const { incomeId } = req.params;

  if (!incomeId) {
    return res.status(400).json({ error: 'Income ID is required' });
  }

  deleteIncome(incomeId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete income' });
    }
    res.status(200).json({ message: 'Income deleted successfully', data: result });
  });
};
