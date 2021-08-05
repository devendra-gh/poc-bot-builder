import { Formik, Form as FormUI } from "formik";

const Form = ({
  initialValues,
  onSubmit,
  children,
  validationSchema,
  className,
  style,
  render,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ handleSubmit, ...rest }) => (
        <FormUI onSubmit={handleSubmit} className={className} style={style}>
          {render ? render({ ...rest }) : children}
        </FormUI>
      )}
    </Formik>
  );
};

export default Form;
