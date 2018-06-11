import React, { Component } from 'react';
import GuestPickerTrigger from './GuestPickerTrigger';

class GuestPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="guest-picker-container">
        <div className="guest-picker-dropdown-container">
          <GuestPickerTrigger />
        </div>
      </div>
    );
  }
}

export default GuestPicker;
