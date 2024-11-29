const express = require('express');
const reportController = require('../controllers/reportC');

const router = express.Router();

// Route to generate a report for a user
router.get('/reports/:userId', reportController.generateReport);

module.exports = router;
