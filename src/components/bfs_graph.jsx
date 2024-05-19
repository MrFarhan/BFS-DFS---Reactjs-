import React, { useEffect, useState } from "react";
import { bfs } from "./bfs";

const BFS_GRAPH = () => {
  const citiesList = [
    {
      nodeOne: "Karachi",
      nodeTwo: "Thatta",
    },
    {
      nodeOne: "Karachi",
      nodeTwo: "Bela",
    },
    {
      nodeOne: "Bela",
      nodeTwo: "Turbat",
    },
    {
      nodeOne: "Karachi",
      nodeTwo: "Pasni",
    },
    {
      nodeOne: "Pasni",
      nodeTwo: "Gawadar",
    },
    {
      nodeOne: "Gawadar",
      nodeTwo: "Jiwani",
    },
    {
      nodeOne: "Thatta",
      nodeTwo: "Hyderabad",
    },
    {
      nodeOne: "Hyderabad",
      nodeTwo: "Nawabshah",
    },
    {
      nodeOne: "Hyderabad",
      nodeTwo: "Mirpurkhas",
    },
    {
      nodeOne: "Nawabshah",
      nodeTwo: "Sukkur",
    },
    {
      nodeOne: "Sukkur",
      nodeTwo: "Jacobabad",
    },
    {
      nodeOne: "Sukkur",
      nodeTwo: "Rahim Yar Khan",
    },
    {
      nodeOne: "Jacobabad",
      nodeTwo: "Quetta",
    },
    {
      nodeOne: "Rahim Yar Khan",
      nodeTwo: "Khan Pur",
    },
    {
      nodeOne: "Khan Pur",
      nodeTwo: "Multan",
    },
    {
      nodeOne: "Multan",
      nodeTwo: "Faisalabad",
    },
    {
      nodeOne: "Faisalabad",
      nodeTwo: "Lahore",
    },
    {
      nodeOne: "Multan",
      nodeTwo: "Lahore",
    },
    {
      nodeOne: "Multan",
      nodeTwo: "Faisalabad",
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

  citiesList.forEach((friend) => {
    uniqueNamesSet.add(friend.nodeOne);
    uniqueNamesSet.add(friend.nodeTwo);
  });

  const uniqueNamesArray = Array.from(uniqueNamesSet);

  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setData(bfs(citiesList, possibleConnection));
  }, [nodeOne , nodeTwo , refresh]);

  useEffect(() => {
    setData(bfs(citiesList, possibleConnection));
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

export default BFS_GRAPH;
