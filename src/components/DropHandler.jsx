import React from "react";
import { useReactFlow } from "reactflow";

export default function DropHandler({ setNodes }) {
  const { screenToFlowPosition } = useReactFlow();

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
    <div
      onDrop={onDrop}
      style={{ position: "absolute", inset: 0, zIndex: 1 }}
    />
  );
}
