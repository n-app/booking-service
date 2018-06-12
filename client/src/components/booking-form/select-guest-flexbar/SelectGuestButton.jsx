import React from 'react';

const MinusSignSVG = props => (
  <span className="button-guest-select-icon-container">
    <svg viewBox="0 0 24 24" role="img" focusable="false" className="button-guest-select-svg">
      <rect height="2" rx="1" width="12" x="6" y="11" fill="currentcolor" />
    </svg>
  </span>
);

const PlusSignSVG = props => (
  <span className="button-guest-select-icon-container">
    <svg viewBox="0 0 24 24" role="img" focusable="false" className="button-guest-select-svg">
      <rect height="2" rx="1" width="12" x="6" y="11" fill="currentcolor" />
      <rect height="12" rx="1" width="2" x="11" y="6" fill="currentcolor" />
    </svg>
  </span>
);

const SelectGuestButton = ({ side }) => (
  side ? (
    <button
      className="button-guest-select-small"
    >
      <MinusSignSVG />
    </button>
  ) : (
    <button
      className="button-guest-select-small"
    >
      <PlusSignSVG />
    </button>
  )
);

export default SelectGuestButton;
