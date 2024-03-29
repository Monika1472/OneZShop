import React,{useState} from 'react'
import { RiShoppingCartFill } from "react-icons/ri";
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css'
import { IoMdReorder } from "react-icons/io";
function Navbar() {

    const[openLinks,setOpenLinks]=useState(false);
    const toggleNavBarForm=()=>
    {
        setOpenLinks(!openLinks);
    }
    const onHandleClick=(e)=>
    {
        e.preventDefault();
        console.log("The icon is clicked");
    }

  return (
      <div className='navbar'>
        <div className='leftSide' id={openLinks?'open':'close'}>
        <Link to="/">
        <center><p><RiShoppingCartFill color='Red' size={30} onClick={onHandleClick}/>OneZ</p></center></Link>
        <div className='hidden-Links'>
            <Link to='/'>Home</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/Register'>Register</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/Feedback'>Feedback</Link>
        </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/Register'>Register</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/Feedback'>Feedback</Link>
            <button onClick={toggleNavBarForm}>  <IoMdReorder /></button>
        </div>
      </div>
  )
}

export default Navbar;
