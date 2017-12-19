import React from 'react';
import PropTypes from 'prop-types';

import MessageWriter from '../components/MessageWriter';
import TodoList from './TodoList';

class App extends React.Component {
  static propTypes = {
    allowReset: PropTypes.bool
  }

  constructor() {
    super();

    // Initialize the state
    this.state = this.getDefaultState();
  }

  // componentDidMount() {
  //   console.log('Component Did Mount');
  // }

  // componentDidUpdate() {
  //   console.log('Component Did Update');
  // }

  getDefaultState() {
    return {
      message: 'Hello, welcome to React!',
      todos: [
        'My First Todo'
      ]
    }
  }

  // Message Function
  updateMessage = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  resetMessage = () => {
    this.setState({
      message: this.getDefaultState().message
    });
  }

  // Todo List Functions
  addToList = (todoItem) => {
    this.setState({
      todos: [...this.state.todos, todoItem]
    })
  }

  removeFromList = (todoIndex) => {
    this.setState({
      todos: this.state.todos.filter((el, i) => i !== todoIndex)
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <MessageWriter
          value={this.state.message}
          handleChange={this.updateMessage}
          placeholder="Write a message"
        />

        {this.props.allowReset &&
          <button onClick={this.resetMessage}>Reset</button>
        }

        <TodoList
          list={this.state.todos}
          handleUpdate={this.addToList}
          handleDestroy={this.removeFromList}
        />
      </div>
    );
  }
}

export default App;
