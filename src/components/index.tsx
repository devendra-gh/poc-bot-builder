import { lazy } from "react";

import Loader from "./Loader";
const Landing = lazy(() => import("./Landing"));
const Header = lazy(() => import("./Header"));

export { Loader, Landing, Header };
