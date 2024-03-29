import React from 'react'
import { Link } from 'react-router-dom';
import BackgrdImage from '../Images/Photoback.png';
import '../Styles/Home.css'
// import {RiShoppingCartFill} from 'react-icons/ri'

function Home() {
  return (
    <div className='Home' style={{backgroundImage:`url(${BackgrdImage})`}}>
      <div className='Header-Container'>
      {/* <center><p ><RiShoppingCartFill color='Red' size={30}/>OneZ</p></center> */}
            <h1>OneZ</h1>
            <p>In a world full of trends, be a classic – shop smart, shop chic.</p>
            <Link to='/Login'>
            <button>Login</button>
            </Link>
      </div>
    </div>
  )
}

export default Home;
