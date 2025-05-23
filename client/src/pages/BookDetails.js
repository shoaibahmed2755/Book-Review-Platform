import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`).then(res => setBook(res.data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p>Author: {book.author}</p>
      <div>
        <h2 className="text-xl font-bold mt-4">Reviews</h2>
        {book.reviews.map(review => (
          <div key={review._id} className="border p-2 mb-2">
            <p>{review.text} (Rating: {review.rating}/5)</p>
            <p>By: {review.userId.email}</p>
          </div>
        ))}
      </div>
      <ReviewForm bookId={id} />
    </div>
  );
};

export default BookDetails;