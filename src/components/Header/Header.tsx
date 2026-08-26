import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Airbnb Logo */}
        <a href="/" className={styles.logo} aria-label="Airbnb homepage">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" fill="currentColor">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.907 6.478-6.353 6.478-2.025 0-4.078-.903-5.698-2.18a28.7 28.7 0 0 1-1.449-1.333 28.7 28.7 0 0 1-1.449 1.334C13.098 30.097 11.045 31 9.02 31c-3.446 0-6.353-2.416-6.353-6.478 0-.706.109-1.55.556-2.765l.264-.624c1.037-2.404 5.147-11.085 7.244-15.19l.289-.568C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 9.02 29c1.44 0 3.07-.68 4.381-1.728.657-.526 1.23-1.1 1.652-1.6a1 1 0 0 1 1.542-.077l.152.171c.404.475.955 1.027 1.59 1.535C19.647 28.32 21.278 29 22.72 29c2.608 0 4.52-1.605 4.52-4.478v-.206c0-.62-.082-1.24-.404-2.073l-.214-.517c-.993-2.314-5.088-10.894-7.176-14.86l-.263-.51C18.053 3.54 17.24 3 16 3z"/>
          </svg>
          <span className={styles.logoText}>airbnb</span>
        </a>

        {/* Search Bar */}
        <div className={styles.searchBar} role="search" aria-label="Search">
          <button className={styles.searchFieldWithIcon} type="button">
            <img src="/icons/searchbar-house.png" alt="" className={styles.searchHouseIcon} />
            <span>Anywhere</span>
          </button>
          <span className={styles.searchDivider} aria-hidden="true" />
          <button className={styles.searchField} type="button">Anytime</button>
          <span className={styles.searchDivider} aria-hidden="true" />
          <button className={styles.searchFieldLight} type="button">Add guests</button>
          <button className={styles.searchButton} type="button" aria-label="Search">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="5.333">
              <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9" />
            </svg>
          </button>
        </div>

        {/* Right Navigation */}
        <nav className={styles.rightNav} aria-label="User navigation">
          <button className={styles.hostLink} type="button">Become a host</button>
          
          {/* Globe / Browser Language Button */}
          <button className={styles.globeButton} type="button" aria-label="Choose a language and currency">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor">
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.36 8.8c-.18-1.3-.48-2.4-.87-3.18-.36-.7-.72-1.1-1-.1h-.02c-.28 0-.64.4-1 1.1-.39.78-.69 1.88-.87 3.18h3.76zm-5.36 0h-2.6c.22 1.9 1.28 3.56 2.8 4.48a8.42 8.42 0 0 1-.96-2.6 15.6 15.6 0 0 1-.24-1.88zm10.6 0h-2.6c-.04.66-.12 1.3-.24 1.88a8.42 8.42 0 0 1-.96 2.6 6.26 6.26 0 0 0 2.8-4.48zm-10.6-1.5c.04-.66.12-1.3.24-1.88a8.42 8.42 0 0 1 .96-2.6 6.26 6.26 0 0 0-2.8 4.48h2.6zm3.24 0h3.76c-.18-1.3-.48-2.4-.87-3.18-.36-.7-.72-1.1-1-.1h-.02c-.28 0-.64.4-1 1.1-.39.78-.69 1.88-.87 3.18zm7.36 0h2.6a6.26 6.26 0 0 0-2.8-4.48c.44.78.78 1.66.96 2.6.12.58.2 1.22.24 1.88z"/>
            </svg>
          </button>

          {/* Menu Button */}
          <button className={styles.menuCircleButton} type="button" aria-label="Main navigation menu">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor">
              <path d="M4 7h24v2.5H4zm0 8h24v2.5H4zm0 8h24v2.5H4z"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
