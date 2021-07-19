import { FaEllipsisV } from "react-icons/fa";
import { useDrag } from "react-dnd";

import Icon from "../common/Icon";
import { DRAG_TYPES } from "../../constants";

interface DropResult {
  name: string;
}

const DraggableComponent = (props: any) => {
  const {
    menu: { title, icon },
  } = props;

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
      <span className="rz__design-menu--title">
        <Icon iconName={icon} />
        {title}
      </span>

      <span className="rz__design-menu--icon">
        <FaEllipsisV />
        <FaEllipsisV />
      </span>
    </div>
  );
};

export default DraggableComponent;
