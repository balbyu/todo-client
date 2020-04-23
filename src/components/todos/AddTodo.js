import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class AddTodo extends React.Component {
  state = {
    name: "",
  };

  updateName = (ev) => {
    this.setState({ name: ev.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.state.name) {
      this.props.createTodo(this.state.name);
      this.setState({ name: "" });
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
