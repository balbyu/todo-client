import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./helpers/history";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoMain from "./components/todos/TodoMain";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap/";
import { connect } from "react-redux";

import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  render() {
    return (
      <Container>
        <Router history={history}>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Ttyelud & Balbyu's Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {this.props.loggedIn ? (
                  <Nav.Link href="/todos">Todos</Nav.Link>
                ) : (
                  ""
                )}
                {this.props.loggedIn ? (
                  <Nav.Link href="/login">Logout</Nav.Link>
                ) : (
                  <Nav.Link href="/login">Login</Nav.Link>
                )}
                <Nav.Link href="/signup">Signup</Nav.Link>
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

export default connect(mapStateToProps, null)(App);
