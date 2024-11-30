const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware for security, cross-origin requests, and parsing JSON
app.use(cors());
app.use(helmet());  // Security headers
app.use(bodyParser.json());  // Body parser middleware for JSON data

const port = process.env.PORT || 5000; // Use port from .env or default to 5000

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/expenses', require('./routes/expense'));
app.use('/transaction', require('./routes/transaction'));
app.use('/income', require('./routes/income'));
app.use('/budgets', require('./routes/budget'));
app.use('/reports', require('./routes/reports'));
app.use('/users', require('./routes/user'));

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong! Please try again later.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
