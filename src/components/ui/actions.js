export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export const startLoading = (payload = "global") => ({
  type: START_LOADING,
  payload
});

export const endLoading = (payload = "global") => ({
  type: END_LOADING,
  payload
});
