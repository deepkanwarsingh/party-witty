import React from 'react';
import './DrinkCard.css';

const DrinkCard = ({ name, price, desc, status, image, isSelected }) => {
  return (
    <div className={`drink-card ${isSelected ? 'selected' : ''}`}>
      <div className="drink-thumb">
        <img src={image} alt={name} />
      </div>
      <div className="drink-details">
        <div className="drink-header">
           <h4 className="drink-name">{name}</h4>
           <div className="drink-price">₹{price}</div>
        </div>
        <p className="drink-desc">{desc}</p>
        <div className={`drink-status-badge ${status.toLowerCase().replace(/\s/g, '-')}`}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
