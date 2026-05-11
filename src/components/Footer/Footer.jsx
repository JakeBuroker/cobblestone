import { Link } from 'react-router-dom';
import './Footer.css';
import { trackEvent } from '../../utils/analytics';
import { business, links } from '../../config/site';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-contact">
          <h4>{business.shortName}</h4>
          <p>{business.addressLine1}</p>
          <p>{business.addressLine2}</p>
          <p>
            <a
              href={business.phoneHref}
              onClick={() => trackEvent('phone_click', { location: 'footer' })}
            >
              {business.phoneDisplay}
            </a>
          </p>
          <p>{business.hoursDisplay}</p>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>

        <div className="footer-social">
          <h4>Order & Follow</h4>
          <a
            href={links.doordash}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order Cobblestone Café on DoorDash"
            onClick={() => trackEvent('order_online_click', { location: 'footer' })}
          >
            Order on DoorDash
          </a>
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Cobblestone Café on Facebook"
            onClick={() => trackEvent('facebook_click', { location: 'footer' })}
          >
            Facebook
          </a>
          <a
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to Cobblestone Café on Google Maps"
            onClick={() => trackEvent('directions_click', { location: 'footer' })}
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cobblestone Café. All rights reserved.</p>
        <p>Website by Jake Buroker</p>
      </div>
    </footer>
  );
}

export default Footer;
