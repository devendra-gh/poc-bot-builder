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
import {
  NodeBlock,
  DiagramPreview,
  DesignMenu,
  SidebarEditor,
} from "../../components";

const ConstantNodeBlock: any = {
  NodeBlock: NodeBlock,
};

const ConstantCanLink: any = {
  canAllowToLink: canAllowToLink,
};

const Creator = ({ diagram }: any) => {
  let deleteNodeFromSchema: any;

  const getInitialNode: any = () => {
    let nodes: any = [];
    let links: any = [];

    nodes = diagram?.nodes?.map((node: any) => {
      const _input = node?.inputs || [];
      const _output = node?.outputs || [];
      let inputs = [];
      let outputs = [];

      if (_input.length) {
        inputs = _input.map((input: any) => {
          return {
            ...input,
            canLink: ConstantCanLink[input?.canLink],
          };
        });
      }

      if (_output.length) {
        outputs = _output.map((output: any) => {
          return {
            ...output,
            canLink: ConstantCanLink[output?.canLink],
          };
        });
      }

      return {
        id: node.id,
        content: node.content,
        disableDrag: node.disableDrag,
        coordinates: node.coordinates,
        inputs: inputs,
        outputs: outputs,
        render: ConstantNodeBlock[node?.render] || null,
        data: {
          ...node.data,
          onClick: deleteNodeFromSchema,
        },
      };
    });

    links = diagram?.links;

    return {
      nodes,
      links,
    };
  };

  const initialSchema = createSchema(getInitialNode());

  const [schema, { onChange, addNode, removeNode, connect }]: any =
    useSchema(initialSchema);

  const addNewNode = (node: any) => {
    const nodeId = schema.nodes.length + 1;
    const coordinates = [
      schema.nodes[nodeId - 2].coordinates[0] + 100,
      schema.nodes[nodeId - 2].coordinates[1] + 100,
    ];

    const _input = node?.inputs || 0;
    const _output = node?.outputs || 0;
    const inputs = [];
    const outputs = [];

    if (_input) {
      for (let i = 0; i < _input; i++) {
        inputs.push({
          id: `input-port-${uuidv4()}`,
          alignment: "left",
          canLink: canAllowToLink,
        });
      }
    }

    if (_output) {
      for (let j = 0; j < _output; j++) {
        outputs.push({
          id: `output-port-${uuidv4()}`,
          alignment: "right",
          canLink: canAllowToLink,
        });
      }
    }

    const nextNode = {
      id: `node--${uuidv4()}`,
      content: node.content,
      render: ConstantNodeBlock[node?.render] || null,
      coordinates: coordinates,
      inputs: inputs,
      outputs: outputs,
      data: {
        ...node.data,
        onClick: deleteNodeFromSchema,
      },
    };

    addNode(nextNode);
  };

  deleteNodeFromSchema = (id: any) => {
    const nodeToRemove = schema.nodes.find((node: any) => {
      if (node.id === id) {
        return true;
      }

      return false;
    });

    removeNode(nodeToRemove);
  };

  console.log("schema=> ", schema);

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
