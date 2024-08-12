const mongoose = require('mongoose');

const shampooSchema = new mongoose.Schema({
  userId: String,
  title: String,
  image: String,
  ingredients: [String],
  whyBad: [String],
});

module.exports = mongoose.model('Shampoo', shampooSchema);
