import { actionTypes } from "../actionTypes";
import { userService } from "../../api/user";
import { history } from "../../helpers/history";

export const userActions = {
  login,
  logout,
  register,
};

function login(username, password) {
  return (dispatch) => {
    userService.login({ username, password }).then((user) => {
      dispatch(success(user));
      history.push("/todos");
    });
  };

  function request(user) {
    return { type: actionTypes.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: actionTypes.LOGIN_SUCCESS, user };
  }
}

function logout() {
  userService.logout();
  return { type: actionTypes.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then((user) => {
      dispatch(success());
      history.push("/login");
    });
  };

  function request(user) {
    return { type: actionTypes.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: actionTypes.REGISTER_SUCCESS, user };
  }
}
