import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

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
      payload: {
        nodeName: "", // [Text]
        inputType: "", // [Text | Date | Image | PDF ]
        entityName: "", // [ID]
        mandatory: false, // [Boolean]
        failureMessage: "", // [Text]
        validate: false, // [Boolean]
        validateType: "", // [File Type | API Call]
        validator: "", // [Text]
      },
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
      payload: {
        name: "", // [Text]
        workflow: "", // [Workflow 1, Workflow 1, Workflow 3]
      },
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
      payload: {
        apiCall: "", // [Text]
        apiEndPoint: "", // [Text]
        requestType: "", // [Get, Post, Put, Delete]
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
      },
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
      payload: {
        name: "", // [Text]
        all: false, // [Boolean]
        entities: "", // [A, B, C]
      },
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
      payload: {
        name: "Hello",
        value: "World",
      },
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
      payload: {
        node: [
          {
            name: "", // [Text]
            value: "", // [Text]
          },
        ],
      },
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
      payload: {
        decision: [
          {
            name: "",
            successApi: "",
            successApiRule: "", // [StartsWith, EndsWith, Equals, Contains, Regex]
            rule: "", // [OR, AND]
            status: false,
          },
        ],
      },
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
      payload: {
        nodeName: "Hello",
        responseValue: "World",
      },
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
      payload: {
        nodes: [
          {
            name: "", // [Text]
            value: "", // [Text]
            skipFlow: false,
            workFlowNode: "", // [A, B, C],
            entityExists: "", // [Name, Email]
          },
          {
            name: "", // [Text]
            value: "", // [Text]
            skipFlow: false,
            workFlowNode: "", // [A, B, C],
            entityExists: "", // [Name, Email]
          },
        ],
      },
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

export const initialStateResponseNode = {
  name: "",
  value: "",
  skipFlow: false,
  workFlowNode: "",
  entityExists: "",
};
