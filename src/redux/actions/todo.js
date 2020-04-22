import { actionTypes } from "../actionTypes";
import { todoService } from "../../api/todo";

function getAll() {
  return (dispatch) => {
    dispatch(request()); // Send initial fetch request

    todoService
      .fetchTodos()
      .then((todos) => {
        dispatch(success(todos.data));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };

  function request() {
    return { type: actionTypes.GETALL_REQUEST };
  }
  function success(todos) {
    console.log("YAY SUCCESS", todos);
    return { type: actionTypes.GETALL_SUCCESS, todos };
  }
  function failure(error) {
    return { type: actionTypes.GETALL_FAILURE, error };
  }
}

export const todoActions = {
  getAll,
};
