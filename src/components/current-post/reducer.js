import { SELECT_POST } from "./actions";

export const currentPostReducer = (state = -1, action) => {
  if (action.type === SELECT_POST) {
    return action.payload;
  }
  return state;
};
