import { useState, useEffect } from 'react';
import './HomePage.css';

const images = [
  { src: '/images/Good_Food_Display_-_NCI_Visuals_Online.jpg', caption: 'Freshly Roasted Coffee' },
  { src: '/images/hero2.jpg', caption: 'Cozy Indoor Seating' },
  { src: '/images/hero3.jpg', caption: 'Baked In-House Daily' },
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="homepage">
      <div className="hero-carousel">
        <img src={images[currentIndex].src} alt={images[currentIndex].caption} className="hero-image" />
        <div className="hero-caption">
          <h1>{images[currentIndex].caption}</h1>
          <button className="prev-btn" onClick={handlePrev}>‹</button>
          <button className="next-btn" onClick={handleNext}>›</button>
        </div>
      </div>


    </div>
  );
}

export default HomePage;

