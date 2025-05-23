import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl font-bold">Book Reviews</Link>
        <div>
          <Link to="/books" className="text-white mr-4">Books</Link>
          {user ? (
            <>
              <Link to="/profile" className="text-white mr-4">Profile</Link>
              <button onClick={logout} className="text-white">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;