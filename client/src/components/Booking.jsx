import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../assets/booking.css';
import BookingHeader from './booking-header/BookingHeader';
import BookingFooter from './booking-footer/BookingFooter';
import BookingCalendar from './booking-form/BookingCalendar';
import GuestPicker from './booking-form/GuestPicker';
import PricingQuote from './booking-form/pricing-quote/PricingQuote';

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedDateInput: null,
      selectedStartDate: null,
      selectedEndDate: null,
      isFetchingPricingQuote: false,
      guestPickerFocus: false,
      guestDetails: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    };

    this.getRoomListing = this.getRoomListing.bind(this);
    this.onGuestPickerFocus = this.onGuestPickerFocus.bind(this);
    this.onGuestDetailsUpdate = this.onGuestDetailsUpdate.bind(this);
    this.setTripDates = this.setTripDates.bind(this);
    this.setTripDetailsFormRef = this.setTripDetailsFormRef.bind(this);
  }

  componentDidMount() {
    this.getRoomListing(Math.floor(Math.random() * (99)) + 1000);
  }

  onGuestPickerFocus() {
    this.setState({
      guestPickerFocus: !this.state.guestPickerFocus,
    });
  }

  onGuestDetailsUpdate(updatedDetails) {
    this.setState({
      guestDetails: updatedDetails,
    });
  }

  setTripDates(startDate, endDate) {
    this.setState({
      selectedStartDate: startDate || null,
      selectedEndDate: endDate || null,
    }, () => {
      if (this.state.selectedStartDate && this.state.selectedEndDate) {
        this.setTripDetailsFormRef(this.state.selectedStartDate, this.state.selectedEndDate);
      }
    });
  }

  setTripDetailsFormRef() {
    if (!this.state.isFetchingPricingQuote) {
      this.setState({
        isFetchingPricingQuote: !this.state.isFetchingPricingQuote,
      });
    }
  }

  getRoomListing(id) {
    axios.get(`/booking/${id}`)
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
                    setTripDates={this.setTripDates}
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
                  onGuestDetailsUpdate={this.onGuestDetailsUpdate}
                  guestPickerFocus={this.state.guestPickerFocus}
                  guestDetails={this.state.guestDetails}
                  listing={this.state.listing}
                />
              </div>
            </div>
            <PricingQuote
              isFetchingPricingQuote={this.state.isFetchingPricingQuote}
            />
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
