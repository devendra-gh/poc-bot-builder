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

const initialStateSchema = createSchema({
  nodes: [],
  links: [],
});

const Creator = () => {
  const [schema, { onChange, addNode, removeNode, connect }]: any =
    useSchema(initialStateSchema);

  const [availableNodes] = useState<any>(availableNodesData);
  const [workFlowState, setWorkFlowState] = useState<any>({});
  const [sidebarState, setSidebarState] = useState<any>({
    isOpen: false,
    data: {},
  });

  useEffect(() => {
    const schemaData = loadInitialSchema(diagramData);
    const initialSchema = createSchema(schemaData);

    onChange(initialSchema);
    setWorkFlowState(initialWorkflowState(initialSchema));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (schema.links) {
      const { currentWorkFlowIndex } = workFlowState;

      if (typeof currentWorkFlowIndex !== "undefined") {
        const _schema: any = _.cloneDeep(schema);
        const newLinks = getUniqueLinks(_schema.links);

        const _workFlowState = _.cloneDeep(workFlowState);
        _workFlowState.flows[currentWorkFlowIndex].schema.links = newLinks;

        setWorkFlowState(_workFlowState);
        onChange({ ...schema, links: newLinks });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schema.links.length]);

  const getUniqueLinks = (links: any) => {
    const linksIn: any = {};
    const linksOut: any = {};

    links.forEach((link: any) => {
      linksIn[link.input] = link.output;
    });

    Object.keys(linksIn).forEach((link: any) => {
      linksOut[linksIn[link]] = link;
    });

    return Object.keys(linksOut).map((key: any) => {
      return {
        output: key,
        input: linksOut[key],
      };
    });
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
        updateStateSidebarEditor: updateStateSidebarEditor,
      },
    };

    if (validateNode(nextNode)) {
      addNode(nextNode);
      updateWorkFlowState();
    }
  };

  const deleteNodeFromSchema = (id: any) => {
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

  const loadInitialSchema = (payload: any) => {
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
          updateStateSidebarEditor: updateStateSidebarEditor,
        },
      };
    });

    links = payload?.links;

    return {
      nodes,
      links,
    };
  };

  const updateStateSidebarEditor = ({
    type,
    formData,
    allowOutputPort = false,
  }: any) => {
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

          // onChange is not working properly for disconnected link and render UI
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

  const onChangeWorkFlowTabHandler = ({
    type,
    workFlowIndex,
    importSchema,
  }: any) => {
    switch (type) {
      case types.ON_CHANGE_WORKFLOW_TAB:
        const _workFlowState = _.cloneDeep(workFlowState);
        const selectSchema = _workFlowState.flows[workFlowIndex].schema;

        onChange(selectSchema);
        setWorkFlowState((prev: any) => ({
          ...prev,
          currentWorkFlowIndex: workFlowIndex,
        }));

        return;

      case types.ON_ADD_WORKFLOW:
        const _schemaData = loadInitialSchema(diagramData);
        const _initialSchema = createSchema(_schemaData);

        onChange(_initialSchema);
        setWorkFlowState((prev: any) => ({
          currentWorkFlowIndex: workFlowIndex,
          flows: [
            ...prev.flows,
            {
              id: `workflow--${uuidv4()}`,
              name: `Workflow ${workFlowIndex + 1}`,
              schema: _.cloneDeep(_initialSchema),
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

        const _importSchema = loadInitialSchema(payload);
        const _updatedSchema: any = createSchema(_importSchema);
        const _updateImportWorkFlowState = _.cloneDeep(workFlowState);

        _updateImportWorkFlowState.flows[workFlowIndex].schema = _updatedSchema;
        setWorkFlowState(_updateImportWorkFlowState);

        // Notes: onChange Event is not working properly when delete node
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
        updateStateSidebarEditor={updateStateSidebarEditor}
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
