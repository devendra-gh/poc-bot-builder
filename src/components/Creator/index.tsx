import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

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

  const addNewNode = (menu: any) => {
    const nodeId = schema.nodes.length + 1;
    const inputs = [];
    const outputs = [];
    const input = menu?.actions?.input || 0;
    const output = menu.actions.output || 0;

    const coordinates = [
      schema.nodes[nodeId - 2].coordinates[0] + 100,
      schema.nodes[nodeId - 2].coordinates[1] + 100,
    ];

    if (input) {
      for (let i = 0; i < input; i++) {
        inputs.push({
          id: `input-port-${uuidv4()}`,
          alignment: "left",
          canLink: canAllowToLink,
        });
      }
    }

    if (output) {
      for (let j = 0; j < output; j++) {
        outputs.push({
          id: `output-port-${uuidv4()}`,
          alignment: "right",
          canLink: canAllowToLink,
        });
      }
    }

    const nextNode = {
      id: `node--${uuidv4()}`,
      content: menu.title,
      render: NodeBlock,
      coordinates: coordinates,
      inputs: inputs,
      outputs: outputs,
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
