import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { todoService } from "../../api/todo";

class AddTodo extends React.Component {
  state = {
    name: "",
  };

  /**
   * Updates the name of the new todo field
   */
  updateName = (ev) => {
    this.setState({ name: ev.target.value });
  };

  /**
   * Creates a new Todo and updates the state.
   */
  createTodo = async (ev) => {
    ev.preventDefault(); // Prevent page reload default action.

    if (!this.state.name) throw Error("Name must not be empty.");
    try {
      const data = await todoService.createTodo(this.state.name);
      if (data) this.props.createTodo(data);
    } catch (err) {
      console.log(err);
    }
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.createTodo}>
          <FormControl
            onChange={this.updateName}
            value={this.state.name}
            type="text"
            aria-label="add-todo"
          />
          <Button variant="primary" type="submit">
            Create Todo
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

export default AddTodo;
