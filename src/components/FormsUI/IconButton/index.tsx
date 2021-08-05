import { Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconControl: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));

const IconButtonWrapper = ({ children, ...otherProps }: any) => {
  const classes = useStyles();

  const configButton = {
    ...otherProps,
  };

  return (
    <Box className={classes.iconControl}>
      <IconButton {...configButton}>{children}</IconButton>
    </Box>
  );
};

export default IconButtonWrapper;
