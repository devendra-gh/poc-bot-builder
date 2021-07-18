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
        {outputs.map((port: any) =>
          React.cloneElement(port, {
            style: {
              position: "absolute",
              top: "21px",
              left: "10px",
              cursor: "no-drop",
              boxSizing: "content-box",
              boxShadow: "rgb(110 132 154) 0px 0px 0px 1px",
              borderRadius: "50%",
              height: "8px",
              width: "8px",
              background:
                "linear-gradient(rgba(98, 119, 140, 0.12), rgba(98, 119, 140, 0.24) 100%)",
            },
          })
        )}

        {inputs.map((port: any) =>
          React.cloneElement(port, {
            style: {
              position: "absolute",
              top: "18px",
              right: "10px",
              cursor: "copy",
              boxSizing: "content-box",
              boxShadow: "rgb(110 132 154) 0px 0px 0px 1px",
              borderRadius: "50%",
              height: "5px",
              width: "5px",
              backgroundColor: "rgb(110, 132, 154)",
              border: "4px solid white",
            },
          })
        )}
      </div>

      <NodeEditor {...props} />
    </div>
  );
};

export default NodeBlock;
