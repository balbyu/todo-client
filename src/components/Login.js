import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginUser } from "../redux/actions/user";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getLoggedIn } from "../redux/selectors/user";
import api from "../api";

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

  login = async (ev) => {
    ev.preventDefault();
    try {
      console.log("We are here");
      const { data } = await api.user.login(this.state);
      console.log(this.props);
      this.props.loginUser(data);
      console.log(this.props.loggedIn);
    } catch (err) {
      // Send a notification to the screen that "Username or password is invalid";
    }
  };

  render() {
    return (
      <div>
        {this.state.loggedIn ? <Redirect to="/todos" /> : null}
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              onChange={this.updateUsername}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.updatePassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.login}>
            Login{" "}
          </Button>
        </Form>
      </div>
    );
  }
}

// component will receive: props.a, props.todos, and props.filter

// Assings Redux actions to Login's prop
const mapDispatchToProps = (dispatch) => ({
  loginUser: (payload) => dispatch(loginUser(payload)),
});

export default connect(
  (state) => ({ loggedIn: getLoggedIn(state) }),
  mapDispatchToProps
)(Login);
