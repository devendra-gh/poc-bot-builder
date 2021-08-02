import { useState } from "react";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import { initialStateDecisionNode } from "../../../Creator/data";

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
  deleteContainer: {
    display: "flex",
    alignItems: "center",
  },
  addContainer: {
    paddingTop: theme.spacing(3),
  },
  formControlRule: {
    marginTop: theme.spacing(3),
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

const DecisionNode = ({ data, onSuccess, onCancel }: any) => {
  const classes = useStyles();
  const [stateRule, setStateRule] = useState<any>(data?.payload?.rule);
  const [state, setState] = useState<any>(data?.payload?.nodes);

  const onChangeField: any = (event: any, index: any) => {
    const { name, value } = event.target;
    const _state = _.cloneDeep(state);

    _state[index][name] = value;

    setState(_state);
  };

  const onAddClickHandler = () => {
    const _state = _.cloneDeep(state);
    const initialState = _.cloneDeep(initialStateDecisionNode.nodes[0]);

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
      payload: { nodes: state, rule: stateRule },
    });
  };

  return (
    <Box className="rz__editor--block">
      <Typography className={classes.title} variant="h5" gutterBottom>
        Decision Node
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
                      <Grid item xs={6}>
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

                      <Grid item xs={6}>
                        <TextField
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          fullWidth
                          label={`Success Api ${index + 1}`}
                          name="successApi"
                          value={node.successApi}
                          onChange={(e: any) => onChangeField(e, index)}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel>{`Rule ${index + 1}`}</InputLabel>
                          <Select
                            fullWidth
                            label=""
                            name="successApiRule"
                            value={node.successApiRule}
                            onChange={(e: any) => onChangeField(e, index)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Starts with</MenuItem>
                            <MenuItem value={2}>Ends with</MenuItem>
                            <MenuItem value={3}>Equals</MenuItem>
                            <MenuItem value={4}>Contains</MenuItem>
                            <MenuItem value={5}>Regex</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          fullWidth
                          label={`Status ${index + 1}`}
                          name="status"
                          value={node.status}
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

        <Box component="div" className={classes.addContainer}>
          <Button
            onClick={onAddClickHandler}
            variant="outlined"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>

        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControlRule}
        >
          <InputLabel>Rule</InputLabel>
          <Select
            fullWidth
            label=""
            name="rule"
            value={stateRule}
            onChange={(e: any) => setStateRule(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>OR</MenuItem>
            <MenuItem value={2}>AND</MenuItem>
          </Select>
        </FormControl>

        <Box component="div" className={classes.buttonContainer}>
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

export default DecisionNode;
