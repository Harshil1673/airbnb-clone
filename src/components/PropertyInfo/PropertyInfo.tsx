import { useState } from 'react'
import styles from './PropertyInfo.module.css'

interface PropertyInfoProps {
  onShowAmenities: () => void;
}

const mainAmenities = [
  { name: 'Kitchen', icon: 'kitchen' },
  { name: 'Wifi', icon: 'wifi' },
  { name: 'Dedicated workspace', icon: 'workspace' },
  { name: 'Free parking on premises', icon: 'parking' },
  { name: 'Pool', icon: 'pool' },
  { name: 'Hot tub', icon: 'hottub' },
  { name: 'Pets allowed', icon: 'pets' },
  { name: 'Exterior security cameras on property', icon: 'camera' },
  { name: 'Carbon monoxide alarm', icon: 'alarm', unavailable: true },
  { name: 'Smoke alarm', icon: 'alarm', unavailable: true },
];

function AmenityIcon({ type }: { type: string }) {
  switch (type) {
    case 'kitchen':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 2v28M6 2v8a4 4 0 0 0 4 4M14 2v8a4 4 0 0 1-4 4M22 2v12M22 14a4 4 0 0 0 0 8M22 22v8"/></svg>;
    case 'wifi':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M16 20.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM16 15a9 9 0 0 1 6.36 2.64l-1.42 1.42A7 7 0 0 0 16 17a7 7 0 0 0-4.95 2.05l-1.42-1.42A9 9 0 0 1 16 15zm0-5.5a14.5 14.5 0 0 1 10.25 4.24l-1.42 1.42A12.5 12.5 0 0 0 16 11.5a12.5 12.5 0 0 0-8.84 3.66l-1.42-1.42A14.5 14.5 0 0 1 16 9.5zm0-5.5A20 20 0 0 1 30.14 8.14l-1.42 1.42A18 18 0 0 0 16 6 18 18 0 0 0 3.27 9.56L1.86 8.14A20 20 0 0 1 16 4z"/></svg>;
    case 'workspace':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="24" height="18" rx="2"/><path d="M4 22h24M12 22v6M20 22v6M8 28h16"/></svg>;
    case 'parking':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="28" height="20" rx="3"/><path d="M12 12v8M12 12h4a3 3 0 0 1 0 6h-4"/></svg>;
    case 'pool':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 22c2 2 4 2 6 0s4-2 6 0 4 2 6 0 4-2 6 0M2 27c2 2 4 2 6 0s4-2 6 0 4 2 6 0 4-2 6 0M8 4v14M20 4v14M8 10h12"/></svg>;
    case 'hottub':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6M2 18h28M10 4c0 2 2 3 2 5M16 4c0 2 2 3 2 5M22 4c0 2 2 3 2 5"/></svg>;
    case 'pets':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.7 13.93a4 4 0 0 1 5.28.6l.29.37a10 10 0 0 1 1.7 4 12 12 0 0 1-.35 5.74c-.7 2.06-2.2 3.36-4.62 3.36-2.4 0-3.92-1.3-4.63-3.36a12 12 0 0 1-.34-5.75 10 10 0 0 1 1.7-3.99l.28-.37.7-.6zM10.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm11 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm-16 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm21 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>;
    case 'camera':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><path d="M26 6h-4l-2-3h-8l-2 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/><circle cx="16" cy="16" r="5"/></svg>;
    case 'alarm':
      return <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="12"/><path d="M16 10v8M12 26l-2 4M20 26l2 4"/></svg>;
    default:
      return null;
  }
}

// Simple calendar data
function generateCalendarDays(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
}

