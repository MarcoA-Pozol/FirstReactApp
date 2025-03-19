// Libraries
import React from 'react';
// Components
import PackageItem from './components/PackageItem.js';
import ItemsMenu from './components/ShopingCartSystemComponents/ItemsMenu.js';
// Styles
import "./App.css"
// Media (Images)
import image1 from "./assets/images/soap.jpg";
import image2 from "./assets/images/soup.jpg";
import image3 from "./assets/images/beef.jpg";
import image4 from "./assets/images/shampoo.jpg";
import image5 from "./assets/images/toothpaste.jpg";
import image6 from "./assets/images/chocolatebar.jpg";

function Main() {
  const page_title = <h1 className='hello-world'>Hello World</h1>;
  const items_list = [
    { name: "Soap", price: "27", image_url: image1 },
    { name: "Soup", price: "11.50", image_url: image2 },
    { name: "Beef Steak 180gr", price: "32.60", image_url: image3 },
    { name: "Shampoo", price: "45.99", image_url: image4 },
    { name: "Toothpaste", price: "23.75", image_url: image5 },
    { name: "Chocolate Bar", price: "15.20", image_url: image6 },
    { name: "Coffee 500g", price: "89.00", image_url: image1 },
    { name: "Rice 1kg", price: "22.30", image_url: image2 },
    { name: "Cooking Oil 1L", price: "50.99", image_url: image3 },
    { name: "Milk 1L", price: "20.00", image_url: image4 },
    { name: "Bread Loaf", price: "18.50", image_url: image5 },
    { name: "Cheese 200g", price: "40.75", image_url: image6 },
];

  return (
    <div>
      {page_title}

      <ItemsMenu items={items_list}/>

      <div className='items-list'>
        <h2>Items list</h2>
        <hr></hr>
        <p>
            <PackageItem item_name="Binoculars 4x Zoom" is_packed={true}/>
            <PackageItem item_name="T-Shirt XL Blue" is_packed={false}/>
            <PackageItem item_name="Cotton Package Small" is_packed={true}/>
            <PackageItem item_name="Tuna Can 345gr" is_packed={true}/>
            <PackageItem item_name="First Aid Kid" is_packed={true}/>
            <PackageItem item_name="Book 'The Fisherman'" is_packed={false}/>
            <PackageItem item_name="6 Pack Water Bottles 600ml" is_packed={false}/>
            <PackageItem item_name="Lamp 36w 12h" is_packed={true}/>
            <PackageItem item_name="Basic Tools Kid" is_packed={true}/>
            <PackageItem item_name="Portable Beed" is_packed={false}/>
        </p>
      </div>
        
    </div>
  );
}

export default Main;

