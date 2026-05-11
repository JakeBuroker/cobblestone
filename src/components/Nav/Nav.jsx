import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { trackEvent } from '../../utils/analytics';

const doordashUrl =
  'https://www.doordash.com/store/cobblestone-cafe-white-bear-lake-581572/793365/';
const facebookUrl = 'https://www.facebook.com/people/Cobblestone-Cafe/100042647630381/';

const Nav = () => {
  return (
    <header className="nav">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="nav-grid">
        <div className="nav-left">
          <div className="contact-info">
            <p>4760 Washington Square</p>
            <p>White Bear Lake, MN 55110</p>
            <a
              href="tel:16514296793"
              onClick={() => trackEvent('phone_click', { location: 'header' })}
            >
              (651) 429-6793
            </a>
            <p>Open Daily: 7 AM – 2 PM</p>
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
                href={doordashUrl}
                target="_blank"
                rel="noreferrer"
                className="order-nav-link"
                onClick={() => trackEvent('order_online_click', { location: 'header_nav' })}
              >
                Order Online
              </a>
            </li>
            {/* <li>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>
                Gallery
              </NavLink>
            </li> */}
            <li className="fb-container">
              <a
                href={facebookUrl}
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
