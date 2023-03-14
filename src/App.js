import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import './styles.css'



// Components
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products,setProsucts] = useState(data);
	const [cart, setCart] = useState([]);


	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item])
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products,addItem,cart,setProsucts}}>
				<CartContext.Provider value={{cart}}>
			<Navigation  />

		
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} setCart={setCart}/>
			</Route>


			</CartContext.Provider>

			</ProductContext.Provider>
		</div>
	);
}

export default App;