import '../PageStyles.css';

function ContactPage() {
  return (
    <main id="main-content" className="page-shell">
      <section className="page-hero">
        <h1>Contact</h1>
        <p>
          Stop by Cobblestone Café in downtown White Bear Lake for breakfast,
          lunch, coffee, or a classic malt.
        </p>
      </section>

      <section className="contact-layout">
        <div className="page-card">
          <h2>Visit Us</h2>
          <p>4760 Washington Square</p>
          <p>White Bear Lake, MN 55110</p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:16514296793">(651) 429-6793</a>
          </p>
          <p>
            <strong>Open Daily:</strong> 7 AM – 2 PM
          </p>
          <div className="page-actions">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Cobblestone+Cafe+White+Bear+Lake+MN"
              target="_blank"
              rel="noopener noreferrer"
              className="page-button"
              aria-label="Get directions to Cobblestone Café on Google Maps"
            >
              Get Directions
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
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
