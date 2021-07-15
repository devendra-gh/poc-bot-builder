import React, { ReactNode } from "react";
import cx from "classnames";
import "./style.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

const LayoutWrapper: React.FC<Props> = (props) => {
  const { className, children } = props;

  return <div className={cx("layout__wrapper", className)}>{children}</div>;
};

export default LayoutWrapper;
