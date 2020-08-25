import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock} = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="productName">
                 <h3>{name}</h3>
                 <br/>
                <p><small>buy:{seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>only{stock}left in stock - order soon</small></p>
                <button 
                className="mainBtn"
                onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart}/> add to cart 
                </button>
            </div>
        </div>
    );
};

export default Product;