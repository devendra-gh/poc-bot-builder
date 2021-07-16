import React, { CSSProperties } from "react";
import { Box } from "rebass/styled-components";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../../constants/DragTypes";

const DraggableComponent = ({ ...props }: any) => {
  const [, drag, preview] = useDrag(() => ({
    type: DRAG_TYPES.COMPONENT,
    item: {
      id: "ComponentName",
      type: DRAG_TYPES.COMPONENT,
      props: {},
    },
  }));

  return (
    <div ref={drag} className="wrapper__design-menu__step-menu__item">
      Component Name
    </div>
  );
};

export default DraggableComponent;
