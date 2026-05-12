import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import HomePage from '../pages/HomePage/HomePage';
import MenuPage from '../pages/MenuPage/MenuPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PrivacyPage from '../pages/PrivacyPage/PrivacyPage';
import Footer from '../components/Footer/Footer';
import Analytics from '../components/Analytics/Analytics';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import './App.css';


function App() {
  return (
    <Router>
      <Analytics />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
