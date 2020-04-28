import { actionTypes } from "../actionTypes";

const initialState = {};

export function todos(state = initialState, action) {
  switch (action.type) {
    /**
     * Get All Todos
     */
    case actionTypes.GETALL_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.GETALL_SUCCESS:
      return { ...state, todos: action.todos, loading: false, loaded: true };

    case actionTypes.GETALL_FAILURE:
      return {
        error: action.error,
      };

    /**
     * Add Todo
     */
    case actionTypes.CREATE_REQUEST:
      return { ...state };

    case actionTypes.CREATE_SUCCESS:
      return { ...state, todos: [...state.todos, action.todo] };

    case actionTypes.CREATE_FAILURE:
      return {
        error: action.error,
      };

    /**
     * Complete Todo
     */
    case actionTypes.COMPLETE_REQUEST:
      return { ...state };

    case actionTypes.COMPLETE_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.todo.id
            ? { ...todo, completed: action.todo.completed }
            : todo
        ),
      };

    case actionTypes.COMPLETE_FAILURE:
      return {
        error: action.error,
      };

    /**
     * Update Todo
     */
    case actionTypes.UPDATE_REQUEST:
      return { ...state };

    case actionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.todo.id
            ? { ...todo, name: action.todo.name }
            : todo
        ),
      };

    case actionTypes.UPDATE_FAILURE:
      return {
        error: action.error,
      };

    /**
     * Delete Todo
     */
    case actionTypes.DELETE_REQUEST:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, deleting: true } : todo
        ),
      };

    case actionTypes.DELETE_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    case actionTypes.DELETE_FAILURE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...todoCopy } = todo;
            // return copy of user with 'deleteError:[error]' property
            return { ...todoCopy, deleteError: action.error };
          }

          return todo;
        }),
      };

    default:
      return state;
  }
}
