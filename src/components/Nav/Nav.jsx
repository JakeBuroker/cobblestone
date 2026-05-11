import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { trackEvent } from '../../utils/analytics';
import { business, links } from '../../config/site';

const Nav = () => {
  return (
    <header className="nav">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="nav-grid">
        <div className="nav-left">
          <div className="contact-info">
            <p>{business.addressLine1}</p>
            <p>{business.addressLine2}</p>
            <a
              href={business.phoneHref}
              onClick={() => trackEvent('phone_click', { location: 'header' })}
            >
              {business.phoneDisplay}
            </a>
            <p>{business.hoursDisplay}</p>
          </div>
        </div>

        <NavLink to="/" end className="logo-link" aria-label="Cobblestone Café home">
          <div className="nav-center">
            <img
              src="/images/logo-512.png"
              alt="Cobblestone Café Logo"
              className="logo"
              width="512"
              height="430"
              decoding="async"
            />
          </div>
        </NavLink>

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
              <a
                href={links.doordash}
                target="_blank"
                rel="noreferrer"
                className="order-nav-link"
                onClick={() => trackEvent('order_online_click', { location: 'header_nav' })}
              >
                Order Online
              </a>
            </li>
            <li className="fb-container">
              <a
                href={links.facebook}
                target="_blank"
                rel="noreferrer"
                className="fb-icon"
                aria-label="Cobblestone Café on Facebook"
                onClick={() => trackEvent('facebook_click', { location: 'header_nav' })}
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
