import React from 'react';

function SayHello(props) {
  return (
    <div>
      {`Hello! ${props.message}`}
    </div>
  );
}

SayHello.defaultProps = {
  message: 'This is a default message'
}

export default SayHello;
