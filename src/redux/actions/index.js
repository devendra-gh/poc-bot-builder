import types from "../types";

export const baseAction = (action, payload = {}) => ({
  type: action,
  payload,
});

export const isLoading = (data) => {
  debugger;
  return async (dispatch) => {
    dispatch(baseAction(types.IS_LOADING, data));
  };
};
