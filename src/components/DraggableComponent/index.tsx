import React from "react";
import { Box } from "rebass/styled-components";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../../constants/DragTypes";

type DragObject = {
  name: string;
  type: string;
};

const DraggableComponent = ({ ...props }: any) => {
  const [, drag] = useDrag({
    type: DRAG_TYPES.COMPONENT,
    item: {
      id: "ComponentName",
      type: DRAG_TYPES.COMPONENT,
      props: {},
    },
  });

  return (
    <Box
      ref={drag}
      width={100}
      height={100}
      bg="black"
      color="white"
      {...props}
    >
      Component Name
    </Box>
  );
};

export default DraggableComponent;
