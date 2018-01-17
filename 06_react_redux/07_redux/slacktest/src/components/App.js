import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddMessages from '../containers/AddMessages';
import VisibleSlackList from '../containers/VisibleSlackList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to slacky</h1>
        </header>
        <p className="App-intro"> Enjoy slacky </p>
        <div >
          <AddMessages />
          <VisibleSlackList/>
        </div>
      </div>
    );
  }
}

export default App;
