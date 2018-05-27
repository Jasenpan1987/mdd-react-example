import { SELECT_POST } from "./actions";
import { handleActions } from "redux-actions";

export const currentPostReducer = handleActions(
  {
    SELECT_POST: (state, { payload }) => payload
  },
  -1
);
