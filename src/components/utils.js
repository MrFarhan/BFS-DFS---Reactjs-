// create an array with all the possible nodes on the list
export const uniqueNodes = (edgesList) => {
  let nodes = [];
  for (let i = 0; i < edgesList.length; i++) {
    nodes.push(edgesList[i].nodeOne);
    nodes.push(edgesList[i].nodeTwo);
  }
  // remove duplicated values
  return [...new Set(nodes)];
}

// Create a Graph of nodes and the edges array assosiated to it
export const getGraph = (nodes, edgesList) => nodes.reduce((graph, node) => {

  const edges = edgesList.reduce((connections, edge) => {

    if (edge.nodeOne === node) {
      connections.push(edge.nodeTwo);
    }

    if (edge.nodeTwo === node) {
      connections.push(edge.nodeOne);
    }

    return connections;
  }, []);

  graph[node] = {
    node,
    edges,
    visited: false,
    parent: null, // will be used to find the connected nodes
  };

  return graph;
}, {});

// return an array with the nodes on the connection
export const getPath = (endNode) => {
  // return the connection path
  const path = [];
  path.push(endNode.node);

  let next = endNode.parent;
  while (next != null) {
    path.push(next.node);
    next = next.parent;
  }

  return path.reverse();
};
