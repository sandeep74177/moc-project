import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
         
        </div>
        <div className="footer-section">
          <ul>
            <li><a href="#insta"><FaInstagram className="social-icon" /></a></li>
            <li><a href="#facebook"><FaFacebookF className="social-icon" /></a></li>
            <li><a href="#twitter"><FaTwitter className="social-icon" /> </a></li>
            <li><a href="#youtube"><FaYoutube className="social-icon" /> </a></li> 
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Explorin Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
