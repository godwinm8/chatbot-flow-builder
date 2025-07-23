import React from "react";

export default function SettingsPanel({ node, setNodes, setSelectedNode }) {
  // Handler to update text of the selected node
  const handleChange = (e) => {
    const newText = e.target.value;
    // update the selected node's text
    setNodes((nds) =>
      nds.map((n) =>
        n.id === node.id ? { ...n, data: { ...n.data, text: newText } } : n
      )
    );
  };

  return (
    <aside className="nodes-panel">
      <h3>Settings</h3>

      {/* Input field to edit node text */}
      <label>
        Node Text:
        <input
          type="text"
          value={node.data.text}
          onChange={handleChange}
          placeholder="Enter node text"
        />
      </label>

      {/* Button to close settings and go back to NodesPanel */}
      <button
        onClick={() => setSelectedNode(null)}
        style={{ marginTop: "10px" }}
      >
        Close Settings
      </button>
    </aside>
  );
}
