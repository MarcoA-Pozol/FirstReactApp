const express = require("express");
const cors = require("cors");
const { Pool } = require("pg"); // For PostgreSQL
const mysql = require("mysql2/promise"); // For MySQL

const app = express();
app.use(cors());
app.use(express.json());

// Configure PostgreSQL connection (modify as needed)
const dbConfig = {
  user: "your_db_user",
  host: "localhost",
  database: "your_default_db",
  password: "your_password",
  port: 5432, // Change to 3306 for MySQL
};

// PostgreSQL connection
const pgPool = new Pool(dbConfig);

// MySQL connection (optional)
const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "your_db_user",
  password: "your_password",
  database: "your_default_db",
  waitForConnections: true,
  connectionLimit: 10,
});

// Endpoint to execute SQL query
app.post("/query", async (req, res) => {
  const { database, sql, dbType } = req.body;

  if (!database || !sql || !dbType) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    let result;

    if (dbType === "postgres") {
      const client = await pgPool.connect();
      await client.query(`SET search_path TO ${database};`); // Switch schema
      result = await client.query(sql);
      client.release();
    } else if (dbType === "mysql") {
      const connection = await mysqlPool.getConnection();
      await connection.query(`USE ${database};`);
      [result] = await connection.query(sql);
      connection.release();
    } else {
      return res.status(400).json({ error: "Invalid database type" });
    }

    res.json(result.rows || result); // PostgreSQL uses rows, MySQL returns array
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
