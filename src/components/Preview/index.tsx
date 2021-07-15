import React, { useCallback, useState } from "react";
import { Box } from "rebass/styled-components";
import { useDrop } from "react-dnd";
import { DRAG_TYPES } from "../../constants/DragTypes";

import ComponentName from "../../components/ComponentName";
import PreviewContainer from "../../components/PreviewContainer";

const PreviewComponents: any = {
  ComponentName,
};

const Preview = ({ components, setComponents }: any) => {
  const [focused, setFocused] = useState(null);

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: DRAG_TYPES.COMPONENT,

    drop(item: any, monitor: any) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      console.log("item dropped!", item);
      const componentStructure = {
        name: item.id,
        props: {},
      };
      setComponents((prevValue: any) => [...prevValue, componentStructure]);
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  const clickHandler = useCallback(
    (index) => {
      if (focused === index) setFocused(null);
      setFocused(index);
    },
    [focused, setFocused]
  );

  const componentPreview =
    components.length > 0 &&
    components.map((component: any, index: any) => {
      if (typeof PreviewComponents[component.name] !== "undefined") {
        const NewComponent = React.createElement(
          PreviewComponents[component.name],
          {
            // @TODO: Use a hash here?
            key: index,
            ...component.props,
          }
        );
        return React.createElement(
          PreviewContainer,
          {
            key: index,
            index,
            onClick: clickHandler,
            focused: focused === index ? true : false,
          },
          [NewComponent]
        );
      }
    });

  return (
    <Box
      ref={drop}
      width="400px"
      height="100vh"
      sx={{ border: "1px solid black" }}
    >
      {componentPreview}
    </Box>
  );
};

export default Preview;
