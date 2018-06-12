import React from 'react';
import SelectGuestButton from './SelectGuestButton';

const isLeftButton = {
  left: true,
  right: false,
};

const FlexBarSelectGuestButtons = ({ selectedGuests }) => (
  <div className="flexbar-content-icon">
    <div className="filter-flexbar-buttons-container">
      <div className="filter-flexbar-button-left-container">
        <SelectGuestButton side={isLeftButton.left} />
      </div>
      <div className="filter-flexbar-button-value-container">
        {selectedGuests}
      </div>
      <div className="filter-flexbar-button-right-container">
        <SelectGuestButton side={isLeftButton.right} />
      </div>
    </div>
  </div>
);

export default FlexBarSelectGuestButtons;
