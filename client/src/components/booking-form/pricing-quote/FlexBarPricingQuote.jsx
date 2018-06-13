import React from 'react';

const FlexBarPricingQuote = ({ last }) => (
  last ? (
    <div className="price-quote-form-container">
      <div className="flexbar-content-container">
        <div className="flexbar-content-text">
          <span className="flexbar-text large">
            <span>testing 1</span>
          </span>
        </div>
        <div className="flexbar-content-icon">
          <span className="flexbar-text large">
            <span>$14</span>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="price-quote-form-container">
      <div className="flexbar-content-container">
        <div className="flexbar-content-text">
          <span className="flexbar-text">
            <span>testing 1</span>
          </span>
        </div>
        <div className="flexbar-content-icon">
          <span className="flexbar-text">
            <span>$14</span>
          </span>
        </div>
      </div>
      <div className="spacing-pricing-quote">
        <div className="flexbar-spacing-line" />
      </div>
    </div>
  )
);

export default FlexBarPricingQuote;
