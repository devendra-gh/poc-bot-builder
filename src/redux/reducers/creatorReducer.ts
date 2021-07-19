import types from "../types";
import { v4 as uuidv4 } from "uuid";

/**
 * @param {Object} state - previous state
 * @param {Object} action - action to handle
 * @returns {Object} - new state
 */
const initialState: any = {
  diagram: {
    nodes: [
      {
        id: uuidv4(),
        content: "Start",
        icon: "FaBeer",
        renderNode: "NodeBlock",
        componentName: "Start",
        disableDrag: true,
        coordinates: [50, 50],
        actions: {
          input: 0,
          output: 1,
          canEdit: false,
          canDelete: false,
        },
        data: {
          name: "Hello",
          value: "World",
        },
      },
    ],
    links: [
      // {
      //   input: "input-port-01",
      //   output: "output-port-11",
      //   label: "Link",
      //   readonly: false,
      //   className: "my-custom-link-class",
      // },
    ],
  },
  editor: {
    isOpen: false,
    data: {},
  },
};

const creatorReducer = (state = initialState, action: any) => {
  // const _initialState = Object.assign({}, initialState);
  switch (action.type) {
    case types.UPDATE_NODES:
      return {
        ...state,
        diagram: {
          ...state.diagram,
          nodes: action.payload,
        },
      };

    case types.UPDATE_LINKS:
      console.log("links s=> ", state);
      console.log("links a=> ", action);

      return {
        ...state,
        diagram: {
          ...state.diagram,
          links: action.payload,
        },
      };

    case types.UPDATE_SIDEBAR:
      return {
        ...state,
        editor: action.payload,
      };

    default:
      return state;
  }
};

export default creatorReducer;
