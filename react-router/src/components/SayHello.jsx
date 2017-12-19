import React from 'react';
import PropTypes from 'prop-types';

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

SayHello.propTypes = {
  message: PropTypes.string.isRequired
}

export default SayHello;
