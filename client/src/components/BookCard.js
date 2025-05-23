import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p>{book.author}</p>
      <Link to={`/books/${book._id}`} className="text-blue-600">View Details</Link>
    </div>
  );
};

export default BookCard;