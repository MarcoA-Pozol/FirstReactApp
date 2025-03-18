import React, {useState} from 'react';
import Papa from 'papaparse';

const StoreItems = () => {
    const [data, setData] = useState([]); // An empty array because no data is fetched yet.

    const handleFileUpload = (event) => {
        const csv_file = 'csv_files/store_items.csv';
        
        if (csv_file) {
            Papa.parse(csv_file, {
                complete: (result) => {
                    setData(result.data)
                },
                header: true, // CSV file contains header, set to false if it does not.
                skipEmptyLines: true,
            });
        } else {
            console.error('CSV file could not be loaded.');
        }
    };

    const items_list = data;
    console.log("Data:", items_list)

    handleFileUpload();

    return (
        <div>
            {data}
        </div>
    );
}

export default StoreItems;