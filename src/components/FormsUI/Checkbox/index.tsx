import React from "react";
import { useField, useFormikContext } from "formik";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export interface ICheckboxProps {
  name: string;
  label: string;
  color?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0),
    height: "100%",
    justifyContent: "center",
  },
}));

const CheckboxWrapper = ({
  name,
  label,
  onChange,
  ...otherProps
}: ICheckboxProps) => {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: any) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);

    if (onChange) {
      onChange(evt);
    }
  };

  const configCheckbox = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };

  const configFormControl: any = {};
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
