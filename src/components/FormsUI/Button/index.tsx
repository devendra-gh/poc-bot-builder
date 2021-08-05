import { Button } from "@material-ui/core";

const ButtonWrapper = ({ children, ...otherProps }: any) => {
  const configButton = {
    type: "button",
    size: "large",
    variant: "contained",
    ...otherProps,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
