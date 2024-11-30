const { addExpense, getExpensesByUser } = require('../models/expense');

// Add a new expense
exports.createExpense = (req, res) => {
  const { userId, category, amount, description, date } = req.body;

  // Validate all required fields
  if (!userId || !category || !amount || !description || !date) {
    return res.status(400).json({ error: 'All fields (userId, category, amount, description, date) are required' });
  }

  addExpense(userId, category, amount, description, date, (err, result) => {
    if (err) {
      console.error('Error adding expense:', err);
      return res.status(500).json({ error: 'Failed to add expense', details: err.message || err });
    }
    res.status(201).json({ message: 'Expense added successfully', data: result });
  });
};

// Get all expenses for a user
exports.getUserExpenses = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  getExpensesByUser(userId, (err, results) => {
    if (err) {
      console.error('Error fetching expenses:', err);
      return res.status(500).json({ error: 'Failed to retrieve expenses', details: err.message || err });
    }
    res.status(200).json({ message: 'Expenses retrieved successfully', data: results });
  });
};
