import React from "react";
// import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { types } from "../../constants";
import { NodeEditor } from "../../components";

const NodeBlock = (props: any) => {
  const { id, data, inputs, outputs } = props;

  const updateSidebarHandler = () => {
    data?.updateStateCreator(types.ON_CHANGE_SIDEBAR, {
      isOpen: true,
      data: data,
    });
  };

  const onKeyDown = (event: any) => {
    event.preventDefault();

    if (event.keyCode === 8) {
      const canDelete = data?.helper?.canDelete;

      if (canDelete) {
        data.onClick(id);
      }
    }
  };

  const onDoubleClickHandler = (event: any) => {
    event.preventDefault();

    const canEdit = data?.helper?.canEdit;
    if (canEdit) {
      updateSidebarHandler();
    }
  };

  return (
    <button
      onKeyDown={onKeyDown}
      onDoubleClick={onDoubleClickHandler}
      type="button"
      className="rz__node--block"
    >
      {/* {canDelete ? (
        <button className="rz__node--close" onClick={() => data.onClick(id)}>
          <RemoveCircleOutlineIcon style={{ color: "#fff" }} fontSize="small" />
        </button>
      ) : null} */}

      <NodeEditor {...props} />

      <div className="rz__node--ports">
        <div className="rz__node--ports-input">
          {inputs.map((port: any) => React.cloneElement(port, {}))}
        </div>

        <div className="rz__node--ports-output">
          {outputs.map((port: any) => React.cloneElement(port, {}))}
        </div>
      </div>
    </button>
  );
};

export default NodeBlock;
