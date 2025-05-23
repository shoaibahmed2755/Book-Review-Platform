import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const ReviewForm = ({ bookId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);

  const submitReview = async () => {
    try {
      await axios.post('http://localhost:5000/api/reviews', { bookId, text: review, rating }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setReview('');
      setRating(0);
      alert('Review submitted');
    } catch (err) {
      alert('Failed to submit review');
    }
  };

  if (!user) return null;

  return (
    <div className="mt-4">
      <textarea
        className="border p-2 w-full"
        value={review}
        onChange={e => setReview(e.target.value)}
        placeholder="Write your review..."
      ></textarea>
      <select className="border p-2" value={rating} onChange={e => setRating(Number(e.target.value))}>
        <option value="0">Select Rating</option>
        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
      <button onClick={submitReview} className="bg-blue-600 text-white p-2 mt-2">Submit Review</button>
    </div>
  );
};

export default ReviewForm;