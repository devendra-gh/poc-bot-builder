import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DraggableComponent } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    height: "100%",
    padding: "16px",
    zIndex: 9,
    transition: "transform 350ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s",
    willChange: "transform",
    transform: "translateX(0px) !important",
    borderTop: "2px solid rgb(223, 227, 237)",
  },

  holder: {
    position: "relative",
    overflow: "hidden",
    height: "100%",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "rgb(249, 249, 249)",
    transition: "background-color 0.15s ease 0s, box-shadow 0.15s ease 0s",
  },

  scroll: {
    position: "absolute",
    inset: "0px",
    overflow: "scroll",
    marginRight: "0px",
    marginBottom: "0px",
  },
}));

const DesignMenu = ({ availableNodes, addNewNode }) => {
  const classes = useStyles();
  const [menus] = useState(availableNodes);

  return (
    <Box className={classes.root}>
      <Box className={classes.holder}>
        <Box className={classes.scroll}>
          {menus.length
            ? menus.map((menu) => {
                return (
                  <DraggableComponent
                    key={menu.id}
                    onClick={addNewNode}
                    menu={menu}
                  />
                );
              })
            : null}
        </Box>
      </Box>
    </Box>
  );
};

export default DesignMenu;
