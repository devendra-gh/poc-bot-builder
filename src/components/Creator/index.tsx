import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
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

import { canAllowToLink } from "../../utils/helpers";
import { types } from "../../constants";
import {
  NodeBlock,
  DiagramPreview,
  DesignMenu,
  SidebarEditor,
} from "../../components";
import { availableNodesData, diagramData } from "./data";

const ConstantNodeBlock: any = {
  NodeBlock: NodeBlock,
};

const ConstantCanLink: any = {
  canAllowToLink: canAllowToLink,
};

const Creator = () => {
  const [availableNodes] = useState<any>(availableNodesData);

  let deleteNodeFromSchema: any;

  const [workFlowState, setWorkFlowState] = useState<any>({});

  const [sidebarState, setSidebarState] = useState<any>({
    isOpen: false,
    data: {},
  });

  const getInitialNode: any = () => {
    let nodes: any = [];
    let links: any = [];

    nodes = diagramData?.nodes?.map((node: any) => {
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
          id: node.id,
          content: node.content,
          onClick: deleteNodeFromSchema,
        },
      };
    });

    links = diagramData?.links;

    return {
      nodes,
      links,
    };
  };

  let updateStateCreator: any;

  const initialData = getInitialNode();
  const initialSchema = createSchema(initialData);

  const [schema, { onChange, addNode, removeNode }]: any =
    useSchema(initialSchema);

  useEffect(() => {
    setWorkFlowState({
      currentWorkFlowIndex: 0,
      flows: [
        {
          id: `workflow--${uuidv4()}`,
          name: "Workflow 1",
          schema: _.cloneDeep(schema),
        },
      ],
    });
  }, []);

  useEffect(() => {
    if (schema.links) {
      const { currentWorkFlowIndex } = workFlowState;

      if (typeof currentWorkFlowIndex !== "undefined") {
        const _workFlowState = _.cloneDeep(workFlowState);
        const _schema = _.cloneDeep(schema);

        _workFlowState.flows[currentWorkFlowIndex].schema.links = _schema.links;

        setWorkFlowState(_workFlowState);
        onChange(schema);
      }
    }
  }, [schema.links]);

  updateStateCreator = (type: any, payload: any) => {
    switch (type) {
      case types.ON_CHANGE_NODE:
        const _nodes = Object.assign([], schema?.nodes);
        const index = _nodes.findIndex((node: any) => {
          if (node.id === payload.id) {
            return true;
          }

          return false;
        });

        if (index >= 0) {
          delete payload.id;

          _nodes[index] = {
            ..._nodes[index],
            data: {
              ..._nodes[index].data,
              editor: payload,
            },
          };

          onChange({
            nodes: _nodes,
          });
        }

        return;

      case types.ON_CHANGE_SIDEBAR:
        return setSidebarState(payload);
    }
  };

  const addNewNode = (node: any) => {
    const _id = `node--${uuidv4()}`;
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
          id: `input-port--${uuidv4()}`,
          alignment: "left",
          canLink: canAllowToLink,
        });
      }
    }

    if (_output) {
      for (let j = 0; j < _output; j++) {
        outputs.push({
          id: `output-port--${uuidv4()}`,
          alignment: "right",
          canLink: canAllowToLink,
        });
      }
    }

    const nextNode = {
      id: _id,
      content: node.content,
      render: ConstantNodeBlock[node?.render] || null,
      coordinates: coordinates,
      inputs: inputs,
      outputs: outputs,
      data: {
        ...node.data,
        id: _id,
        content: node.content,
        onClick: deleteNodeFromSchema,
        updateStateCreator: updateStateCreator,
      },
    };

    addNode(nextNode);
    addNodeWorkFlowState(nextNode);
  };

  const addNodeWorkFlowState = (node: any) => {
    const { currentWorkFlowIndex } = workFlowState;
    const _workFlowState = _.cloneDeep(workFlowState);
    _workFlowState.flows[currentWorkFlowIndex].schema.nodes.push(node);

    setWorkFlowState(_workFlowState);
  };

  deleteNodeFromSchema = (id: any) => {
    const nodeToRemove = schema.nodes.find((node: any) => {
      if (node.id === id) {
        return true;
      }

      return false;
    });

    removeNode(nodeToRemove);

    setTimeout(() => {
      removeNodeWorkFlowState();
    });
  };

  const removeNodeWorkFlowState = () => {
    const _schema = _.cloneDeep(schema);
    const _workFlowState = _.cloneDeep(workFlowState);
    const { currentWorkFlowIndex } = _workFlowState;

    _workFlowState.flows[currentWorkFlowIndex].schema = _schema;

    setWorkFlowState(_workFlowState);
  };

  const onChangeWorkFlowTabHandler = ({ type, workFlowIndex }: any) => {
    switch (type) {
      case types.ON_CHANGE_WORKFLOW:
        const _workFlowState = _.cloneDeep(workFlowState);
        const selectSchema = _workFlowState.flows[workFlowIndex].schema;

        onChange(selectSchema);
        setWorkFlowState((prev: any) => ({
          ...prev,
          currentWorkFlowIndex: workFlowIndex,
        }));

        return;

      case types.ON_ADD_WORKFLOW:
        onChange(initialSchema);
        setWorkFlowState((prev: any) => ({
          currentWorkFlowIndex: workFlowIndex,
          flows: [
            ...prev.flows,
            {
              id: `workflow--${uuidv4()}`,
              name: `Workflow ${workFlowIndex + 1}`,
              schema: _.cloneDeep(initialSchema),
            },
          ],
        }));

        return;

      case types.ON_UPDATE_WORKFLOW:
        const _updateWorkFlowState = _.cloneDeep(workFlowState);
        const _schema = _.cloneDeep(schema);

        _updateWorkFlowState.flows[workFlowIndex].schema = _schema;

        setWorkFlowState(_updateWorkFlowState);

        return;
    }
  };

  console.log("availableNodes => ", availableNodes);
  console.log("sidebarState => ", sidebarState);
  console.log("workFlowState => ", workFlowState);
  console.log("schema => ", schema);

  return (
    <>
      <DesignMenu availableNodes={availableNodes} addNewNode={addNewNode} />

      <SidebarEditor
        sidebar={sidebarState}
        updateStateCreator={updateStateCreator}
      />

      <DiagramPreview
        schema={schema}
        onChange={onChange}
        addNewNode={addNewNode}
        workFlowState={workFlowState}
        onChangeWorkFlow={onChangeWorkFlowTabHandler}
      />
    </>
  );
};

export default Creator;
