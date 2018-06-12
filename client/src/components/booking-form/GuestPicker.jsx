import React, { Component } from 'react';
import GuestPickerTrigger from './GuestPickerTrigger';

class GuestPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTriggerClicked: false,
    };

    this.handleGuestPickerTiggerClick = this.handleGuestPickerTiggerClick.bind(this);
  }

  handleGuestPickerTiggerClick() {
    this.setState({
      isTriggerClicked: !this.state.isTriggerClicked,
    });
  }

  render() {
    return (
      <div className="guest-picker-container">
        <div className="guest-picker-dropdown-container guest-picker-container">
          <GuestPickerTrigger
            handleGuestPickerTiggerClick={this.handleGuestPickerTiggerClick}
            listing={this.props.listing}
          />
        </div>
      </div>
    );
  }
}

export default GuestPicker;
