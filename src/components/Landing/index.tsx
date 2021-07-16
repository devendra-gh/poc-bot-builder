import React, { lazy } from "react";
import { withRouter } from "react-router-dom";

const Header = lazy(() => import("../Header"));

const Landing = withRouter(({ location, children }) => {
  const { pathname = "/" } = location;

  return (
    <section className="wrapper__container">
      <Header />
      {children}
    </section>
  );
});

export default Landing;
