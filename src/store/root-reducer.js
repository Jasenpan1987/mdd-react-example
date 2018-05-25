import { combineReducers } from "redux";
import { PostReducer as posts } from "../components/posts";
import { uiReducer as ui } from "../components/ui";

export const rootReducer = combineReducers({
  posts,
  ui
});
