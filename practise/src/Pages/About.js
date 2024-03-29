import React from 'react'
import BackgrdImage from '../Images/Photoback.png';
import '../Styles/About.css'
import { RiShoppingCartFill } from "react-icons/ri";
function About() {
  return (
    <div className='about'  style={{backgroundImage:`url(${BackgrdImage})`}}>
      <div className='icon'>
       <center><h1><RiShoppingCartFill color='Red' size={60}/>OneZ</h1></center>
      <div className='aboutTop'>
      </div>
      <div className='aboutBottom'></div>
      <center><h3>ABOUT US</h3></center>
      <p>
      <b>Welcome to OneZ,</b> where your shopping journey transforms into an 
      unforgettable experience.<br/> Embark on a virtual adventure through our vast collection, 
      meticulously curated to bring you the latest trends and timeless classics.<br/>
      Dive into the world of effortless elegance and unparalleled convenience, 
      as OneZ bridges the gap between style and accessibility.<br/>
      Discover a seamless online shopping haven where every click unlocks a realm of 
      possibilities, and every purchase is a statement of your unique taste. <br/>
      With us, your fashion aspirations come to life at the speed of a mouse click, 
      promising a delightful odyssey through the ever-evolving landscape of online shopping.<br/>
      <i><b>Shop smart, shop chic – welcome to OneZ, where trends meet tradition, 
      and your style reigns supreme.</b></i><br/>
      </p>
    </div>
    </div>
  )
}

export default About;
