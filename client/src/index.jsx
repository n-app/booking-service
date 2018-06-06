import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './fake-data/data';


ReactDOM.render(<App data={data} />, document.getElementById('app'));
