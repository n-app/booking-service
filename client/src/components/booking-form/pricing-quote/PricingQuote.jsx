import React, { Component } from 'react';
import FlexBarPricingQuote from './FlexBarPricingQuote';

class PricingQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const shouldDisplay = this.props.isFetchingPricingQuote;
    return (
      shouldDisplay ? (
        <FlexBarPricingQuote last={false} />
      ) : (
        null
      )
    );
  }
}

export default PricingQuote;
