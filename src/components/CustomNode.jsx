import React from "react";
import { Handle, Position, useReactFlow } from "reactflow";

// CustomNode component for Text Node
export default function CustomNode({ id, data }) {
  const { setNodes } = useReactFlow();

  const handleChange = (e) => {
    const newText = e.target.value;
    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, text: newText } }
          : node
      )
    );
  };

  return (
    <div className="custom-node">
      {/* Target handle at the top */}
      <Handle type="target" position={Position.Top} />

      {/* Display text */}
      <input
        type="text"
        value={data.text}
        onChange={handleChange}
        className="node-input"
      />

      {/* Source handle at the bottom */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
