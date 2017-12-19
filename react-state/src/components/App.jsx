import React from 'react';

import SayHello from '../components/SayHello';
import MessageWriter from '../components/MessageWriter';

class App extends React.Component {
  // constructor() {
  //   super();

  //   // Initialize the state
  //   this.state = {
  //     message: 'Hello, welcome to React!'
  //   };

  //   // Use a method to initialize state
  //   // this.state = this.getDefaultState();
  // }

  // updateMessage = (event) => {
  //   // console.log('Update Message: ', event.target.value);
  //   this.setState({ message: event.target.value });
  // }

  // Logic for Resetting
  // getDefaultState() {
  //   return {
  //     message: 'Hello, welcome to React!'
  //   }
  // }

  // resetMessage = () => {
  //   this.setState(this.getDefaultState());
  // }

  render() {
    return (
      <div>
        {/* Display the Message */}
        <SayHello message="This is My React App" />

        {/* Add Component to handle taking user input */}
        {/* <MessageWriter
          value={this.state.message}
          handleChange={this.updateMessage}
          // placeholder="Write a message"
        /> */}

        {/* Allow user to reset the state */}
        {/* <button onClick={this.resetMessage}>Reset</button> */}
      </div>
    );
  }
}

export default App;
