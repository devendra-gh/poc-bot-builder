import _ from "lodash";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
  },
  buttonContainer: {
    padding: theme.spacing(3, 0),
  },
}));

const NotFoundNode = ({ onCancel }: any) => {
  const classes = useStyles();

  return (
    <Box className="rz__editor--block">
      <Typography className={classes.title} variant="h5" gutterBottom>
        Node not available
      </Typography>

      <form noValidate autoComplete="off">
        <Box className={classes.buttonContainer}>
          <Button size="large" variant="contained" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NotFoundNode;
