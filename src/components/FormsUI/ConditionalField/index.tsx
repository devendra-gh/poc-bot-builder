import { useField } from "formik";
import React, { ReactElement } from "react";

export interface IConditionalFieldProps {
  name: string;
  test?: (value: any) => boolean;
}

const ConditionalField: React.FC<IConditionalFieldProps> = ({
  name,
  test,
  children,
}) => {
  const [field] = useField({ name });
  let condition = false;
  if (test) {
    condition = test(field.value);
  } else {
    condition = !!field.value;
  }
  return condition ? (children as ReactElement<any>) : null;
};

export default ConditionalField;
