import Drawer from "@material-ui/core/Drawer";
import { types } from "../../constants";
import {
  AgentHandoverNode,
  ApiNode,
  DecisionNode,
  EndNode,
  ResetNode,
  ResponseNode,
  UtteranceNode,
  WebhookNode,
  WorkflowSwitchNode,
  NotFoundNode,
} from "./components";

const components: any = {
  AgentHandover: AgentHandoverNode,
  API: ApiNode,
  Decision: DecisionNode,
  End: EndNode,
  Reset: ResetNode,
  Response: ResponseNode,
  Utterance: UtteranceNode,
  Webhook: WebhookNode,
  WorkflowSwitch: WorkflowSwitchNode,
  NotFound: NotFoundNode,
};

const SidebarEditor = ({ sidebar, updateStateCreator }: any) => {
  const renderEditor = sidebar?.data?.helper?.renderEditor || "NotFound";
  const SpecificEditor = components[renderEditor];
  const formData = {
    id: sidebar?.data?.id,
    payload: sidebar?.data?.payload,
  };

  const onSuccessClick = (payload: any) => {
    updateStateCreator(types.ON_CHANGE_NODE, payload);
    onCancelClick();
  };

  const onCancelClick = () => {
    updateStateCreator(types.ON_CHANGE_SIDEBAR, { isOpen: false, data: {} });
  };

  return (
    <>
      <Drawer anchor="right" open={sidebar?.isOpen} onClose={() => {}}>
        <SpecificEditor
          data={formData}
          onSuccess={onSuccessClick}
          onCancel={onCancelClick}
        />
      </Drawer>
    </>
  );
};

export default SidebarEditor;
