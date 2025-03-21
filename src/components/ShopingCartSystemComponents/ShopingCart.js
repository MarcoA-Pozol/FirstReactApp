import React from ´react´;
import ItemsMenu from './ItemsMenu.js';
import '../../styles/ShoppingCart.css';

function ShoppingCart() {
	const items_list = [
		{ name: "Soap", price: "27", image_url: image1 , item_amount: 0},
		{ name: "Soup", price: "11.50", image_url: image2, item_amount: 0 },
		{ name: "Beef Steak 180gr", price: "32.60", image_url: image3, item_amount: 0 },
		{ name: "Shampoo", price: "45.99", image_url: image4, item_amount: 0 },
		{ name: "Toothpaste", price: "23.75", image_url: image5, item_amount: 0 },
		{ name: "Chocolate Bar", price: "15.20", image_url: image6, item_amount: 0 },
		{ name: "Coffee 500g", price: "89.00", image_url: image1, item_amount: 0 },
		{ name: "Rice 1kg", price: "22.30", image_url: image2, item_amount: 0 },
		{ name: "Cooking Oil 1L", price: "50.99", image_url: image3, item_amount: 0 },
		{ name: "Milk 1L", price: "20.00", image_url: image4, item_amount: 0 },
		{ name: "Bread Loaf", price: "18.50", image_url: image5, item_amount: 0 },
		{ name: "Cheese 200g", price: "40.75", image_url: image6, item_amount: 0 },
	];
	
	
	
	return (
		<>
			<ItemsMenu items={items_list}/>
			<ShoppingList/>
		</>
	);
}

const ShoppingList = ({items_list}) => {
	
	
	let display_cart = false;
	let items_on_cart_amount = 0;
	
	// Sum every item amount
	for(let item=0; items_list.length; item++){
		items_on_cart_amount = items_on_cart_amount + item.amount;
	}
	
	// If items on cart is over  or equals 1 item in cart, then the cart will show the list of items.
	if (items_on_cart_amount >= 1 ) {
		display_cart = true
	} else {
		display_cart = false;
	}
	
	return (
		<div className='shoping-list'>
		
			{if display_cart === false && <p>Add items to your shoping cart first.</p>}
			
			{if display_cart === true &&
				<ul className='shoping-list-title'>
					<li>Name</li>
					<li>Amount</li>
					<li>Price</li>
					<li>Total</li>
				</ul>
				// Display items on shoping cart only if their amount is over 0.
				{items_list.map((item) => (
					{if item.amount >= 1 && <p>{item.name} | {item.amount} | {item.price} | {item.price*item.amount}</p>}
				))}
			}
			
		</div>
	)
}

export default ShoppingCart;
