import db from './my_db.js';

// Create a new budget
export const createBudget = (userId, name, totalAmount, startDate, endDate, callback) => {
    const query = 'INSERT INTO budgets (userId, name, totalAmount, startDate, endDate) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [userId, name, totalAmount, startDate, endDate], (err, result) => {
        if (err) {
            console.error('Error creating budget:', err);
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Get all budgets for a user
export const getBudgetsByUser = (userId, callback) => {
    const query = 'SELECT * FROM budgets WHERE userId = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching budgets:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Delete a budget
export const deleteBudget = (budgetId, callback) => {
    const query = 'DELETE FROM budgets WHERE id = ?';
    db.query(query, [budgetId], (err, result) => {
        if (err) {
            console.error('Error deleting budget:', err);
            return callback(err, null);
        }
        callback(null, result);
    });
};
