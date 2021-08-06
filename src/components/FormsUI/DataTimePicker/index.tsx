import { TextField } from "@material-ui/core";
import { useField } from "formik";

const DateTimePicker = ({ name, ...otherProps }: any) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  /* <DateTimePicker name="departureDate" label="Departure Date" />; */

  return <TextField {...configDateTimePicker} />;
};

export default DateTimePicker;
