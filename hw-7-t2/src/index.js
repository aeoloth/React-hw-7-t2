import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListItem from "./ListItem";

class TaskList extends Component {
  state = {
    list: ["тестовое задание 1"],
  };

  addTask = () => {
    this.setState(({ list, listItem }) => {
      const newValue = listItem;
      console.log(list);
      return { list: [...list, newValue] };
    });
  };

  deleteLastTask = () => {
    this.setState(({list}) => {
      const lists = new Array([]);
      return { list: lists.splice(list.lenght, 1)}
    })
  }
  // delete = (targetId) => this.setState({
  //   products: this.state.products.filter(({ id }) => id !== targetId)
  // })

  render() {
    const taskList = this.state.list.map((listItem, index) => (
      <ListItem key={index + listItem.toString()} value={listItem} />
    ));

    return (
      <>
        <input
          type="text"
          onChange={(event) => this.setState({ listItem: event.target.value })}
        />
        {console.log(this.state.listItem)}
        {console.log(this.state.list)}
        <ul>{taskList}</ul>
        <button onClick={this.addTask}>Добавить задание</button>
        <button onClick={this.deleteLastTask}>Удалить последнее задание</button>
      </>
      /* <table className="products">
        <thead>
          <tr>
            <th className="products__th">#</th>
            <th className="products__th">Название</th>
            <th className="products__th">Цена</th>
            <th className="products__th">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, namen, price }) => 
            <tr key={id}>
              <td className="products__td">{id}</td>
              <td className="products__td">{namen}</td>
              <td className="products__td">{price}</td>
              <td className="products__td">
                <button
                  className="products__btn"
                  onClick={() => this.delete(id)}
                >Удалить</button>
              </td>
            </tr>
          )}
        </tbody>
      </table> */
    );
  }
}

ReactDOM.render(<TaskList />, document.getElementById("root"));
