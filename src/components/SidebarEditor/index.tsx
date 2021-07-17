import React, { useState } from "react";
import Sidebar, { SidebarStyles } from "react-sidebar";
import SidebarEditorBlock from "../SidebarEditorBlock";

const sidebarStyle: SidebarStyles = {
  sidebar: { background: "white", width: "300px" },
};

const SidebarEditor = () => {
  const [state, setState] = useState<any>({
    sidebarOpen: true,
  });

  const onSetSidebarOpen = (open: any) => {
    setState({ sidebarOpen: open });
  };

  return (
    <>
      <Sidebar
        open={state.sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        sidebar={<SidebarEditorBlock />}
        pullRight={true}
        styles={sidebarStyle}
        rootClassName="rz__editor"
        sidebarClassName="rz__editor--sidebar"
        overlayClassName="rz__editor--overlay"
      >
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "250px",
            zIndex: 9999,
          }}
        >
          <button onClick={() => onSetSidebarOpen(true)}>Open sidebar</button>
        </div>
      </Sidebar>
    </>
  );
};

export default SidebarEditor;
