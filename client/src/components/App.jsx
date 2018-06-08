import React from 'react';
import '../assets/style.css';
import BookingHeader from './booking-header/BookingHeader';
import BookingForm from './booking-form/BookingForm';
import BookingFooter from './booking-footer/BookingFooter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="app-parent">
        <div className="booking-header-parent">
          <BookingHeader />
        </div>
        <div className="booking-form-parent">
          <BookingForm />
        </div>
        <div className="booking-footer-parent">
          <BookingFooter />
        </div>
      </div>
    );
  }
}

export default App;
