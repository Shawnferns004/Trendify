// controllers/subscriptionController.js

const Subscription = require("../../models/Subscription.js");

exports.subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email already exists
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email is already subscribed.' });
    }

    // Create a new subscription
    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    return res.status(201).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
