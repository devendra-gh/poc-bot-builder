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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import { initialStateAPINode } from "../../../Creator/data";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
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
  paperContainer: {
    padding: theme.spacing(3),
  },
  requestBodyContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),

    "&:first-child": {
      marginTop: theme.spacing(0),
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

const TabPanel = (props: any) => {
  const { children, value, index, className, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Paper elevation={4} className={className}>
          <Box>{children}</Box>
        </Paper>
      )}
    </div>
  );
};

const ApiNode = ({ data, onSuccess, onCancel }: any) => {
  const classes = useStyles();

  const [state, setState] = useState<any>(data?.payload);
  const [tab, setTab] = useState(0);

  const onChangeTab = (event: any, newValue: any) => {
    setTab(newValue);
  };

  const onChangeField: any = (event: any) => {
    const { name, value } = event.target;
    const _state = _.cloneDeep(state);

    _state[name] = value;

    setState(_state);
  };

  const onChangeRequestBodyField: any = (event: any, index: any) => {
    const { name, value } = event.target;
    const _state = _.cloneDeep(state);

    _state.requestBody[index][name] = value;

    setState(_state);
  };

  const onAddRequestBodyHandler = () => {
    const _state = _.cloneDeep(state);
    const initialState = _.cloneDeep(initialStateAPINode.requestBody[0]);

    _state?.requestBody?.push(initialState);

    setState(_state);
  };

  const onRemoveRequestBodyHandler = (index: any) => {
    const _state = _.cloneDeep(state);
    _state.requestBody.splice(index, 1);

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
        API Node
      </Typography>

      <form noValidate autoComplete="off">
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              label="API Call"
              name="apiCall"
              value={state.apiCall}
              onChange={(e: any) => onChangeField(e)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              label="API End Point"
              name="apiEndPoint"
              value={state.apiEndPoint}
              onChange={(e: any) => onChangeField(e)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Request Type</InputLabel>
              <Select
                fullWidth
                label=""
                name="requestType"
                value={state.requestType}
                onChange={(e: any) => onChangeField(e)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>GET</MenuItem>
                <MenuItem value={2}>POST</MenuItem>
                <MenuItem value={3}>PUT</MenuItem>
                <MenuItem value={4}>DELETE</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Paper square>
              <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={onChangeTab}
              >
                <Tab label="Request Body" />
                <Tab label="Authentication" />
              </Tabs>
            </Paper>

            <TabPanel value={tab} index={0} className={classes.paperContainer}>
              {state?.requestBody?.length
                ? state.requestBody.map((request: any, index: any) => {
                    return (
                      <Paper
                        key={`${index}`}
                        elevation={3}
                        className={classes.requestBodyContainer}
                      >
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridContainer}
                        >
                          <Grid container item xs={11} spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                label={`Key ${index + 1}`}
                                name="key"
                                value={request.key}
                                onChange={(e: any) =>
                                  onChangeRequestBodyField(e, index)
                                }
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                label={`Value ${index + 1}`}
                                name="value"
                                value={request.value}
                                onChange={(e: any) =>
                                  onChangeRequestBodyField(e, index)
                                }
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                label={`Policy Name ${index + 1}`}
                                name="policyName"
                                value={request.policyName}
                                onChange={(e: any) =>
                                  onChangeRequestBodyField(e, index)
                                }
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                label={`Bot Entity Name ${index + 1}`}
                                name="botEntityName"
                                value={request.botEntityName}
                                onChange={(e: any) =>
                                  onChangeRequestBodyField(e, index)
                                }
                              />
                            </Grid>
                          </Grid>

                          <Grid item xs={1} className={classes.deleteContainer}>
                            <IconButton
                              onClick={() => {
                                onRemoveRequestBodyHandler(index);
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
                  onClick={onAddRequestBodyHandler}
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </Box>
            </TabPanel>

            <TabPanel value={tab} index={1} className={classes.paperContainer}>
              {state?.requestBody?.length
                ? state.requestBody.map((request: any, index: any) => {
                    return (
                      <Paper
                        key={`${index}`}
                        elevation={3}
                        className={classes.requestBodyContainer}
                      >
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridContainer}
                        >
                          <Grid container item xs={11} spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                label={`Key ${index + 1}`}
                                name="key"
                                value={request.key}
                                onChange={(e: any) =>
                                  onChangeRequestBodyField(e, index)
                                }
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                label={`Value ${index + 1}`}
                                name="value"
                                value={request.value}
                                onChange={(e: any) =>
                                  onChangeRequestBodyField(e, index)
                                }
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                label={`Policy Name ${index + 1}`}
                                name="policyName"
                                value={request.policyName}
                                onChange={(e: any) =>
                                  onChangeRequestBodyField(e, index)
                                }
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                fullWidth
                                label={`Bot Entity Name ${index + 1}`}
                                name="botEntityName"
                                value={request.botEntityName}
                                onChange={(e: any) =>
                                  onChangeRequestBodyField(e, index)
                                }
                              />
                            </Grid>
                          </Grid>

                          <Grid item xs={1} className={classes.deleteContainer}>
                            <IconButton
                              onClick={() => {
                                onRemoveRequestBodyHandler(index);
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
                  onClick={onAddRequestBodyHandler}
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </Box>
            </TabPanel>
          </Grid>
        </Grid>

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

export default ApiNode;
