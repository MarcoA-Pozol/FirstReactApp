// Libraries
import React from 'react';
// Components
import PackageItem from './components/PackageItem.js';
// Styles
import "./App.css"

function Main() {
  const page_title = <h1 className='hello-world'>Hello World</h1>;

  return (
    <div>
      {page_title}
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

