// App.js
// Components: UserOutput.js
//             UserInput.js
//

// React
import React, { Component } from 'react';
// Assets
import logo from './logo.svg';
import './App.css';
// Components
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  // Name State
  state = {
    name: "Fred"
  }

  // Handler for updating name
  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  // Render function
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div className="container">
          <div className="row justify-content-md-center pb-5 pt-5">
            <UserInput
              change={this.nameChangeHandler}
              name={this.state.name} />
          </div>
          <div className="row">
            <UserOutput name={this.state.name} />
            <UserOutput name={this.state.name} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
