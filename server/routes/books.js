const express = require('express');
const Book = require('../models/Book');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const books = await Book.find().skip((page - 1) * limit).limit(limit);
    res.json(books);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('reviews.userId', 'email');
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    if (!req.user.email.includes('admin')) return res.status(403).send('Access denied');
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).send('Failed to add book');
  }
});

module.exports = router;