import React from "react";
import "../../styles/ItemComponent.css";
import RemoveAddButton from "./RemoveAddButtons.js";

const ItemComponent = ({name, image_url, price}) => {

    return (
        <div className="item-card">
            <h2>{name}</h2>
            <img src={image_url} alt={name} width="200"/>
            <p>$ <strong>{price}</strong></p>
            <RemoveAddButton/>
        </div>
    );
}

export default ItemComponent;