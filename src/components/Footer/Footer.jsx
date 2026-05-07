import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-contact">
          <h4>Cobblestone Café</h4>
          <p>4760 Washington Square</p>
          <p>White Bear Lake, MN 55110</p>
          <p>(651) 429-6793</p>
          <p>Open Daily: 7 AM – 3 PM</p>
          <p>
            <a href="mailto:cobblestonecafe@example.com">
              cobblestonecafe@example.com
            </a>
          </p>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          {/* <a href="/gallery">Gallery</a> */}
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <a
            href="https://www.facebook.com/cobblestonecafemn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Cobblestone+Cafe+White+Bear+Lake+MN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Cobblestone Café. All rights reserved.</p>
        <p>Website by Jake Buroker</p>
      </div>
    </footer>
  );
}

export default Footer;
