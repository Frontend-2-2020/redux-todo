import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions/todoActions";

class Todo extends Component {
  render() {
    const { todo, toggleTodo, deleteTodo } = this.props;
    return (
      <li>
        <input type="checkbox" onChange={() => toggleTodo(todo.id)} />{" "}
        {todo.name}{" "}
        <span class="badge badge-danger" onClick={() => deleteTodo(todo.id)}>
          delete
        </span>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(undefined, mapDispatchToProps)(Todo);
