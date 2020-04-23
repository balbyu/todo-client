import { actionTypes } from "../actionTypes";
import { userService } from "../../api/user";
import { history } from "../../helpers/history";

const login = (username, password) => {
  return (dispatch) => {
    dispatch(request({ username })); // Login request sent
    userService.login({ username, password }).then(
      (user) => {
        dispatch(success(user)); // Successfully logged in
        history.push("/todos");
      },
      (error) => {
        dispatch(failure(error.toString())); //Error logging in
      }
    );
  };

  function request(user) {
    return { type: actionTypes.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: actionTypes.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: actionTypes.LOGIN_FAILURE, error };
  }
};

const logout = () => {
  userService.logout();
  return { type: actionTypes.LOGOUT };
};

const register = (user) => {
  return (dispatch) => {
    dispatch(request(user)); //Register request sent

    userService.register(user).then(
      (user) => {
        dispatch(success(user));
        history.push("/login");
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request(user) {
    return { type: actionTypes.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: actionTypes.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: actionTypes.REGISTER_FAILURE, error };
  }
};

export const userActions = {
  login,
  logout,
  register,
};
