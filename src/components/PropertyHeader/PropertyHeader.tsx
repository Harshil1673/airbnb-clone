import styles from './PropertyHeader.module.css'

export default function PropertyHeader() {
  return (
    <div className={styles.propertyHeader}>
      <h1 className={styles.title}>
        Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
      </h1>
      <div className={styles.actions}>
        <button className={styles.actionButton} type="button" aria-label="Share this listing">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M27 18v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9M16 3v19M6 13l10-10 10 10"/>
          </svg>
          <span>Share</span>
        </button>
        <button className={styles.actionButton} type="button" aria-label="Save this listing">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"/>
          </svg>
          <span>Save</span>
        </button>
      </div>
    </div>
  )
}
