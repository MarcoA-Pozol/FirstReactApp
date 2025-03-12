import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [viewMode, setViewMode] = useState("list"); // Toggle between "list" and "json"

  const API_URL = "https://jsonplaceholder.typicode.com/users"; // Replace with your API

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => setViewMode("list")}>View as List</button>
      <button onClick={() => setViewMode("json")}>View as JSON</button>

      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
        {viewMode === "list" ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> - {item.email}
              </li>
            ))}
          </ul>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default DataFetcher;
