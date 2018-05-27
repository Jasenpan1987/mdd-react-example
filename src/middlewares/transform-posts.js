import { normalize } from "normalizr";
import { TRANSFORM_POSTS } from "../components/posts";

export const transformPostsMiddleware = ({
  dispatch,
  getState
}) => next => async action => {
  if (action.type !== TRANSFORM_POSTS) {
    return next(action);
  }

  // { data, transformed}
  const { posts, success, schema } = action.payload;
  const newPosts = posts.map(({ id, userId, title, body }) => {
    return {
      id,
      authorId: userId,
      title,
      post: body
    };
  });

  dispatch(success(normalize(newPosts, schema)));
};
