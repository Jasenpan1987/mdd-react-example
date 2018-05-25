import { SLICE_POSTS } from "../components/posts";

export const slicePostsMiddleware = ({
  dispatch,
  getState
}) => next => async action => {
  if (action.type === SLICE_POSTS) {
    const { posts, chunks, success } = action.payload;
    const newPosts = posts.slice(0, chunks);
    dispatch(success(newPosts));
  }
  return next(action);
};
