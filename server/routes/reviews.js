const express = require('express');
const Review = require('../models/Review');
const Book = require('../models/Book');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { bookId, text, rating } = req.body;
    if (rating < 1 || rating > 5) return res.status(400).send('Invalid rating');
    const review = new Review({ bookId, userId: req.user._id, text, rating });
    await review.save();
    await Book.findByIdAndUpdate(bookId, { $push: { reviews: review } });
    res.status(201).json(review);
  } catch (err) {
    res.status(400).send('Failed to submit review');
  }
});

module.exports = router;