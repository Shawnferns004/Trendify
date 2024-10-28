// controllers/contactController.js
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const Contact = require('../../models/Contact');
const router = express.Router();


dotenv.config()


// Function to send email


// Function to send email
const sendEmail = async (contact) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS,   // Your email password
    },
  });

  const mailOptions = {
    from: contact.email,
    to: process.env.EMAIL_USER, // Destination email
    subject: 'New Contact Form Submission',
    text: `Name: ${contact.name}\nEmail: ${contact.email}\nMessage: ${contact.message}`,
  };

  await transporter.sendMail(mailOptions);
};

const sendContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact entry
    const newContact = new Contact({ name, email, message });
    await newContact.save(); // Save to MongoDB

    // Send confirmation email
    await sendEmail(newContact);

    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  sendContactForm,
};
