import { API } from "../../shared/actions";
import { startLoading, endLoading } from "../ui";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const POST_LOAD_SUCCESS = "POST_LOAD_SUCCESS";
export const POST_LOAD_ERROR = "POST_LOAD_ERROR";
export const TRANSFORM_POSTS = "TRANSFORM_POSTS";
export const SLICE_POSTS = "SLICE_POSTS";
const RequiredChunks = 8;

export const loadPost = () => {
  return {
    type: API,
    payload: {
      url: `${BASE_URL}/posts`,
      failed: loadPostFailed,
      success: transformPosts,
      scope: "global"
    }
  };
};

export const transformPosts = posts => {
  console.log("transform action");
  return {
    type: TRANSFORM_POSTS,
    payload: {
      posts,
      success: slicePosts
    }
  };
};

export const slicePosts = posts => {
  console.log("slice action");
  return {
    type: SLICE_POSTS,
    payload: {
      posts,
      chunks: RequiredChunks,
      success: loadPostSuccess
    }
  };
};

export const loadPostSuccess = posts => {
  console.log("load success");
  return {
    type: POST_LOAD_SUCCESS,
    payload: posts
  };
};

export const loadPostFailed = error => {
  return {
    type: POST_LOAD_ERROR,
    error
  };
};
