const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Optional: If needed for cross-origin requests

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors()); // Optional: If needed for cross-origin requests

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/mediumdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('User', userSchema);

// API endpoint to create a new user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    // Create a new user instance
    const newUser = new User({ name, email });
    
    // Save user to the database
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while saving the user.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
