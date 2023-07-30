import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          Tasko
        </div>
      </div>
      <div className="middle-section">
        <div className="tab">Features</div>
        <div className="tab">Use Cases</div>
        <div className="tab">Blog</div>
        <div className="tab">Pricing</div>
      </div>
      <div className="right-section">
        <button className="login-btn">Login</button>
        <button className="get-started-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
