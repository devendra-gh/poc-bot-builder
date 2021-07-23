import { useState } from "react";
import { DraggableComponent } from "../../components";

const DesignMenu = ({ designMenu, addNewNode }: any) => {
  const [menus] = useState(designMenu);

  return (
    <div className="rz__design-menu">
      <div className="rz__design-menu--holder">
        <div className="rz__design-menu--scroll">
          {menus.length
            ? menus.map((menu: any) => {
                return (
                  <DraggableComponent
                    key={menu.id}
                    onClick={addNewNode}
                    menu={menu}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default DesignMenu;
