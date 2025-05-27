import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <header className="nav">
      <div className="nav-grid">
        {/* Left: Contact Info */}
        <div className="nav-left">
          <div className="contact-info">
            <p>4760 Washington Square</p>
            <p>White Bear Lake, MN 55110</p>
            <p>(651) 429-6793</p>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="nav-center">
          <img src="/images/Logo1.png" alt="Cobblestone Café Logo" className="logo" />
        </div>

        {/* Right: Nav Links */}
        <nav className="nav-right">
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
      </div>
    </header>
  );
};

export default Nav;

