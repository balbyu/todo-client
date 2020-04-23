import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { debounce } from "../../utils";

class Todo extends React.Component {
  state = { ...this.props.data };

  handleComplete = (ev) => {
    const completed = ev.target.checked;
    const payload = {
      id: this.state.id,
      completed,
    };
    this.props.completeTodo(payload);
  };

  handleUpdate = debounce((target) => {
    const name = target.value;
    if (name && name.length >= 3) {
      const payload = {
        id: this.state.id,
        name,
      };
      this.props.updateTodo(payload);
    }
  });

  handleDelete = (ev) => {
    ev.preventDefault();
    this.props.deleteTodo(this.state.id);
  };

  render() {
    return (
      <div id={`todo-${this.state.id}`}>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                aria-label="Checkbox for completed todo status"
                onChange={this.handleComplete}
                checked={this.props.data.completed}
              />
            </InputGroup.Prepend>
            <FormControl
              type="text"
              aria-label="Text input with checkbox"
              placeholder={this.props.data.name}
              onChange={(e) => {
                this.handleUpdate(e.target);
              }}
            />
            {this.props.data.name}
          </InputGroup>
          <Button variant="primary" onClick={this.handleDelete}>
            Delete Button
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

export default Todo;
