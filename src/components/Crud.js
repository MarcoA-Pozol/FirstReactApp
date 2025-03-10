import React, { useState} from "react";
import "../styles/Crud.css"
import axios from "axios";


const Crud = () => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async (e) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        // fetch("https://localhost:9600/luablacontentapi/cards/")
            .then((response) => {
                setWords(response.data);
                setLoading(false); 
            })
            .catch((error) => {
                setWords(error);
                setLoading(false);
            });
    };

    const cleanData = (e) => {
        setWords([]);
    };

    return(
        <div>
            <hr></hr>
            <h2 className="title">CRUD Operations</h2>
            <button onClick={fetchData} className="fetch-data-button">Fetch</button>
            <button onClick={cleanData} className="clean-data-button">Clean</button>
            <div className="response-container">
               <ul>
                    {words.map((user) => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                    {words.map((user) => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                    {words.map((user) => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                    {words.map((user) => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                    {words.map((user) => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                </ul> 
            </div>
            
            <hr></hr>
        </div>
    );
};

export default Crud;