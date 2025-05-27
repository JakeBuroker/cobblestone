import { useEffect, useState } from 'react';
import './GoogleReviews.css'; 

function GoogleReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/reviews/dev')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Failed to load reviews:', err));
  }, []);

  return (
    <section className="reviews">
      <h2>What Customers Are Saying</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <p>⭐ {review.rating} – {review.author_name}</p>
            <p>"{review.text}"</p>
          </div>
        ))
      ) : (
        <p>Loading reviews...</p>
      )}
      <a href="https://www.google.com/search?q=cobblestone+cafe" target="_blank" rel="noopener noreferrer">
        Read More on Google
      </a>
    </section>
  );
}

export default GoogleReviews;
