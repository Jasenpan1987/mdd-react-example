import { createAction } from "redux-actions";

export const SELECT_POST = "SELECT_POST";

export const selectPost = createAction(SELECT_POST, postId => postId);
