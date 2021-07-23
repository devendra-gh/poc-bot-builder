import Sidebar, { SidebarStyles } from "react-sidebar";
import { types } from "../../constants";

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

const sidebarStyle: SidebarStyles = {
  overlay: { zIndex: "51" },
  sidebar: { background: "white", width: "300px", zIndex: "52" },
};

const SidebarEditor = ({ sidebar, updateStateCreator }: any) => {
  const renderEditor = sidebar?.data?.ui?.renderEditor || "NotFound";
  const SpecificEditor = components[renderEditor];
  const formData = {
    ...sidebar?.data?.editor,
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
      <Sidebar
        open={sidebar?.isOpen}
        onSetOpen={() => {}}
        sidebar={
          <>
            <SpecificEditor
              data={formData}
              onSuccess={onSuccessClick}
              onCancel={onCancelClick}
            />
            ;
          </>
        }
        pullRight={true}
        styles={sidebarStyle}
        rootClassName="rz__editor--root"
        sidebarClassName="rz__editor--sidebar"
        overlayClassName="rz__editor--overlay"
      >
        <></>
      </Sidebar>
    </>
  );
};

export default SidebarEditor;
