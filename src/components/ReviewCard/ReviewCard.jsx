import { useState } from 'react';
import './ReviewCard.css';
import { trackEvent } from '../../utils/analytics';

function ReviewCard({ review }) {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const initials = review.author_name
    .split(' ')
    .map((name) => name[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <a
      href={review.author_url}
      target="_blank"
      rel="noopener noreferrer"
      className="review-card"
      onClick={() =>
        trackEvent('google_review_card_click', { reviewer: review.author_name })
      }
    >
      <div className="review-header">
        <div className="review-profile">
          <div className="review-avatar-wrap" aria-hidden="true">
            {!avatarFailed && review.profile_photo_url ? (
              <img
                src={review.profile_photo_url}
                alt=""
                className="review-avatar"
                referrerPolicy="no-referrer"
                onError={() => setAvatarFailed(true)}
              />
            ) : (
              <span className="review-avatar-fallback">{initials}</span>
            )}
          </div>
          <div className="review-author">
            <div className="author-name">{review.author_name}</div>
            <div className="review-meta">
              <span className="local-guide-badge">Local Guide</span>
              <span className="review-count"> · Google review</span>
            </div>
          </div>
        </div>

        <div className="review-rating">
          <span className="stars" aria-label={`${review.rating} out of 5 stars`}>
            ★★★★★
          </span>
        </div>
      </div>

      <div className="review-tags">
        <span className="tag">Dine in</span>
        <span className="tag">Breakfast</span>
        <span className="tag">$10–20</span>
      </div>

      <p className="review-text">{review.text}</p>
    </a>
  );
}

export default ReviewCard;
