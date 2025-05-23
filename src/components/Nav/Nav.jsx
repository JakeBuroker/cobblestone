import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
   <header className="nav">
  <div className="nav-grid">
    <div className="nav-left">
      <img src="/images/Logo1.png" alt="Cobblestone Café Logo" className="logo" />
    </div>

    <nav className="nav-center">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Gallery</a></li>
      </ul>
    </nav>

    <div className="nav-right">
      <span className="phone">📞 (651) 555-1234</span>
      <a href="https://facebook.com" target="_blank" className="fb-button" rel="noreferrer">f</a>
    </div>
  </div>
</header>

  );
};

export default Nav;
