import { LOGIN_USER } from "../actionTypes";

const initialState = {
  currentUser: {},
};

export function CreateUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
