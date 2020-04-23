import { actionTypes } from "../actionTypes";
import { todoService } from "../../api/todo";

const getAll = () => {
  return async (dispatch) => {
    dispatch(request());
    try {
      const todos = await todoService.fetchTodos();
      dispatch(success(todos.data));
    } catch (error) {
      dispatch(failure(error.toString()));
    }
  };

  function request() {
    return { type: actionTypes.GETALL_REQUEST };
  }
  function success(todos) {
    return { type: actionTypes.GETALL_SUCCESS, todos };
  }
  function failure(error) {
    return { type: actionTypes.GETALL_FAILURE, error };
  }
};

const createTodo = (name) => {
  return async (dispatch) => {
    dispatch(request());
    try {
      const todo = await todoService.createTodo(name);
      dispatch(success(todo.data));
    } catch (error) {
      dispatch(failure(error.toString()));
    }
  };

  function request() {
    return { type: actionTypes.CREATE_REQUEST };
  }
  function success(todo) {
    return { type: actionTypes.CREATE_SUCCESS, todo };
  }
  function failure(error) {
    return { type: actionTypes.CREATE_FAILURE, error };
  }
};

const completeTodo = (payload) => {
  return async (dispatch) => {
    dispatch(request());
    try {
      const todo = await todoService.completeTodo(payload);
      dispatch(success(todo.data));
    } catch (error) {
      dispatch(failure(error.toString()));
    }
  };
  function request() {
    return { type: actionTypes.COMPLETE_REQUEST };
  }
  function success(todo) {
    return { type: actionTypes.COMPLETE_SUCCESS, todo };
  }
  function failure(error) {
    return { type: actionTypes.COMPLETE_FAILURE, error };
  }
};

const updateTodo = (payload) => {
  return async (dispatch) => {
    dispatch(request());
    try {
      const todo = await todoService.updateTodos(payload);
      dispatch(success(todo.data));
    } catch (error) {
      dispatch(failure(error.toString()));
    }
  };
  function request() {
    return { type: actionTypes.UPDATE_REQUEST };
  }
  function success(todo) {
    return { type: actionTypes.UPDATE_SUCCESS, todo };
  }
  function failure(error) {
    return { type: actionTypes.COMPLETE_FAILURE, error };
  }
};

const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch(request());
    try {
      await todoService.deleteTodo(id);
      dispatch(success());
    } catch (error) {
      dispatch(failure(error.toString()));
    }
  };

  function request() {
    return { type: actionTypes.DELETE_REQUEST };
  }
  function success(todos) {
    return { type: actionTypes.DELETE_SUCCESS };
  }
  function failure(error) {
    return { type: actionTypes.DELETE_FAILURE, error };
  }
};

export const todoActions = {
  getAll,
  createTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
};
