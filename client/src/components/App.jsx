import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/style.css';
import BookingHeader from './booking-header/BookingHeader';
import BookingFooter from './booking-footer/BookingFooter';
import BookingCalendar from './booking-form/BookingCalendar';
import GuestPicker from './booking-form/GuestPicker';

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
        <form id="booking-form">
          <div className="booking-form-fields">
            <div className="form-fields-spacing-dates">
              <div>
                <label htmlFor={`dates_${this.state.listing.id}`} className="form-fields-label">
                  <small className="form-fields-label-small">
                    <span>Dates</span>
                  </small>
                </label>
                <BookingCalendar />
              </div>
            </div>
            <div className="form-fields-spacing-guests">
              <label htmlFor={`dates_${this.state.listing.id}`} className="form-fields-label">
                <small className="form-fields-label-small">
                  <span>Guests</span>
                </small>
              </label>
              <GuestPicker />
            </div>
          </div>
        </form>
        <div className="booking-footer-parent">
          <div className="footer-button-spacing">
            <BookingFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
