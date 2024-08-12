const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5004;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const shampooRoutes = require('./routes/shampoo');

// Use routes
app.use('/api/shampoos', shampooRoutes);

// Connect to MongoDB Atlas
const uri = 'mongodb+srv://shampoo-app:shampoo-app11@shampoo-app.qb6fw.mongodb.net/shampooDB?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
