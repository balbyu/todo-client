export const actionTypes = {
  /**
   * Application Action Types
   */
  RESET_APP: "RESET_APP",

  /**
   * User Action Types
   */
  REGISTER_REQUEST: "USERS_REGISTER_REQUEST",
  REGISTER_SUCCESS: "USERS_REGISTER_SUCCESS",
  REGISTER_FAILURE: "USERS_REGISTER_FAILURE",

  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",

  LOGOUT: "USERS_LOGOUT",

  /**
   * Todo Action Types
   */

  GETALL_REQUEST: "TODOS_GETALL_REQUEST",
  GETALL_SUCCESS: "TODOS_GETALL_SUCCESS",
  GETALL_FAILURE: "TODOS_GETALL_FAILURE",

  CREATE_REQUEST: "TODOS_CREATE_REQUEST",
  CREATE_SUCCESS: "TODOS_CREATE_SUCCESS",
  CREATE_FAILURE: "TODOS_CREATE_FAILURE",

  COMPLETE_REQUEST: "TODOS_COMPLETE_REQUEST",
  COMPLETE_SUCCESS: "TODOS_COMPLETE_SUCCESS",
  COMPLETE_FAILURE: "TODOS_COMPLETE_FAILURE",

  UPDATE_REQUEST: "TODOS_UPDATE_REQUEST",
  UPDATE_SUCCESS: "TODOS_UPDATE_SUCCESS",
  UPDATE_FAILURE: "TODOS_UPDATE_FAILURE",

  DELETE_REQUEST: "TODOS_DELETE_REQUEST",
  DELETE_SUCCESS: "TODOS_DELETE_SUCCESS",
  DELETE_FAILURE: "TODOS_DELETE_FAILURE",
};
