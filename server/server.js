// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // This loads the variables from .env

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Allows the server to accept JSON in the body of requests

// --- Connect to MongoDB ---
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// --- A Simple Test Route ---
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 