import React, { Component } from 'react';
import FlexBar from './FlexBar';

const triggerButtonStyles = {
  isSelected: 'guest-picker-trigger-selected',
  notSelected: 'guest-picker-trigger-not-selected',
};

class GuestPickerTrigger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      triggerButtonStyle: triggerButtonStyles.notSelected,
    };
  }

  render() {
    return (
      <div className="guest-picker-trigger-container">
        <button className={`${this.state.triggerButtonStyle}`}>
          <div className="guest-picker-trigger-content-spacing">
            <div className="guest-picker-flexbar-container">
              <FlexBar />
            </div>
          </div>
        </button>
      </div>
    );
  }
}

export default GuestPickerTrigger;
