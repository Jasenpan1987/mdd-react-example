export const SELECT_POST = "SELECT_POST";

export const selectPost = postId => ({
  type: SELECT_POST,
  payload: postId
});
