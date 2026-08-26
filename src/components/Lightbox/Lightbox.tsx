import { useEffect, useRef, useCallback } from 'react'
import { PhotoItem } from '../../data/photos'
import styles from './Lightbox.module.css'

interface LightboxProps {
  photos: PhotoItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, currentIndex, onClose, onNavigate }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (currentIndex < photos.length - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          e.stopPropagation();
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goPrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goNext();
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goPrev, goNext]);

  // Focus trap: focus close button on mount
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Prevent click-through to photo tour
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current || e.target === e.currentTarget) {
      onClose();
    }
  };

  const photo = photos[currentIndex];

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-label={`Photo ${currentIndex + 1} of ${photos.length}`}
      aria-modal="true"
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        className={styles.closeButton}
        onClick={onClose}
        type="button"
        aria-label="Close lightbox"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M24 8 8 24M8 8l16 16"/>
        </svg>
      </button>

      {/* Counter */}
      <div className={styles.counter} aria-live="polite">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Previous */}
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={goPrev}
        disabled={currentIndex === 0}
        type="button"
        aria-label="Previous photo"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"/>
        </svg>
      </button>

      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          key={currentIndex}
          src={photo.src}
          alt={photo.alt}
          className={styles.image}
          draggable={false}
        />
      </div>

      {/* Next */}
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={goNext}
        disabled={currentIndex === photos.length - 1}
        type="button"
        aria-label="Next photo"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"/>
        </svg>
      </button>
    </div>
  );
}
