import styles from './ThingsToKnow.module.css';

export const ThingsToKnow: React.FC = () => {
  return (
    <section className={styles.thingsSection}>
      <h2 className={styles.heading}>Things to know</h2>

      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.columnIcon}>
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="24" height="24" rx="2"/>
              <path d="M4 12h24M12 4v8M20 4v8M10 18h4M10 22h4"/>
            </svg>
          </div>
          <h3 className={styles.columnHeading}>Cancellation policy</h3>
          <ul className={styles.list}>
            <li>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</li>
          </ul>
          <button className={styles.showMoreBtn} type="button">
            Show more
            <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m5 7 4 4 4-4"/>
            </svg>
          </button>
        </div>

        <div className={styles.column}>
          <div className={styles.columnIcon}>
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="12" r="5"/>
              <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
            </svg>
          </div>
          <h3 className={styles.columnHeading}>House rules</h3>
          <ul className={styles.list}>
            <li>Check-in after 2:00 pm</li>
            <li>Checkout before 11:00 am</li>
            <li>3 guests maximum</li>
          </ul>
          <button className={styles.showMoreBtn} type="button">
            Show more
            <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m5 7 4 4 4-4"/>
            </svg>
          </button>
        </div>

        <div className={styles.column}>
          <div className={styles.columnIcon}>
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4 6 14v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14L16 4z"/>
              <path d="M12 28V20h8v8"/>
            </svg>
          </div>
          <h3 className={styles.columnHeading}>Safety & property</h3>
          <ul className={styles.list}>
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
          </ul>
          <button className={styles.showMoreBtn} type="button">
            Show more
            <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m5 7 4 4 4-4"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
