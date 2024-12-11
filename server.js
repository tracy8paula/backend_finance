import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
require('dotenv').config();

const app = express();

// Middleware for security, cross-origin requests, and parsing JSON
app.use(cors()); // handles requests from different domains
app.use(helmet());  // Security headers
app.use(json());  // Body parser middleware for JSON data

const port = process.env.PORT || 5000; // Use port from .env to avail flexibility

// Routes
app.use('/auth', require('./routes/auth.js'));
app.use('/expenses', require('./routes/expense.js'));
app.use('/transaction', require('./routes/transaction.js'));
app.use('/income', require('./routes/income.js'));
app.use('/budgets', require('./routes/budget.js'));
app.use('/reports', require('./routes/reports.js'));
app.use('/users', require('./routes/user.js'));

// Global error handling middleware
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong! Please try again later.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
