import { Link } from 'react-router-dom';

import '../PageStyles.css';

function PrivacyPage() {
  return (
    <main id="main-content" className="page-shell privacy-page">
      <section className="page-hero privacy-hero">
        <p className="menu-kicker">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>
          Cobblestone Café keeps this website simple. We use basic website
          analytics to understand what visitors use most, and we do not sell
          personal information.
        </p>
      </section>

      <section className="privacy-content">
        <article className="page-card">
          <h2>Information We Collect</h2>
          <p>
            This website may collect basic analytics information such as pages
            viewed, menu clicks, direction clicks, phone clicks, order clicks,
            approximate location, device type, browser, and referral source.
          </p>
          <p>
            If you call the cafe, open Google Maps, order through DoorDash, leave
            a Google review, or visit Facebook, those services may process
            information according to their own privacy policies.
          </p>
        </article>

        <article className="page-card">
          <h2>How We Use It</h2>
          <p>
            We use analytics to understand whether visitors can find the menu,
            directions, phone number, online ordering, and other useful cafe
            information.
          </p>
          <p>
            We do not use this website to collect payments, create customer
            accounts, or store sensitive customer data.
          </p>
        </article>

        <article className="page-card">
          <h2>Third-Party Services</h2>
          <p>
            This site may use Google Analytics, Google Maps, DoorDash, Facebook,
            and Google Reviews links or embeds. These services may use cookies or
            similar technologies when you interact with them.
          </p>
        </article>

        <article className="page-card">
          <h2>Contact</h2>
          <p>
            Questions about this website or privacy policy can be directed to
            Cobblestone Café at{' '}
            <a href="tel:16514296793">(651) 429-6793</a>.
          </p>
          <p className="privacy-updated">Last updated May 11, 2026.</p>
        </article>
      </section>

      <div className="page-actions">
        <Link to="/" className="page-button">
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default PrivacyPage;
