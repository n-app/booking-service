import React from 'react';
import '../assets/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fakeData: this.props,
    };
  }

  render() {
    return (
      <div className="test">{this.state.fakeData[0]}</div>
    );
  }
}

export default App;
