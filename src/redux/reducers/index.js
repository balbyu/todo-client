import { combineReducers } from "redux";

import { authentication } from "./authentication";
import { registration } from "./registration";
import { todos } from "./todos";
import { actionTypes } from "../actionTypes";

const appReducer = combineReducers({
  authentication,
  registration,
  todos,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.RESET_APP:
      state = {
        authentication: state.authentication,
        registration: null,
        todos: null,
      };
      return appReducer(state, action);

    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
