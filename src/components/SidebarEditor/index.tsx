import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import { types } from "../../constants";
import {
  AgentHandoverNode,
  CustomCodeNode,
  QuestionNode,
  ApiNode,
  DecisionNode,
  EndNode,
  ResponseNode,
  EntityNode,
  WebhookNode,
  WorkflowSwitchNode,
  NotFoundNode,
} from "./components";

const components: any = {
  AgentHandover: AgentHandoverNode,
  CustomCode: CustomCodeNode,
  Question: QuestionNode,
  API: ApiNode,
  Decision: DecisionNode,
  End: EndNode,
  Response: ResponseNode,
  Entity: EntityNode,
  Webhook: WebhookNode,
  WorkflowSwitch: WorkflowSwitchNode,
  NotFound: NotFoundNode,
};

const SidebarEditor = ({ sidebar, updateStateSidebarEditor }: any) => {
  const renderEditor = sidebar?.data?.helper?.renderEditor || "NotFound";
  const SpecificEditor = components[renderEditor];
  const formData = {
    id: sidebar?.data?.id,
    payload: sidebar?.data?.payload,
  };

  const onSuccessClick = (data: any) => {
    updateStateSidebarEditor({
      type: types.ON_CHANGE_NODE,
      formData: data?.payload,
      allowOutputPort: data?.allowOutputPort,
    });
    onCancelClick();
  };

  const onCancelClick = () => {
    updateStateSidebarEditor({
      type: types.ON_CHANGE_SIDEBAR,
      formData: { isOpen: false, data: {} },
      allowOutputPort: false,
    });
  };

  return (
    <Drawer anchor="right" open={sidebar?.isOpen} onClose={() => {}}>
      <SpecificEditor
        data={formData}
        onSuccess={onSuccessClick}
        onCancel={onCancelClick}
      />
    </Drawer>
  );
};

export default SidebarEditor;
