import types from "../types";

export const updateNodes = (payload: any) => {
  return {
    type: types.UPDATE_NODES,
    payload: payload,
  };
};

export const updateLinks = (payload: any) => {
  return {
    type: types.UPDATE_LINKS,
    payload: payload,
  };
};

export const updateSidebar = (payload: any) => {
  return {
    type: types.UPDATE_SIDEBAR,
    payload: payload,
  };
};
