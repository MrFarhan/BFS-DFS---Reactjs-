import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling
import BFS_DFS_GRAPH from './bfs_dfs_graph';

const BFS_DFS = () => {
  const [graph] = useState({
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
  });
  const [visited, setVisited] = useState({});
  const [traversalType, setTraversalType] = useState('BFS');
  const [traversalResult, setTraversalResult] = useState('');

  const bfs = (startNode) => {
    const queue = [startNode];
    const result = [];
    const visited = {};

    visited[startNode] = true;

    while (queue.length) {
      const currentNode = queue.shift();
      result.push(currentNode);

      graph[currentNode].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    setVisited(visited);
    return result.join(', ');
  };

  const dfs = (startNode) => {
    const result = [];
    const visited = {};

    const dfsUtil = (node) => {
      visited[node] = true;
      result.push(node);

      graph[node].forEach(neighbor => {
        if (!visited[neighbor]) {
          dfsUtil(neighbor);
        }
      });
    };

    dfsUtil(startNode);
    setVisited(visited);
    return result.join(', ');
  };

  const handleTraversal = () => {
    let traversalResult;
    if (traversalType === 'BFS') {
      traversalResult = bfs('A');
    } else if (traversalType === 'DFS') {
      traversalResult = dfs('A');
    }
    setTraversalResult(traversalResult);
  };
  const [simple, setSimple] = useState(true)
  return (
    <div className="container">
      <h1>BFS & DFS Traversal</h1>
      <button onClick={() => setSimple((prev) => !prev)} style={{ marginBottom: 20 }}>Toggle view</button>
      {simple ?
        <>
          <div className="options">
            <label htmlFor="traversalType">Traversal Type:</label>
            <select
              id="traversalType"
              value={traversalType}
              onChange={(e) => setTraversalType(e.target.value)}
            >
              <option value="BFS">BFS</option>
              <option value="DFS">DFS</option>
            </select>
            <button onClick={handleTraversal}>Traverse</button>
          </div>
          <div className="result">
            <h2>{traversalType} Traversal:</h2>
            <p>{traversalResult}</p>
          </div>
        </>
        : <BFS_DFS_GRAPH />}
    </div >
  );
};

export default BFS_DFS;
