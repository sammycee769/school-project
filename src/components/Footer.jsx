import React from "react";
import "./Footer.css";
import { FaInstagram,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="icons">
          <a href="https://www.instagram.com/gadget_shub123?igsh=MTVzYjFjcjN5MW10eg=="target='_blank' ><FaInstagram /></a>
        <a href="https://x.com/Gadget_sHub?t=IoqMxoWPE9ZeD-raEfyGSQ&s=09" target='_blank' ><FaXTwitter /></a>
        <a href="https://wa.me/+2347014570442" target='_blank' ><FaWhatsapp /></a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/reportaproblem">Report A Problem</a></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>📍 108 Adeshina st,Ijesha tedo, Lagos, Nigeria.</p>
          <p>📞 +234 704 156 7890</p>
          <p>✉ info@Topstar.com</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="copyright">© 2025 TopStar Schools. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
