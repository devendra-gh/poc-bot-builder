import React from 'react';
import * as Yup from "yup";
import { Grid } from "@material-ui/core";
import {
  Form,
  TextField,
  ButtonGroup,
  Button,
  Title,
  Select,
  DividerText,
  Paper,
  EditorBlock,
} from "../../../FormsUI";
import {
  phoneNumberOptions,
  phoneExtentionOptions,
} from "../../../Creator/data";

const FORM_VALIDATION = Yup.object().shape(
  {
    name: Yup.string().required("Field is required"),
    message: Yup.string().required("Field is required"),
    phoneNumber: Yup.string().when("department", {
      is: (val: any) => !!val,
      then: Yup.string(),
      otherwise: Yup.string().required("Field is required"),
    }),
    phoneExtention: Yup.string().when("phoneNumber", {
      is: (val: any) => {
        return !!val;
      },
      then: Yup.string().required("Field is required"),
    }),
    department: Yup.string().when("phoneNumber", {
      is: (val: any) => !!val,
      then: Yup.string(),
      otherwise: Yup.string().required("Field is required"),
    }),
  },
  [["phoneNumber", "department"]]
);

const AgentHandoverNode = ({ data, onSuccess, onCancel }: any) => {
  const INITIAL_FORM_STATE = {
    name: data?.payload?.name,
    message: data?.payload?.message,
    phoneNumber: data?.payload?.phoneNumber,
    phoneExtention: data?.payload?.phoneExtention,
    department: data?.payload?.department,
  };

  const onSubmitHandler = (values: any) => {
    onSuccess({
      payload: {
        id: data?.id,
        payload: values,
      },
    });
  };

  return (
    <EditorBlock>
      <Title>Agent Handover Node</Title>

      <Form
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={onSubmitHandler}
        render={({ setFieldValue }: any) => {
          return (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="name" label="Node Name" />
                </Grid>

                <Grid item xs={12}>
                  <TextField name="message" label="Transfer Message" />
                </Grid>

                <Grid item xs={12}>
                  <Paper>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Select
                          name="phoneNumber"
                          label="Select the Number"
                          options={{
                            ...phoneNumberOptions,
                          }}
                          onChange={(event: any) => {
                            const { name, value } = event.target;
                            setFieldValue("department", "");
                            setFieldValue(name, value);
                          }}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Select
                          name="phoneExtention"
                          label="Extension Number"
                          options={{
                            ...phoneExtentionOptions,
                          }}
                        />
                      </Grid>
                    </Grid>

                    <DividerText>OR</DividerText>

                    <TextField
                      name="department"
                      label="Department"
                      onChange={(event: any) => {
                        const { name, value } = event.target;
                        setFieldValue("phoneExtention", "");
                        setFieldValue("phoneNumber", "");
                        setFieldValue(name, value);
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

export default AgentHandoverNode;
