import { actionTypes } from "../actionTypes";

export function registration(state = {}, action) {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return { registering: true };
    case actionTypes.REGISTER_SUCCESS:
      return { registered: true, user: action.user };
    case actionTypes.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
