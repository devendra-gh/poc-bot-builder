import React, { useState } from "react";
import DraggableComponent from "../DraggableComponent";
import { v4 as uuidv4 } from "uuid";

const _designMenu = [
  {
    id: uuidv4(),
    content: "Utterance",
    icon: "FaBeer",
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
