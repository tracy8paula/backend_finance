const { getTransactionsFromLocal, createTransactionInLocal } = require('../models/transaction');

const getTransactions = async (req, res) => {
  try {
    // Fetch transactions from local DB
    const transactions = await new Promise((resolve, reject) => {
      getTransactionsFromLocal((err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    res.status(200).json({ data: transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Error fetching transactions' });
  }
};

const createTransaction = async (req, res) => {
  const transaction = req.body; // Get the transaction from the request body

  try {
    // Create transaction in local DB
    const createdTransaction = await new Promise((resolve, reject) => {
      createTransactionInLocal(transaction, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    res.status(201).json({ data: createdTransaction });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Error creating transaction' });
  }
};

module.exports = {
  createTransaction,
  getTransactions
}