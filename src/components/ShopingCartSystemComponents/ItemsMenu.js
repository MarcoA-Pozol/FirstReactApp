import React from "react";
import ItemComponent from "./ItemComponent.js";
import "../../styles/ItemsMenu.css";

const ItemsMenu = ({items}) => {
    const items_list = items;

    return (
        <div style={itemsMenuStyle}>
            {/*Impossible to use "for" loop on JSX code, we have to use the ".map()" function instead.*/}
            {items_list.map((item) => (
                <ItemComponent name={item.name} image_url={item.image_url} price={item.price}/>
            ))}
        </div>
    );
}

const itemsMenuStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
}

export default ItemsMenu;