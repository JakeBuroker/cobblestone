import { BrowserRouter as Router, Routes, Route,NavLink } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import HomePage from '../pages/HomePage/HomePage';
import Footer from '../components/Footer/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;