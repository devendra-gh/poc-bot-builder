import { withRouter } from "react-router-dom";

const Layout = withRouter(({ children }) => {
  return <section className="rz__container">{children}</section>;
});

export default Layout;
