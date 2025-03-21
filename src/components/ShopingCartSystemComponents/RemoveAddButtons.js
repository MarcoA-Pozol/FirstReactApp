import React, { useState } from "react";

const RemoveAddButton = ({removeItem, addItem, itemAmount}) => {
	const counter_value = itemAmount;
	
    return (
        <div>
            <button onClick={removeItem}>-</button>
            <input type="text" value={counter_value}></input>
            <button onClick={addItem}>+</button>
        </div>
    );
}

export default RemoveAddButton;