import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends React.Component {
  state = {
    username: null,
    password: null,
  };

  updateUsername = ({ target }) => {
    if (!target && !target.value) return;
    this.setState({ username: target.value });
  };

  updatePassword = ({ target }) => {
    if (!target && !target.value) return;
    this.setState({ password: target.value });
  };

  login = () => {
    if (!this.state.username || !this.state.password) {
      throw new Error("A username and password must be provided.");
    }

    try {
      // Make axios request
    } catch (err) {
      // Send a notification to the screen that "Username or password is invalid";
    }
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={updateUsername}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={updatePassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
