import { useEffect, useRef } from 'react'
import styles from './AmenitiesModal.module.css'

interface AmenitiesModalProps {
  onClose: () => void;
}

const amenityCategories = [
  {
    name: 'Bathroom',
    items: [
      { name: 'Hairdryer', available: true },
      { name: 'Cleaning products', available: true },
      { name: 'Shampoo', available: true },
      { name: 'Hot water', available: true },
      { name: 'Shower gel', available: true },
    ],
  },
  {
    name: 'Bedroom and laundry',
    items: [
      { name: 'Washing machine', available: true },
      { name: 'Hangers', available: true },
      { name: 'Bed linen', available: true },
      { name: 'Room-darkening blinds', available: true },
      { name: 'Iron', available: true },
      { name: 'Clothes storage', available: true },
      { name: 'Cot', available: true },
    ],
  },
  {
    name: 'Entertainment',
    items: [
      { name: 'TV', available: true },
    ],
  },
  {
    name: 'Family',
    items: [
      { name: 'Cot', available: true },
    ],
  },
  {
    name: 'Heating and cooling',
    items: [
      { name: 'Air conditioning', available: true },
      { name: 'Ceiling fan', available: true },
    ],
  },
  {
    name: 'Home safety',
    items: [
      { name: 'Exterior security cameras', available: true },
      { name: 'Carbon monoxide alarm', available: false },
      { name: 'Smoke alarm', available: false },
    ],
  },
  {
    name: 'Internet and office',
    items: [
      { name: 'Wifi', available: true },
      { name: 'Dedicated workspace', available: true },
    ],
  },
  {
    name: 'Kitchen and dining',
    items: [
      { name: 'Kitchen', available: true },
      { name: 'Fridge', available: true },
      { name: 'Freezer', available: true },
      { name: 'Microwave', available: true },
      { name: 'Cooking basics', available: true },
      { name: 'Crockery and cutlery', available: true },
      { name: 'Kettle', available: true },
      { name: 'Coffee', available: true },
      { name: 'Wine glasses', available: true },
      { name: 'Toaster', available: true },
      { name: 'Blender', available: true },
      { name: 'Cooker', available: true },
    ],
  },
  {
    name: 'Location features',
    items: [
      { name: 'Private entrance', available: true },
    ],
  },
  {
    name: 'Outdoor',
    items: [
      { name: 'Patio or balcony', available: true },
      { name: 'Outdoor dining area', available: true },
    ],
  },
  {
    name: 'Parking and facilities',
    items: [
      { name: 'Free parking on premises', available: true },
      { name: 'Pool', available: true },
      { name: 'Hot tub', available: true },
      { name: 'Gym', available: true },
    ],
  },
  {
    name: 'Services',
    items: [
      { name: 'Pets allowed', available: true },
      { name: 'Cleaning available during stay', available: true },
      { name: 'Long-term stays allowed', available: true },
      { name: 'Self check-in', available: true },
    ],
  },
];

function GenericIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="16" cy="16" r="12"/>
      <path d="M16 10v6M16 20v2"/>
    </svg>
  );
}

export default function AmenitiesModal({ onClose }: AmenitiesModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.add('scroll-locked');
    closeRef.current?.focus();
    return () => document.body.classList.remove('scroll-locked');
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-label="What this place offers"
      aria-modal="true"
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <button
            ref={closeRef}
            className={styles.closeButton}
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M24 8 8 24M8 8l16 16"/>
            </svg>
          </button>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>What this place offers</h2>
          {amenityCategories.map((category) => (
            <div key={category.name}>
              <h3 className={styles.categoryHeading}>{category.name}</h3>
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className={item.available ? styles.amenityRow : styles.unavailable}
                >
                  <GenericIcon />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
