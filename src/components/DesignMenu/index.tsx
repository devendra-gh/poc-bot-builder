import React, { useState } from "react";
import DraggableComponent from "../DraggableComponent";
import { v4 as uuidv4 } from "uuid";

const _designMenu = [
  {
    id: uuidv4(),
    content: "Utterance",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "Utterance",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
  },
  {
    id: uuidv4(),
    content: "Workflow Switch",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "WorkflowSwitch",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
  },
  {
    id: uuidv4(),
    content: "API",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "API",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
  },
  {
    id: uuidv4(),
    content: "Reset",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "Reset",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
  },
  {
    id: uuidv4(),
    content: "Webhook",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "Webhook",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
  },
  {
    id: uuidv4(),
    content: "End",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "End",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
  },
  {
    id: uuidv4(),
    content: "Decision",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "Decision",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
  },
  {
    id: uuidv4(),
    content: "Agent Handover",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "AgentHandover",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
  },
  {
    id: uuidv4(),
    content: "Response",
    icon: "FaBeer",
    renderNode: "NodeBlock",
    componentName: "Response",
    actions: {
      input: 1,
      output: 1,
      canEdit: true,
      canDelete: true,
    },
    data: {
      name: "Hello",
      value: "World",
    },
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
