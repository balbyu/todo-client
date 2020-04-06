import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";

class TodoCreateField extends React.Component {
  state = {
    name: null,
  };

  updateName = (ev) => {
    this.setState({ name: ev.target.value });
  };

  createTodo = async (ev) => {
    ev.preventDefault(); // Prevent page reload default action

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
            aria-label="Txt input with checkbox"
          />
          <Button variant="primary" type="submit">
            Create Todo
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

export default TodoCreateField;
