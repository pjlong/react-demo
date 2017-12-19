import React from 'react';
import PropTypes from 'prop-types';

import MessageWriter from '../components/MessageWriter';

class App extends React.Component {
  static propTypes = {
    allowReset: PropTypes.bool
  }

  constructor() {
    super();

    // Initialize the state
    this.state = this.getDefaultState();
  }

  updateMessage = (event) => {
    // console.log('Update Message: ', event.target.value);
    this.setState({ message: event.target.value });
  }

  getDefaultState() {
    return {
      message: 'Hello, welcome to React!'
    }
  }

  resetMessage = () => {
    this.setState(this.getDefaultState());
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
      </div>
    );
  }
}

export default App;
