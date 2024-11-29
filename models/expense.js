const db = require('./my_db');

// Add a new expense
const addExpense = (userId, category, amount, description, date, callback) => {
    const query = 'INSERT INTO expenses (userId, category, amount, description, date) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [userId, category, amount, description, date], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Get all expenses for a user
const getExpensesByUser = (userId, callback) => {
    const query = 'SELECT * FROM expenses WHERE userId = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    addExpense,
    getExpensesByUser
};