const octDays = generateCalendarDays(2026, 9); // October 2026
const novDays = generateCalendarDays(2026, 10); // November 2026
const dayHeaders = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function PropertyInfo({ onShowAmenities }: PropertyInfoProps) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className={styles.leftColumn}>
      {/* Overview */}
      <div className={styles.overview}>
        <h2 className={styles.overviewTitle}>
          Entire serviced apartment in Candolim, India
        </h2>
        <p className={styles.overviewDetails}>
          3 guests · 1 bedroom · 1 bed · 1 bathroom
        </p>
      </div>

      {/* Guest Favourite Badge */}
      <div className={styles.guestFavourite}>
        <div className={styles.gfLeft}>
          <img src="/icons/laurel-left.png" alt="" className={styles.laurelImg} />
          <span className={styles.gfLabel}>Guest<br/>favourite</span>
          <img src="/icons/laurel-right.png" alt="" className={styles.laurelImg} />
        </div>
        <p className={styles.gfDescription}>
          One of the most loved homes on Airbnb,<br />according to guests
        </p>
        <div className={styles.gfRating}>
          <div className={styles.gfRatingValue}>4.95</div>
          <div className={styles.gfStars}>★★★★★</div>
        </div>
        <div className={styles.gfReviews}>
          <div className={styles.gfReviewCount}>19</div>
          <div className={styles.gfReviewLabel}>Reviews</div>
        </div>
      </div>

      {/* Host Info */}
      <div className={styles.hostInfo}>
        <div className={styles.hostAvatar}>
          <img src="/avatars/host.jpeg" alt="Mirashya Homes" />
        </div>
        <div className={styles.hostText}>
          <div className={styles.hostName}>Hosted by Mirashya Homes</div>
          <div className={styles.hostSince}>2 years hosting</div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 2L6 12v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12L16 2z"/>
              <path d="M12 30V18h8v12"/>
            </svg>
          </div>
          <div className={styles.featureContent}>
            <div className={styles.featureTitle}>Outdoor entertainment</div>
            <div className={styles.featureDesc}>
              The pool and alfresco dining are great for summer trips.
            </div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 6a6 6 0 0 0-6 6c0 6 6 14 6 14s6-8 6-14a6 6 0 0 0-6-6z"/>
              <path d="M4 18c2-2 4 0 6 2s4 4 6 2"/>
              <path d="M22 18c2-2 4 0 6 2"/>
            </svg>
          </div>
          <div className={styles.featureContent}>
            <div className={styles.featureTitle}>Designed for staying cool</div>
            <div className={styles.featureDesc}>
              Beat the heat with the A/C and ceiling fan.
            </div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="4" width="20" height="24" rx="2"/>
              <path d="M14 14h4M14 18h4M12 4v4M20 4v4"/>
            </svg>
          </div>
          <div className={styles.featureContent}>
            <div className={styles.featureTitle}>Self check-in</div>
            <div className={styles.featureDesc}>
              You can check in with the building staff.
            </div>
          </div>
        </div>
      </div>

      {/* Translation Notice */}
      <div className={styles.translationBanner}>
        Some info has been automatically translated.
        <a href="#" onClick={(e) => e.preventDefault()}>Show original</a>
      </div>

      {/* Description */}
      <div className={styles.description}>
        <div className={showFullDesc ? undefined : styles.descriptionText}>
          🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 📶, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's the ideal spot for a memorable Goa getaway.
        </div>
        <button
          className={styles.showMoreLink}
          onClick={() => setShowFullDesc(!showFullDesc)}
          type="button"
        >
          Show more
          <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m5 7 7 4 7-4"/>
          </svg>
        </button>
      </div>

      {/* Where You'll Sleep */}
      <section className={styles.sleepSection}>
        <h2 className={styles.sectionHeading}>Where you'll sleep</h2>
        <div className={styles.sleepGrid}>
          <div className={styles.sleepCard}>
            <img
              src="/photos/bedroom/1.jpeg"
              alt="Bedroom with double bed"
              className={styles.sleepCardImage}
            />
            <div className={styles.sleepCardTitle}>Bedroom</div>
            <div className={styles.sleepCardDesc}>1 double bed</div>
          </div>
          <div className={styles.sleepCard}>
            <img
              src="/photos/living-room-1/living room 1-1.jpeg"
              alt="Living room with sofa"
              className={styles.sleepCardImage}
            />
            <div className={styles.sleepCardTitle}>Living room</div>
            <div className={styles.sleepCardDesc}>1 sofa</div>
          </div>
        </div>
      </section>

      {/* What This Place Offers */}
      <section className={styles.amenitiesSection} id="amenities-section">
        <h2 className={styles.sectionHeading}>What this place offers</h2>
        <div className={styles.amenitiesGrid}>
          {mainAmenities.map((amenity) => (
            <div
              key={amenity.name}
              className={amenity.unavailable ? styles.amenityStrikethrough : styles.amenityItem}
            >
              <AmenityIcon type={amenity.icon} />
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
        <button
          className={styles.showAllButton}
          onClick={onShowAmenities}
          type="button"
        >
          Show all 50 amenities
        </button>
      </section>

      {/* Calendar */}
      <section className={styles.calendarSection} id="calendar-section">
        <h2 className={styles.sectionHeading}>5 nights in Candolim</h2>
        <div className={styles.calendarSubtitle}>18 Oct 2026 - 23 Oct 2026</div>
        <div className={styles.calendarPlaceholder}>
          {/* October 2026 */}
          <div>
            <div className={styles.calMonth}>October 2026</div>
            <div className={styles.calGrid}>
              {dayHeaders.map((d) => (
                <div key={d} className={styles.calDayHeader}>{d}</div>
              ))}
              {octDays.map((day, i) => {
                if (day === null) return <div key={`empty-${i}`} className={styles.calDayEmpty} />;
                const isSelected = day === 18 || day === 23;
                const isInRange = day > 18 && day < 23;
                const isPast = day < 18;
                return (
                  <div
                    key={day}
                    className={
                      isSelected ? styles.calDaySelected :
                      isInRange ? styles.calDayInRange :
                      isPast ? styles.calDayDisabled :
                      styles.calDay
                    }
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          {/* November 2026 */}
          <div>
            <div className={styles.calMonth}>November 2026</div>
            <div className={styles.calGrid}>
              {dayHeaders.map((d) => (
                <div key={d} className={styles.calDayHeader}>{d}</div>
              ))}
              {novDays.map((day, i) => {
                if (day === null) return <div key={`empty-${i}`} className={styles.calDayEmpty} />;
                return <div key={day} className={styles.calDay}>{day}</div>;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
