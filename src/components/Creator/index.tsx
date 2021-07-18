import { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  createSchema,
  useSchema,
  //   validateNode,
  //   validateNodes,
  //   validateSchema,
  //   validateLink,
  //   validateLinks,
  //   validatePort,
} from "beautiful-react-diagrams";
import "beautiful-react-diagrams/styles.css";

import { canAllowToLink } from "../../utils/helpers";
import { updateLinks } from "../../redux/actions";

import NodeBlock from "../NodeBlock";
import DiagramPreview from "../DiagramPreview";
import DesignMenu from "../DesignMenu";
import SidebarEditor from "../SidebarEditor";

const Creator = ({ diagram }: any) => {
  const activeNodes = diagram.nodes.map((node: any) => {
    return {
      ...node,
      render: node.render === "NodeBlock" ? NodeBlock : () => {},
      inputs: node?.inputs?.length
        ? node.inputs.map((input: any) => {
            return {
              ...input,
              canLink:
                input.canLink === "canAllowToLink" ? canAllowToLink : null,
            };
          })
        : [],
      outputs: node?.outputs?.length
        ? node.outputs.map((output: any) => {
            return {
              ...output,
              canLink:
                output.canLink === "canAllowToLink" ? canAllowToLink : null,
            };
          })
        : [],
    };
  });

  const initialSchema = createSchema({
    ...diagram,
    nodes: activeNodes,
  });

  const [schema, { onChange, addNode, removeNode, connect }]: any =
    useSchema(initialSchema);

  console.log("schema=> ", schema);

  const addNewNode = () => {
    const nodeId = schema.nodes.length + 1;

    const nextNode = {
      id: `node-${nodeId}`,
      content: `Node ${nodeId}`,
      render: NodeBlock,
      coordinates: [
        schema.nodes[nodeId - 2].coordinates[0] + 100,
        schema.nodes[nodeId - 2].coordinates[1] + 100,
      ],
      inputs: [
        {
          id: `input-port-${nodeId}${1}`,
          alignment: "left",
          canLink: canAllowToLink,
        },
      ],
      outputs: [
        {
          id: `output-port-${nodeId}${1}`,
          alignment: "right",
          canLink: canAllowToLink,
        },
      ],
      data: {
        canClose: true,
        canEdit: true,
        name: "Node Name",
        value: "Response Value",
        onClick: deleteNodeFromSchema,
      },
    };

    addNode(nextNode);
  };

  const deleteNodeFromSchema = (id: any) => {
    const nodeToRemove = schema.nodes.find((node: any) => {
      if (node.id === id) {
        return true;
      }

      return false;
    });

    removeNode(nodeToRemove);
  };

  return (
    <>
      <DesignMenu addNewNode={addNewNode} />
      <SidebarEditor />
      <DiagramPreview
        schema={schema}
        onChange={onChange}
        addNewNode={addNewNode}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    diagram: state.creator.diagram,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateLinks: (payload: any) => dispatch(updateLinks(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Creator);
