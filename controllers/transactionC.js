const { getTransactionsFromLocal, createTransactionInLocal } = require('../models/transaction');

// Get all transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await new Promise((resolve, reject) => {
      getTransactionsFromLocal((err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    res.status(200).json({ message: 'Transactions fetched successfully', data: transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Error fetching transactions', details: error.message });
  }
};

// Create a new transaction
const createTransaction = async (req, res) => {
  const { userId, amount, category, date } = req.body;

  // Validate the transaction details
  if (!userId || !amount || !category || !date) {
    return res.status(400).json({ error: 'All fields (userId, amount, category, date) are required' });
  }

  try {
    const createdTransaction = await new Promise((resolve, reject) => {
      createTransactionInLocal(req.body, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    res.status(201).json({ message: 'Transaction created successfully', data: createdTransaction });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Error creating transaction', details: error.message });
  }
};

module.exports = {
  getTransactions,
  createTransaction,
};
