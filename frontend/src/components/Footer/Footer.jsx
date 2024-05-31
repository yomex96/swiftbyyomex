import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footerContent">
        <div className="footerContentLeft">
          <img className="logo" src={assets.logo} alt="" />
          <p>We are the best in food delivery.</p>
          <div className="footerSocialIcons">
            <a href="https://twitter.com/benjminrichie">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://www.facebook.com/benjminrichie">
            <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/benjminrichie/">
            <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footerContentCentre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footContentRight">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>07081868797</li>
            <li>09160765827</li>
            <li>09015069742</li>
            <li>
              <a href="mailto:benjminrichie@email.com">
                benjminrichie@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyRight">
        &copy; Yomex, Twitch and benjminrichie {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;