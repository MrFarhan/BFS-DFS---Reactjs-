import React, { useEffect, useState } from "react";
import { bfs } from "./bfs";
// import { bfs } from "breadth-first-search";

const BFS_DFS_GRAPH = () => {
  const friendsList = [
    {
      nodeOne: "Karachi",
      nodeTwo: "Hyderabad",
    },
    {
      nodeOne: "Hyderabad",
      nodeTwo: "Sukkur",
    },
    {
      nodeOne: "Sukkur",
      nodeTwo: "Sadiqabad",
    },
    {
      nodeOne: "Sadiqabad",
      nodeTwo: "Multan",
    },
    {
      nodeOne: "Multan",
      nodeTwo: "Lahore",
    },
    {
      nodeOne: "Sukkur",
      nodeTwo: "Rohri",
    },
    {
      nodeOne: "Sukkur",
      nodeTwo: "Rahim Yar Khan",
    },
    {
      nodeOne: "Karachi",
      nodeTwo: "Thatta",
    },

    {
      nodeOne: "Hyderabad",
      nodeTwo: "Tando Muhammad Khan",
    },
  ];

  const [nodeOne, setNodeOne] = useState("Karachi");
  const [nodeTwo, setNodeTwo] = useState("Lahore");

  // create a possible connection
  const possibleConnection = {
    nodeOne: nodeOne,
    nodeTwo: nodeTwo,
  };

  const uniqueNamesSet = new Set();

  friendsList.forEach((friend) => {
    uniqueNamesSet.add(friend.nodeOne);
    uniqueNamesSet.add(friend.nodeTwo);
  });

  const uniqueNamesArray = Array.from(uniqueNamesSet);

  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setData(bfs(friendsList, possibleConnection));
  }, [nodeOne || nodeTwo || refresh]);

  useEffect(() => {
    setData(bfs(friendsList, possibleConnection));
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "20px",
        }}
      >
        <label htmlFor="traversalType">From:</label>
        <select
          id="traversalType"
          value={nodeOne}
          onChange={(e) => setNodeOne(e.target.value)}
        >
          {uniqueNamesArray?.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "20px",
        }}
      >
        <label htmlFor="traversalType">To:</label>
        <select
          id="traversalType"
          value={nodeTwo}
          onChange={(e) => setNodeTwo(e.target.value)}
        >
          {uniqueNamesArray?.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>

      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          fontSize: "20px",
          fontWeight: 700,
          color: "#fff",
        }}
      >
        {data?.map((value, index) => {
          return (
            <div key={index} style={{ display: "flex", gap: "10px" }}>
              <span>{index + 1}</span>
              <span>{value}</span>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <button onClick={() => setRefresh((prev) => !prev)}>Refresh</button>
    </div>
  );
};

export default BFS_DFS_GRAPH;
