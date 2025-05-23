import React from 'react';
import { NavLink } from 'react-router-dom';
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
  <li>
    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>
      Menu
    </NavLink>
  </li>
  <li>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
      Contact
    </NavLink>
  </li>
  <li>
    <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>
      Gallery
    </NavLink>
  </li>
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
