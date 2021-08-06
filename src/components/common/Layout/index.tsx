import { withRouter } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexFlow: "column",
    width: "100vw",
    height: "100vh",
  },
}));

const Layout = withRouter(({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
});

export default Layout;
