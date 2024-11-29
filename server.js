const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
//const session = require('express-session'); 

const app = express();
app.use(bodyParser.json());

const port = 5000;

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/expenses', require('./routes/expense'));
app.use('/transaction', require('./routes/transaction'));
app.use('/income', require('./routes/income'));
app.use('/budgets', require('./routes/budget'));
app.use('/reports', require('./routes/reports'));
app.use('/users', require('./routes/user'));

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
