require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Import the DB connection function
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB(); // ✅ Use the imported function to connect to MongoDB

// Routes
app.use('/api/posts', postRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
