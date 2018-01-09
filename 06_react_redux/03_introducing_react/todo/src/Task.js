import React, { Component } from 'react';

const task=["list of Tasks"];


function Rows(props) {
  return (
    <tr>
    <td>{props}</td>
    </tr>
  );
}

class Tasklist extends Component {
  constructor(props) {
    super(props);
    this.state = {task: task, current:""}
  }

  fetchData = (evt) => {
  evt.preventDefault();
  console.log('fetch data!');
  console.log(task);
  let newTask = this.state.task
  newTask.push(this.state.current)
  this.setState({
    task: newTask
  });
  };

  saveTask = (evt) => {
  this.setState({
    current: evt.target.value
  });
};

  render() {
    return (
      <div>
        <h1>Task</h1>
        <form onSubmit={this.fetchData}>
          <label>Please enter your task
            <input
              placeholder={"task"}
              type="text"
              value={this.state.current}
              onChange={this.saveTask}
            />
          </label>
        </form>
        <table>
        <tr>
          <th> list of Tasks</th>
        </tr>
        {this.state.task.map(x => Rows(x))}
        </table>

        <form onSubmit={this.handleSubmit}>
          <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Tasklist;
export {Reservation};
