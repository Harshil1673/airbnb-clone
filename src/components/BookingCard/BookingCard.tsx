import styles from './BookingCard.module.css'

export default function BookingCard() {
  return (
    <div className={styles.stickyWrapper}>
      {/* Coupon Banner */}
      <div className={styles.couponBanner}>
        <div className={styles.couponLeft}>
          <img src="/icons/discount.svg" alt="" className={styles.couponTagIcon} />
          <div>
            <div className={styles.couponText}>
              Get 10% off your next stay.
            </div>
            <span className={styles.couponTerms}>Terms apply</span>
          </div>
        </div>
        <button className={styles.claimButton} type="button">Claim</button>
      </div>

      {/* Main Card */}
      <div className={styles.card}>
        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price}>₹28,499</span>
          <span className={styles.priceNight}> for 5 nights</span>
        </div>

        {/* Date/Guest Picker */}
        <div className={styles.picker}>
          <div className={styles.dateRow}>
            <div className={styles.dateField}>
              <div className={styles.dateLabel}>CHECK-IN</div>
              <div className={styles.dateValue}>10/18/2026</div>
            </div>
            <div className={styles.dateField}>
              <div className={styles.dateLabel}>CHECKOUT</div>
              <div className={styles.dateValue}>10/23/2026</div>
            </div>
          </div>
          <div className={styles.guestRow}>
            <div className={styles.guestInfo}>
              <span className={styles.guestLabel}>GUESTS</span>
              <span className={styles.guestValue}>2 guests</span>
            </div>
            <svg className={styles.chevron} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="m4 12 12 12 12-12"/>
            </svg>
          </div>
        </div>

        {/* Cancellation */}
        <div className={styles.cancellation}>
          Free cancellation before <span className={styles.cancellationBold}>17 October</span>
        </div>

        {/* Reserve Button */}
        <button className={styles.reserveButton} type="button">
          Reserve
        </button>

        {/* Charge Note */}
        <div className={styles.chargeNote}>
          You won't be charged yet
        </div>
      </div>

      {/* Report Listing */}
      <button className={styles.reportLink} type="button">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 4v24M6 4l20 8-20 8"/>
        </svg>
        Report this listing
      </button>
    </div>
  )
}
