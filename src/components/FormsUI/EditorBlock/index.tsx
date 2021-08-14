import * as React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    padding: "20px",
    width: "600px",
  },
}));

const EditorBlock = ({ children, ...otherProps }: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} {...otherProps}>
      {children}
    </Box>
  );
};

export default EditorBlock;
