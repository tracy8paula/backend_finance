const db = require('./my_db'); 

const getTransactionsFromLocal = (callback) => {
  const query = 'SELECT * FROM transactions';  // Query to get all transactions
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching transactions from MySQL:', err);
      return callback(err, null);  // Pass the error to the callback if there’s an issue
    }
    callback(null, results);  // Return the results if the query is successful
  });
};


const createTransactionInLocal = (transaction, callback) => {
  const { userId, amount, category, date } = transaction;  // Extract the transaction details
  const query = 'INSERT INTO transactions (userId, amount, category, date) VALUES (?, ?, ?, ?)';  // Insert query
  db.query(query, [userId, amount, category, date], (err, result) => {
    if (err) {
      console.error('Error inserting transaction into MySQL:', err);
      return callback(err, null);  // Pass the error to the callback if there’s an issue
    }
    callback(null, result);  // Return the result if the insertion is successful
  });
};

module.exports = {
  getTransactionsFromLocal,
  createTransactionInLocal
}