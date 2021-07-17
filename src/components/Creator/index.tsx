import { createSchema, useSchema } from "beautiful-react-diagrams";
import { connect } from "react-redux";
import "beautiful-react-diagrams/styles.css";

import { isLoading } from "../../redux/actions";

import CustomRender from "../CustomRender";
import Preview from "../Preview";
import DesignMenu from "../DesignMenu";
import SidebarEditor from "../SidebarEditor";

const Creator = (_: any) => {
  const initialSchema = createSchema({
    nodes: [
      {
        id: "node-1",
        content: "Node 1",
        render: CustomRender,
        coordinates: [250, 60],
      },
      {
        id: "node-2",
        content: "Node 2",
        render: CustomRender,
        coordinates: [100, 200],
      },
      {
        id: "node-3",
        content: "Node 3",
        render: CustomRender,
        coordinates: [250, 220],
      },
      {
        id: "node-4",
        content: "Node 4",
        render: CustomRender,
        coordinates: [400, 200],
      },
    ],
    links: [
      { input: "node-1", output: "node-2", label: "Link 1", readonly: true },
      { input: "node-1", output: "node-3", label: "Link 2", readonly: true },
      {
        input: "node-1",
        output: "node-4",
        label: "Link 3",
        readonly: true,
        className: "my-custom-link-class",
      },
    ],
  });

  const [schema, { onChange, addNode, removeNode }]: any =
    useSchema(initialSchema);

  const deleteNodeFromSchema = (id: any) => {
    const nodeToRemove = schema.nodes.find((node: any) => node.id === id);
    removeNode(nodeToRemove);
  };

  const addNewNode = () => {
    const nextNode = {
      id: `node-${schema.nodes.length + 1}`,
      content: `Node ${schema.nodes.length + 1}`,
      render: CustomRender,
      data: { onClick: deleteNodeFromSchema },
      coordinates: [
        schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
        schema.nodes[schema.nodes.length - 1].coordinates[1],
      ],
      inputs: [{ id: `port-${Math.random()}` }],
      outputs: [{ id: `port-${Math.random()}` }],
    };

    addNode(nextNode);
  };

  return (
    <>
      <DesignMenu addNewNode={addNewNode} />
      <SidebarEditor />
      <Preview schema={schema} onChange={onChange} addNewNode={addNewNode} />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    isLoading: () => dispatch(isLoading(true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Creator);
