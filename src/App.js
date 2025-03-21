// Libraries
import React from 'react';
// Components
import PackageItem from './components/PackageItem.js';
import ShoppingCart from './components/ShopingCartSystemComponents/ShoppingCart.js';
// Styles
import "./App.css"

function Main() {
  const page_title = <h1 className='hello-world'>MallCenter</h1>;

  return (
    <div>
      {page_title}

      <ShoppingCart/>
        
    </div>
  );
}

export default Main;

