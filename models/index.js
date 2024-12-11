import db from './my_db.js';
import * as User from './user.js';
import * as Expense from './expense.js';
import * as Income from './income.js';
import * as Budget from './budget.js';

// Export the database connection and models
export default { db, User, Expense, Income, Budget };

// this file just helps make other imports simpler