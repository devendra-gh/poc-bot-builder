import { connect } from "react-redux";
import Sidebar, { SidebarStyles } from "react-sidebar";

import { updateSidebar } from "../../redux/actions";
import { SidebarEditorBlock } from "../../components";

const sidebarStyle: SidebarStyles = {
  overlay: { zIndex: "51" },
  sidebar: { background: "white", width: "300px", zIndex: "52" },
};

// const editorComponents = {
//   photo: PhotoStory,
//   video: VideoStory
// };

const SidebarEditor = ({ editor, updateSidebar }: any) => {
  const updateSidebarHandler = (isOpen: any, data: any) => {
    updateSidebar({ isOpen: isOpen, data: data });
  };

  // const renderEditorBlock = () => {
  //   switch
  // }

  return (
    <>
      <Sidebar
        open={editor.isOpen}
        onSetOpen={() => updateSidebarHandler(true, {})}
        sidebar={
          <>
            <SidebarEditorBlock updateSidebar={updateSidebarHandler} />
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
