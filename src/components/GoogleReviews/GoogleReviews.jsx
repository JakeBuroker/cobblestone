import ReviewCard from '../ReviewCard/ReviewCard';
import './GoogleReviews.css';

const reviews = [
  {
    author_name: 'Caroline Manfredi',
    author_url: 'https://maps.app.goo.gl/PVs5Vwe3ygKEJsn27',
    profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjpRnNFOEAcjGSZ2IDIy-pH2t4LXoCVSp2j9dYtxM44DBMsKIUaw=w144-h144-p-rp-mo-br100',
    rating: 5,
    text: 'Best waffle I have ever had in my life. I got the waffles with strawberries and cream and it did not disappoint. Service was fast, the waitress was nice. ',
    date: 'a month ago',
  },
  {
    author_name: 'Meghan Knudsen',
    author_url: 'https://maps.app.goo.gl/Cue6ww6ehSvkxPoB6',
    profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjUXhlam0AGvvDizt_UQOcyS-P_BzFMcP7q_VwZK05WfwQHm1qW8=s72-c-rp-mo-ba5-br100',
    rating: 5,
    text: 'This is one of my favorite brunch places. They have the most exquisite raspberry french toast. I used to go here with my grandma growing up. I hope it stays around forever ❤️❤️❤️',
    date: 'Jan 11, 2024',
  },
  {
    author_name: 'Jason Bishop',
    author_url: 'https://maps.app.goo.gl/pdD3FFgqhKRhNJaP9',
    profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXiVc1criomDX0eIgrHGLO3-C72gdsfx_ScsYp8h5eYmHr3T8bj=w72-h72-p-rp-mo-ba4-br100',
    rating: 5,
    text: 'Quaint and cozy cafe with friendly staff and really good biscuits and gravy:)',
    date: 'Jan 11, 2024',
  },
];

function GoogleReviews() {
  return (
    <section className="reviews">
      <h2>What Customers Are Saying</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <a
        href="https://www.google.com/search?q=cobblestone+cafe"
        target="_blank"
        rel="noopener noreferrer"
        className="google-link"
      >
        Read More on Google
      </a>
    </section>
  );
}

export default GoogleReviews;
