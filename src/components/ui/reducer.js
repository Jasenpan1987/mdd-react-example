import { START_LOADING, END_LOADING } from "./actions";
import { handleActions } from "redux-actions";

const initState = {
  loading: false
};

export const uiReducer = handleActions(
  {
    START_LOADING: (state, { payload }) => {
      if (payload === "global") {
        return { ...state, loading: true };
      }
      return state;
    },
    END_LOADING: (state, { payload }) => {
      if (payload === "global") {
        return { ...state, loading: false };
      }
      return state;
    }
  },
  initState
);
