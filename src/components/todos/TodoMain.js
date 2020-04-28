import React from "react";
import TodoList from "./TodoList";
import { history } from "../../helpers/history";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";

class TodoMain extends React.Component {
  render() {
    return (
      <main>
        <Container>
          {this.props.loggedIn ? <TodoList></TodoList> : history.push("/login")}
        </Container>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  return { loggedIn };
};

export default connect(mapStateToProps, null)(TodoMain);
