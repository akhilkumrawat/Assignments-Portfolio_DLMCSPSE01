// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection using Mongoose
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error('MongoDB connection error:', err);  // More detailed error handling
    process.exit(1); // Exit the app if connection fails
  });

// Import Models
const Contact = require('./models/Contact');  // Contact Model

// POST Route for Contact Form Submission
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Creating new contact document
    const newContact = new Contact({
      name,
      email,
      message
    });

    // Save the new contact to MongoDB
    await newContact.save();
    res.status(200).json({ message: 'Contact form submitted successfully!' }); // Success response
  } catch (error) {
    // If error occurs while saving
    console.error('Error while saving contact form:', error); // Detailed error logging
    res.status(500).json({ error: 'Error saving contact form data' });  // Error response
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
