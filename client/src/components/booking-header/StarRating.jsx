import React from 'react';

const StarRating = ({ starRating, reviewCount }) => (
  <div>
    <button type="button" className="header-reviews-button">
      <span>
        <span>{starRating}</span>
         <span>{reviewCount}</span>
      </span>
    </button>
  </div>
);

export default StarRating;
