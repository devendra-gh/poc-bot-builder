import React, { useState } from "react";
import DraggableComponent from "../DraggableComponent";
import { v4 as uuidv4 } from "uuid";

const _designMenu = [
  {
    key: uuidv4(),
    title: "Utterance",
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
    key: uuidv4(),
    title: "Workflow Switch",
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
    key: uuidv4(),
    title: "API",
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
    key: uuidv4(),
    title: "Reset",
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
    key: uuidv4(),
    title: "Webhook",
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
    key: uuidv4(),
    title: "End",
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
    key: uuidv4(),
    title: "Decision",
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
    key: uuidv4(),
    title: "Agent Handover",
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
    key: uuidv4(),
    title: "Response",
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
                    key={menu.key}
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
