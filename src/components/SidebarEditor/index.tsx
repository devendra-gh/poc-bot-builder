import { connect } from "react-redux";
import Sidebar, { SidebarStyles } from "react-sidebar";

import { updateSidebar } from "../../redux/actions";
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

const SidebarEditor = ({ editor, updateSidebar }: any) => {
  const renderEditor = editor?.data?.ui?.renderEditor || "NotFound";
  const SpecificEditor = components[renderEditor];

  // debugger;

  const updateSidebarHandler = (isOpen: any, data: any) => {
    updateSidebar({ isOpen: isOpen, data: data });
  };

  return (
    <>
      <Sidebar
        open={editor.isOpen}
        onSetOpen={() => updateSidebarHandler(true, {})}
        sidebar={
          <>
            <SpecificEditor updateSidebar={updateSidebarHandler} />;
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

const mapStateToProps = (state: any) => {
  return {
    editor: state.creator.editor,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateSidebar: (payload: any) => dispatch(updateSidebar(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarEditor);
