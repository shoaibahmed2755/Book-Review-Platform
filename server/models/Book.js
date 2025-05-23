const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  reviews: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, text: String, rating: Number }],
});

module.exports = mongoose.model('Book', BookSchema);