import * as Yup from "yup";
import { Grid, Box } from "@material-ui/core";
import { validateTypeOptions } from "../../../Creator/data";
import {
  Form,
  TextField,
  ButtonGroup,
  Button,
  Title,
  Select,
  Checkbox,
  ConditionalField,
  Paper,
} from "../../../FormsUI";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  message: Yup.string().required("Field is required"),
  entityName: Yup.string().required("Field is required"),
  failureMessage: Yup.string().required("Field is required"),
  validateType: Yup.string().when("isValidate", {
    is: (val: any) => !!val,
    then: Yup.string().required("Field is required"),
  }),
  validatorRegex: Yup.string().when("validateType", {
    is: (val: any) => {
      return val === "regex";
    },
    then: Yup.string().required("Field is required"),
  }),
});

const EntityNode = ({ data, onSuccess, onCancel }: any) => {
  const INITIAL_FORM_STATE = {
    name: data?.payload?.name,
    message: data?.payload?.message,
    isAvailable: data?.payload?.isAvailable,
    entityName: data?.payload?.entityName,
    isMandatory: data?.payload?.isMandatory,
    failureMessage: data?.payload?.failureMessage,
    isValidate: data?.payload?.isValidate,
    validateType: data?.payload?.validateType,
    validatorRegex: data?.payload?.validatorRegex,
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
    <Box className="rz__editor--block">
      <Title>Entity Node</Title>

      <Form
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={onSubmitHandler}
        render={({ errors, values }: any) => {
          console.log("errors", errors);
          return (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="name" label="Node Name" />
                </Grid>

                <Grid item xs={12}>
                  <TextField name="message" label="Help Message" />
                </Grid>

                <Grid item xs={12}>
                  <Checkbox
                    name="isAvailable"
                    label="Skip if available"
                    color="primary"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Paper>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField name="entityName" label="Entity Name" />
                      </Grid>

                      <Grid item xs={4}>
                        <Checkbox name="isMandatory" label="Mandatory" />
                      </Grid>

                      <Grid item xs={8}>
                        <TextField
                          name="failureMessage"
                          label="Failure message"
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <Checkbox
                          name="isValidate"
                          label="Validate"
                          color="primary"
                        />
                      </Grid>

                      <ConditionalField
                        name={"validateTypeConditionalField"}
                        test={() => {
                          return values.isValidate;
                        }}
                      >
                        <>
                          <Grid item xs={8}>
                            <Select
                              name="validateType"
                              label="Validate Type"
                              options={{ ...validateTypeOptions }}
                            />
                          </Grid>
                        </>
                      </ConditionalField>

                      <ConditionalField
                        name={"validatorRegexConditionalField"}
                        test={() => {
                          return values.validateType === "regex";
                        }}
                      >
                        <>
                          <Grid item xs={12}>
                            <TextField
                              name="validatorRegex"
                              label="Validator Regex"
                            />
                          </Grid>
                        </>
                      </ConditionalField>
                    </Grid>
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
    </Box>
  );
};

export default EntityNode;
