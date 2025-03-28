import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot1">
        <img src={logo}></img>
        <p>SHOPPER</p>
      </div>
      <div className="foot2">
        <p>Company</p>
        <p>Products</p>
        <p>Offices</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="foot3">
      <img src={whatsapp_icon}></img>
      <img src={pintester_icon}></img>
      <img src={instagram_icon}></img>
      </div>
      <hr/>
      <p id='copy'>Copyright @2024 all rights reserved</p>
    </div>
  );
};

export default Footer;