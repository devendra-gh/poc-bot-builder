import EditIcon from "@material-ui/icons/Edit";
import { types } from "../../constants";

const NodeEditor = ({ content, data }: any) => {
  const canEdit = data?.actions?.canEdit;

  const updateSidebarHandler = () => {
    data?.updateStateCreator(types.ON_CHANGE_SIDEBAR, {
      isOpen: true,
      data: data,
    });
  };

  return (
    <>
      <div className="rz__node--header">
        <div className="rz__node--content">{content}</div>
      </div>

      {canEdit ? (
        <div className="rz__node--edit">
          <button className="rz__node--edit-btn" onClick={updateSidebarHandler}>
            <EditIcon style={{ color: "#fff" }} fontSize="small" />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default NodeEditor;
