import React from 'react';
import '../Styles/Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// const onhandleInsta=(e)=>
// {
//   e.preventDefault();
//   window.alert.location="www.instagram.com";
// }
const handleSocialMediaClick = (platform) => {
  switch (platform) {
    case 'Instagram':
      window.location.href = 'https://www.instagram.com';
      break;
    case 'Twitter':
      window.location.href = 'https://www.twitter.com';
      break;
    case 'Facebook':
      window.location.href = 'https://www.facebook.com';
      break;
    case 'LinkedIn':
      window.location.href = 'https://www.linkedin.com';
      break;
    default:
      // Handle default case or do nothing
  }
};

function Footer() {
  return (
    <div className='Footer'>
        <div className='SocialMedia'>
        <button className='icon-btn' onClick={() => handleSocialMediaClick('Instagram')}>
        <FaInstagram className='icon' />
      </button>
      <button className='icon-btn' onClick={() => handleSocialMediaClick('Twitter')}>
        <FaTwitter className='icon' />
      </button>
      <button className='icon-btn' onClick={() => handleSocialMediaClick('Facebook')}>
        <FaFacebook className='icon' />
      </button>
      <button className='icon-btn' onClick={() => handleSocialMediaClick('LinkedIn')}> </button>
        <FaLinkedin className='icon' />
          {/* <FaInstagram/> <FaTwitter/><FaFacebook/><FaLinkedin/> */}
        </div>
        <p>&copy;2023 OneZShopping.com</p>
    </div>
  )
}

export default Footer;
