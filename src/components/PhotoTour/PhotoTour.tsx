import { useEffect, useRef, useCallback, useState } from 'react'
import { photoCategories, allPhotos } from '../../data/photos'
import Lightbox from '../Lightbox/Lightbox'
import styles from './PhotoTour.module.css'

interface PhotoTourProps {
  onClose: () => void;
}

export default function PhotoTour({ onClose }: PhotoTourProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lock body scroll
  useEffect(() => {
    document.body.classList.add('scroll-locked');
    return () => document.body.classList.remove('scroll-locked');
  }, []);

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIndex === null) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, lightboxIndex]);

  const scrollToCategory = useCallback((id: string) => {
    const el = categoryRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Open lightbox at global index
  const openLightbox = (categoryIndex: number, photoIndex: number) => {
    let globalIndex = 0;
    for (let i = 0; i < categoryIndex; i++) {
      globalIndex += photoCategories[i].photos.length;
    }
    globalIndex += photoIndex;
    setLightboxIndex(globalIndex);
  };

  // Render category photos with correct layout
  const renderPhotos = (categoryIndex: number, photos: typeof photoCategories[0]['photos']) => {
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < photos.length) {
      if (photos.length === 2 && i === 0) {
        // Special case: only 2 photos - show side by side
        elements.push(
          <div className={styles.photoRow} key={`row-${i}`}>
            <div
              className={styles.photoTwoCol}
              onClick={() => openLightbox(categoryIndex, 0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(categoryIndex, 0); }}
            >
              <img src={photos[0].src} alt={photos[0].alt} loading="lazy" />
            </div>
            <div
              className={styles.photoTwoCol}
              onClick={() => openLightbox(categoryIndex, 1)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(categoryIndex, 1); }}
            >
              <img src={photos[1].src} alt={photos[1].alt} loading="lazy" />
            </div>
          </div>
        );
        i += 2;
      } else if (i === 0) {
        // First photo is large
        const currentIdx = i;
        elements.push(
          <div
            className={styles.photoLarge}
            key={`large-${currentIdx}`}
            onClick={() => openLightbox(categoryIndex, currentIdx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(categoryIndex, currentIdx); }}
          >
            <img src={photos[currentIdx].src} alt={photos[currentIdx].alt} loading="lazy" />
          </div>
        );
        i += 1;
      } else if (i + 1 < photos.length) {
        // Pair of small photos side by side
        const idx1 = i;
        const idx2 = i + 1;
        elements.push(
          <div className={styles.photoRow} key={`pair-${idx1}`}>
            <div
              className={styles.photoSmall}
              onClick={() => openLightbox(categoryIndex, idx1)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(categoryIndex, idx1); }}
            >
              <img src={photos[idx1].src} alt={photos[idx1].alt} loading="lazy" />
            </div>
            <div
              className={styles.photoSmall}
              onClick={() => openLightbox(categoryIndex, idx2)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(categoryIndex, idx2); }}
            >
              <img src={photos[idx2].src} alt={photos[idx2].alt} loading="lazy" />
            </div>
          </div>
        );
        i += 2;
      } else {
        // Single remaining photo - full width
        const currentIdx = i;
        elements.push(
          <div
            className={styles.photoFull}
            key={`full-${currentIdx}`}
            onClick={() => openLightbox(categoryIndex, currentIdx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(categoryIndex, currentIdx); }}
          >
            <img src={photos[currentIdx].src} alt={photos[currentIdx].alt} loading="lazy" />
          </div>
        );
        i += 1;
      }
    }

    return elements;
  };

  return (
    <div className={styles.overlay} ref={overlayRef} role="dialog" aria-label="Photo tour" aria-modal="true">
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onClose} type="button" aria-label="Close photo tour">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"/>
          </svg>
        </button>
        <span className={styles.headerTitle}>Photo tour</span>
        <div className={styles.headerActions}>
          <button className={styles.headerActionBtn} type="button" aria-label="Share">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M27 18v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9M16 3v19M6 13l10-10 10 10"/>
            </svg>
          </button>
          <button className={styles.headerActionBtn} type="button" aria-label="Save">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Category Navigation */}
        <nav className={styles.categoryNav} aria-label="Photo categories">
          {photoCategories.map((cat) => (
            <button
              key={cat.id}
              className={styles.categoryThumb}
              onClick={() => scrollToCategory(cat.id)}
              type="button"
              aria-label={`Go to ${cat.name}`}
            >
              <div className={styles.thumbImageWrapper}>
                <img src={cat.photos[0].src} alt="" />
              </div>
              <span className={styles.categoryThumbLabel}>{cat.name}</span>
            </button>
          ))}
        </nav>

        {/* Category Sections */}
        {photoCategories.map((cat, catIdx) => (
          <section
            key={cat.id}
            id={`photo-category-${cat.id}`}
            ref={(el) => { categoryRefs.current[cat.id] = el; }}
            className={styles.categorySection}
          >
            <div className={styles.categoryInfo}>
              <h2 className={styles.categoryName}>{cat.name}</h2>
              {cat.features.length > 0 && (
                <p className={styles.categoryFeatures}>
                  {cat.features.join(' · ')}
                </p>
              )}
            </div>
            <div className={styles.categoryPhotos}>
              {renderPhotos(catIdx, cat.photos)}
            </div>
          </section>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </div>
  );
}
