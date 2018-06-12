import React from 'react';
import FlexBarSelectGuest from './FlexBarSelectGuest';

const GuestCountFilter = ({ isSelected, maxGuests, guestDetails }) => (
  isSelected ? (
    <div className="guest-count-filter-container">
      <div className="guest-count-filter-dropdown-container">
        <FlexBarSelectGuest guestDetails={guestDetails} />
        <FlexBarSelectGuest guestDetails={guestDetails} />
        <FlexBarSelectGuest guestDetails={guestDetails} />
      </div>
    </div>
  ) : (
    null
  )
);

export default GuestCountFilter;
