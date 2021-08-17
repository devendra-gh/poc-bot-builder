import React, { Fragment, useState } from "react";
import * as Yup from "yup";
import { FieldArray } from "formik";
import { Grid, Box, Tabs, Tab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { initialStateAPINode, requestTypeOptions } from "../../../Creator/data";
import {
  Form,
  TextField,
  ButtonGroup,
  Button,
  Title,
  Select,
  IconButton,
  Paper,
  EditorBlock,
} from "../../../FormsUI";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  apiEndPoint: Yup.string().required("Field is required"),
  requestType: Yup.string().required("Field is required"),
  body: Yup.array().of(
    Yup.object().shape({
      key: Yup.string().required("Field is required"),
      value: Yup.string().required("Field is required"),
    })
  ),
  headers: Yup.array().of(
    Yup.object().shape({
      key: Yup.string().required("Field is required"),
      value: Yup.string().required("Field is required"),
    })
  ),
});

const TabPanel = (props) => {
  const { children, value, index, className, ...other } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

const ApiNode = ({ data, onSuccess, onCancel }) => {
  const INITIAL_FORM_STATE = {
    name: data?.payload?.name,
    apiEndPoint: data?.payload?.apiEndPoint,
    requestType: data?.payload?.requestType,
    body: data?.payload?.body,
    headers: data?.payload?.headers,
  };

  const [tab, setTab] = useState(0);
  const onChangeTab = (_, newValue) => {
    setTab(newValue);
  };

  const onSubmitHandler = (values) => {
    onSuccess({
      payload: {
        id: data?.id,
        payload: values,
      },
    });
  };

  return (
    <EditorBlock>
      <Title>API Node</Title>

      <Form
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={onSubmitHandler}
        render={({ values }) => {
          return (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="name" label="API Name" />
                </Grid>

                <Grid item xs={12}>
                  <TextField name="apiEndPoint" label="API End Point" />
                </Grid>

                <Grid item xs={12}>
                  <Select
                    name="requestType"
                    label="Request Type"
                    options={{
                      ...requestTypeOptions,
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Tabs
                    value={tab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={onChangeTab}
                  >
                    <Tab label="Request Body" />
                    <Tab label="Authentication" />
                  </Tabs>

                  <Paper>
                    <TabPanel value={tab} index={0}>
                      <FieldArray
                        name="body"
                        render={(arrayHelpers) => {
                          const body = values.body;

                          return (
                            <Grid container spacing={2}>
                              {body.map((_, index) => (
                                <Fragment key={`${index}`}>
                                  <Grid item xs={5}>
                                    <TextField
                                      label={`Key ${index + 1}`}
                                      name={`body.${index}.key`}
                                    />
                                  </Grid>
                                  <Grid item xs={5}>
                                    <TextField
                                      label={`Value ${index + 1}`}
                                      name={`body.${index}.value`}
                                    />
                                  </Grid>
                                  <Grid item xs={2}>
                                    <IconButton
                                      onClick={() => {
                                        arrayHelpers.remove(index);
                                      }}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Grid>
                                </Fragment>
                              ))}

                              <Grid item xs={5}>
                                <ButtonGroup>
                                  <Button
                                    onClick={() => {
                                      arrayHelpers.push({
                                        ...initialStateAPINode.body[0],
                                      });
                                    }}
                                    variant="outlined"
                                    color="primary"
                                    size="medium"
                                    startIcon={<AddIcon />}
                                  >
                                    Add
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                          );
                        }}
                      />
                    </TabPanel>

                    <TabPanel value={tab} index={1}>
                      <FieldArray
                        name="headers"
                        render={(arrayHelpers) => {
                          const headers = values.headers;

                          return (
                            <Grid container spacing={2}>
                              {headers.map((_, index) => (
                                <Fragment key={`${index}`}>
                                  <Grid item xs={5}>
                                    <TextField
                                      label={`Key ${index + 1}`}
                                      name={`headers.${index}.key`}
                                    />
                                  </Grid>
                                  <Grid item xs={5}>
                                    <TextField
                                      label={`Value ${index + 1}`}
                                      name={`headers.${index}.value`}
                                    />
                                  </Grid>
                                  <Grid item xs={2}>
                                    <IconButton
                                      onClick={() => {
                                        arrayHelpers.remove(index);
                                      }}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Grid>
                                </Fragment>
                              ))}

                              <Grid item xs={5}>
                                <ButtonGroup>
                                  <Button
                                    onClick={() => {
                                      arrayHelpers.push({
                                        ...initialStateAPINode.body[0],
                                      });
                                    }}
                                    variant="outlined"
                                    color="primary"
                                    size="medium"
                                    startIcon={<AddIcon />}
                                  >
                                    Add
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                          );
                        }}
                      />
                    </TabPanel>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <ButtonGroup>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button type="submit" color="primary">
                      Save
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </>
          );
        }}
      />
    </EditorBlock>
  );
};

export default ApiNode;
