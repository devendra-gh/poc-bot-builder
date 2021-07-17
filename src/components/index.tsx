import { lazy } from "react";
import Loader from "./common/Loader";

const Layout = lazy(() => import("./common/Layout"));
const Header = lazy(() => import("./common/Header"));

export { Loader, Layout, Header };
