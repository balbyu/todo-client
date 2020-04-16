import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

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

  login = async () => {
    if (!this.state.username || !this.state.password) {
      throw new Error("A username and password must be provided.");
    }

    try {
      // Make axios request
      const { user, token } = await axios.post(
        "http://localhost:3000/users/login",
        this.state
      );

      /**
       * Set the token. This can be accomplished multiple ways, but were going to use React-Redux to manage the storage of it. This way a user can login and have the token stored in memory so that when they re-vist there is no need to login again if token hasn't expired.
       */
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
            Logireturn connect( mapStateToProps, mapDispatchToProps )(Login);n
          </Button>
        </Form>
      </div>
    );
  }
}

// We normally do both in one step, like this:

// Takes in Redux's state. Assigns Login's prop token to Redux's token state
const mapStateToProps = (state) => ({
  token: state.token,
});

// Assings Redux actions to Login's prop
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

return connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
