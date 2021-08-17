import React from 'react';
import { Typography, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dividerText: {
    padding: theme.spacing(4, 0),
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& > p": {
      position: "absolute",
      padding: "10px",
      background: "white",
    },

    "& > hr": {
      height: "2px",
      width: "100%",
    },
  },
}));

const DividerText = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.dividerText}>
      <Typography>{children}</Typography>
      <Divider></Divider>
    </Box>
  );
};

export default DividerText;
