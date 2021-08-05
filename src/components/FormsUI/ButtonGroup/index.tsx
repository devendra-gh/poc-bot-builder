import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    // padding: theme.spacing(0),

    "& > *": {
      marginLeft: theme.spacing(2),
      minWidth: "110px",

      "&:first-child": {
        marginLeft: theme.spacing(0),
      },
    },
  },
}));

const ButtonGroup = ({ children, ...otherProps }: any) => {
  const classes = useStyles();

  const configButton = {
    className: classes.buttonContainer,
    ...otherProps,
  };

  return <Box {...configButton}>{children}</Box>;
};

export default ButtonGroup;
