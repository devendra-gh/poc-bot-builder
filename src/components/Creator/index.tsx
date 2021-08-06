import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import {
  createSchema,
  useSchema,
  validateNode,
  // validateNodes,
  // validateSchema,
  // validateLink,
  // validateLinks,
  // validatePort,
} from "beautiful-react-diagrams";
import { canAllowToLink, getPort } from "../../utils/helpers";
import { types } from "../../constants";
import { availableNodesData, diagramData, initialWorkflowState } from "./data";
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

const Creator = () => {
  let updateStateCreator: any;
  let deleteNodeFromSchema: any;

  const [availableNodes] = useState<any>(availableNodesData);
  const [workFlowState, setWorkFlowState] = useState<any>({});
  const [sidebarState, setSidebarState] = useState<any>({
    isOpen: false,
    data: {},
  });

  const getInitialNode: any = (payload: any) => {
    let nodes: any = [];
    let links: any = [];

    nodes = payload?.nodes?.map((node: any) => {
      const _input = node?.inputs || [];
      const _output = node?.outputs || [];
      let inputs = [];
      let outputs = [];

      if (_input.length) {
        inputs = _input.map((input: any) => {
          return {
            ...input,
            canLink: ConstantCanLink[node?.data?.helper?.canLinkInput],
          };
        });
      }

      if (_output.length) {
        outputs = _output.map((output: any) => {
          return {
            ...output,
            canLink: ConstantCanLink[node?.data?.helper?.canLinkOutput],
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
        render: ConstantNodeBlock[node?.data?.helper?.renderNode] || null,
        data: {
          ...node.data,
          id: node.id,
          content: node.content,
          onClick: deleteNodeFromSchema,
          updateStateCreator: updateStateCreator,
        },
      };
    });

    links = payload?.links;

    return {
      nodes,
      links,
    };
  };

  const initialData = getInitialNode(diagramData);
  const initialSchema = createSchema(initialData);

  const [schema, { onChange, addNode, removeNode, connect }]: any =
    useSchema(initialSchema);

  useEffect(() => {
    setWorkFlowState(initialWorkflowState(schema));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schema.links]);

  updateStateCreator = ({ type, formData, allowOutputPort = false }: any) => {
    switch (type) {
      case types.ON_CHANGE_NODE:
        const _nodes = _.cloneDeep(schema?.nodes);
        const index = _nodes.findIndex((node: any) => {
          if (node.id === formData.id) {
            return true;
          }

          return false;
        });

        if (index >= 0) {
          const _payload = _.cloneDeep(formData?.payload);

          _nodes[index] = {
            ..._nodes[index],
            data: {
              ..._nodes[index].data,
              payload: _payload,
            },
          };

          if (allowOutputPort !== false) {
            const _outputs = [];

            if (allowOutputPort > 0) {
              for (let i = 0; i < allowOutputPort; i++) {
                _outputs.push(
                  getPort(
                    ConstantCanLink[_nodes[index]?.data?.helper?.canLinkOutput],
                    false
                  )
                );
              }
            }

            _nodes[index] = {
              ..._nodes[index],
              outputs: _outputs,
            };
          }

          const _workFlowState = _.cloneDeep(workFlowState);
          const { currentWorkFlowIndex } = _workFlowState;
          _workFlowState.flows[currentWorkFlowIndex].schema.nodes = _nodes;

          setWorkFlowState(_workFlowState);

          if (allowOutputPort !== false) {
            if (validateNode(_nodes[index])) {
              removeNode(_nodes[index]);
              addNode(_nodes[index]);
            }
          } else {
            onChange({
              nodes: _nodes,
            });
          }
        }

        return;

      case types.ON_CHANGE_SIDEBAR:
        return setSidebarState(formData);
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
        inputs.push(
          getPort(ConstantCanLink[node?.data?.helper?.canLinkInput], true)
        );
      }
    }

    if (_output) {
      for (let j = 0; j < _output; j++) {
        outputs.push(
          getPort(ConstantCanLink[node?.data?.helper?.canLinkOutput], false)
        );
      }
    }

    const nextNode: any = {
      id: _id,
      content: node.content,
      disableDrag: node.disableDrag,
      render: ConstantNodeBlock[node?.data?.helper?.renderNode] || null,
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

    if (validateNode(nextNode)) {
      addNode(nextNode);
      setTimeout(() => {
        updateWorkFlowState();
      });
    }
  };

  deleteNodeFromSchema = (id: any) => {
    const _schema = _.cloneDeep(schema);

    const nodeToRemove = _schema?.nodes?.find((node: any) => {
      if (node.id === id) {
        return true;
      }
      return false;
    });

    if (nodeToRemove) {
      removeNode(nodeToRemove);
      setTimeout(() => {
        updateWorkFlowState();
      });
    }
  };

  const updateWorkFlowState = () => {
    const _schema = _.cloneDeep(schema);
    const _workFlowState = _.cloneDeep(workFlowState);
    const { currentWorkFlowIndex } = _workFlowState;

    _workFlowState.flows[currentWorkFlowIndex].schema = _schema;

    setWorkFlowState(_workFlowState);
  };

  const onChangeWorkFlowTabHandler = ({
    type,
    workFlowIndex,
    importSchema,
  }: any) => {
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

      case types.ON_IMPORT_WORKFLOW:
        const payload = _.cloneDeep(importSchema);
        const _importSchema = getInitialNode(payload);

        const _updateImportWorkFlowState = _.cloneDeep(workFlowState);
        const _updatedSchema: any = createSchema(_importSchema);
        _updateImportWorkFlowState.flows[workFlowIndex].schema = _updatedSchema;

        setWorkFlowState(_updateImportWorkFlowState);

        schema.nodes.forEach((node: any) => {
          removeNode(node);
        });
        _updatedSchema?.nodes.forEach((node: any) => {
          addNode(node);
        });
        _updatedSchema?.links.forEach((link: any) => {
          const inputId = link.input || "";
          const outputId = link.output || "";
          connect(inputId, outputId);
        });

        return;
    }
  };

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
