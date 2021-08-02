import { useState } from "react";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import { initialStateResponseNode } from "../../../Creator/data";

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
  checkboxContainer: {
    display: "flex",
  },
  checkbox: {
    margin: 0,
  },
  deleteContainer: {
    display: "flex",
    alignItems: "center",
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

const ResponseNode = ({ data, onSuccess, onCancel }: any) => {
  const classes = useStyles();
  const [state, setState] = useState<any>(data?.payload?.nodes);

  const onChangeField: any = (
    event: any,
    index: any,
    isCheckBox: any = false
  ) => {
    const { name, value, checked } = event.target;
    const _state = _.cloneDeep(state);

    _state[index][name] = isCheckBox ? checked : value;

    setState(_state);
  };

  const onAddClickHandler = () => {
    const _state = _.cloneDeep(state);
    const initialState = _.cloneDeep(initialStateResponseNode.nodes[0]);

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
        Response Node
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
                    <Grid container item xs={11} spacing={2}>
                      <Grid item xs={12}>
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

                      <Grid item xs={6} className={classes.checkboxContainer}>
                        <FormControlLabel
                          className={classes.checkbox}
                          control={
                            <Checkbox
                              color="primary"
                              name="skipFlow"
                              checked={node.skipFlow}
                              onChange={(e: any) =>
                                onChangeField(e, index, true)
                              }
                            />
                          }
                          label="Skip flow to"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Select Workfow</InputLabel>
                          <Select
                            fullWidth
                            label=""
                            name="workFlowNode"
                            value={node.workFlowNode}
                            onChange={(e: any) => onChangeField(e, index)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Workflow 1</MenuItem>
                            <MenuItem value={2}>Workflow 2</MenuItem>
                            <MenuItem value={3}>Workflow 3</MenuItem>
                            <MenuItem value={4}>Workflow 4</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Condition</InputLabel>
                          <Select
                            fullWidth
                            label=""
                            name="entityExists"
                            value={node.entityExists}
                            onChange={(e: any) => onChangeField(e, index)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Name</MenuItem>
                            <MenuItem value={2}>Email</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
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
                    </Grid>
                    <Grid item xs={1} className={classes.deleteContainer}>
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

export default ResponseNode;
