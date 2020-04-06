import React from "react";
import Todo from "./Todo";
import axios from "axios";
import TodoCreateField from "./TodoCreateField";

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  removeTodo = (id) => {
    const todos = this.state.todos;

    todos.forEach((todo, idx, arr) => {
      if (todo.id === id) arr.splice(idx, 1);
    });

    this.setState({ todos });
  };

  createTodo = (todo) => {
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
  };

  async fetchTodos() {
    try {
      const params = {
        column: "createdAt",
      };
      const todos = await axios.get("http://localhost:3000/todos", { params });
      this.setState({ todos: todos.data });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.fetchTodos();
  }

  render() {
    return (
      <div className="todo-list">
        <TodoCreateField createTodo={this.createTodo}></TodoCreateField>
        {this.state.todos.map((todo) => (
          <Todo key={todo.id} data={todo} removeTodo={this.removeTodo}></Todo>
        ))}
      </div>
    );
  }
}
export default TodoList;
