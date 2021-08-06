import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

/*
 * Initial State
 */
export const initialStateResponseNode = {
  name: "",
  response: [
    {
      value: "",
    },
  ],
};

export const initialStateAgentHandoverNode = {
  name: "",
  message: "",
  phoneNumber: "",
  phoneExtention: "",
  department: "",
};

export const initialStateCustomCodeNode = {
  name: "",
};

export const initialStateQuestionNode = {
  name: "",
  message: "",
  inputs: [
    {
      value: "",
    },
  ],
  failureMessage: "",
  isBranching: false,
};

export const initialStateWorkflowSwitchNode = {
  name: "",
  workflow: "",
  message: "",
};

export const initialStateEndNode = {
  name: "",
  response: [
    {
      value: "",
    },
  ],
};

export const initialStateDecisionNode = {
  nodes: [
    {
      name: "",
      successApi: "",
      successApiRule: "",
      status: "",
    },
  ],
  rule: "",
};

export const initialStateWebhookNode = {
  name: "",
};

export const initialStateEntityNode = {
  name: "",
  message: "",
  isAvailable: false,
  entityName: "",
  isMandatory: false,
  failureMessage: "",
  isValidate: false,
  validateType: "",
  validatorRegex: "",
};

export const initialStateAPINode = {
  apiCall: "",
  apiEndPoint: "",
  requestType: "",
  body: [
    {
      key: "",
      value: "",
    },
  ],
  headers: [
    {
      key: "",
      value: "",
    },
  ],
};

/*
 * Available Nodes Data
 */
export const availableNodesData = [
  {
    id: uuidv4(),
    content: "Entity",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 1,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "Entity",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateEntityNode),
    },
  },
  {
    id: uuidv4(),
    content: "Workflow Switch",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 1,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "WorkflowSwitch",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateWorkflowSwitchNode),
    },
  },
  {
    id: uuidv4(),
    content: "API",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 1,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "API",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateAPINode),
    },
  },
  {
    id: uuidv4(),
    content: "End",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 0,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "End",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateEndNode),
    },
  },
  {
    id: uuidv4(),
    content: "Webhook",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 1,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "Webhook",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateWebhookNode),
    },
  },
  {
    id: uuidv4(),
    content: "Decision",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 1,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "Decision",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateDecisionNode),
    },
  },
  {
    id: uuidv4(),
    content: "Agent Handover",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 1,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "AgentHandover",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateAgentHandoverNode),
    },
  },
  {
    id: uuidv4(),
    content: "Custom Code",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 1,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "CustomCode",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateCustomCodeNode),
    },
  },
  {
    id: uuidv4(),
    content: "Question",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 0,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "Question",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateQuestionNode),
    },
  },
  {
    id: uuidv4(),
    content: "Response",
    disableDrag: false,
    coordinates: [50, 50],
    inputs: 1,
    outputs: 1,
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        canLinkInput: "canAllowToLink",
        canLinkOutput: "canAllowToLink",
        renderEditor: "Response",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateResponseNode),
    },
  },
];

/*
 * Diagram Data
 */
export const diagramData = {
  nodes: [
    {
      id: `node--${uuidv4()}`,
      content: "Start",
      coordinates: [55, 95],
      disableDrag: true,
      inputs: [],
      outputs: [
        {
          id: `output-port-${uuidv4()}`,
          alignment: "right",
          canLink: "canAllowToLink",
        },
      ],
      data: {
        helper: {
          canEdit: false,
          canDelete: false,
          canLinkInput: false,
          canLinkOutput: "canAllowToLink",
          renderEditor: "Start",
          renderNode: "NodeBlock",
        },
        payload: {},
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
};

/*
 * Initial Workflow State
 */
export const initialWorkflowState = (schema: any) => {
  return {
    currentWorkFlowIndex: 0,
    flows: [
      {
        id: `workflow--${uuidv4()}`,
        name: "Workflow 1",
        schema: _.cloneDeep(schema),
      },
    ],
  };
};
