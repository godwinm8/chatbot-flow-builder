import React, { useState } from "react";
import NodesPanel from "./components/NodesPanel";
import FlowCanvas from "./components/FlowCanvas";
import SettingsPanel from "./components/SettingsPanel";
import { ReactFlowProvider, useNodesState, useEdgesState } from "reactflow";

export default function App() {
  // State for tracking which node is selected
  const [selectedNode, setSelectedNode] = useState(null);

  // State for nodes and edges, along with handlers
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <div className="app">
      <ReactFlowProvider>
        {/* Show SettingsPanel if a node is selected, otherwise NodesPanel */}
        {selectedNode ? (
          <SettingsPanel
            node={selectedNode}
            setNodes={setNodes}
            setSelectedNode={setSelectedNode}
          />
        ) : (
          <NodesPanel
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}
          />
        )}
        {/* Main flow canvas */}
        <FlowCanvas
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          setSelectedNode={setSelectedNode}
        />
      </ReactFlowProvider>
    </div>
  );
}
