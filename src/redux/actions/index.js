import { actionTypes } from "../actionTypes";

export * from "./user";
export * from "./todo";

const reset = () => {
  return { type: actionTypes.RESET_APP };
};

export const actions = {
  reset,
};
