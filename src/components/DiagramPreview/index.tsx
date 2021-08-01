import Diagram from "beautiful-react-diagrams";
import { useDrop } from "react-dnd";
import { DRAG_TYPES } from "../../constants";

import WorkFlowTab from "../WorkFlowTab";
import ActionBar from "../ActionBar";

const selectStyles = (isActive: boolean, canDrop: boolean) => {
  if (isActive) {
    return {
      border: "2px solid #000",
    };
  } else if (canDrop) {
    return {
      border: "2px dashed #000",
    };
  }

  return {
    border: "2px solid #dae1e7",
  };
};

const DiagramPreview = ({
  schema,
  onChange,
  addNewNode,
  workFlowState,
  onChangeWorkFlow,
}: any) => {
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
    <div className="rz__canvas">
      <WorkFlowTab
        workFlowState={workFlowState}
        onChangeWorkFlow={onChangeWorkFlow}
      />

      <ActionBar
        workFlowState={workFlowState}
        onChangeWorkFlow={onChangeWorkFlow}
      />

      <div
        ref={drop}
        // role="node"
        // style={{ ...styles }}
        className="rz__canvas--preview"
      >
        <Diagram schema={schema} onChange={onChange} />
      </div>
    </div>
  );
};

export default DiagramPreview;
