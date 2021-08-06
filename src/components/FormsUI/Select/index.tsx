import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem } from "@material-ui/core";

export interface ISelectProps {
  name: string;
  label: string;
  options: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectWrapper = ({
  name,
  options,
  onChange,
  ...otherProps
}: ISelectProps) => {
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
  );
};

export default SelectWrapper;
