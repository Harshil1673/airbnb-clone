export interface PhotoCategory {
  id: string;
  name: string;
  slug: string;
  features: string[];
  photos: PhotoItem[];
}

export interface PhotoItem {
  src: string;
  alt: string;
}

export const photoCategories: PhotoCategory[] = [
  {
    id: 'living-room-1',
    name: 'Living room 1',
    slug: 'living-room-1',
    features: ['Sofa', 'Air conditioning', 'Ceiling fan', 'TV'],
    photos: [
      { src: '/photos/living-room-1/living room 1-1.jpeg', alt: 'Living room 1 - seating area with sofa' },
      { src: '/photos/living-room-1/living room1 - 2.jpeg', alt: 'Living room 1 - alternate angle' },
      { src: '/photos/living-room-1/living room 1 -3.jpeg', alt: 'Living room 1 - TV and ceiling fan' },
    ],
  },
  {
    id: 'living-room-2',
    name: 'Living room 2',
    slug: 'living-room-2',
    features: ['Ceiling fan', 'Hot tub'],
    photos: [
      { src: '/photos/living-room-2/living room2-1.jpeg', alt: 'Living room 2 - main view' },
      { src: '/photos/living-room-2/living room2-2.jpeg', alt: 'Living room 2 - seating' },
      { src: '/photos/living-room-2/livingroom2-3.jpeg', alt: 'Living room 2 - detail' },
      { src: '/photos/living-room-2/livingroom2-4.jpeg', alt: 'Living room 2 - hot tub area' },
      { src: '/photos/living-room-2/livingroom2-5.jpeg', alt: 'Living room 2 - additional angle' },
      { src: '/photos/living-room-2/livingroom2-6.jpeg', alt: 'Living room 2 - overview' },
      { src: '/photos/living-room-2/livingroom2-7.jpeg', alt: 'Living room 2 - wide shot' },
    ],
  },
  {
    id: 'full-kitchen',
    name: 'Full kitchen',
    slug: 'full-kitchen',
    features: [
      'Freezer', 'Fridge', 'Blender', 'Cooker', 'Cooking basics',
      'Kettle', 'Microwave', 'Toaster', 'Wine glasses', 'Coffee',
      'Crockery and cutlery',
    ],
    photos: [
      { src: '/photos/full-kitchen/1.jpeg', alt: 'Full kitchen - appliances and counter' },
      { src: '/photos/full-kitchen/2.jpeg', alt: 'Full kitchen - cooking area' },
    ],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    slug: 'bedroom',
    features: [
      'Double bed', 'Air conditioning', 'Bed linen', 'Ceiling fan',
      'Clothes storage', 'Cot', 'Hangers', 'Iron',
      'Room-darkening blinds', 'Cleaning available during stay',
      'Cleaning products', 'Long-term stays allowed',
      'Private entrance', 'Wifi',
    ],
    photos: [
      { src: '/photos/bedroom/1.jpeg', alt: 'Bedroom - main view with double bed' },
      { src: '/photos/bedroom/2.jpeg', alt: 'Bedroom - alternate angle' },
      { src: '/photos/bedroom/3.jpeg', alt: 'Bedroom - storage area' },
      { src: '/photos/bedroom/4.jpeg', alt: 'Bedroom - window and blinds' },
      { src: '/photos/bedroom/5.jpeg', alt: 'Bedroom - wardrobe' },
      { src: '/photos/bedroom/6.jpeg', alt: 'Bedroom - overview' },
    ],
  },
  {
    id: 'full-bathroom',
    name: 'Full bathroom',
    slug: 'full-bathroom',
    features: ['Hairdryer', 'Hot water', 'Shampoo', 'Shower gel'],
    photos: [
      { src: '/photos/full-bathroom/main.jpeg', alt: 'Full bathroom - shower and vanity' },
    ],
  },
  {
    id: 'gym',
    name: 'Gym',
    slug: 'gym',
    features: ['Air conditioning', 'Gym', 'Exercise equipment', 'Ceiling fan'],
    photos: [
      { src: '/photos/gym/1.jpeg', alt: 'Gym - main equipment area' },
      { src: '/photos/gym/2.jpeg', alt: 'Gym - weights section' },
      { src: '/photos/gym/3.jpeg', alt: 'Gym - cardio machines' },
      { src: '/photos/gym/4.jpeg', alt: 'Gym - alternate view' },
      { src: '/photos/gym/5.jpeg', alt: 'Gym - full view' },
    ],
  },
  {
    id: 'exterior',
    name: 'Exterior',
    slug: 'exterior',
    features: [],
    photos: [
      { src: '/photos/exterior/1.jpeg', alt: 'Exterior - building facade' },
      { src: '/photos/exterior/2.jpeg', alt: 'Exterior - entrance area' },
      { src: '/photos/exterior/3.jpeg', alt: 'Exterior - surroundings' },
      { src: '/photos/exterior/4.jpeg', alt: 'Exterior - additional view' },
      { src: '/photos/exterior/5.jpeg', alt: 'Exterior - grounds' },
      { src: '/photos/exterior/6.jpeg', alt: 'Exterior - overview' },
    ],
  },
  {
    id: 'pool',
    name: 'Pool',
    slug: 'pool',
    features: ['Pool'],
    photos: [
      { src: '/photos/pool/1.jpeg', alt: 'Pool - main swimming area' },
      { src: '/photos/pool/2.jpeg', alt: 'Pool - lounge area' },
      { src: '/photos/pool/3.jpeg', alt: 'Pool - overview' },
    ],
  },
  {
    id: 'additional-photos',
    name: 'Additional photos',
    slug: 'additional-photos',
    features: [],
    photos: [
      { src: '/photos/additional-photos/1.jpeg', alt: 'Additional photo 1' },
      { src: '/photos/additional-photos/2.jpeg', alt: 'Additional photo 2' },
      { src: '/photos/additional-photos/3.jpeg', alt: 'Additional photo 3' },
      { src: '/photos/additional-photos/4.jpeg', alt: 'Additional photo 4' },
      { src: '/photos/additional-photos/5.jpeg', alt: 'Additional photo 5' },
      { src: '/photos/additional-photos/6.jpeg', alt: 'Additional photo 6' },
      { src: '/photos/additional-photos/7.jpeg', alt: 'Additional photo 7' },
      { src: '/photos/additional-photos/8.jpeg', alt: 'Additional photo 8' },
      { src: '/photos/additional-photos/9.jpeg', alt: 'Additional photo 9' },
      { src: '/photos/additional-photos/10.jpeg', alt: 'Additional photo 10' },
    ],
  },
];

/** Flat array of all photos across all categories */
export const allPhotos: PhotoItem[] = photoCategories.flatMap((cat) => cat.photos);

/** Get the first N photos for the hero gallery */
export const heroPhotos: PhotoItem[] = [
  photoCategories[0].photos[0], // Living room 1 - main (large left)
  photoCategories[0].photos[1], // Living room 1 - 2 (top-left small)
  photoCategories[1].photos[3], // Living room 2 - hot tub (top-right small)
  photoCategories[3].photos[0], // Bedroom - main (bottom-left small)
  photoCategories[6].photos[0], // Exterior - building (bottom-right small)
];
