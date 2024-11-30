const mysql = require('mysql2');

// Create the database connection
const db = mysql.createConnection({
    host: '127.0.0.1', 
    port: 3306,        
    user: 'root',      
    password: 'Tracy_ace8',      
    database: 'finance',      
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

module.exports = db;
