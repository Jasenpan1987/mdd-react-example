import { START_LOADING, END_LOADING } from "./actions";

const initState = {
  loading: false
};

export const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOADING:
      if (action.payload === "global") {
        return { ...state, loading: true };
      }
      return state;

    case END_LOADING:
      if (action.payload === "global") {
        return { ...state, loading: false };
      }
      return state;
    default:
      return state;
  }
};
