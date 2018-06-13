import React, { Component } from 'react';
import FlexBar from './FlexBar';
import GuestCountFilter from './GuestCountFilter';

class GuestPickerTrigger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      guestDetails: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    };
    this.handleGuestPickerFocus = this.handleGuestPickerFocus.bind(this);
  }

  handleGuestPickerFocus() {
    this.setState({
      isFocused: !this.state.isFocused,
    });
    this.props.onGuestPickerFocus();
  }

  render() {
    const triggerButtonStyle = (this.props.isFocused ?
      'guest-picker-trigger-selected' :
      'guest-picker-trigger-not-selected');

    return (
      <div className="guest-picker-trigger-container">
        <button
          onClick={this.handleGuestPickerFocus}
          className={`${triggerButtonStyle}`}
        >
          <div className="guest-picker-trigger-content-spacing">
            <div className="guest-picker-flexbar-container">
              <FlexBar
                isFocused={this.state.isFocused}
                guestDetails={this.state.guestDetails}
              />
            </div>
          </div>
        </button>
        <GuestCountFilter
          handleGuestPickerFocus={this.handleGuestPickerFocus}
          isFocused={this.state.isFocused}
          maxGuests={this.props.listing.maxGuests}
          guestDetails={this.state.guestDetails}
        />
      </div>
    );
  }
}

export default GuestPickerTrigger;
