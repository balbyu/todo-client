import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { userActions } from "../redux/actions/user";

class Signup extends React.Component {
  state = {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      username: null,
      password: null,
    },
    submitted: false,
  };

  updateFirstName = ({ target }) => {
    if (!target && !target.value) return;
    const { user } = this.state;
    this.setState({ user: { ...user, firstName: target.value } });
  };
  updateLastName = ({ target }) => {
    if (!target && !target.value) return;
    const { user } = this.state;
    this.setState({ user: { ...user, lastName: target.value } });
  };
  updateEmail = ({ target }) => {
    if (!target && !target.value) return;
    const { user } = this.state;
    this.setState({ user: { ...user, email: target.value } });
  };
  updateUsername = ({ target }) => {
    if (!target && !target.value) return;
    const { user } = this.state;
    this.setState({ user: { ...user, username: target.value } });
  };
  updatePassword = ({ target }) => {
    if (!target && !target.value) return;
    const { user } = this.state;
    this.setState({ user: { ...user, password: target.value } });
  };

  handleSubmit = async (ev) => {
    ev.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.username &&
      user.password
    ) {
      await this.props.register(user);
      debugger;
      if (this.props.user) {
        const { username, password } = this.state.user;
        this.props.login(username, password);
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form className="text-left">
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
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { registering, registered, user } = state.registration;
  const { loggedIn } = state.authentication;

  return { registering, registered, user, loggedIn };
};

const actionCreators = {
  register: userActions.register,
  login: userActions.login,
};

export default connect(mapStateToProps, actionCreators)(Signup);
