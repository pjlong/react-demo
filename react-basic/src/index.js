
import React from 'react';
import ReactDOM from 'react-dom';

import '../../lib/styles/application.scss';

import App from './App';

const reactRoot = document.getElementById('react-root');

// ReactDOM.render(element, container[, callback])
ReactDOM.render(
  // React.createElement(elementClass, props, children)
  React.createElement(function () {
    return React.createElement(
      'div',
      null,
      'This is a simple React App'
    )
  }, null, null),
  reactRoot
);

// ReactDOM.render(
//   React.createElement(App, null, null),
//   reactRoot
// );
