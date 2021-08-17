import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField } from "@material-ui/core";

const TextFieldWrapper = ({ name, onChange, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, mata] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);

    if (onChange) {
      onChange(evt);
    }
  };

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    InputLabelProps: { shrink: true },
    onChange: handleChange,
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <TextField {...configTextfield} />;
};

export default TextFieldWrapper;
