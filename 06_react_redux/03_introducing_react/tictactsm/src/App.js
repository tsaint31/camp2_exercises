import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function hasWinner(state) {
  const WINNING_COORDINATES = [
    [{letter: "a", digit: "0"}, {letter: "a", digit: "1"}, {letter: "a", digit: "2"}],
    [{letter: "b", digit: "0"}, {letter: "b", digit: "1"}, {letter: "b", digit: "2"}],
    [{letter: "c", digit: "0"}, {letter: "c", digit: "1"}, {letter: "c", digit: "2"}],
    [{letter: "a", digit: "0"}, {letter: "b", digit: "1"}, {letter: "c", digit: "2"}],
    [{letter: "a", digit: "2"}, {letter: "b", digit: "1"}, {letter: "c", digit: "0"}],
    [{letter: "a", digit: "0"}, {letter: "b", digit: "0"}, {letter: "c", digit: "0"}],
    [{letter: "a", digit: "1"}, {letter: "b", digit: "1"}, {letter: "c", digit: "1"}],
    [{letter: "a", digit: "2"}, {letter: "b", digit: "2"}, {letter: "c", digit: "2"}]
  ];

  const isWinningLine = (line) => {
    const pattern =
      line
      .map((coordinate) => state[coordinate.letter][coordinate.digit])
      .join("");

    return pattern === "XXX" || pattern === "OOO";
  }

  return WINNING_COORDINATES.some(isWinningLine);
}

function RenderCell(props) {
  if (props.cell === "_") {
    return <button className="square" onClick={() => props.handleInput()} >{props.cell}</button>;
  } else {
    return <button className="square"  >{props.cell}</button>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: { a: Array(3).fill("_"), b: Array(3).fill("_"),c: Array(3).fill("_")},
      xIsNext: true
    };
    this.handleInput=this.handleInput.bind(this)
  }

  handleInput(i,letter) {
    if (hasWinner(this.state.status)) {
      return;
    }
    let modifystatus = this.state.status;
    modifystatus[letter][i]=this.state.xIsNext ? 'X' : 'O';
    this.setState({
      status: modifystatus,
      xIsNext: !this.state.xIsNext
    });
  }

  renderRow = (letter) => {
    const cells = this.state.status[letter];
    return (cells.map((cell,i) => <RenderCell key={i} letter={letter} cell={cell} handleInput={() => this.handleInput(i,letter)} />));
  }

  board() {
    const letters = Object.keys(this.state.status);
    const rows = letters.map(this.renderRow);
    return (
        <div>
        <div className="board-row">
          {rows[0]}
        </div>
        <div className="board-row">
          {rows[1]}
        </div>
        <div className="board-row">
          {rows[2]}
        </div>
        </div>
    );
  }

  restart() {
    let modifystatus = { a: Array(3).fill("_"), b: Array(3).fill("_"),c: Array(3).fill("_")};
    this.setState({
      status: modifystatus,
    });
  }

  render() {
    const winner = hasWinner(this.state.status);
    let stat;
    if (winner && this.state.xIsNext) {
      stat = 'THE WINNER IS 0';
    }
    else if (winner) {
      stat = 'THE WINNER is X';
    }
    else {
      stat = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">TIC TAC TOE</h1>
              </header>
              <p className="App-intro">
              Enjoy your tictactoe </p>
            </div>
      <div className="status"><button onClick={() => this.restart()} >RESTART</button></div>
      <div className="status">{stat}</div>
          {this.board()}
      </div>

    );
  }
}

export default App;
