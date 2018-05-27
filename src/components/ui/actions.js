import { createAction } from "redux-actions";

export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export const startLoading = createAction(
  START_LOADING,
  (payload = "global") => payload
);

export const endLoading = createAction(
  END_LOADING,
  (payload = "global") => payload
);
