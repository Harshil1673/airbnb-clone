import styles from './HostSection.module.css';

const coHosts = [
  { name: 'Sharath', image: '/avatars/Sharath.jpg' },
  { name: 'Aman Dev Pahwa', image: '/avatars/Aman Dev Pahwa.jpg' },
  { name: 'Maria Karen Priyanka', image: '/avatars/Maria Karen Priyanka.jpg' },
  { name: 'Simran', image: '/avatars/Simran.jpeg' },
  { name: 'Pallavi', image: '/avatars/Pallavi.jpeg' },
  { name: 'Sanyukta', image: '/avatars/Sanyukta.jpeg' },
  { name: 'Shruti', initial: 'S', color: 'pink' },
  { name: 'Amisha', initial: 'A', color: 'blue' },
];

export const HostSection: React.FC = () => {
  return (
    <section className={styles.hostSection}>
      <h2 className={styles.sectionTitle}>Meet your host</h2>

      <div className={styles.hostLayout}>
        {/* Left Column: Host Card + Info */}
        <div className={styles.hostLeft}>
          <div className={styles.hostCard}>
            <div className={styles.hostCardLeft}>
              <div className={styles.hostAvatar}>
                <img src="/avatars/host.jpeg" alt="Mirashya Homes" className={styles.hostAvatarImg} />
                <span className={styles.superhostBadge}>
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="white">
                    <path d="M13.5 2l-7.5 9-3.5-3.5-1.5 1.5 5 5 9-10.5z"/>
                  </svg>
                </span>
              </div>
              <div className={styles.hostName}>Mirashya<br/>Homes</div>
              <div className={styles.hostRole}>Host</div>
            </div>
            <div className={styles.hostCardRight}>
              <div>
                <div className={styles.statValue}>1,463</div>
                <div className={styles.statLabel}>Reviews</div>
              </div>
              <div>
                <div className={styles.statValue}>4.68★</div>
                <div className={styles.statLabel}>Rating</div>
              </div>
              <div>
                <div className={styles.statValue}>2</div>
                <div className={styles.statLabel}>Years hosting</div>
              </div>
            </div>
          </div>

          {/* Extra host info items below card */}
          <div className={styles.hostExtraInfo}>
            <div className={styles.extraItem}>
              <svg className={styles.extraIcon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="16" cy="12" r="8"/>
                <path d="M16 20v8M12 28h8"/>
              </svg>
              <span>Born in the 80s</span>
            </div>
            <div className={styles.extraItem}>
              <svg className={styles.extraIcon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4 2 12l14 8 14-8L16 4zM6 14.5v7c0 3 4.5 5.5 10 5.5s10-2.5 10-5.5v-7"/>
              </svg>
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* Right: Co-hosts + Details */}
        <div className={styles.hostRight}>
          <h3 className={styles.cohostsHeading}>Co-Hosts</h3>
          <div className={styles.cohostsGrid}>
            {coHosts.map((host) => (
              <div key={host.name} className={styles.cohost}>
                <div className={
                  host.color === 'pink' ? styles.cohostAvatarPink :
                  host.color === 'blue' ? styles.cohostAvatarBlue :
                  styles.cohostAvatar
                }>
                  {host.image ? (
                    <img src={host.image} alt={host.name} className={styles.cohostImg} />
                  ) : (
                    <span>{host.initial}</span>
                  )}
                </div>
                <span className={styles.cohostName}>{host.name}</span>
              </div>
            ))}
          </div>

          <h3 className={styles.hostDetailsHeading}>Host details</h3>
          <ul className={styles.detailsList}>
            <li>Response rate: 100%</li>
            <li>Responds within an hour</li>
          </ul>

          <button className={styles.messageBtn} type="button">Message host</button>

          <div className={styles.paymentProtection}>
            <svg className={styles.shieldIcon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 2 4 6v10c0 9 6 13.5 12 14 6-.5 12-5 12-14V6L16 2z"/>
            </svg>
            <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
