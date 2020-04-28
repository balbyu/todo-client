import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import { history } from "./helpers/history";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoMain from "./components/todos/TodoMain";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap/";
import { connect } from "react-redux";
import { userService } from "./api/user";
import { userActions } from "./redux/actions/user";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  async componentDidMount() {
    if (!this.props.loggedIn) {
      const payload = await userService.validate();
      this.props.validate(payload);
    }
  }

  render() {
    return (
      <Container>
        <Router history={history}>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Ttyelud & Balbyu's Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/">Home</Link>
                {this.props.loggedIn ? <Link to="/todos">Todos</Link> : ""}
                {this.props.loggedIn ? (
                  <Link to="/login">Logout</Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}

                <Link to="/signup">Signup</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="App">
            <Switch>
              <Route path="/todos">
                <TodoMain />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  return { loggedIn };
};

const actionCreators = {
  validate: userActions.validate,
};

export default connect(mapStateToProps, actionCreators)(App);
