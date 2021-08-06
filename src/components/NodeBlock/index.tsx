import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { types } from "../../constants";
import { NodeEditor } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    width: "200px",
    position: "relative",
    display: "inline-block",
    color: "#fff",
    cursor: "move",
    borderRadius: "3px",
    border: "solid 3px #283c69",
    backgroundColor: "rgba(9, 19, 54, 0.666667)",

    "&:focus": {
      boxShadow: "0 0 3pt 2pt cornflowerblue",
    },
  },

  portsInput: {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    "& .bi-diagram-port": {
      marginTop: "5px",
      width: "15px",
      height: "15px",
      cursor: "pointer",
      borderBottomRightRadius: "8px",
      borderTopRightRadius: "8px",
      backgroundColor: "rgb(100, 214, 193)",

      "&:first-child": {
        marginRop: "15px",
      },
    },
  },

  portsOutput: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

    "& .bi-diagram-port": {
      marginTop: "5px",
      width: "15px",
      height: "15px",
      cursor: "pointer",
      borderBottomLeftRadius: "8px",
      borderTopLeftRadius: "8px",
      backgroundColor: "rgb(100, 214, 193)",
    },
  },
}));

const NodeBlock = (props: any) => {
  const classes = useStyles();
  const { id, data, inputs, outputs } = props;

  const updateSidebarHandler = () => {
    data?.updateStateCreator({
      type: types.ON_CHANGE_SIDEBAR,
      formData: {
        isOpen: true,
        data: data,
      },
      allowOutputPort: false,
    });
  };

  const onKeyDown = (event: any) => {
    event.preventDefault();

    if (event.keyCode === 8) {
      const canDelete = data?.helper?.canDelete;

      if (canDelete) {
        data.onClick(id);
      }
    }
  };

  const onDoubleClickHandler = (event: any) => {
    event.preventDefault();

    const canEdit = data?.helper?.canEdit;
    if (canEdit) {
      updateSidebarHandler();
    }
  };

  return (
    <button
      onKeyDown={onKeyDown}
      onDoubleClick={onDoubleClickHandler}
      type="button"
      className={classes.root}
    >
      <NodeEditor {...props} />

      <Box>
        <Box className={classes.portsInput}>
          {inputs.map((port: any) => React.cloneElement(port, {}))}
        </Box>

        <Box className={classes.portsOutput}>
          {outputs.map((port: any) => React.cloneElement(port, {}))}
        </Box>
      </Box>
    </button>
  );
};

export default NodeBlock;
