import { actionTypes } from "../actionTypes";

const initialState = {};

export function todos(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GETALL_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.GETALL_SUCCESS:
      return { ...state, todos: action.todos };

    case actionTypes.GETALL_FAILURE:
      return {
        error: action.error,
      };

    case actionTypes.CREATE_REQUEST:
      return { ...state };

    case actionTypes.CREATE_SUCCESS:
      const todos = [...state.todos, action.todo];

      return {
        todos,
      };

    case actionTypes.CREATE_FAILURE:
      return {
        error: action.error,
      };

    case actionTypes.COMPLETE_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.COMPLETE_SUCCESS:
      return {
        todo: action.todo,
      };

    case actionTypes.COMPLETE_FAILURE:
      return {
        error: action.error,
      };

    case actionTypes.UPDATE_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.UPDATE_SUCCESS:
      return {
        todo: action.todo,
      };

    case actionTypes.UPDATE_FAILURE:
      return {
        error: action.error,
      };

    case actionTypes.DELETE_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.DELETE_SUCCESS:
      return {};

    case actionTypes.DELETE_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
