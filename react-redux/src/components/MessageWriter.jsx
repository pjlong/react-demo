import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component wraps any UI elements and logic to write a message and update the parent
 */
function MessageWriter(props) {
  return (
    <input
      value={props.value}
      onChange={props.handleChange}
      // placeholder={props.placeholder}
    />
  )
}

MessageWriter.propTypes = {
  inputTitle: PropTypes.string,
  value: PropTypes.string,
  // value: PropTypes.shape({
  //   message: PropTypes.string.isRequired
  // }),
  handleChange: PropTypes.func.isRequired
}

export default MessageWriter;