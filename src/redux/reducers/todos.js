import { actionTypes } from "../actionTypes";

export function todos(state = {}, action) {
  switch (action.type) {
    case actionTypes.GETALL_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.GETALL_SUCCESS:
      return {
        todos: action.todos,
      };

    case actionTypes.GETALL_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
