import React, { useState } from "react";

const RemoveAddButton = () => {
    const [itemOnCart, setItemOnCart] = useState(false);
    const [itemAmount, setItemAmount] = useState(0);

    function removeItem() {
        if (itemOnCart === true && itemAmount === 1) {
            setItemOnCart(false)
            setItemAmount(0);
        } else if (itemOnCart === true && itemAmount > 1) {
            setItemAmount(itemAmount-1);
        } else {
            console.log("There was a counting error during removing item from shoping cart.");
        }
    }

    function addItem() {
        if (itemOnCart === false && itemAmount === 0) {
            setItemOnCart(true);
            setItemAmount(itemAmount + 1);
        } else if (itemOnCart === true && itemAmount >= 1) {
            setItemAmount(itemAmount+1);
        } 
    }

    return (
        <div>
            <button onClick={removeItem}>-</button>
            <button onClick={addItem}>+</button>
        </div>
    );
}

export default RemoveAddButton;