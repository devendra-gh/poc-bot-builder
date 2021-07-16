import React, { useCallback } from "react";
import { Box } from "rebass/styled-components";

const PreviewContainer = ({
  index,
  focused = false,
  onClick,
  children,
  ...restProps
}: any) => {
  const clickHandler = useCallback(() => {
    onClick(index);
  }, [onClick]);

  return (
    <div
      onClick={clickHandler}
      {...restProps}
      style={{
        margin: "10px",
        width: "200px",
        height: "100px",
        border: "1px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default PreviewContainer;
