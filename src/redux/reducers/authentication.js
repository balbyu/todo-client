import { actionTypes } from "../actionTypes";

const initialState = {
  loggedIn: false,
  user: {},
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case actionTypes.LOGIN_FAILURE:
      return {};
    case actionTypes.LOGOUT:
      return { loggedIn: false };

    case actionTypes.VALIDATE:
      const { valid, user } = action.payload;

      return {
        loggedIn: valid,
        user,
      };
    default:
      return state;
  }
}
