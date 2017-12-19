import React from 'react';
import PropTypes from 'prop-types';

function TodoEntry (props) {
  return (
    <div className="todo-item-wrapper">
      <input value={props.value} placeholder="What do you want To Do?" onChange={props.handleInputChange} />
      <button onClick={() => { props.handleAddTodo(props.value) }}>+</button>
    </div>
  );
}

TodoEntry.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired
}

TodoEntry.defaultProps = {
}

export default TodoEntry;