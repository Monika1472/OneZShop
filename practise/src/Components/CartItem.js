// CartItem.js

import React from 'react';

function CartItem({ item }) {
    return (
      <div className='cartItem'>
        <img src={item.image} alt={item.name} />
        <h1><b>{item.name}</b></h1>
        <p>₹{item.price}</p>
      </div>
    );
  }

export default CartItem;
