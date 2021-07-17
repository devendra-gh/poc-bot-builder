import { FaEllipsisV } from "react-icons/fa";
import { useDrag } from "react-dnd";

import Icon from "../common/Icon";
import { DRAG_TYPES } from "../../constants/DragTypes";

const DraggableComponent = ({ ...props }: any) => {
  const [{ opacity }, drag, preview] = useDrag(() => ({
    type: DRAG_TYPES.COMPONENT,
    item: {
      id: "ComponentName",
      type: DRAG_TYPES.COMPONENT,
      props: {},
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  return (
    <div ref={drag} style={{ opacity }} className="rz__design-menu--item">
      <span>
        <Icon iconName="FaBeer" />
        Component Name
      </span>
      <span>
        <FaEllipsisV style={{ marginRight: "-4px" }} />
        <FaEllipsisV style={{ marginLeft: "-4px" }} />
      </span>
    </div>
  );
};

export default DraggableComponent;
