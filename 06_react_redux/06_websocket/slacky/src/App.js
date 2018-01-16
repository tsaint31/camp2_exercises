import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Rows(props){
  let classformat="column1"
  if (props.name===props.slack.user)
  {
    classformat="column"
  }
  return (
    <tr>
      <td>
        {props.slack.slack}
      </td>
      <td className={classformat}>
        {props.slack.user}
      </td>
    </tr>
  );
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function Userlist(props){
  let classformat="column1"
  if (props.name===props.user)
  {
    classformat="column"
  }
  return (
    <tr>
      <td className={classformat}>
        {props.user}
      </td>
    </tr>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.ws= new WebSocket("ws://localhost:4000")
    this.state = {
      name: "",
      current: "" ,
      currentslack: "" ,
      isFetching: false ,
      slack: [],
      users:0,
      userslist:[]
    };
  }

  componentDidMount() {
  // What to do when we receive a message?
  this.ws.onmessage = (event) => {
    console.log(event);
    if (!isNaN(event.data)) {
      console.log(event);
      this.setState({
        users:event.data
      })
    }
    else if (isJson(event.data)) {
      console.log(event);
      console.log(event.data);
      let newslacklist = this.state.slack;
      newslacklist.push(JSON.parse(event.data));
      this.setState({
        slack:newslacklist
      });
    }
    else
    {
      const newuser=this.state.userslist;
      newuser.push(event.data);
      this.setState({
        userslist:newuser
      });
    }
  };

  this.ws.onsend = (event) => {
    console.log(event);
  };
  // Alert the server that the client is gone
  window.addEventListener("beforeunload", () => this.ws.send("CLOSE"));
}

  fetchData = evt => {
    evt.preventDefault();
    let newName = this.state.current;
    this.ws.send(newName);
    this.setState({
      name: newName,
      isFetching:true,
    });
  };

  fetchSlack = evt => {
    evt.preventDefault();
    const newSlack = {
      slack: "",
      user: this.state.name
    };
    newSlack.slack = this.state.currentslack;
    this.ws.send(JSON.stringify(newSlack));
  };

  saveName = evt => {
    this.setState({
      current: evt.target.value
    });
  };

  saveSlack = evt1 => {
    this.setState({
      currentslack: evt1.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Slacky</h1>
        </header>
        <p className="App-intro">
        Enjoy your slacky (nb of users connected : {this.state.users}) </p>

        {!this.state.isFetching && (
          <div>
          <label>
            Please enter your name
            <input
              placeholder="name"
              type="text"
              value={this.state.current}
              onChange={this.saveName}
            />
          </label>
        <button onClick={this.fetchData} > Submit </button>
        </div>)}
        {this.state.isFetching && (
          <div>
          <h1 className="App"> Welcome {this.state.name} to the slacky line </h1>
          <label>
            Please enter your slacky
            <input
              placeholder="slack"
              type="text"
              value={this.state.currentslack}
              onChange={this.saveSlack}
            />
          </label>
        <button onClick={this.fetchSlack} > Submit </button>
        <table>
          <thead>
            <tr>
              <th> List of Slackies</th>
              <th> From</th>
            </tr>
          </thead>
          <tbody>{this.state.slack.map((slack,i) => <Rows key={i} slack={slack} name={this.state.name}/>)}</tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th> List of Slackies USERS</th>
            </tr>
          </thead>
          <tbody>{this.state.userslist.map((user,i) => <Userlist key={i} user={user} name={this.state.name}/>)}</tbody>
        </table>
        </div>)
        }
      </div>
    );
  }
}

export default App;
