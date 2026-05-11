import { Link } from 'react-router-dom';
import './Footer.css';
import { trackEvent } from '../../utils/analytics';

const doordashUrl =
  'https://www.doordash.com/store/cobblestone-cafe-white-bear-lake-581572/793365/';
const facebookUrl = 'https://www.facebook.com/people/Cobblestone-Cafe/100042647630381/';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-contact">
          <h4>Cobblestone Café</h4>
          <p>4760 Washington Square</p>
          <p>White Bear Lake, MN 55110</p>
          <p>
            <a
              href="tel:16514296793"
              onClick={() => trackEvent('phone_click', { location: 'footer' })}
            >
              (651) 429-6793
            </a>
          </p>
          <p>Open Daily: 7 AM – 2 PM</p>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          {/* <a href="/gallery">Gallery</a> */}
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>

        <div className="footer-social">
          <h4>Order & Follow</h4>
          <a
            href={doordashUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order Cobblestone Café on DoorDash"
            onClick={() => trackEvent('order_online_click', { location: 'footer' })}
          >
            Order on DoorDash
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Cobblestone Café on Facebook"
            onClick={() => trackEvent('facebook_click', { location: 'footer' })}
          >
            Facebook
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Cobblestone+Cafe+White+Bear+Lake+MN"
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
