import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      {/* Add more user profile information as needed */}
    </div>
  );
};

export default ProfilePage;
