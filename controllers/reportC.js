import { getExpensesByUser } from '../models/expense.js';
import { getIncomeByUser } from '../models/income.js';

// Generate a summary report
export async function generateReport(req, res) {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    // Fetch all incomes for the user
    const incomes = await new Promise((resolve, reject) =>
      getIncomeByUser(userId, (err, results) => {
        if (err) {
          console.error('Error fetching incomes:', err);
          reject(err);
        } else {
          resolve(results || []); // Default to an empty array if no results
        }
      })
    );

    // Fetch all expenses for the user
    const expenses = await new Promise((resolve, reject) =>
      getExpensesByUser(userId, (err, results) => {
        if (err) {
          console.error('Error fetching expenses:', err);
          reject(err);
        } else {
          resolve(results || []); // Default to an empty array if no results
        }
      })
    );

    // Calculate totals
    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const balance = totalIncome - totalExpenses;

    // Respond with the report
    res.status(200).json({
      message: 'Report generated successfully',
      userId,
      totalIncome,
      totalExpenses,
      balance,
      incomes,
      expenses,
    });
  } catch (error) {
    console.error('Failed to generate report:', error);
    res.status(500).json({
      error: 'Failed to generate report',
      details: error.message || 'An unexpected error occurred',
    });
  }
};
