import { actionTypes } from "../actionTypes";
import { userService } from "../../api/user";
import { history } from "../../helpers/history";

const login = (username, password) => {
  return (dispatch) => {
    dispatch(request({ username })); // Login request sent
    userService.login({ username, password }).then(
      (response) => {
        dispatch(success(response.data.user)); // Successfully logged in
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

const validate = (payload) => {
  return { type: actionTypes.VALIDATE, payload };
};

const register = (user) => {
  return async (dispatch) => {
    dispatch(request(user)); //Register request sent

    try {
      const response = await userService.register(user);
      dispatch(success(response.data));
    } catch (error) {
      dispatch(failure(error));
    }
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
  validate,
};
