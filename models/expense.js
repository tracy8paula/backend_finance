import db from './my_db';

// Add a new expense
export const addExpense = (userId, category, amount, description, date, callback) => {
    const query = 'INSERT INTO expenses (userId, category, amount, description, date) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [userId, category, amount, description, date], (err, result) => {
        if (err) {
            console.error('Error adding expense:', err);
            return callback(err, null);
        }
        callback(null, result);  // Return the result of the insertion
    });
};

// Get all expenses for a user
export const getExpensesByUser = (userId, callback) => {
    const query = 'SELECT * FROM expenses WHERE userId = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching expenses:', err);
            return callback(err, null);
        }
        callback(null, results);  // Return the results if query is successful
    });
};
