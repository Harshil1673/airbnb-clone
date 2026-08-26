import React from 'react';
import styles from './Reviews.module.css';

interface ReviewData {
  id: string;
  name: string;
  avatarImg?: string;
  initial?: string;
  meta: string;
  rating: number;
  date: string;
  text: string;
}

const reviews: ReviewData[] = [
  {
    id: '1',
    name: 'Amit',
    initial: 'A',
    meta: '2 months on Airbnb',
    rating: 5,
    date: '1 week ago',
    text: 'Wonderful place to stay at. So far one of the best places we\'ve been to in Goa. The apartment is very well maintained and comfortable...',
  },
  {
    id: '2',
    name: 'Aheesh',
    avatarImg: '/avatars/rev4.jpeg',
    meta: '3 years on Airbnb',
    rating: 5,
    date: '2 weeks ago',
    text: 'We had a wonderful stay. The apartment is very clean, comfortable. The jacuzzi is amazing and the pool is great...',
  },
  {
    id: '3',
    name: 'Daniel',
    avatarImg: '/avatars/rev3.jpeg',
    meta: 'British Columbia, Canada',
    rating: 5,
    date: 'September 2025',
    text: 'Very good stay! Good location, easy access, 10 min walk to the beach. 5 min walk to restaurants and bars. The jacuzzi was amazing...',
  },
  {
    id: '4',
    name: 'Pramod',
    initial: 'P',
    meta: 'Goa, India',
    rating: 5,
    date: 'September 2025',
    text: 'Very good property, very well maintained, very clean. Great amenities including pool, gym, and jacuzzi. Highly recommended...',
  },
  {
    id: '5',
    name: 'Irene',
    initial: 'I',
    meta: 'Florida, US',
    rating: 5,
    date: 'August 2025',
    text: 'Such a fun surprise, from the decor to the hot tub to the pool and gym. Everything was perfect for our stay...',
  },
  {
    id: '6',
    name: 'Jack',
    initial: 'J',
    meta: '5 years on Airbnb',
    rating: 5,
    date: 'August 2025',
    text: 'Great stay! The host was very responsive and helpful. The apartment was clean and well-equipped. Would definitely come back...',
  },
];

const categories = [
  {
    name: 'Cleanliness',
    score: 5.0,
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v6M9 8h6l4 8H7l2-8zM7 16h14v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V16z"/>
      </svg>
    ),
  },
  {
    name: 'Accuracy',
    score: 5.0,
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="16" cy="16" r="12"/>
        <path d="m11 16 3.5 3.5L21 12"/>
      </svg>
    ),
  },
  {
    name: 'Check-in',
    score: 5.0,
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="7"/>
        <path d="m17 17 11 11M24 20l3 3M21 23l3 3"/>
      </svg>
    ),
  },
  {
    name: 'Communication',
    score: 5.0,
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h24v16H14l-6 6v-6H4V6z"/>
      </svg>
    ),
  },
  {
    name: 'Location',
    score: 4.8,
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6l8-3 8 3 8-3v22l-8 3-8-3-8 3V6zM12 3v22M20 6v22"/>
      </svg>
    ),
  },
  {
    name: 'Value',
    score: 4.8,
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2 2 18l12 12L30 14V2H18z"/>
        <circle cx="23" cy="9" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

const tags = [
  { name: 'Comfort', count: 6, icon: '/icons/comfort.png' },
  { name: 'Accuracy', count: 5, icon: '/icons/accuracy.png' },
  { name: 'Hot tub', count: 5, icon: '/icons/hot-tub.png' },
  { name: 'Condition', count: 4, icon: '/icons/condition.png' },
  { name: 'Hospitality', count: 8, icon: '/icons/hospitality.png' },
  { name: 'Cleanliness', count: 4, icon: '/icons/cleanliness.png' },
  { name: 'Amenities', count: 2, icon: '/icons/amenities.png' },
  { name: 'Decor', count: 2, icon: '/icons/decor.png' },
  { name: 'Indoor spaces', count: 2, icon: '/icons/indoor-spaces.png' },
  { name: 'Location', count: 2, icon: '/icons/location.png' },
];

const overallBars = [
  { label: '5', width: 90 },
  { label: '4', width: 10 },
  { label: '3', width: 0 },
  { label: '2', width: 0 },
  { label: '1', width: 0 },
];

export const Reviews: React.FC = () => {
  return (
    <section className={styles.reviewsSection}>
      {/* Big Rating Hero */}
      <div className={styles.ratingHero}>
        <div className={styles.ratingDisplay}>
          <img src="/icons/laurel-left.png" alt="" className={styles.laurelBig} />
          <span className={styles.bigScore}>4.95</span>
          <img src="/icons/laurel-right.png" alt="" className={styles.laurelBig} />
        </div>
        <div className={styles.guestFavTitle}>Guest favourite</div>
        <p className={styles.guestFavDesc}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className={styles.howReviewsLink} type="button">
          How reviews work
        </button>
      </div>

      {/* Category Scores Row */}
      <div className={styles.categoriesRow}>
        {/* Overall Rating with bar chart */}
        <div className={styles.overallRating}>
          <div className={styles.overallRatingLabel}>Overall rating</div>
          {overallBars.map((bar) => (
            <div key={bar.label} className={styles.barRow}>
              <span className={styles.barLabel}>{bar.label}</span>
              <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: `${bar.width}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Category scores */}
        {categories.map((cat) => (
          <div key={cat.name} className={styles.categoryItem}>
            <span className={styles.categoryLabel}>{cat.name}</span>
            <span className={styles.categoryScore}>{cat.score.toFixed(1)}</span>
            <span className={styles.categoryIcon}>{cat.icon}</span>
          </div>
        ))}
      </div>

      {/* Filter Tags */}
      <div className={styles.tagsContainer}>
        {tags.map((tag) => (
          <button key={tag.name} className={styles.tagPill} type="button">
            <img src={tag.icon} alt="" className={styles.tagIcon} />
            <span>{tag.name} {tag.count}</span>
          </button>
        ))}
      </div>

      {/* Review Cards */}
      <div className={styles.reviewGrid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewerInfo}>
              <div className={styles.avatar}>
                {review.avatarImg ? (
                  <img src={review.avatarImg} alt={review.name} className={styles.avatarImg} />
                ) : (
                  <span>{review.initial}</span>
                )}
              </div>
              <div className={styles.reviewerDetails}>
                <div className={styles.reviewerName}>{review.name}</div>
                <div className={styles.reviewerMeta}>{review.meta}</div>
              </div>
            </div>
            <div className={styles.reviewMeta}>
              <span className={styles.reviewStars}>
                {'★'.repeat(review.rating)}
              </span>
              <span className={styles.reviewDot}>·</span>
              <span className={styles.reviewDate}>{review.date}</span>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
            <button className={styles.showMoreBtn} type="button">Show more</button>
          </div>
        ))}
      </div>

      <button className={styles.showAllBtn} type="button">
        Show all 19 reviews
      </button>
    </section>
  );
};
