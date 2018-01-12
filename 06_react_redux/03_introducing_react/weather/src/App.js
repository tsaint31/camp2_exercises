import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import weatherByCityName from './weather.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      current: "",
      temp:""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({isFetching: true}, () => {
      weatherByCityName(this.state.current)
      .then(output => {
        this.setState({
          isFetching: false,
          temp: output
        });
      });
    })
  }

  saveCity = evt => {
    this.setState({
      current: evt.target.value
    });
  }

  render() {
    const loading = (<h1>LOADING...</h1>);

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">WEATHER</h1>
          </header>
          <p className="App">
              Find the weather of your city </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Please enter your city
            <input
              placeholder={"task"}
              type="text"
              value={this.state.current}
              onChange={this.saveCity}
            />
          </label>
        </form>
        {this.state.isFetching && loading}
        {!this.state.isFetching && (
          <div>
            <div className="App">
              Here is the temperature of your town
            </div>
            <div className="App-intro">
              {this.state.temp}
            </div>
          </div>)
        }
      </div>
    );
  }
}

export default App;
