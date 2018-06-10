import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const calendarDefaults = {
  displayFormat: 'MM/DD/YYYY',
  numberOfMonths: 1,
  startDateId: 'checkin',
  startDatePlaceholderText: 'Check In',
  endDateId: 'checkout',
  endDatePlaceholderText: 'Check Out',
  hideKeyboardShortcutsPanel: true,
};

class BookingCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="calendar-container">
        <DateRangePicker
          displayFormat={calendarDefaults.displayFormat}
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId={calendarDefaults.startDateId} // PropTypes.string.isRequired,
          startDatePlaceholderText={calendarDefaults.startDatePlaceholderText}
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId={calendarDefaults.endDateId} // PropTypes.string.isRequired,
          endDatePlaceholderText={calendarDefaults.endDatePlaceholderText}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          numberOfMonths={calendarDefaults.numberOfMonths}
          hideKeyboardShortcutsPanel={calendarDefaults.hideKeyboardShortcutsPanel}
        />
      </div>
    );
  }
}

export default BookingCalendar;
