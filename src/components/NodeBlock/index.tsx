import React from "react";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

import { NodeEditor } from "../../components";

const NodeBlock = (props: any) => {
  const { id, data, inputs, outputs } = props;
  const canDelete = data?.helper?.canDelete;

  return (
    <div className="rz__node--block">
      {canDelete ? (
        <button className="rz__node--close" onClick={() => data.onClick(id)}>
          <RemoveCircleOutlineIcon style={{ color: "#fff" }} fontSize="small" />
        </button>
      ) : null}

      <NodeEditor {...props} />

      <div className="rz__node--ports">
        <div className="rz__node--ports-input">
          {inputs.map((port: any) => React.cloneElement(port, {}))}
        </div>

        <div className="rz__node--ports-output">
          {outputs.map((port: any) => React.cloneElement(port, {}))}
        </div>
      </div>
    </div>
  );
};

export default NodeBlock;
