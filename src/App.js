import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { history } from "./helpers/history";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoMain from "./components/todos/TodoMain";

import "./App.css";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
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
  );
}

export default App;
