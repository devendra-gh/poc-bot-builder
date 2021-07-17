import DraggableComponent from "../DraggableComponent";

const DesignMenu = ({ addNewNode }: any) => {
  return (
    <div className="rz__design-menu">
      <div className="rz__design-menu--holder">
        <div className="rz__design-menu--scroll">
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
          <DraggableComponent onClick={addNewNode} />
        </div>
      </div>
    </div>
  );
};

export default DesignMenu;
