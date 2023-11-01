import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./homesage.png" alt="" width={120} />
          <span className="secondaryText motto">
            Our vision is to make urning Your Real Estate Dreams Into Reality.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New Delhi, FL 474002, India</span>
          <div className="flexCenter f-menu">
            <span><a href="">Property</a></span>
            <span><a href="">Services</a></span>
            <span><a href="">Products</a></span>
            <span><a href="">About us</a></span>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
