import React from "react";
import SaveButton from "./SaveButton";

export default function NodesPanel({ nodes, edges, setNodes, setEdges }) {
  // Drag handler to pass node type via dataTransfer
  const onDragStart = (e, nodeType) => {
    e.dataTransfer.setData("application/reactflow", nodeType);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="nodes-panel">
      <h3>Nodes</h3>

      {/* Node template draggable */}
      <div
        className="node-item"
        onDragStart={(e) => onDragStart(e, "textNode")}
        draggable
      >
        Text Node
      </div>

      {/* Save button */}
      <div style={{ marginTop: "auto" }}>
        <SaveButton
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
        />
      </div>
    </aside>
  );
}
