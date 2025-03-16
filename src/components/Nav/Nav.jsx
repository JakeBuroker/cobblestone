import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Nav() {
  return (

    <nav>
        <h1>Restaurant</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;