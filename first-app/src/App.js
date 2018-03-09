import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Freddie', age: 17 },
      { name: 'George', age: 19 },
      { name: 'Harry', age: 14 }
    ],
    otherState: 'A new cool value'
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: 'Voldy', age: 17 },
        { name: 'Johnny', age: 19 },
        { name: 'Harry', age: 14 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <button onClick={this.switchNameHandler}>Switch Me</button>
          <Person
          click={this.switchNameHandler}
          name={this.state.persons[0].name} />
          <Person
          name={this.state.persons[1].name}>I think Han Solo is cool</Person>
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, I is React'));
  }
}

export default App;
