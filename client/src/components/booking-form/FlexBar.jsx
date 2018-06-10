import React from 'react';

const chevronDownSVG = 'm 16.29 4.3 a 1 1 0 1 1 1.41 1.42 l -8 8 a 1 1 0 0 1 -1.41 ' +
'0 l -8 -8 a 1 1 0 1 1 1.41 -1.42 l 7.29 7.29 Z';

const chevronUpSVG = 'm 1.71 13.71 a 1 1 0 1 1 -1.42 -1.42 l 8 -8 a 1 1 0 0 1 ' +
'1.41 0 l 8 8 a 1 1 0 1 1 -1.41 1.42 l -7.29 -7.29 Z';

const IconChevronDown = props => (
  <svg viewBox="0 0 18 18" role="presentation" focusable="false" className="icon-chevron">
    <path d={chevronDownSVG} fillRule="evenodd" />
  </svg>
);

const IconChevronUp = props => (
  <svg viewBox="0 0 18 18" role="presentation" focusable="false" className="icon-chevron">
    <path d={chevronUpSVG} fillRule="evenodd" />
  </svg>
);

const FlexBarTextContent = props => (
  <span className="guest-label-text guest-label-text-guests">
    <span>1 guest</span>
  </span>
);

const FlexBarTextContentHighlight = props => (
  <span className="guest-label-text guest-label-text-guests text-highlight">
    <span>1 guest</span>
  </span>
);

const FlexBarText = props => (
  <div className="flexbar-content-text">
    <div className="guest-label">
      <FlexBarTextContent />
    </div>
  </div>
);

const FlexBar = props => (
  <div className="flexbar-content-container">
    <FlexBarText />
    <div className="flexbar-content-icon">
      <IconChevronDown />
    </div>
  </div>
);

export default FlexBar;
