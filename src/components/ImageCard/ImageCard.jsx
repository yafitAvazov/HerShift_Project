import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image, title, description }) => {
  return (
    <div className="image-card">
      <img src={image} alt={title} className="image-card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;
