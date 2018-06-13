import React from 'react';
import FlexBarPricingQuote from './FlexBarPricingQuote';

const PricingQuote = ({ isFetchingPricingQuote }) => (
  isFetchingPricingQuote ? (
    <FlexBarPricingQuote last={false} />
  ) : (
    null
  )
);

export default PricingQuote;

