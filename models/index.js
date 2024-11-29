const db = require('./my_db');
const User = require('./user');
const Expense = require('./expense');
const Income = require('./income');
const Budget = require('./budget');

// Export the database connection and models
module.exports = { db, User, Expense, Income, Budget };

// this file just helps make other imports simpler