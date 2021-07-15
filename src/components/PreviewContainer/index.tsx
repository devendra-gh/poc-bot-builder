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
    <Box
      onClick={clickHandler}
      sx={{ border: focused && "1px solid blue" }}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default PreviewContainer;
