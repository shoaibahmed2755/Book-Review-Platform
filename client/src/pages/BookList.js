import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/books').then(res => setBooks(res.data));
  }, []);

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search books..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;