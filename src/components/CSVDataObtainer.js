import React, { useState } from "react";
import Papa from "papaparse";

const CSVReader = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          setData(result.data);
        },
        header: true, // Set to false if CSV doesn't have headers
        skipEmptyLines: true,
      });
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CSVReader;
