import { lazy } from "react";
import Loader from "./common/Loader";
import NodeBlock from "./NodeBlock";
import DesignMenu from "./DesignMenu";
import DraggableComponent from "./DraggableComponent";
import NodeEditor from "./NodeEditor";
import SidebarEditorBlock from "./SidebarEditorBlock";

const Layout = lazy(() => import("./common/Layout"));
const Header = lazy(() => import("./common/Header"));
const Icon = lazy(() => import("./common/Icon"));
const Creator = lazy(() => import("./Creator"));
const DiagramPreview = lazy(() => import("./DiagramPreview"));
const SidebarEditor = lazy(() => import("./SidebarEditor"));

export {
  Loader,
  Layout,
  Header,
  Icon,
  Creator,
  DesignMenu,
  DiagramPreview,
  DraggableComponent,
  NodeBlock,
  NodeEditor,
  SidebarEditor,
  SidebarEditorBlock,
};
