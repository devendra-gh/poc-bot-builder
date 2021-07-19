import React, { useState } from "react";
import DraggableComponent from "../DraggableComponent";
import { v4 as uuidv4 } from "uuid";

const _designMenu = [
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
];

const DesignMenu = ({ addNewNode }: any) => {
  const [designMenu, setDesignMenu] = useState(_designMenu);

  return (
    <div className="rz__design-menu">
      <div className="rz__design-menu--holder">
        <div className="rz__design-menu--scroll">
          {designMenu.length
            ? designMenu.map((menu: any) => {
                return (
                  <DraggableComponent
                    key={menu.id}
                    onClick={addNewNode}
                    menu={menu}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default DesignMenu;
