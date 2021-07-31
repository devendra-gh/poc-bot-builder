import { useState } from "react";
import { types } from "../../constants";

const Tab = (props: any) => {
  return (
    <div
      className={`rz__workflow--tab ${props.isActive ? "active" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

const WorkFlowTab = ({ workFlowState, onChangeWorkFlow }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = workFlowState?.flows?.map((flow: any) => ({
    id: flow.id,
    name: flow.name,
  }));
  tabs.push({ id: types.ON_ADD_WORKFLOW, name: "Add" });

  const onTabChange = (index: any, id: any) => {
    // Call to update last workflow
    onChangeWorkFlow({
      type: types.ON_UPDATE_WORKFLOW,
      workFlowIndex: activeTab,
    });

    if (id === types.ON_ADD_WORKFLOW) {
      // Call to add new workflow
      onChangeWorkFlow({ type: types.ON_ADD_WORKFLOW, workFlowIndex: index });
    } else {
      // Call to change new workflow
      onChangeWorkFlow({
        type: types.ON_CHANGE_WORKFLOW,
        workFlowIndex: index,
      });
    }

    setActiveTab(index);
  };

  return (
    <div className="rz__workflow">
      {tabs.map((tab: any, index: any) => (
        <Tab
          isActive={index === activeTab}
          key={`${tab.id}`}
          onClick={() => {
            onTabChange(index, tab.id);
          }}
        >
          {tab.name}
        </Tab>
      ))}
    </div>
  );
};

export default WorkFlowTab;
