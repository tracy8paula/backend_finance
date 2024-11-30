const bcrypt = require('bcrypt');
const { getUserByEmail, createUser } = require('../models/user');

// User Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  getUserByEmail(email, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Store user information in the session
      req.session.user = { id: user.id, email: user.email, username: user.username };

      res.status(200).json({
        message: 'Login successful',
        user: { id: user.id, email: user.email, username: user.username },
      });
    });
  });
};

// User Registration
exports.register = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  createUser(username, email, password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to register user', details: err });
    }
    res.status(201).json({ message: 'User registered successfully', data: result });
  });
};

// User Logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to log out' });
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
};
