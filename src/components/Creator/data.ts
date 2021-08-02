import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

export const initialStateResponseNode = {
  nodes: [
    {
      name: "",
      value: "",
      skipFlow: false,
      workFlowNode: "",
      entityExists: "",
    },
  ],
};

export const initialStateAgentHandoverNode = {
  name: "",
};

export const initialStateWorkflowSwitchNode = {
  name: "",
  workflow: "",
};

export const initialStateEndNode = {
  nodes: [
    {
      name: "",
      value: "",
    },
  ],
};

export const initialStateResetNode = {
  name: "",
  all: false,
  entities: "",
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

export const initialStateUtteranceNode = {
  name: "",
  inputType: "",
  entityName: "",
  mandatory: false,
  failureMessage: "",
  validate: false,
  validateType: "",
  validator: "",
};

export const initialStateAPINode = {
  apiCall: "",
  apiEndPoint: "",
  requestType: "",
  requestBody: [
    {
      key: "",
      value: "",
      policyName: "",
      botEntityName: "",
    },
  ],
  authentication: [
    {
      key: "",
      value: "",
      policyName: "",
      botEntityName: "",
    },
  ],
};

export const availableNodesData = [
  {
    id: uuidv4(),
    content: "Utterance",
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
        renderEditor: "Utterance",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateUtteranceNode),
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
    content: "Reset",
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
        renderEditor: "Reset",
        renderNode: "NodeBlock",
      },
      payload: _.cloneDeep(initialStateResetNode),
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
