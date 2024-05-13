import React, { useEffect, useState } from 'react'
import { bfs } from './bfs';
// import { bfs } from "breadth-first-search";

const BFS_DFS_GRAPH = () => {

  const friendsList = [
    {
      nodeOne: "Jhon",
      nodeTwo: "Matt",
    },
    {
      nodeOne: "Jhon",
      nodeTwo: "Robert",
    },
    {
      nodeOne: "Jhon",
      nodeTwo: "Ana",
    },
    {
      nodeOne: "Matt",
      nodeTwo: "Robert",
    },
    {
      nodeOne: "Ana",
      nodeTwo: "Susan",
    },
    {
      nodeOne: "Ana",
      nodeTwo: "Robert",
    },
    {
      nodeOne: "Robert",
      nodeTwo: "Liz",
    },

    {
      nodeOne: "Robert",
      nodeTwo: "Susan",
    },
  ];

  // create a possible connection
  const possibleConnection = {
    nodeOne: "Jhon",
    nodeTwo: "Liz"
  };

  const [data, setData] = useState(null)
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    setData(bfs(friendsList, possibleConnection))
  }, [refresh])



  return (
    <div>{data}
      <br />
      <br />
      <button onClick={() => setRefresh((prev) => !prev)}>Refresh</button>
    </div >
  )
}

export default BFS_DFS_GRAPH