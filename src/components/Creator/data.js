import { v4 as uuidv4 } from "uuid";

const initialState = {
  designMenu: [
    {
      id: uuidv4(),
      content: "Utterance",
      coordinates: [50, 50],
      data: {
        ui: {
          icon: "FaBeer",
          renderEditor: "Utterance",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
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
      content: "Workflow Switch",
      coordinates: [50, 50],
      data: {
        ui: {
          icon: "FaBeer",
          renderEditor: "WorkflowSwitch",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
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
        ui: {
          icon: "FaBeer",
          renderEditor: "API",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
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
        ui: {
          icon: "FaBeer",
          renderEditor: "Reset",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
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
        ui: {
          icon: "FaBeer",
          renderEditor: "Webhook",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
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
        ui: {
          icon: "FaBeer",
          renderEditor: "End",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
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
        ui: {
          icon: "FaBeer",
          renderEditor: "Decision",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
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
        ui: {
          icon: "FaBeer",
          renderEditor: "AgentHandover",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
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
        ui: {
          icon: "FaBeer",
          renderEditor: "Response",
        },
        actions: {
          canEdit: true,
          canDelete: true,
        },
        editor: {
          name: "Hello",
          value: "World",
        },
      },
      disableDrag: false,
      inputs: 1,
      outputs: 1,
      render: "NodeBlock",
    },
  ],
  diagram: {
    nodes: [
      {
        id: `node--${uuidv4()}`,
        content: "Start",
        coordinates: [50, 50],
        data: {
          ui: {
            icon: "FaBeer",
            renderEditor: "Start",
          },
          actions: {
            canEdit: false,
            canDelete: false,
          },
          editor: {
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
  },
};

export default initialState;
