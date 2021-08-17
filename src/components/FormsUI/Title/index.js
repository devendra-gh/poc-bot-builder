import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
  },
}));

const Title = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.title} variant="h5">
      {children}
    </Typography>
  );
};

export default Title;
