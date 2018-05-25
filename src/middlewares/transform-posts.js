import { TRANSFORM_POSTS } from "../components/posts";

export const transformPostsMiddleware = ({
  dispatch,
  getState
}) => next => async action => {
  if (action.type !== TRANSFORM_POSTS) {
    return next(action);
  }

  // { data, transformed}
  const { posts, success } = action.payload;
  const newPosts = posts.map(({ id, userId, title, body }) => {
    return {
      id,
      authorId: userId,
      title,
      post: body
    };
  });

  dispatch(success(newPosts));
};
