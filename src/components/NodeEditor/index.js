import React from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px",
    background: "#2d4571aa",
  },

  content: {
    textAlign: "center",
  },
}));

const NodeEditor = ({ content }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>{content}</Box>
    </Box>
  );
};

export default NodeEditor;
