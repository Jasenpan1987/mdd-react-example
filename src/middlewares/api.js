import { API } from "../shared/actions";
import { startLoading, endLoading } from "../components/ui";

const identity = () => ({ type: "NOT_DEFINED_TYPE" });

export const api = ({ dispatch, getState }) => next => async action => {
  if (action.type !== API) {
    return next(action);
  }

  if (action.payload.pending) {
    dispatch(action.payload.pending());
  } else {
    dispatch(startLoading("global"));
  }

  const {
    url,
    success = identity,
    failed = identity,
    pending = identity,
    scope = scope,
    final = identity,
    errorMsg = "Something went wrong"
  } = action.payload;

  try {
    const response = await fetch(url);
    const data = await response.json();

    dispatch(success(data));
  } catch (error) {
    dispatch(failed(errorMsg));
  }

  if (action.payload.final) {
    dispatch(action.payload.final());
  } else {
    dispatch(endLoading("global"));
  }
};
