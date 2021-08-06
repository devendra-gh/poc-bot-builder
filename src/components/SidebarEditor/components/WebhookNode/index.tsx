import * as Yup from "yup";
import { Grid } from "@material-ui/core";
import {
  Form,
  TextField,
  ButtonGroup,
  Button,
  Title,
  EditorBlock,
} from "../../../FormsUI";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Field is required"),
});

const WebhookNode = ({ data, onSuccess, onCancel }: any) => {
  const INITIAL_FORM_STATE = {
    name: data?.payload?.name,
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
      <Title>Webhook Node</Title>
      <Form
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={onSubmitHandler}
        render={() => {
          return (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="name" label="Node Name" />
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

export default WebhookNode;
