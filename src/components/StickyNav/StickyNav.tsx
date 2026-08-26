import { useState, useEffect } from 'react'
import styles from './StickyNav.module.css'

const tabs = [
  { label: 'Photos', id: 'photos' },
  { label: 'Amenities', id: 'amenities-section' },
  { label: 'Reviews', id: 'reviews-section' },
  { label: 'Location', id: 'location-section' },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 550);

      // Determine active section
      const locationEl = document.getElementById('location-section');
      const reviewsEl = document.getElementById('reviews-section');
      const amenitiesEl = document.getElementById('amenities-section');

      if (locationEl && scrollY >= locationEl.offsetTop - 120) {
        setActiveTab('location-section');
      } else if (reviewsEl && scrollY >= reviewsEl.offsetTop - 120) {
        setActiveTab('reviews-section');
      } else if (amenitiesEl && scrollY >= amenitiesEl.offsetTop - 120) {
        setActiveTab('amenities-section');
      } else {
        setActiveTab('photos');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'photos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveTab('photos');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return (
    <nav
      className={`${styles.nav} ${visible ? styles.visible : ''}`}
      aria-label="Section navigation"
      aria-hidden={!visible}
    >
      <div className={styles.navInner}>
        <div className={styles.tabs} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => scrollTo(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.rightSide}>
          <div className={styles.navPrice}>
            <span className={styles.navPriceAmount}>₹28,499</span>
            <span className={styles.navPriceNight}> for 5 nights</span>
            <div className={styles.navRating}>★ 4.95 · 19 reviews</div>
          </div>
          <button
            className={styles.navReserveButton}
            onClick={() => {
              const el = document.getElementById('amenities-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            type="button"
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
