import React from 'react';

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

export default MessageWriter;