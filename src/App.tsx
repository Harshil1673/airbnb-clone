import { useState } from 'react'
import Header from './components/Header/Header'
import StickyNav from './components/StickyNav/StickyNav'
import PropertyHeader from './components/PropertyHeader/PropertyHeader'
import HeroGallery from './components/HeroGallery/HeroGallery'
import PropertyInfo from './components/PropertyInfo/PropertyInfo'
import BookingCard from './components/BookingCard/BookingCard'
import { Reviews } from './components/Reviews/Reviews'
import { Location } from './components/Location/Location'
import { HostSection } from './components/HostSection/HostSection'
import { ThingsToKnow } from './components/ThingsToKnow/ThingsToKnow'
import { Footer } from './components/Footer/Footer'
import AmenitiesModal from './components/AmenitiesModal/AmenitiesModal'
import PhotoTour from './components/PhotoTour/PhotoTour'
import NearbyStays from './components/NearbyStays/NearbyStays'
import './styles/global.css'

function App() {
  const [showPhotoTour, setShowPhotoTour] = useState(false)
  const [showAmenities, setShowAmenities] = useState(false)

  return (
    <div className="app">
      <Header />
      <StickyNav />

      <main className="main-content">
        <PropertyHeader />
        <HeroGallery onShowAllPhotos={() => setShowPhotoTour(true)} />

        {/* Two-column layout */}
        <div className="container" style={{ display: 'flex', gap: '80px', position: 'relative' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <PropertyInfo onShowAmenities={() => setShowAmenities(true)} />
          </div>
          <div style={{ width: '372px', flexShrink: 0, paddingTop: '32px' }}>
            <BookingCard />
          </div>
        </div>

        {/* Full-width sections */}
        <div className="container">
          <hr className="section-divider" />
          <div id="reviews-section" style={{ scrollMarginTop: '80px' }}>
            <Reviews />
          </div>

          <hr className="section-divider" />
          <div id="location-section" style={{ scrollMarginTop: '80px' }}>
            <Location />
          </div>

          <hr className="section-divider" />
          <HostSection />

          <hr className="section-divider" />
          <ThingsToKnow />

          <hr className="section-divider" />
          <NearbyStays />
        </div>
      </main>

      {/* <Footer /> */}

      {/* Overlays */}
      {showPhotoTour && (
        <PhotoTour onClose={() => setShowPhotoTour(false)} />
      )}

      {showAmenities && (
        <AmenitiesModal onClose={() => setShowAmenities(false)} />
      )}
    </div>
  )
}

export default App
