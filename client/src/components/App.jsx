import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/style.css';
import BookingHeader from './booking-header/BookingHeader';
import BookingForm from './booking-form/BookingForm';
import BookingFooter from './booking-footer/BookingFooter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: this.props.mockData.data.bookings,
      listing: this.props.mockData.data.listing[0],
      reviews: this.props.mockData.data.reviews[0],
      owner: this.props.mockData.data.owner[0],
    };
  }

  render() {
    return (
      <div className="app-parent">
        <div className="booking-header-parent">
          <BookingHeader listing={this.state.listing} reviews={this.state.reviews} />
        </div>
        <div className="booking-form-parent">
          <BookingForm />
        </div>
        <div className="booking-footer-parent">
          <BookingFooter />
        </div>
      </div>
    );
  }
}

export default App;
