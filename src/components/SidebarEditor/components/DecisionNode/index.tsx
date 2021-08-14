import * as Yup from "yup";
import React, { Fragment } from "react";
import { FieldArray } from "formik";
import { Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import {
  initialStateDecisionNode,
  successApiRuleOptions,
} from "../../../Creator/data";
import {
  Form,
  TextField,
  ButtonGroup,
  Button,
  IconButton,
  Title,
  Select,
  Paper,
  EditorBlock,
} from "../../../FormsUI";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  successApi: Yup.string().required("Field is required"),
  successApiRule: Yup.string().required("Field is required"),
  inputs: Yup.array().of(
    Yup.object().shape({
      value: Yup.string().required("Field is required"),
    })
  ),
});

const DecisionNode = ({ data, onSuccess, onCancel }: any) => {
  const INITIAL_FORM_STATE = {
    name: data?.payload?.name,
    successApi: data?.payload?.successApi,
    successApiRule: data?.payload?.successApiRule,
    inputs: data?.payload?.inputs,
  };

  const onSubmitHandler = (values: any) => {
    let _allowOutputPort: any = false;

    _allowOutputPort =
      data.payload.inputs.length === values.inputs.length
        ? false
        : values.inputs.length + 1;

    onSuccess({
      payload: {
        id: data?.id,
        payload: values,
      },
      allowOutputPort: _allowOutputPort,
    });
  };

  return (
    <EditorBlock>
      <Title>Decision Node</Title>
      <Form
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={onSubmitHandler}
        render={({ values }: any) => {
          return (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="name" label="Node Name" />
                </Grid>

                <Grid item xs={6}>
                  <TextField name="successApi" label="Success Api" />
                </Grid>

                <Grid item xs={6}>
                  <Select
                    name="successApiRule"
                    label="Select the Rule"
                    options={{ ...successApiRuleOptions }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Paper>
                    <FieldArray
                      name="inputs"
                      render={(arrayHelpers: any) => {
                        const inputs = values.inputs;

                        return (
                          <Grid container spacing={2}>
                            {inputs.map((_: any, index: any) => (
                              <Fragment key={`${index}`}>
                                <Grid item xs={10}>
                                  <TextField
                                    label={`Input ${index + 1}`}
                                    name={`inputs.${index}.value`}
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

                            {inputs.length < 5 && (
                              <Grid item xs={12}>
                                <ButtonGroup>
                                  <Button
                                    onClick={() => {
                                      arrayHelpers.push({
                                        ...initialStateDecisionNode.inputs[0],
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
                            )}
                          </Grid>
                        );
                      }}
                    />
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

export default DecisionNode;
