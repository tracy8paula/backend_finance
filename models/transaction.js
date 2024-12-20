import db from './my_db.js';

// Get transactions from local database
export const getTransactionsFromLocal = (callback) => {
  const query = 'SELECT * FROM transactions'; // Query to fetch all transactions
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching transactions from MySQL:', err);
      return callback(err, null);
    }
    callback(null, results); // Return the fetched transactions
  });
};

// Create a new transaction in the local database
export const createTransactionInLocal = (transaction, callback) => {
  const { userId, amount, category, date } = transaction;

  if (!userId || !amount || !category || !date) {
    const error = new Error('All transaction fields (userId, amount, category, date) are required');
    console.error(error.message);
    return callback(error, null);
  }

  const query = 'INSERT INTO transactions (userId, amount, category, date) VALUES (?, ?, ?, ?)';
  db.query(query, [userId, amount, category, date], (err, result) => {
    if (err) {
      console.error('Error inserting transaction into MySQL:', err);
      return callback(err, null);
    }
    callback(null, result); // Return the result of the insertion
  });
};