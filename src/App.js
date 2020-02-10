import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="container">
        {todos.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(App);
