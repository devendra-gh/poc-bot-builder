import types from "../types";

/**
 * @param {Object} state - previous state
 * @param {Object} action - action to handle
 * @returns {Object} - new state
 */
const initialState = {
  loading: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
