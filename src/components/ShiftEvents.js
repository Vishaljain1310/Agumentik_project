import React from "react";
import "./ShiftEvents.css";
import bannerImage2 from "../assets/banner-image2.png";
import icon1 from '../assets/icons8-bullseye-96.png';
import icon2 from '../assets/icons8-heart-90.png'
import icon3 from '../assets/icons8-ok-90 (1).png'

const ShiftEvents = () => {
  return (
    <>
      <div className="shift-main">
        <div className="shift-events">
          <div className="icons-container">
            <div className="main-text">
              <h1>14M+</h1>
            
            </div>
            <div className="icon-item">
              <img src={icon1} alt="Icon 1" />
              <h3>Flexible time blocking</h3>
           
            </div>
            <div className="icon-item">
              <img src={icon2} alt="Icon 2" />
              <h3>Task Management</h3>
            
            </div>
            <div className="icon-item">
              <img src={icon3} alt="Icon 3" />
              <h3>Smart routines</h3>
            
            </div>
          </div>
        </div>
        <div className="main-banner1">
          <div className="image-container1">
            <img src={bannerImage2} alt="Banner" />
          </div>
          <div className="text-container1">
            <h1 className="title1">DYNAMICALLY SHIFT EVENTS FOR FREE</h1>
            <div className="subtitle1">
              <p>All you need to do is express your needs, give a </p>
              <p>rough idea of when you went it to happen.</p>
            </div>
            <button className="get-started-btn1">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShiftEvents;
