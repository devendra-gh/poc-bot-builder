import React from "react";
import { FaEdit } from "react-icons/fa";

import { connect } from "react-redux";
import { updateSidebar } from "../../redux/actions";

const NodeEditor = ({
  id,
  content,
  data,
  inputs,
  outputs,
  updateSidebar,
}: any) => {
  const updateSidebarHandler = () => {
    updateSidebar({ isOpen: true, data: data });
  };

  return (
    <>
      <div className="rz__node--header">
        <div className="rz__node--title">{content}</div>
      </div>

      <div className="rz__node--content">
        <div className="rz__node--section">{content}</div>
      </div>

      {data?.canEdit ? (
        <div className="rz__node--edit">
          <button className="rz__node--edit-btn" onClick={updateSidebarHandler}>
            <FaEdit />
          </button>
        </div>
      ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(NodeEditor);
