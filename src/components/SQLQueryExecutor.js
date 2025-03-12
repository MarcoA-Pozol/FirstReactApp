import React, { useState } from "react";

const SQLQueryExecutor = () => {
  const [database, setDatabase] = useState("");
  const [dbType, setDbType] = useState("postgres"); // Default DB type
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [viewMode, setViewMode] = useState("list");

  const fetchQueryData = async () => {
    try {
      const response = await fetch("http://localhost:5000/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ database, sql: query, dbType }),
      });

      const result = await response.json();
      if (result.error) throw new Error(result.error);
      setData(result);
    } catch (error) {
      console.error("Query Error:", error);
      setData([{ error: error.message }]);
    }
  };

  return (
    <div>
      <h2>SQL Query Executor</h2>
      <input
        type="text"
        placeholder="Enter Database Name"
        value={database}
        onChange={(e) => setDatabase(e.target.value)}
      />
      <select value={dbType} onChange={(e) => setDbType(e.target.value)}>
        <option value="postgres">PostgreSQL</option>
        <option value="mysql">MySQL</option>
      </select>
      <textarea
        placeholder="Enter SQL Query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchQueryData}>Run Query</button>

      <button onClick={() => setViewMode("list")}>View as List</button>
      <button onClick={() => setViewMode("json")}>View as JSON</button>

      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
        {viewMode === "list" ? (
          <ul>
            {data.map((row, index) => (
              <li key={index}>{JSON.stringify(row)}</li>
            ))}
          </ul>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default SQLQueryExecutor;
