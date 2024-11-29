const db = require('./my_db');
const bcrypt = require('bcrypt');

// Get user by email (for authentication)
const getUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Get user by ID (new function to fetch the profile)
const getUserById = (userId, callback) => {
  const query = 'SELECT id, username, email, createdAt FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
      if (err) {
          return callback(err, null);
      }
      // Assuming the user is found, return the first result
      callback(null, results[0]);
  });
};

// Add a new user with hashed password
const createUser = (username, email, password, callback) => {
  // Hash the password before storing it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return callback(err, null);
    }

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  });
};

module.exports = {
  getUserByEmail,
  getUserById,
  createUser
};
