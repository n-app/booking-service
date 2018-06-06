import React from 'react';
import '../assets/style.css';
import data from '../fake-data/data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fakeData: data,
    };
  }

  render() {
    return (
      <div className="test">{this.state.fakeData[0]}</div>
    );
  }
}

export default App;
