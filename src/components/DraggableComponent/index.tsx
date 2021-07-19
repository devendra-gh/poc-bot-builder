import { FaEllipsisV } from "react-icons/fa";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../../constants";

import { Icon } from "../../components";

interface DropResult {
  name: string;
}

const DraggableComponent = (props: any) => {
  const content = props?.menu?.content;
  const icon = props?.menu?.data?.ui?.icon;

  const [{ opacity }, drag] = useDrag(() => ({
    type: DRAG_TYPES.NODE_COMPONENT,
    item: { ...props.menu },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        console.log(`You dropped ${item.id}`);
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  return (
    <div
      ref={drag}
      role="menu-item"
      style={{ opacity }}
      className="rz__design-menu--item"
    >
      <span className="rz__design-menu--content">
        <Icon iconName={icon} />
        {content}
      </span>

      <span className="rz__design-menu--icon">
        <FaEllipsisV />
        <FaEllipsisV />
      </span>
    </div>
  );
};

export default DraggableComponent;
