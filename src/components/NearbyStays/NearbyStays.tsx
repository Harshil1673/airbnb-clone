import { useState } from 'react';
import styles from './NearbyStays.module.css';

const allPropertiesPage1 = [
  {
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: '4.91',
    image: '/stays/s1.jpeg',
  },
  {
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: '4.95',
    image: '/stays/s2.jpeg',
  },
  {
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: '4.94',
    image: '/stays/s3.jpeg',
  },
  {
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: '4.96',
    image: '/stays/s4.jpeg',
  },
  {
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: '4.95',
    image: '/stays/s5.jpeg',
  },
];

const allPropertiesPage2 = [
  {
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: '4.95',
    image: '/stays/s2.jpeg',
  },
  {
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: '4.94',
    image: '/stays/s3.jpeg',
  },
  {
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: '4.96',
    image: '/stays/s4.jpeg',
  },
  {
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: '4.95',
    image: '/stays/s5.jpeg',
  },
  {
    title: 'Serene Sunset Villa Candolim with private lawn',
    price: '₹31,500',
    rating: '4.92',
    image: '/stays/s6.jpeg',
  },
];

export default function NearbyStays() {
  const [page, setPage] = useState(1);
  const currentProperties = page === 1 ? allPropertiesPage1 : allPropertiesPage2;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>More stays nearby</h2>
        <div className={styles.headerRight}>
          <span className={styles.pageIndicator}>{page} / 2</span>
          <button
            className={styles.navBtn}
            disabled={page === 1}
            onClick={() => setPage(1)}
            type="button"
            aria-label="Previous stays"
          >
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"/>
            </svg>
          </button>
          <button
            className={styles.navBtn}
            disabled={page === 2}
            onClick={() => setPage(2)}
            type="button"
            aria-label="Next stays"
          >
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"/>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.grid}>
        {currentProperties.map((prop, idx) => (
          <div key={idx} className={styles.card}>
            <img
              src={prop.image}
              alt={prop.title}
              className={styles.cardImage}
              loading="lazy"
            />
            <div className={styles.cardTitle}>{prop.title}</div>
            <div className={styles.cardMeta}>
              <span className={styles.cardPrice}>{prop.price}</span>
              <span className={styles.cardRating}>
                <span className={styles.star}>★</span>
                {prop.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
