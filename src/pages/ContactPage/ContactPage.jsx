import '../PageStyles.css';

const doordashUrl =
  'https://www.doordash.com/store/cobblestone-cafe-white-bear-lake-581572/793365/';

function ContactPage() {
  return (
    <main id="main-content" className="page-shell">
      <section className="page-hero contact-hero">
        <p className="menu-kicker">Visit Cobblestone</p>
        <h1>Contact</h1>
        <p>
          Stop by Cobblestone Café in downtown White Bear Lake for breakfast,
          lunch, coffee, or a classic malt.
        </p>
      </section>

      <section className="contact-layout">
        <div className="page-card contact-info-card">
          <h2>Visit Us</h2>
          <address className="contact-details">
            <div>
              <span>Address</span>
              <strong>4760 Washington Square</strong>
              <p>White Bear Lake, MN 55110</p>
            </div>
            <div>
              <span>Phone</span>
              <a href="tel:16514296793">(651) 429-6793</a>
            </div>
            <div>
              <span>Hours</span>
              <strong>Open Daily 7 AM – 2 PM</strong>
            </div>
          </address>

          <div className="contact-actions" aria-label="Contact actions">
            <a href="tel:16514296793" className="page-button">
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Cobblestone+Cafe+White+Bear+Lake+MN"
              target="_blank"
              rel="noopener noreferrer"
              className="page-button"
              aria-label="Get directions to Cobblestone Café on Google Maps"
            >
              Get Directions
            </a>
            <a
              href={doordashUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="page-button"
              aria-label="Order Cobblestone Café on DoorDash"
            >
              Order on DoorDash
            </a>
          </div>
        </div>

        <div className="page-card contact-map">
          <iframe
            title="Map to Cobblestone Café"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.0282134758922!2d-93.008888!3d45.085221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d0e996108a15%3A0x331dc4d0fa18494d!2sCobblestone%20Cafe!5e0!3m2!1sen!2sus!4v1748386419499!5m2!1sen!2sus"
            loading="lazy"
            allowFullScreen=""
          ></iframe>
          <div className="contact-map-overlay" aria-hidden="true">
            <span>Downtown White Bear Lake</span>
            <strong>4760 Washington Square</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
