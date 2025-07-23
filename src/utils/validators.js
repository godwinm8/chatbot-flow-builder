export function validateFlow(nodes, edges) {
  const sourceNodeIds = edges.map((e) => e.source);
  const nodesWithNoOutgoing = nodes.filter(
    (node) => !sourceNodeIds.includes(node.id)
  );

  if (nodes.length > 1 && nodesWithNoOutgoing.length > 1) {
    return {
      isValid: false,
      message: "More than one node has no outgoing connection.",
    };
  }

  return { isValid: true };
}
