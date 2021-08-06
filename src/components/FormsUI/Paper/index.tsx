import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: theme.spacing(3),
  },
}));

const PaperWrapper = ({ children }: any) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paperContainer}>
      {children}
    </Paper>
  );
};

export default PaperWrapper;
