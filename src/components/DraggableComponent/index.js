import React from 'react';
import { useDrag } from "react-dnd";
import { Box } from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import { DRAG_TYPES } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "10px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#455aa2",
    color: "white",
    cursor: "move",

    "&:last-child": {
      marginBottom: 0,
    },
  },

  content: {
    display: "flex",
    alignItems: "center",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    color: "#ccc",
  },
}));

const DraggableComponent = (props) => {
  const classes = useStyles();
  const content = props?.menu?.content;

  const [{ opacity }, drag] = useDrag(() => ({
    type: DRAG_TYPES.NODE_COMPONENT,
    item: { ...props.menu },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        // console.log(`You dropped ${item.id}`);
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  return (
    <Box
      {...({ ref: drag })}
      style={{ opacity }}
      className={classes.root}
    >
      <Box className={classes.content}>{content}</Box>
      <Box className={classes.icon}>
        <DragIndicatorIcon />
      </Box>
    </Box>
  );
};

export default DraggableComponent;
