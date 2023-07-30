import React from "react";
import "./MoreValue.css";
import bannerimage4 from '../assets/banner-image4.png';
import bannerimage5 from '../assets/banner-image5.png';
import bannerimage6 from '../assets/banner-image6.png';
const MoreValue = () => {
  return (
    <div className="more-value">
      <div className="t-sub">
        <h1 className="titlen">GET MORE VALUE</h1>
        <p className="sub-t">When people view your calendar, "busy" doesn't always give them the context they need. Define gives just the right amount of into to would-be schedulers.</p>
      </div>
      <div className="images-container">
        <img src={bannerimage4} alt="Image 1" />
        <img src={bannerimage5} alt="Image 2" />
        <img src={bannerimage6} alt="Image 3" />
      </div>
    </div>
  );
};

export default MoreValue;
