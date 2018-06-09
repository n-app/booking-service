import React from 'react';

const fullStarSVG = 'M 971.5 379.5 c 9 28 2 50 -20 67 L 725.4 618.6 l 87 280.1 c' +
      '11 39 -18 75 -54 75 c -12 0 -23 -4 -33 -12 l -226.1 -172 l -226.1 172.1' +
      'c -25 17 -59 12 -78 -12 c -12 -16 -15 -33 -8 -51 l 86' +
      '-278.1 L 46.1 446.5 c -21 -17 -28 -39 -19 -67 c 8 -24 29 -40 52' +
      '-40 h 280.1 l 87 -278.1 c 7 -23 28 -39 52 -39 c 25 0 47 17 54 41' +
      'l 87 276.1 h 280.1 c 23.2 0 44.2 16 52.2 40 Z';
const halfStarSVG = 'M 510.2 23.3 l 1 767.3 l -226.1 172.2 c -25 17 -59 12 -78' +
      '-12 c -12 -16 -15 -33 -8 -51 l 86 -278.1 L 58 447.5 c -21 -17 -28 ' +
      '-39 -19 -67 c 8 -24 29 -40 52 -40 h 280.1 l 87 -278.1 c 7.1 -23.1 ' +
      '28.1 -39.1 52.1 -39.1 Z';


const Star = props => (
  <svg viewBox="0 0 1000 1000" role="presentation" className="icon-star">
    <path d={fullStarSVG} />
  </svg>
);

const StarHalf = props => (
  <svg viewBox="0 0 1000 1000" role="presentation" className="icon-star">
    <path d={halfStarSVG} />
  </svg>
);

const IconStar = props => (
  <span className="icon-star-container-full">
    <Star />
  </span>
);

const IconStarHalf = props => (
  <span className="icon-star-container-half">
    <span className="icon-star-half-grey">
      <Star />
    </span>
    <span className="icon-start-half-green">
      <StarHalf />
    </span>
  </span>
);

// const IconStarHalf = props => (
//   <span className="rating-star-container">
//     <span className="icon-star-half-grey">
//       <svg viewBox="0 0 1000 1000" role="presentation" className="icon-star">
//         <path d={fullStarSVG} />
//       </svg>
//     </span>
//     <span className="icon-star-half-green">
//       <svg viewBox="0 0 1000 1000" role="presentation" className="icon-star">
//         <path d={halfStarSVG} />
//       </svg>
//     </span>
//   </span>
// );

const StarRating = ({ starRating, reviewCount }) => (
  <div>
    <button type="button" className="header-reviews-button">
      <span role="img">
        <IconStar />
        <IconStarHalf />
      </span>
    </button>
  </div>
);

export default StarRating;
