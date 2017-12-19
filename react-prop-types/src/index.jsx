import React from 'react';
import ReactDOM from 'react-dom';

import '../../lib/styles/application.scss';

import App from './components/App';

ReactDOM.render(
  <App allowReset/>,
  document.getElementById('react-root')
);
