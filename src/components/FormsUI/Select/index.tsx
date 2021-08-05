import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export interface ISelectProps {
  name: string;
  label: string;
  options: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    // padding: theme.spacing(1),
  },
}));

const SelectWrapper = ({
  name,
  options,
  onChange,
  ...otherProps
}: ISelectProps) => {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setFieldValue(name, value);

    if (onChange) {
      onChange(evt);
    }
  };

  const configSelect: any = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: { shrink: true },
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <Box className={classes.formControl}>
      <TextField {...configSelect}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem key={pos} value={item}>
              {options[item]}
            </MenuItem>
          );
        })}
      </TextField>
    </Box>
  );
};

export default SelectWrapper;
