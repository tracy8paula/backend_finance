const db = require('./my_db');

// Add a new income
const addIncome = (userId, source, amount, date, callback) => {
    const query = 'INSERT INTO income (userId, source, amount, date) VALUES (?, ?, ?, ?)';
    db.query(query, [userId, source, amount, date], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Get all income entries for a user
const getIncomeByUser = (userId, callback) => {
    const query = 'SELECT * FROM income WHERE userId = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Delete an income
const deleteIncome = (incomeId, callback) => {
    const query = 'DELETE FROM incomes WHERE id = ?';
    db.query(query, [incomeId], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

module.exports = {
    addIncome,
    getIncomeByUser,
    deleteIncome
};
