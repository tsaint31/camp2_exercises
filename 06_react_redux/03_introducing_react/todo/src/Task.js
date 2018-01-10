import React, { Component } from "react";
import './Task.css';


const task = [];
const taskstate = [];
const currentstate = false;

function Rows1(props){
  let deleteButton = null;
  let customClass = "notBarre";

  if (props.task.status) {
    customClass = "Barre";
    deleteButton = (<button onClick={props.delete} name={props.index}> delete </button>);
  }

  return (
    <tr>
      <td className={customClass}>
        <form>
          <label className={customClass}>
            {props.task.task}
            <input
              name={props.index}
              type="checkbox"
              checked={props.task.status}
              onChange={props.handleCheck}
            />
          </label>
        </form>
        {deleteButton}
      </td>
    </tr>
  );
}

class Tasklist extends Component {
  constructor(props) {
    super(props);
    this.state = { task: task, current: "" };
  }

  fetchData = evt => {
    const newTodo = {
      task: "",
      status: false
    };
    evt.preventDefault();
    let newTask = this.state.task;
    newTodo.task = this.state.current;
    newTask.push(newTodo);

    this.setState({
      task: newTask
    });
  };

  handleCheck(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  let modifyTask = this.state.task;
  modifyTask[name].status = !modifyTask[name].status;
  this.setState({
    task: modifyTask
  });
}

  delete(event) {
    let deleteTask = this.state.task;
    deleteTask.splice(event.target.name,1);
    this.setState({
      task: deleteTask
    });
  }

  saveTask = evt => {
    this.setState({
      current: evt.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Task</h1>
        <form onSubmit={this.fetchData}>
          <label>
            Please enter your task
            <input
              placeholder={"task"}
              type="text"
              value={this.state.current}
              onChange={this.saveTask}
            />
          </label>
        </form>
        <table>
          <thead>
            <tr>
              <th> list of Tasks</th>
            </tr>
          </thead>
          <tbody>{this.state.task.map((task,i) => <Rows1 task={task} handleCheck={this.handleCheck.bind(this)} delete={this.delete.bind(this)} index={i}/>)}</tbody>
        </table>
      </div>
    );
  }
}

export default Tasklist;
