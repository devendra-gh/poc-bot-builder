// import { lazy } from "react";
import Loader from "./common/Loader";
import Layout from "./common/Layout";
import NodeBlock from "./NodeBlock";
import DesignMenu from "./DesignMenu";
import DraggableComponent from "./DraggableComponent";
import NodeEditor from "./NodeEditor";
import Creator from "./Creator";
import DiagramPreview from "./DiagramPreview";
import SidebarEditor from "./SidebarEditor";

// const Layout = lazy(() => import("./common/Layout"));
// const DiagramPreview = lazy(() => import("./DiagramPreview"));
// const SidebarEditor = lazy(() => import("./SidebarEditor"));

export {
  Loader,
  Layout,
  Creator,
  DesignMenu,
  DiagramPreview,
  DraggableComponent,
  NodeBlock,
  NodeEditor,
  SidebarEditor,
};
