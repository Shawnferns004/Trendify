// routes/subscription.js
const express = require('express');
const { subscribe } = require('../../controllers/newsletter/subscriptionController');
const router = express.Router();

// Route to handle subscription
router.post('/subscribe', subscribe);

module.exports = router;
