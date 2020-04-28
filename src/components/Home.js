import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  state = {
    username: "",
    loggedIn: false,
  };

  render() {
    const { username } = this.props;
    return (
      <div>
        {username ? (
          <h1>
            {" "}
            Welcome back {username}! Make today the best day of your fucking
            life man
          </h1>
        ) : (
          <h1>
            Welcome to my awesome Todo application. Please regsiter a new
            account or log in to proceed!
          </h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  const { username } = loggedIn ? state.authentication.user : "";
  return { username, loggedIn };
};

export default connect(mapStateToProps, null)(Home);
