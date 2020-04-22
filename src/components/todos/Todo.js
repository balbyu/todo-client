import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { debounce } from "../../utils";
import { todoService } from "../../api/todo";

class Todo extends React.Component {
  state = { ...this.props.data };

  deleteTodo = async () => {
    try {
      await todoService.deleteTodo(this.state.id);
      this.props.removeTodo(this.state.id);
    } catch (err) {
      console.log(err);
    }
  };

  completeTodo = async (ev) => {
    try {
      const completed = ev.target.checked;
      const payload = {
        id: this.state.id,
        completed,
      };
      await todoService.completeTodo(payload);
      this.setState({ completed });
    } catch (error) {
      throw error;
    }
  };

  updateTodo = debounce(async (target) => {
    try {
      const name = target.value;
      if (name && name.length >= 3) {
        const payload = {
          id: this.state.id,
          name,
        };
        await todoService.updateTodo(payload);
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
                onChange={this.completeTodo}
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
