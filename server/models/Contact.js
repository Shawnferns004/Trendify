// models/Contact.js
// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field is required
  },
  email: {
    type: String,
    required: true, // This field is required
    validate: {
      validator: (v) => /\S+@\S+\.\S+/.test(v), // Basic email validation
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  message: {
    type: String,
    required: true, // This field is required
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
