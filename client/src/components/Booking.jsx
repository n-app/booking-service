import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../assets/booking.css';
import BookingHeader from './booking-header/BookingHeader';
import BookingFooter from './booking-footer/BookingFooter';
import BookingCalendar from './booking-form/BookingCalendar';
import GuestPicker from './booking-form/GuestPicker';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3004/',
});

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guestPickerFocus: false,
    };

    this.getRoomListing = this.getRoomListing.bind(this);
    this.onGuestPickerFocus = this.onGuestPickerFocus.bind(this);
  }

  componentDidMount() {
    this.getRoomListing(Math.floor(Math.random() * (99)) + 1000);
  }

  onGuestPickerFocus() {
    this.setState({
      guestPickerFocus: !this.state.guestPickerFocus,
    });
  }

  getRoomListing(id) {
    instance.get(`rooms/${id}`)
      .then(({ data }) => {
        const bookings = data.results.bookings;
        const listing = data.results.listing[0];
        const owner = data.results.owner[0];
        const reviews = data.results.reviews[0];

        this.setState({
          bookings,
          listing,
          owner,
          reviews,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.bookings && this.state.listing && this.state.owner && this.state.reviews) {
      return (
        <div className="app-parent">
          <div className="booking-header-parent">
            <BookingHeader listing={this.state.listing} reviews={this.state.reviews} />
          </div>
          <div id="booking-form">
            <div className="booking-form-fields">
              <div className="form-fields-spacing-dates">
                <div>
                  <div id={`dates_${this.state.listing.id}`} className="form-fields-label">
                    <small className="form-fields-label-small">
                      <span>Dates</span>
                    </small>
                  </div>
                  <BookingCalendar
                    bookings={this.state.bookings}
                    bookedDates={this.state.bookings.map((range) => {
                      const booked = [];
                      booked.push(range.startDate);
                      booked.push(range.endDate);
                      return booked;
                    })}
                  />
                </div>
              </div>
              <div className="form-fields-spacing-guests">
                <div id={`dates_${this.state.listing.id}`} className="form-fields-label">
                  <small className="form-fields-label-small">
                    <span>Guests</span>
                  </small>
                </div>
                <GuestPicker
                  onGuestPickerFocus={this.onGuestPickerFocus}
                  guestPickerFocus={this.state.guestPickerFocus}
                  listing={this.state.listing}
                />
              </div>
            </div>
          </div>
          <div className="booking-footer-parent">
            <div className="footer-button-spacing">
              <BookingFooter />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>Loading...</div>
    );
  }
}

export default Booking;
