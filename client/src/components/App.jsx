import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../assets/style.css';
import BookingHeader from './booking-header/BookingHeader';
import BookingFooter from './booking-footer/BookingFooter';
import BookingCalendar from './booking-form/BookingCalendar';
import GuestPicker from './booking-form/GuestPicker';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3004/',
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.getRoomListing = this.getRoomListing.bind(this);
  }

  componentDidMount() {
    this.getRoomListing(Math.floor(Math.random() * (99)) + 1000);
  }

  getRoomListing(id) {
    instance.get(`rooms/${id}`)
      .then(({ data }) => {
        const bookings = data.results.bookings;
        const listing = data.results.listing[0];
        const owner = data.results.owner[0];
        const reviews = data.results.reviews[0];

        this.setState({
          bookings: bookings,
          listing: listing,
          owner: owner,
          reviews: reviews,
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
    return (
      <div>Loading...</div>
    );
  }
}

export default App;
