import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from './components/App';
import mockData from './fake-data/data';

App.propTypes = {
  mockData: PropTypes.object,
};

ReactDOM.render(<App mockData={mockData} />, document.getElementById('app'));
