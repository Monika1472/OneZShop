
// export default Cart
// Cart.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/Photoback.png';
import '../Styles/cart.css';
import CartItem from '../Components/CartItem';
import { RiShoppingCartFill } from "react-icons/ri";

    function Cart({cartItems}) {

        console.log({cartItems},"Hi");
         const onhandleOrder = (e) => {
           e.preventDefault();
           console.log("The order-form is submitted ");
           alert("Your order is confirmed successfully");
         };

        const calculateTotalAmount=()=>{
            return cartItems.reduce((total,item)=>total+item.price*item.quantity,0);
        }
  
    return (
      <div
        className="cart"
        style={{ backgroundImage: `url(${backgroundImage}` }}
        onClick={onhandleOrder}
      >
        <h1 className="cartTitle"><RiShoppingCartFill color='Red' size={30}/>Your orders</h1>
        <div className="cartList">
          {cartItems.map((cartItem, index) => (
            <CartItem key={index} item={cartItem} />
          ))}
        </div>
        <br />
        <div>
          {cartItems.length > 0 && (
            <div className="cartTotal">
              <p>Total Amount for the products you purchased:${calculateTotalAmount()}</p>
            </div>
          )}
          {cartItems.length > 0 && (
            <Link to="/feedback">
              <button>Order Now</button>
            </Link>
          )}
        </div>
      </div>
    );
  }  

export default Cart;
