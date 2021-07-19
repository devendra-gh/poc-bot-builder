import React from "react";
import { FaRegWindowClose, FaEdit } from "react-icons/fa";

import NodeEditor from "../NodeEditor";

const NodeBlock = (props: any) => {
  const { id, content, data, inputs, outputs } = props;

  return (
    <div className="rz__node--block">
      {data?.canClose ? (
        <button className="rz__node--close" onClick={() => data.onClick(id)}>
          <FaRegWindowClose />
        </button>
      ) : null}

      <div className="rz__node--ports">
        <div className="rz__node--ports-output">
          {outputs.map((port: any) => React.cloneElement(port, {}))}
        </div>

        <div className="rz__node--ports-input">
          {inputs.map((port: any) => React.cloneElement(port, {}))}
        </div>
      </div>

      <NodeEditor {...props} />
    </div>
  );
};

export default NodeBlock;
