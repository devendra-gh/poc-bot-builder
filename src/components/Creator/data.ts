import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

export const availableNodesData = [
  {
    id: uuidv4(),
    content: "Utterance",
    coordinates: [50, 50],
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
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 2,
    outputs: 2,
  },
  {
    id: uuidv4(),
    content: "Workflow Switch",
    coordinates: [50, 50],
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
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
  },
  {
    id: uuidv4(),
    content: "API",
    coordinates: [50, 50],
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
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
  },
  {
    id: uuidv4(),
    content: "Reset",
    coordinates: [50, 50],
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
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
  },
  {
    id: uuidv4(),
    content: "Webhook",
    coordinates: [50, 50],
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
    disableDrag: false,
    inputs: 1,
    outputs: 1,
  },
  {
    id: uuidv4(),
    content: "End",
    coordinates: [50, 50],
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
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
  },
  {
    id: uuidv4(),
    content: "Decision",
    coordinates: [50, 50],
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
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
  },
  {
    id: uuidv4(),
    content: "Agent Handover",
    coordinates: [50, 50],
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
    disableDrag: false,
    inputs: 1,
    outputs: 1,
  },
  {
    id: uuidv4(),
    content: "Response",
    coordinates: [50, 50],
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
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
  },
];

export const diagramData = {
  nodes: [
    {
      id: `node--${uuidv4()}`,
      content: "Start",
      coordinates: [55, 95],
      data: {
        helper: {
          canEdit: false,
          canDelete: false,
          canLinkInput: false,
          canLinkOutput: "canAllowToLink",
          renderEditor: "Start",
          renderNode: "NodeBlock",
        },
        payload: {
          name: "Hello",
          value: "World",
        },
      },
      disableDrag: true,
      inputs: [],
      outputs: [
        {
          id: `output-port-${uuidv4()}`,
          alignment: "right",
          canLink: "canAllowToLink",
        },
      ],
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
