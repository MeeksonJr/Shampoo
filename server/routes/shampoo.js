const express = require('express');
const router = express.Router();
const Shampoo = require('../models/shampoo');

// Add a new shampoo
router.post('/', async (req, res) => {
  try {
    const newShampoo = new Shampoo(req.body);
    await newShampoo.save();
    res.status(201).json(newShampoo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all shampoos
router.get('/', async (req, res) => {
  try {
    const shampoos = await Shampoo.find();
    res.status(200).json(shampoos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a shampoo by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Shampoo.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: 'Shampoo not found' });
    }
    res.status(200).json({ message: 'Shampoo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
