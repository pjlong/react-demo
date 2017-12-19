import React from 'react';
import PropTypes from 'prop-types';


import TodoItem from './TodoItem';
import TodoEntry from './TodoEntry';

class TodoList extends React.Component {
  static propTypes = {
    handleUpdate: PropTypes.func.isRequired,
    handleDestroy: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    list: [{ value: 'First Todo!' }]
  }

  constructor(props) {
    super(props);

    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {
      newTodo: ''
    }
  }

  resetState() {
    this.state = this.getDefaultState();
  }

  updateNewTodoText = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  }

  addItemToList = (newTodoValue) => {
    // console.log('add item:', newTodoValue);
    this.props.handleUpdate(newTodoValue);
    this.resetState();
  }

  removeItemFromList = (index) => {
    // console.log('remove item at index:', index);
    this.props.handleDestroy(index);
  }

  render() {
    return (
      <ul className="todo-list">
        {
          <li className="todo-item">
            <TodoEntry
              value={this.state.newTodo}
              handleInputChange={this.updateNewTodoText}
              handleAddTodo={this.addItemToList}
            />
          </li>
        }
        {/* {
          this.props.list.map((item, i) => (
            <li className="todo-item" key={`todo-item-${i}`}>
              <TodoItem todo={item} handleRemoveTodo={this.addItemToList} />
            </li>
          ))
        } */}
        {
          this.props.list.map((item, i) => (
            <li className="todo-item" key={`todo-item-${i}`}>
              <TodoItem todo={item} handleRemoveTodo={() => this.removeItemFromList(i)} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default TodoList;
