import React, { Component } from 'react';
import FlexBar from './FlexBar';

// const triggerButtonStyles = {
//   isSelected: 'guest-picker-trigger-selected',
//   notSelected: 'guest-picker-trigger-not-selected',
// };

class GuestPickerTrigger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
  }

  handleTriggerClick() {
    this.props.handleGuestPickerTiggerClick();
    this.setState(prevState => ({
      isSelected: !prevState.isSelected,
    }));
  }

  render() {
    const triggerButtonStyle = this.state.isSelected ? 'guest-picker-trigger-selected' : 'guest-picker-trigger-not-selected';

    return (
      <div className="guest-picker-trigger-container">
        <button
          onClick={this.handleTriggerClick}
          className={`${triggerButtonStyle}`}
        >
          <div className="guest-picker-trigger-content-spacing">
            <div className="guest-picker-flexbar-container">
              <FlexBar isSelected={this.state.isSelected} />
            </div>
          </div>
        </button>
      </div>
    );
  }
}

export default GuestPickerTrigger;
