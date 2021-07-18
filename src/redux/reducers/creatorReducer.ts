import types from "../types";
import { v4 as uuidv4 } from "uuid";

const guid = uuidv4();

/**
 * @param {Object} state - previous state
 * @param {Object} action - action to handle
 * @returns {Object} - new state
 */
const initialState: any = {
  diagram: {
    nodes: [
      {
        id: `node--${guid}`,
        content: "Start",
        className: "start",
        render: "NodeBlock",
        disableDrag: true,
        coordinates: [50, 50],
        inputs: [
          {
            id: `input-port-${guid}`,
            alignment: "right",
            canLink: "canAllowToLink",
          },
        ],
        outputs: [],
        data: {
          canClose: false,
          canEdit: false,
          type: "Start",
          foo: "bar",
        },
      },
      // {
      //   id: "node-1",
      //   content: "Node 1",
      //   render: "NodeBlock",
      //   coordinates: [200, 200],
      //   inputs: [
      //     { id: "input-port-11", alignment: "left", canLink: "canAllowToLink" },
      //   ],
      //   outputs: [
      //     {
      //       id: "output-port-11",
      //       alignment: "right",
      //       canLink: "canAllowToLink",
      //     },
      //   ],
      //   data: {
      //     canClose: true,
      //     canEdit: true,
      //     name: "Node Name",
      //     value: "Response Value",
      //   },
      // },
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
      // debugger;
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
