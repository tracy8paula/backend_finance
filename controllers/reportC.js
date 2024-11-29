const expenseModel = require('../models/expense');
const incomeModel = require('../models/income'); 

// Generate a summary report
exports.generateReport = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    // Fetch all incomes for the user
    const incomes = await new Promise((resolve, reject) =>
      incomeModel.getIncomeByUser(userId, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      })
    );

    // Fetch all expenses for the user
    const expenses = await new Promise((resolve, reject) =>
      expenseModel.getExpensesByUser(userId, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      })
    );

    // Calculate total income and expenses
    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    // Calculate balance
    const balance = totalIncome - totalExpenses;

    // Respond with the report
    res.status(200).json({
      userId,
      totalIncome,
      totalExpenses,
      balance,
      incomes,
      expenses,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate report', details: error });
  }
};
