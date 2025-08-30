const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Add dotenv import
const app = express();
const port = process.env.PORT || 3000;

dotenv.config(); // Load environment variables from .env file

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming JSON requests

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Kanban Board API'); // Default route response
});

app.listen(port, () => console.log(`Server running on port ${port}`)); // Start server