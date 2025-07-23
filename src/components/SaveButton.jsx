import React from "react";

export default function SaveButton({ nodes, edges, setNodes, setEdges }) {
  const handleSave = () => {
    if (nodes.length > 1) {
      // Find nodes that have no incoming edges
      const nodesWithoutTarget = nodes.filter(
        (node) => !edges.some((edge) => edge.target === node.id)
      );

      // If more than 1 node without target → error
      if (nodesWithoutTarget.length > 1) {
        alert(
          `❌ Error: More than one node has no incoming connection:\n${nodesWithoutTarget
            .map((n) => n.id)
            .join(", ")}`
        );

        // 🧹 Clear the canvas even after error
        setNodes([]);
        setEdges([]);
        return;
      }
    }

    console.log("✅ Saved Flow:", { nodes, edges });
    alert("✅ Flow saved! Check console.");

    // 🧹 Clear the canvas after success
    setNodes([]);
    setEdges([]);
  };

  return (
    <button className="save-button" onClick={handleSave}>
      Save Flow
    </button>
  );
}
