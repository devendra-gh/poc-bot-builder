import Diagram from "beautiful-react-diagrams";
import { useDrop } from "react-dnd";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DRAG_TYPES } from "../../constants";
import WorkFlowTab from "../WorkFlowTab";
import ActionBar from "../ActionBar";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "calc(100% - 250px)",
    height: "100%",
    overflow: "hidden",
  },
  preview: {
    position: "relative",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    userSelect: "none",

    "& .bi.bi-diagram": {
      border: "none",
      borderRadius: 0,
      backgroundColor: "transparent",
      backgroundSize: "50px 50px",
      backgroundImage:
        "linear-gradient(0deg,transparent 9%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.1) 12%, transparent 13%, transparent 29%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.05) 31%, transparent 32%, transparent 49%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 51%, transparent 52%, transparent 69%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0.05) 71%, transparent 72%, transparent 89%, rgba(255, 255, 255, 0.05) 90%, rgba(255, 255, 255, 0.05) 91%, transparent 92%, transparent ), linear-gradient( 90deg, transparent 9%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.1) 12%, transparent 13%, transparent 29%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.05) 31%, transparent 32%, transparent 49%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 51%, transparent 52%, transparent 69%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0.05) 71%, transparent 72%, transparent 89%, rgba(255, 255, 255, 0.05) 90%, rgba(255, 255, 255, 0.05) 91%, transparent 92%, transparent )",
    },
  },
}));

const selectStyles = (isActive: boolean, canDrop: boolean) => {
  if (isActive) {
    return {
      backgroundColor: "#2b3f89",
    };
  } else if (canDrop) {
    return {
      backgroundColor: "#6375b3",
    };
  }

  return {
    backgroundColor: "#455aa2",
  };
};

const DiagramPreview = ({
  schema,
  onChange,
  addNewNode,
  workFlowState,
  onChangeWorkFlow,
}: any) => {
  const classes = useStyles();
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: DRAG_TYPES.NODE_COMPONENT,
    drop(item: any, monitor: any) {
      const didDrop = monitor.didDrop();

      if (didDrop) {
        return;
      }

      addNewNode(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  const isActive = canDrop && isOver;
  const styles = selectStyles(isActive, canDrop);

  return (
    <Box className={classes.root}>
      <WorkFlowTab
        workFlowState={workFlowState}
        onChangeWorkFlow={onChangeWorkFlow}
      />

      <ActionBar
        workFlowState={workFlowState}
        onChangeWorkFlow={onChangeWorkFlow}
      />

      <Box
        {...({ ref: drop } as any)}
        style={{ ...styles }}
        className={classes.preview}
      >
        <Diagram schema={schema} onChange={onChange} />
      </Box>
    </Box>
  );
};

export default DiagramPreview;
