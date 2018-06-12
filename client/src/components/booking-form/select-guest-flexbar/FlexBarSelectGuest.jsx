import React from 'react';
import FlexBarSelectGuestTextOption from './FlexBarSelectGuestTextOption';
import FlexBarSelectGuestButtons from './FlexBarSelectGuestButtons';

const FlexBarSelectGuest = ({ label, guestType, numOfGuests, guestDetails, containerStyle }) => (
  <div className={containerStyle[label]}>
    <FlexBarSelectGuestTextOption
      label={label}
      guestType={guestType === 'adults'}
    />
    <div className="flexbar-content-icon">
      <FlexBarSelectGuestButtons />
    </div>
  </div>
);

export default FlexBarSelectGuest;
