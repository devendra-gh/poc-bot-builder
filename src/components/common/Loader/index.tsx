import React from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
  },
}));

const Loader = () => {
  const classes = useStyles();
  return <Box className={classes.root}>Loading...</Box>;
};

export default Loader;
