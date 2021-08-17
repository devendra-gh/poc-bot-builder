import { useField } from "formik";

const ConditionalField = ({ name, test, children }) => {
  const [field] = useField({ name });
  let condition = false;
  if (test) {
    condition = test(field.value);
  } else {
    condition = !!field.value;
  }
  return condition ? children : null;
};

export default ConditionalField;
