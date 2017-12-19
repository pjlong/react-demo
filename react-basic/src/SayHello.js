import React from 'react';

function SayHello(props) {
  // console.log('SayHello is being called with props: ', props);
  return React.createElement(
    'div',
    null,
    `Hello! ${props.message}`
  );
}

SayHello.defaultProps = {
  message: 'default message'
}

export default SayHello;
