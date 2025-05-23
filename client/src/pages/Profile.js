import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);
  if (!user) return <div>Please log in</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;