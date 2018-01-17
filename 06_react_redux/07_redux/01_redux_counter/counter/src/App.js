import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Counter</h1>
        </header>
        <p className="App-intro">
        Enjoy your counter </p>
        <div>
          <button onClick={this.props.decrement}> - </button>
          <span>{this.props.counter}</span>
          <button onClick={this.props.increment}> + </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    decrement: () => dispatch({type: "DECREMENT"}),
    increment: () => dispatch({type: "INCREMENT"})
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
