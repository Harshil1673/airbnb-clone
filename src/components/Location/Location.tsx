import styles from './Location.module.css';

export const Location: React.FC = () => {
  return (
    <section className={styles.locationSection}>
      <h2 className={styles.heading}>Where you'll be</h2>

      <div className={styles.mapContainer}>
        <img
          src="/map.png"
          alt="Map location in Candolim, Goa, India"
          className={styles.mapImage}
        />
      </div>

      <p className={styles.exactLocation}>
        Candolim, Goa, India
      </p>

      <p className={styles.exactLocationSub}>
        Exact location will be provided after booking.
      </p>

      <h3 className={styles.nhHeading}>Neighbourhood highlights</h3>
      <p className={styles.nhText}>
        Located in the heart of Candolim, Amor De Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
      </p>

      <button className={styles.showMore} type="button">
        Show more
        <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m5 7 4 4 4-4"/>
        </svg>
      </button>
    </section>
  );
};
