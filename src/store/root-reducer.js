import { combineReducers } from "redux";
import { PostReducer as posts } from "../components/posts";
import { uiReducer as ui } from "../components/ui";
import { currentPostReducer as currentPostId } from "../components/current-post";

export const rootReducer = combineReducers({
  posts,
  ui,
  currentPostId
});
