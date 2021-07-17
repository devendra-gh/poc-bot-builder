import Diagram from "beautiful-react-diagrams";
import { useDrop } from "react-dnd";

import { DRAG_TYPES } from "../../constants/DragTypes";

const Preview = ({ schema, onChange, addNewNode }: any) => {
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

      addNewNode();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  return (
    <div className="rz__canvas">
      <div className="rz__canvas--preview" ref={drop}>
        <Diagram schema={schema} onChange={onChange} />
      </div>
    </div>
  );
};

export default Preview;
