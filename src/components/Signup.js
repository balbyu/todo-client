import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { createUser } from "../redux/actions/user";
import axios from "axios";

class Signup extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    username: null,
    password: null,
  };

  updateFirstName = ({ target }) => {
    if (!target && !target.value) return;
    this.setState({ firstName: target.value });
  };

  updateLastName = ({ target }) => {
    if (!target && !target.value) return;
    this.setState({ lastName: target.value });
  };
  updateEmail = ({ target }) => {
    if (!target && !target.value) return;
    this.setState({ email: target.value });
  };

  updateUsername = ({ target }) => {
    if (!target && !target.value) return;
    this.setState({ username: target.value });
  };

  updatePassword = ({ target }) => {
    if (!target && !target.value) return;
    this.setState({ password: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state);
  };

  signup = () => {
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.username ||
      !this.state.password
    )
      throw new Error("Signup form is missing an entry.");

    try {
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fist Name"
              onChange={this.updateFirstName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={this.updateLastName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={this.updateEmail}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              onChange={this.updateUsername}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.updatePassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (userInfo) => dispatch(createUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(Signup);
