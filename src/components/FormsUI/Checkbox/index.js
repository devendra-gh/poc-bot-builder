import React from "react";
import { useField, useFormikContext } from "formik";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0),
    height: "100%",
    justifyContent: "center",
  },
}));

const CheckboxWrapper = ({ name, label, onChange, ...otherProps }) => {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);

    if (onChange) {
      onChange(evt);
    }
  };

  const configCheckbox = {
    ...field,
    ...otherProps,
    checked: !!meta.value,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl} className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
