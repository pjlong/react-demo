import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../../lib/styles/application.scss';
import store from './store';

import App from './components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
