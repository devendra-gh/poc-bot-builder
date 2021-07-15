import React, { lazy } from "react";
import { withRouter } from "react-router-dom";
import cx from "classnames";
import "./style.scss";

const Header = lazy(() => import("../Header"));

const Landing = withRouter(({ location, children }) => {
  const { pathname = "/" } = location;

  return (
    <div
      className={cx("landing__wrapper", {
        "landing__wrapper--home": pathname === "/",
      })}
    >
      <Header />
      {children}
    </div>
  );
});

export default Landing;
