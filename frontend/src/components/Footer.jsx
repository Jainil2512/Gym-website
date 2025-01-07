import React from "react";
import { FaInstagram, FaWhatsapp, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: "1rem 0", background: "black" }}>
    
      <p style={{margin:"2px", color:"white"}}>connect with us on </p>
      <a
        href="https://www.instagram.com/dev_fitts?utm_source=qr&igsh=MXEwbmM0a2tpdGhiMw=="
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 15px" }}
      >
        
        <FaInstagram size={30} color="#E4405F" />
      </a>
      <a
        href="https://wa.me/qr/BPPSQQH5Y7AKI1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 15px" }}
      >
        
        <FaWhatsapp size={30} color="#25D366" />
      </a>
     
    </footer>
  );
};

export default Footer;
