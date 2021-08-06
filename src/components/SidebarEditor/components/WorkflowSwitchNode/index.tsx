import * as Yup from "yup";
import { Grid } from "@material-ui/core";
import {
  Form,
  TextField,
  Select,
  ButtonGroup,
  Button,
  Title,
  EditorBlock,
} from "../../../FormsUI";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  workflow: Yup.string().required("Field is required"),
});

const WorkflowSwitchNode = ({ data, onSuccess, onCancel }: any) => {
  const INITIAL_FORM_STATE = {
    name: data?.payload?.name,
    workflow: data?.payload?.workflow,
    message: data?.payload?.message,
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
      <Title>Workflow Switch Node</Title>

      <Form
        initialValues={{
          ...INITIAL_FORM_STATE,
          country: "",
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={onSubmitHandler}
        render={({ errors }: any) => {
          console.log("errors", errors);
          return (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="name" label="Node Name" />
                </Grid>

                <Grid item xs={12}>
                  <Select
                    name="workflow"
                    label="Select Workflow"
                    options={{
                      "workflow-1": "Workflow 1",
                      "workflow-2": "Workflow 2",
                      "workflow-3": "Workflow 3",
                      "workflow-4": "Workflow 4",
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField name="message" label="Transfer message" />
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

export default WorkflowSwitchNode;
