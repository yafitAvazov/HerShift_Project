import React from 'react';
import './Profile.css';

const Profile = ({ image, name, description }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-card-img" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
