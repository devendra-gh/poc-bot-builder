import * as Yup from "yup";
import React, { Fragment } from "react";
import { FieldArray } from "formik";
import { Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { initialStateQuestionNode } from "../../../Creator/data";
import {
  Form,
  TextField,
  ButtonGroup,
  Button,
  IconButton,
  Title,
  Checkbox,
  Paper,
  EditorBlock,
} from "../../../FormsUI";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  message: Yup.string().required("Field is required"),
  inputs: Yup.array().of(
    Yup.object().shape({
      value: Yup.string().required("Field is required"),
    })
  ),
  failureMessage: Yup.string().required("Field is required"),
});

const QuestionNode = ({ data, onSuccess, onCancel }) => {
  const INITIAL_FORM_STATE = {
    name: data?.payload?.name,
    message: data?.payload?.message,
    inputs: data?.payload?.inputs,
    failureMessage: data?.payload?.failureMessage,
    isBranching: data?.payload?.isBranching,
  };

  const onSubmitHandler = (values) => {
    let _allowOutputPort = 0;

    if (values.isBranching) {
      if (
        data.payload.isBranching &&
        data.payload.inputs.length === values.inputs.length
      ) {
        _allowOutputPort = false;
      } else {
        _allowOutputPort = values.inputs.length;
      }
    } else {
      if (!data.payload.isBranching) {
        _allowOutputPort = false;
      }
    }

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
      <Title>Response Node</Title>
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
                  <TextField name="name" label="Node Name" />
                </Grid>

                <Grid item xs={12}>
                  <TextField name="message" label="Bot Message" />
                </Grid>

                <Grid item xs={12}>
                  <Paper>
                    <FieldArray
                      name="inputs"
                      render={(arrayHelpers) => {
                        const inputs = values.inputs;

                        return (
                          <Grid container spacing={2}>
                            {inputs.map((_, index) => (
                              <Fragment key={`${index}`}>
                                <Grid item xs={inputs.length > 1 ? 10 : 12}>
                                  <TextField
                                    label={`Input ${index + 1}`}
                                    name={`inputs.${index}.value`}
                                  />
                                </Grid>

                                {inputs.length > 1 && (
                                  <Grid item xs={2}>
                                    <IconButton
                                      onClick={() => {
                                        arrayHelpers.remove(index);
                                      }}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Grid>
                                )}
                              </Fragment>
                            ))}

                            {inputs.length < 5 && (
                              <Grid item xs={12}>
                                <ButtonGroup>
                                  <Button
                                    onClick={() => {
                                      arrayHelpers.push({
                                        ...initialStateQuestionNode.inputs[0],
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
                  <TextField name="failureMessage" label="Failure Message" />
                </Grid>

                <Grid item xs={12}>
                  <Checkbox
                    name="isBranching"
                    label="Branching"
                    color="primary"
                  />
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

export default QuestionNode;
