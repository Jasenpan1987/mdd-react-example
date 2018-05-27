import { API } from "../../shared/actions";
import { startLoading, endLoading } from "../ui";
import { createAction } from "redux-actions";
import { postSchema } from "../../schemas/posts";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const POST_LOAD_SUCCESS = "POST_LOAD_SUCCESS";
export const POST_LOAD_ERROR = "POST_LOAD_ERROR";
export const TRANSFORM_POSTS = "TRANSFORM_POSTS";
export const SLICE_POSTS = "SLICE_POSTS";

const RequiredChunks = 8;

export const loadPost = createAction(API, () => ({
  url: `${BASE_URL}/posts`,
  failed: loadPostFailed,
  success: slicePosts,
  scope: "global"
}));

export const transformPosts = createAction(TRANSFORM_POSTS, posts => ({
  posts,
  success: loadPostSuccess,
  schema: [postSchema]
}));

export const slicePosts = posts => {
  return {
    type: SLICE_POSTS,
    payload: {
      posts,
      chunks: RequiredChunks,
      success: transformPosts
    }
  };
};

export const loadPostSuccess = createAction(
  POST_LOAD_SUCCESS,
  ({ entities: { posts } }) => posts
);

export const loadPostFailed = createAction(POST_LOAD_ERROR, error => error);
