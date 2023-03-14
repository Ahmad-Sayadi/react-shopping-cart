import React,{useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Item = props => {



	const {products,setProducts}= useContext(ProductContext)
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button  onClick={()=>setProducts(products.filter(c=> c.id !== props.item.id))}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;