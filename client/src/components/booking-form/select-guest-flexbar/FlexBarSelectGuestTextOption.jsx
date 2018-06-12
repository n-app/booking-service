import React from 'react';

const FlexBarSelectGuestTextOption = ({ label, guestType }) => (
  guestType ? (
    <div className="flexbar-content-text">
      <div className="filter-flexbar-text-container">
        <div>
          <div className="filter-flexbar-text">
            <span>{label}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flexbar-content-text">
      <div className="filter-flexbar-text-container">
        <div>
          <div className="filter-flexbar-text">
            <span>{label}</span>
          </div>
        </div>
      </div>
      <div className="filter-flexbar-sub-text-container">
        <div className="filter-flexbar-sub-text">
          <span>{label === 'Children' ? 'Ages 2 - 12' : 'Under 2'}</span>
        </div>
      </div>
    </div>
  )
);

export default FlexBarSelectGuestTextOption;