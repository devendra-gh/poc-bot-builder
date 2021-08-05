import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export interface InputProps {
  name: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    // padding: theme.spacing(1),
  },
}));

const TextFieldWrapper = ({ name, onChange, ...otherProps }: InputProps) => {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field, mata] = useField(name);

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setFieldValue(name, value);

    if (onChange) {
      onChange(evt);
    }
  };

  const configTextfield: any = {
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

  return (
    <Box className={classes.formControl}>
      <TextField {...configTextfield} />
    </Box>
  );
};

export default TextFieldWrapper;
