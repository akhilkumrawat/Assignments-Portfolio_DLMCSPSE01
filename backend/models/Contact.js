const mongoose = require('mongoose');

// Define a schema for the Contact form
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

// Create a model from the schema
const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
