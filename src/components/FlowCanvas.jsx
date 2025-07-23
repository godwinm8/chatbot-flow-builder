import React from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";

const nodeTypes = { textNode: CustomNode };

export default function FlowCanvas({
  nodes,
  edges,
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  setSelectedNode,
}) {
  const { screenToFlowPosition } = useReactFlow();

  // Handler when connecting two nodes
  const onConnect = (params) => {
    // Check if source already has an outgoing edge
    const hasOutgoing = edges.some((e) => e.source === params.source);
    if (hasOutgoing) {
      alert(`❌ Source handle already has an edge.`);
      return;
    }
    setEdges((eds) => addEdge(params, eds));
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  // When dropping a new node onto canvas
  const onDrop = (e) => {
    e.preventDefault();

    const type = e.dataTransfer.getData("application/reactflow");
    if (!type) return;

    const position = screenToFlowPosition({ x: e.clientX, y: e.clientY });

    const newNode = {
      id: `${+new Date()}`,
      type,
      position,
      data: { text: "" },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div style={{ flex: 1 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => setSelectedNode(node)}
        fitView
        onDragOver={onDragOver}
        onDrop={onDrop}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
