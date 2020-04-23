import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { todoActions } from "../../redux/actions";
import { connect } from "react-redux";

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const todos = this.props.todos.todos;

    return (
      <div className="todo-list">
        <AddTodo createTodo={this.props.createTodo}></AddTodo>

        {/* In order to populate the TodoList, we'll need immutabley map all the todos in the component's state to a new Todo components. We must declare a unique key for each Todo so that React knows which item has been changed, added, or removed.  */}
        {todos &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              data={todo}
              deleteTodo={this.props.deleteTodo}
              completeTodo={this.props.completeTodo}
              updateTodo={this.props.updateTodo}
            ></Todo>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { todos } = state;
  return { todos };
}

const actionCreators = {
  getTodos: todoActions.getAll,
  createTodo: todoActions.createTodo,
  deleteTodo: todoActions.deleteTodo,
  completeTodo: todoActions.completeTodo,
  updateTodo: todoActions.updateTodo,
};

export default connect(mapStateToProps, actionCreators)(TodoList);
