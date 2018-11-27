import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageDisplay from './MessageDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'This is a stateful message',
      newMessage: ''
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: 'K3MBA Da G.O.A.T.',
      newMessage: ""
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      message: 'I suck at this still'
    })
  }

  handleChange(e){
    this.setState ({
      newMessage: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.message}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label htmlFor="message">Add Your Own Message:
            <input type="text" value="text" value={this.state.newMessage} onChange={(e)=>this.handleChange(e)}/>
          </label>
          <input type='submit'  />
        </form>
        <button onClick={()=>this.handleClick()}>Update Message</button>
        <MessageDisplay />
      </div>
    );
  }
}

export default App;
