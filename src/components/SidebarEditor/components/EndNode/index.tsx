import { useState } from "react";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import { initialStateEndNode } from "../../../Creator/data";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
  },
  paperContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),

    "&:first-child": {
      marginTop: theme.spacing(0),
    },
  },
  gridContainer: {
    paddingTop: theme.spacing(3),

    "&:first-child": {
      paddingTop: theme.spacing(0),
    },
  },
  addContainer: {
    paddingTop: theme.spacing(3),
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

const EndNode = ({ data, onSuccess, onCancel }: any) => {
  const classes = useStyles();
  const [state, setState] = useState<any>(data?.payload?.nodes);

  const onChangeField: any = (event: any, index: any) => {
    const { name, value } = event.target;
    const _state = _.cloneDeep(state);

    _state[index][name] = value;

    setState(_state);
  };

  const onAddClickHandler = () => {
    const _state = _.cloneDeep(state);
    const initialState = _.cloneDeep(initialStateEndNode.nodes[0]);

    _state.push(initialState);

    setState(_state);
  };

  const onRemoveClickHandler = (index: any) => {
    const _state = _.cloneDeep(state);
    _state.splice(index, 1);

    setState(_state);
  };

  const onSuccessHandler = () => {
    onSuccess({
      id: data?.id,
      payload: { nodes: state },
    });
  };

  return (
    <Box className="rz__editor--block">
      <Typography className={classes.title} variant="h5" gutterBottom>
        End Node
      </Typography>

      <form noValidate autoComplete="off">
        {state?.length
          ? state?.map((node: any, index: any) => {
              return (
                <Paper
                  key={`${index}`}
                  className={classes.paperContainer}
                  elevation={4}
                >
                  <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item xs={5}>
                      <TextField
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                        label={`Node Name ${index + 1}`}
                        name="name"
                        value={node.name}
                        onChange={(e: any) => onChangeField(e, index)}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                        label={`Response Value ${index + 1}`}
                        name="value"
                        value={node.value}
                        onChange={(e: any) => onChangeField(e, index)}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton
                        onClick={() => {
                          onRemoveClickHandler(index);
                        }}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })
          : null}

        <Box className={classes.addContainer}>
          <Button
            onClick={onAddClickHandler}
            variant="outlined"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>

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

export default EndNode;
