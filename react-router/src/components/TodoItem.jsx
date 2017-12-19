import React from 'react';
import PropTypes from 'prop-types';

function TodoItem (props) {
  return (
    <div className="todo-item-wrapper">
      <span>{props.todo}</span>
      <button onClick={props.handleRemoveTodo}>-</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.string,
  handleRemoveTodo: PropTypes.func.isRequired
}

TodoItem.defaultProps = {
  todo: {}
}

export default TodoItem;