import { createUser, getUserByEmail, getUserById } from '../models/user.js';

// Create a new user
export const createUser = (req, res) => {
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
export const getUserByEmail = (req, res) => {
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


export function getUserProfile(req, res) {
  const userId = req.body.userId || req.query.userId; // Allow flexibility in passing userId

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  getUserById(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve user profile', details: err });
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { password, ...userProfile } = user; // Exclude password from the response
    res.status(200).json({ data: userProfile });
  });
};
