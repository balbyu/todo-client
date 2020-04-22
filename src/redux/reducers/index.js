import { combineReducers } from "redux";

import { authentication } from "./authentication";
import { registration } from "./registration";
import { todos } from "./todos";

const rootReducer = combineReducers({
  authentication,
  registration,
  todos,
});

export default rootReducer;
