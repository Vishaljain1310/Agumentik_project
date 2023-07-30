import React from 'react';
import './MainBanner.css';
import bannerImage from '../assets/banner-image.png';

const MainBanner = () => {
  return (
    <>
    <div className="main-banner">
      <div className="text-container">
        <h1 className="title">
          SMARTER SCHEDULING SYSTEM
        </h1>
        <div className="subtitle">
          <p>Define creates the perfect schedule</p>
          <p>for your priorities saving upto 40%</p>
        </div>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="image-container">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
      <hr></hr>
      </>
  );
}

export default MainBanner;
