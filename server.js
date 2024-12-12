import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Import route handlers
import authRoutes from './routes/auth.js';
import expenseRoutes from './routes/expense.js';
import transactionRoutes from './routes/transaction.js';
import incomeRoutes from './routes/income.js';
import budgetRoutes from './routes/budget.js';
import reportRoutes from './routes/reports.js';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();

// Middleware for security, cross-origin requests, and parsing JSON
app.use(cors()); // handles requests from different domains
app.use(helmet());  // Security headers
app.use(bodyParser.json());  // Body parser middleware for JSON data

const port = process.env.PORT || 5000; // Use port from .env to avail flexibility

// Routes
app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);
app.use('/transaction', transactionRoutes);
app.use('/income', incomeRoutes);
app.use('/budgets', budgetRoutes);
app.use('/reports', reportRoutes);
app.use('/users', userRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong! Please try again later.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
