// routes/contactRoutes.js
const express = require('express');
const {sendContactForm} = require('../../controllers/conatact/contactController');

// routes/contactRoutes.js


const router = express.Router();

// Define the POST route for submitting the contact form
router.post('/send', sendContactForm);

module.exports = router;
