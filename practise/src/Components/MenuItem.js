import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Cart from '../Pages/Cart';
import '../Styles/MenuItem.css'

function MenuItem({image,name,price,onAddToCart}) {
  const [count,setCount]=useState(0);
  
  return (
    <> 
    <div className='menuItem' >
    <div style={{backgroundImage:`url(${image})`}}></div>
      <h1><b>{name}</b></h1>
      <p>₹{price}</p>

        <center>
          {/* <button onClick={() => onAddToCart({ name,image, price })}>Add to Cart</button> */}
          <button onClick={() => onAddToCart({ name,image, price })}>Add to Cart</button>
        </center>
      </div>
      </>
  )
}

export default MenuItem;
