import { POST_LOAD_SUCCESS, POST_LOAD_ERROR } from "./actions";
import Immutable from "seamless-immutable";
import { handleActions } from "redux-actions";

const initPosts = Immutable({});

export const PostReducer = handleActions(
  {
    POST_LOAD_SUCCESS: (posts, { payload }) => {
      return posts.merge(Immutable(payload));
    }
  },
  initPosts
);
