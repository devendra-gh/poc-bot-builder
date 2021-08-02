import { useState } from "react";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
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
  button: {
    marginLeft: theme.spacing(2),

    "&:first-child": {
      marginLeft: theme.spacing(0),
    },
  },
}));

const WebhookNode = ({ data, onSuccess, onCancel }: any) => {
  const classes = useStyles();
  const [state, setState] = useState<any>(data?.payload);

  const onChangeField: any = (event: any) => {
    const { name, value } = event.target;
    const _state = _.cloneDeep(state);

    _state[name] = value;

    setState(_state);
  };

  const onSuccessHandler = () => {
    onSuccess({
      id: data?.id,
      payload: state,
    });
  };

  return (
    <Box className="rz__editor--block">
      <Typography className={classes.title} variant="h5" gutterBottom>
        Webhook Node
      </Typography>

      <form noValidate autoComplete="off">
        <TextField
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          label="Node Name"
          name="name"
          value={state.name}
          onChange={(e: any) => onChangeField(e)}
        />

        <Box className={classes.buttonContainer}>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            color="primary"
            onClick={onSuccessHandler}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default WebhookNode;
