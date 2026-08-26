import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <h3 className={styles.columnHeading}>Support</h3>
            <ul className={styles.links}>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">AirCover</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Report neighbourhood concern</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnHeading}>Hosting</h3>
            <ul className={styles.links}>
              <li><a href="#">Airbnb your home</a></li>
              <li><a href="#">AirCover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Hosting responsibly</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnHeading}>Airbnb</h3>
            <ul className={styles.links}>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">New features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.bottomLeft}>
            <span>© 2026 Airbnb, Inc.</span>
            <span className={styles.dot}>·</span>
            <a href="#">Privacy</a>
            <span className={styles.dot}>·</span>
            <a href="#">Terms</a>
            <span className={styles.dot}>·</span>
            <a href="#">Sitemap</a>
            <span className={styles.dot}>·</span>
            <a href="#">Company details</a>
          </div>

          <div className={styles.bottomRight}>
            <button className={styles.languageBtn}>
              <span className={styles.globeIcon}>🌐</span>
              English (IN)
            </button>
            <button className={styles.currencyBtn}>
              ₹ INR
            </button>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>fb</a>
              <a href="#" className={styles.socialIcon}>tw</a>
              <a href="#" className={styles.socialIcon}>ig</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
