import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import { debounce } from "../../utils";

class Todo extends React.Component {
  state = { ...this.props.data };

  toggleComplete = async (ev) => {
    try {
      const completed = ev.target.checked;
      const todo = await axios.put(
        `http://localhost:3000/todos/${this.state.id}`,
        {
          completed,
        }
      );
      this.setState({ completed });
    } catch (error) {
      throw error;
    }
  };

  deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:3000/todos/${this.state.id}`);
      this.props.removeTodo(this.state.id);
    } catch (error) {
      throw error;
    }
  };

  updateTodo = debounce(async (target) => {
    try {
      const name = target.value;
      if (name && name.length >= 3) {
        const todo = await axios.put(
          `http://localhost:3000/todos/${this.state.id}`,
          {
            name,
          }
        );
        this.setState({ name });
      }
    } catch (error) {
      throw error;
    }
  });

  render() {
    return (
      <div id={`todo-${this.state.id}`}>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                aria-label="Checkbox for completed todo status"
                onChange={this.toggleComplete}
                checked={this.state.completed}
              />
            </InputGroup.Prepend>
            <FormControl
              type="text"
              aria-label="Text input with checkbox"
              placeholder={this.state.name}
              onChange={(e) => {
                let target = e.target;
                this.updateTodo(target);
              }}
            />
            {this.state.name}
          </InputGroup>
          <Button variant="primary" onClick={this.deleteTodo}>
            Delete Button
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

export default Todo;
