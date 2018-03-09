import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListItem from './ListItem/ListItem';

class App extends Component {

  state = {
    items: [
      { name: "Item 1" },
      { name: "Item 2" },
      { name: "Item 3" }
    ],
    showBlock: false
  }

  toggleBlockHandler = () => {
    const doesShow = this.state.showBlock;
    // Toggle state to opposite of showBlock
    this.setState({showBlock: !doesShow});
  }

  render() {
    
    let list = null;

    if (this.state.showBlock) {
      list = (
        <ul className="list-group">
        {this.state.items.map(item => <ListItem item={item.name} /> )}
        </ul>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="container">
          <div className="row justify-content-md-center pb-5 pt-5">
            <div className="col-12 mb-5">
              <button
              onClick={this.toggleBlockHandler}
              type="button"
              className="btn btn-primary" >Toggle List</button>
            </div>

            <div className="col-6">
                {list}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
