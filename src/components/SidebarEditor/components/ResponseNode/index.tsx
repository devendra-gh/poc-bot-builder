import * as Yup from "yup";
import { Fragment } from "react";
import { FieldArray } from "formik";
import { Box, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { initialStateResponseNode } from "../../../Creator/data";
import {
  Form,
  TextField,
  ButtonGroup,
  Button,
  IconButton,
  Title,
  Paper,
} from "../../../FormsUI";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  response: Yup.array().of(
    Yup.object().shape({
      value: Yup.string().required("Field is required"),
    })
  ),
});

const ResponseNode = ({ data, onSuccess, onCancel }: any) => {
  const INITIAL_FORM_STATE = {
    name: data?.payload?.name,
    response: data?.payload?.response,
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
      <Title>Response Node</Title>
      <Form
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={onSubmitHandler}
        render={({ values, errors }: any) => {
          console.log("errors", errors);

          return (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="name" label="Node Name" />
                </Grid>

                <Grid item xs={12}>
                  <Paper>
                    <FieldArray
                      name="response"
                      render={(arrayHelpers: any) => {
                        const response = values.response;

                        return (
                          <Grid container spacing={2}>
                            {response.map((_: any, index: any) => (
                              <Fragment key={`${index}`}>
                                <Grid item xs={response.length > 1 ? 10 : 12}>
                                  <TextField
                                    label={`Response Value ${index + 1}`}
                                    name={`response.${index}.value`}
                                  />
                                </Grid>

                                {response.length > 1 && (
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

                            <Grid item xs={12}>
                              <ButtonGroup>
                                <Button
                                  onClick={() => {
                                    arrayHelpers.push({
                                      ...initialStateResponseNode.response[0],
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

export default ResponseNode;
