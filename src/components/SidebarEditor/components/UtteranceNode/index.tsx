import { useState } from "react";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
  },
  checkboxContainer: {
    display: "flex",
  },
  checkbox: {
    margin: 0,
  },
  gridContainer: {
    paddingTop: theme.spacing(3),

    "&:first-child": {
      paddingTop: theme.spacing(0),
    },
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

const UtteranceNode = ({ data, onSuccess, onCancel }: any) => {
  const classes = useStyles();
  const [state, setState] = useState<any>(data?.payload);

  const onChangeField: any = (event: any, isCheckBox: any = false) => {
    const { name, value, checked } = event.target;
    const _state = _.cloneDeep(state);

    _state[name] = isCheckBox ? checked : value;

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
        Utterance Node
      </Typography>

      <form noValidate autoComplete="off">
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={6}>
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
          </Grid>

          <Grid item xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Input type</InputLabel>
              <Select
                fullWidth
                label=""
                name="inputType"
                value={state.inputType}
                onChange={(e: any) => onChangeField(e)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Text</MenuItem>
                <MenuItem value={2}>Date</MenuItem>
                <MenuItem value={3}>Image</MenuItem>
                <MenuItem value={4}>PDF</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={4} style={{ padding: "24px" }}>
              <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    label="Entity Name"
                    name="entityName"
                    value={state.entityName}
                    onChange={(e: any) => onChangeField(e)}
                  />
                </Grid>

                <Grid item xs={4} className={classes.checkboxContainer}>
                  <FormControlLabel
                    className={classes.checkbox}
                    control={
                      <Checkbox
                        color="primary"
                        name="mandatory"
                        checked={state.mandatory}
                        onChange={(e: any) => onChangeField(e, true)}
                      />
                    }
                    label="Mandatory"
                  />
                </Grid>

                <Grid item xs={8}>
                  <TextField
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    label="Failure Message"
                    name="failureMessage"
                    value={state.failureMessage}
                    onChange={(e: any) => onChangeField(e)}
                  />
                </Grid>

                <Grid item xs={4} className={classes.checkboxContainer}>
                  <FormControlLabel
                    className={classes.checkbox}
                    control={
                      <Checkbox
                        color="primary"
                        name="validate"
                        checked={state.validate}
                        onChange={(e: any) => onChangeField(e, true)}
                      />
                    }
                    label="Validate"
                  />
                </Grid>

                <Grid item xs={8}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Validate Type</InputLabel>
                    <Select
                      fullWidth
                      label=""
                      name="validateType"
                      value={state.validateType}
                      onChange={(e: any) => onChangeField(e)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>File Type</MenuItem>
                      <MenuItem value={2}>API Call</MenuItem>
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
                    label="Validator"
                    name="validator"
                    value={state.validator}
                    onChange={(e: any) => onChangeField(e)}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

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

export default UtteranceNode;
