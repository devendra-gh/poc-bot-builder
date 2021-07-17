import { withRouter } from "react-router-dom";
import { Header } from "../../../components";

const Layout = withRouter(({ children }) => {
  return (
    <section className="rz__container">
      <Header />
      {children}
    </section>
  );
});

export default Layout;
