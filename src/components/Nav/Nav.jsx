import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-section-left">
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </div>

      <div className="nav-section center">
        <Link to="/"><img src="/images/Logo1.png" alt="Logo" className="logo" /></Link>
      </div>

      <div className="nav-section-right">
        <ul>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
