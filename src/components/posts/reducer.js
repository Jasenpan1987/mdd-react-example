import { POST_LOAD_SUCCESS, POST_LOAD_ERROR } from "./actions";

const initPosts = [];

export const PostReducer = (state = initPosts, action) => {
  switch (action.type) {
    case POST_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
