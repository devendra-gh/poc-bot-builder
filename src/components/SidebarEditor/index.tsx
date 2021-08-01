import { types } from "../../constants";
import Drawer from "@material-ui/core/Drawer";

import {
  AgentHandover,
  API,
  Decision,
  End,
  Reset,
  Response,
  Utterance,
  Webhook,
  WorkflowSwitch,
  NotFound,
} from "./components";

const components: any = {
  AgentHandover: AgentHandover,
  API: API,
  Decision: Decision,
  End: End,
  Reset: Reset,
  Response: Response,
  Utterance: Utterance,
  Webhook: Webhook,
  WorkflowSwitch: WorkflowSwitch,
  NotFound: NotFound,
};

const SidebarEditor = ({ sidebar, updateStateCreator }: any) => {
  const renderEditor = sidebar?.data?.helper?.renderEditor || "NotFound";
  const SpecificEditor = components[renderEditor];
  const formData = {
    ...sidebar?.data?.payload,
    id: sidebar?.data?.id,
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
