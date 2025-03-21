import React from "react";
import "../../styles/ItemComponent.css";
import RemoveAddButton from "./RemoveAddButtons.js";

const ItemComponent = ({name, image_url, price}) => {
	
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
        <div className="item-card">
            <h2>{name}</h2>
            <img src={image_url} alt={name} width="200"/>
            <p>$ <strong>{price}</strong></p>
            <RemoveAddButton removeItem={removeItem} addItem={addItem} itemAmount={itemAmount}/>
        </div>
    );
}

export default ItemComponent;