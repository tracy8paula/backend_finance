import db from './my_db.js';

// Add a new income
export const addIncome = (userId, source, amount, date, callback) => {
    const query = 'INSERT INTO incomes (userId, source, amount, date) VALUES (?, ?, ?, ?)';
    db.query(query, [userId, source, amount, date], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Get all income entries for a user
export const getIncomeByUser = (userId, callback) => {
    const query = 'SELECT * FROM incomes WHERE userId = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Delete an income
export const deleteIncome = (incomeId, callback) => {
    const query = 'DELETE FROM incomes WHERE id = ?';  // Assuming the correct table name is 'incomes'
    db.query(query, [incomeId], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};
