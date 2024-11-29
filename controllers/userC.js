const { createUser, getUserByEmail, getUserById } = require('../models/user');

// Create a new user
exports.createUser = (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Call the model function to create a user
  createUser(username, email, password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create user', details: err });
    }
    res.status(201).json({ message: 'User created successfully', data: result });
  });
};

// Get user by email
exports.getUserByEmail = (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Call the model function to get a user by email
  getUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch user', details: err });
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ data: user });
  });
};

// Get user profile by user ID (assuming user ID is passed in the request body)
exports.getUserProfile = (req, res) => {
  const { userId } = req.body; // Get the userId from the request body (instead of JWT)

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  // Fetch the user details from the database using the userId
  getUserById(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve user profile', details: err });
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user profile, excluding sensitive data like password
    const { password, ...userProfile } = user; // Exclude password from the response
    res.status(200).json({ data: userProfile });
  });
};
