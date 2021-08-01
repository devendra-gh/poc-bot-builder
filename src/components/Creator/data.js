import { v4 as uuidv4 } from "uuid";

export const availableNodesData = [
  {
    id: uuidv4(),
    content: "Utterance",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "Utterance",
      },
      payload: {
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 2,
    outputs: 2,
    render: "NodeBlock",
  },
  {
    id: uuidv4(),
    content: "Workflow Switch",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "WorkflowSwitch",
      },
      payload: {
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
    render: "NodeBlock",
  },
  {
    id: uuidv4(),
    content: "API",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "API",
      },
      payload: {
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
    render: "NodeBlock",
  },
  {
    id: uuidv4(),
    content: "Reset",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "Reset",
      },
      payload: {
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
    render: "NodeBlock",
  },
  {
    id: uuidv4(),
    content: "Webhook",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "Webhook",
      },
      payload: {
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
    render: "NodeBlock",
  },
  {
    id: uuidv4(),
    content: "End",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "End",
      },
      payload: {
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
    render: "NodeBlock",
  },
  {
    id: uuidv4(),
    content: "Decision",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "Decision",
      },
      payload: {
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
    render: "NodeBlock",
  },
  {
    id: uuidv4(),
    content: "Agent Handover",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "AgentHandover",
      },
      payload: {
        nodeName: "Hello",
        responseValue: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
    render: "NodeBlock",
  },
  {
    id: uuidv4(),
    content: "Response",
    coordinates: [50, 50],
    data: {
      helper: {
        canEdit: true,
        canDelete: true,
        renderEditor: "Response",
      },
      payload: {
        name: "Hello",
        value: "World",
      },
    },
    disableDrag: false,
    inputs: 1,
    outputs: 1,
    render: "NodeBlock",
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
          renderEditor: "Start",
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
      render: "NodeBlock",
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
