import React from 'react';
import './Entire.css';
import bannerImage3 from '../assets/banner-image3.png';

const Entire = () => {
  return (
    <>
    <div className="main-banner3">
      <div className="text-container3">
        <h1 className="title3">
         ENTIRE TASKO AGENDA FOR BUSINESS
        </h1>
        <div className="subtitle3">
          <p>Define gives you quick stats on where your</p>
          <p> time goes each week</p>
        </div>
        <button className="get-started-btn3">Get Started</button>
      </div>
      <div className="image-container">
        <img src={bannerImage3} alt="Banner" />
      </div>
    </div>

    <footer className="footer">
      <div className="left-footer">All Rights Reserved</div>
      <div className="center-footer">TASKO</div>
      <div className="right-footer">Terms &amp; Conditions | Privacy Policy</div>
    </footer>
    </>
  );
}

export default Entire;
