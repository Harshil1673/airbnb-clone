import { useState, useEffect } from 'react'
import { allPhotos, photoCategories, PhotoItem } from '../../data/photos'
import styles from './HeroGallery.module.css'

interface HeroGalleryProps {
  onShowAllPhotos: () => void;
}

const positionClasses = [
  styles.large,
  styles.topLeft,
  styles.topRight,
  styles.bottomLeft,
  styles.bottomRight,
];

// Helper to pick 5 unique diverse photos shuffled on every refresh
function getRandomHeroPhotos(): PhotoItem[] {
  const primaryPool = [
    ...(photoCategories.find(c => c.id === 'living-room-1')?.photos || []),
    ...(photoCategories.find(c => c.id === 'living-room-2')?.photos || []),
    ...(photoCategories.find(c => c.id === 'bedroom')?.photos || []),
    ...(photoCategories.find(c => c.id === 'exterior')?.photos || []),
    ...(photoCategories.find(c => c.id === 'pool')?.photos || []),
    ...(photoCategories.find(c => c.id === 'full-kitchen')?.photos || []),
    ...(photoCategories.find(c => c.id === 'gym')?.photos || []),
  ];

  // Fisher-Yates Shuffle
  const shuffled = [...primaryPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selected: PhotoItem[] = [];
  const seenSrcs = new Set<string>();

  for (const p of shuffled) {
    if (!seenSrcs.has(p.src)) {
      seenSrcs.add(p.src);
      selected.push(p);
      if (selected.length === 5) break;
    }
  }

  return selected.length === 5 ? selected : allPhotos.slice(0, 5);
}

export default function HeroGallery({ onShowAllPhotos }: HeroGalleryProps) {
  // Initialize with shuffled photos on page load
  const [displayPhotos, setDisplayPhotos] = useState<PhotoItem[]>(() => getRandomHeroPhotos());

  return (
    <section className={styles.gallery} aria-label="Property photos">
      <div
        className={styles.grid}
        onClick={onShowAllPhotos}
        role="button"
        tabIndex={0}
        aria-label="Show all photos"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onShowAllPhotos();
          }
        }}
      >
        {displayPhotos.map((photo, index) => (
          <div key={`${photo.src}-${index}`} className={`${styles.imageWrapper} ${positionClasses[index]}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <button
          className={styles.showAllButton}
          onClick={(e) => {
            e.stopPropagation();
            onShowAllPhotos();
          }}
          type="button"
        >
          <span className={styles.dotsGrid} aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} />
            ))}
          </span>
          Show all photos
        </button>
      </div>
    </section>
  )
}
