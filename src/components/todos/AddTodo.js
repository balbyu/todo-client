import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";

class AddTodo extends React.Component {
  state = {
    name: null,
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

    try {
      const { data } = await axios.post(`http://localhost:3000/todos`, {
        name: this.state.name,
      });

      // Upate the parent's todo state with the new item
      if (data) this.props.createTodo(data);
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.createTodo}>
          <FormControl
            onChange={this.updateName}
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
