import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListItem from "./ListItem";

class TaskList extends Component {
  state = {
    list: ["тестовое задание 1"],
    listItem: ''
  };

  addTask = () => {
    if (this.state.listItem !== '') {
    this.setState(({ list, listItem }) => {
      const newValue = listItem;
      // console.log(list);
      return { list: [...list, newValue] };
    });
  }
  };

  deleteLastTask =  () => {
    this.setState(({list}) => {
      return { list: list.slice(0,-1) }
    })
  }
 
  taskList() {
    return this.state.list.map((listItem, index) => {return (
      <ListItem key={index + listItem.toString()} value={listItem} />
    )});
  }

  render() {

    return (
      <div className="container">
        <input
          type="text"
          onChange={(event) => this.setState({ listItem: event.target.value })}
        />
        {/* {console.log(this.state.list)} */}
        <ul>{this.taskList()}</ul>
        <div className="btn">
          <button onClick={this.addTask}>Добавить задание</button>
          <button onClick={this.deleteLastTask}>Удалить последнее задание</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TaskList />, document.getElementById("root"));
