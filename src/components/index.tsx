import { lazy } from "react";
import Loader from "./Loader";

const Landing = lazy(() => import("./Landing"));
const Header = lazy(() => import("./Header"));
const LayoutWrapper = lazy(() => import("./LayoutWrapper"));

export { Loader, Header, Landing, LayoutWrapper };
