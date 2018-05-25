import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import { api } from "../middlewares/api";
import { transformPostsMiddleware } from "../middlewares/transform-posts";
import { slicePostsMiddleware } from "../middlewares/slice-posts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(api, transformPostsMiddleware, slicePostsMiddleware)
  )
);

window.store = store;

export { store };
