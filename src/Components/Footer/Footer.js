import React from "react";
import "./Footer.scss";
import { FaTwitter, FaPinterestP, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="hr" />
      <div className="footer-container">
        <div className="contact">
          <span className="logo">LOGO</span>
          <p>Be the first who learns about our great promotions!</p>
          <span>FOLLOW US</span>
          <hr className="hr" />
          <div className="socialMedia">
            <FaTwitter className="footer-share-btns" />
            <FaFacebookF className="footer-share-btns" />
            <FaPinterestP className="footer-share-btns" />
            <FaTwitter className="footer-share-btns" />
          </div>
        </div>
        <div className="our-product">
          <span className="footer-span">OUR PRODUCT</span>
          <hr className="hr footer-hr" />
          <p>Brands</p>
          <p>Gift Certificates</p>
          <p>Affiliate</p>
          <p>Returns</p>
          <p>Specials</p>
        </div>
        <div className="our-store">
          <span className="footer-span">OUR PRODUCT</span>
          <hr className="hr footer-hr" />
          <p>Brands</p>
          <p>Gift Certificates</p>
          <p>Affiliate</p>
          <p>Returns</p>
          <p>Specials</p>
        </div>
        <div className="our-company">
          <span className="footer-span">OUR PRODUCT</span>
          <hr className="hr footer-hr" />
          <p>Brands</p>
          <p>Gift Certificates</p>
          <p>Affiliate</p>
          <p>Returns</p>
          <p>Specials</p>
        </div>
        <div className="subscribe">
          <span className="footer-span">OUR PRODUCT</span>
          <hr className="hr footer-hr" />
          <p>Brands</p>
          <p>Gift Certificates</p>
          <p>Affiliate</p>
          <p>Returns</p>
          <p>Specials</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
