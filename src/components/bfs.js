import { getGraph, getPath, uniqueNodes } from "./utils.js";

// Exported BFS function
export const bfs = (edgesList, connection) => {
  // Initialize an empty array to store the path
  const path = [];

  // Validate input parameters
  if (!edgesList.length || !connection.nodeOne || !connection.nodeTwo) {
    return "Parameters not valid.";
  }

  // Destructure connection object to get start and end nodes
  const { nodeOne: start, nodeTwo: end } = connection;
  
  // Get unique nodes and graph structure from utility functions
  const nodes = uniqueNodes(edgesList);
  const graph = getGraph(nodes, edgesList);

  // BFS algorithm initialization
  const queue = []; // Initialize queue for BFS
  console.log(queue, "Initial queue");

  // Mark the start node as visited and add to the queue
  graph[start].visited = true;
  queue.push(graph[start]);
  console.log(`Starting BFS from node: ${start}`);

  // Process nodes in the queue
  while (queue.length > 0) {
    // Dequeue the first node in the queue
    const current = queue.shift();
    console.log(`Dequeued node: ${current.node}`);

    // Check if we reached the end node
    if (current.node === end) {
      console.log(`End node ${end} found!`);
      // Get and return the path using the getPath utility function
      const finalPath = getPath(current);
      console.log(`Path found: ${finalPath}`);
      return finalPath;
    }

    // Inspect connected nodes (neighbors)
    for (let i = 0; i < current.edges.length; i++) {
      const cities = graph[current.edges[i]];
      if (!cities.visited) {
        // Mark neighbor as visited, set parent to current node, and enqueue it
        cities.visited = true;
        cities.parent = current;
        queue.push(cities);
        console.log(`Visited node: ${cities.node}, added to queue`);
      }
    }
  }

  // Return the path (empty if no path found)
  console.log("No path found");
  return path;
};
