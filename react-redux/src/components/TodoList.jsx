import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo, removeTodo } from '../actions';

import TodoItem from './TodoItem';
import TodoEntry from './TodoEntry';

class TodoList extends React.Component {
  static propTypes = {
    // handleUpdate: PropTypes.func.isRequired,
    // handleDestroy: PropTypes.func.isRequired,
    addItemToList: PropTypes.func.isRequired,
    removeItemFromList: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.string)
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

  // addItemToList = (newTodoValue) => {
  //   this.props.handleUpdate(newTodoValue);
  //   this.resetState();
  // }

  // removeItemFromList = (index) => {
  //   this.props.handleDestroy(index);
  // }

  render() {
    return (
      <ul className="todo-list">
        {
          <li className="todo-item">
            <TodoEntry
              value={this.state.newTodo}
              handleInputChange={this.updateNewTodoText}
              handleAddTodo={this.props.addItemToList}
            />
          </li>
        }
        {
          this.props.list.map((item, i) => (
            <li className="todo-item" key={`todo-item-${i}`}>
              <TodoItem todo={item} handleRemoveTodo={() => this.props.removeItemFromList(i)} />
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state
});

const mapDispatchToProps = (dispatch) => ({
  addItemToList: newTodoValue => {
    dispatch(addTodo(newTodoValue));
  },
  removeItemFromList: index => {
    dispatch(removeTodo(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
