import { Link } from 'react-router-dom';
import '../PageStyles.css';

function NotFoundPage() {
  return (
    <main id="main-content" className="page-shell">
      <section className="page-hero">
        <h1>Page Not Found</h1>
        <p>
          This page is not on the menu, but the homepage can get you back to the
          cafe.
        </p>
        <div className="page-actions">
          <Link to="/" className="page-button">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
