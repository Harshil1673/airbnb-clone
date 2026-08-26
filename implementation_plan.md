# Airbnb Clone — Pixel-Perfect Implementation Plan

## Summary

Build a pixel-perfect reproduction of an Airbnb property listing page for **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"** based on 36+ evidence screenshots. The implementation covers the main listing page, amenities modal, photo tour, and lightbox — all with full keyboard navigation and accessibility.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **CSS Modules** (pixel-precise control, no Tailwind abstraction)
- Font: **Circular** (Airbnb's font) via system font fallback stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`)
- No external UI libraries

---

## Proposed Changes

### 1. Project Scaffolding

#### [NEW] Vite + React + TypeScript project

```
src/
├── components/
│   ├── Header/            # Airbnb top nav bar
│   ├── PropertyHeader/    # Title + Share/Save
│   ├── HeroGallery/       # 5-image grid hero
│   ├── PropertyInfo/      # Left-side property details
│   ├── BookingCard/       # Right-side sticky booking widget
│   ├── StickyNav/         # Photos/Amenities/Reviews/Location bar
│   ├── Description/       # Property description + "Show more"
│   ├── SleepingArrangements/ # Where you'll sleep
│   ├── Amenities/         # What this place offers (10 items + button)
│   ├── AmenitiesModal/    # Full 50-amenity modal
│   ├── Calendar/          # Date picker (static display)
│   ├── Reviews/           # Rating summary + review cards
│   ├── LocationMap/       # Where you'll be (static map placeholder)
│   ├── HostSection/       # Meet your host + co-hosts
│   ├── ThingsToKnow/     # Cancellation, house rules, safety
│   ├── NearbyStays/      # More stays nearby carousel
│   ├── Footer/            # Site footer
│   ├── PhotoTour/         # Full photo tour view
│   ├── PhotoCategory/     # Individual category section
│   ├── CategoryNav/       # Photo tour thumbnail navigation
│   ├── Lightbox/          # Full-screen image viewer
│   └── common/            # Shared Button, Icon, etc.
├── data/
│   ├── property.ts        # All property data
│   ├── photos.ts          # Photo categories & metadata
│   ├── amenities.ts       # Amenity categories for modal
│   └── reviews.ts         # Review data
├── hooks/
│   ├── useScrollSpy.ts    # For sticky nav active state
│   ├── useLockBodyScroll.ts
│   └── useFocusTrap.ts
├── styles/
│   └── global.css         # Reset + CSS variables
├── App.tsx
└── main.tsx
```

---

### 2. Main Listing Page — Key Sections

#### Header
- Airbnb logo (SVG, pink `#FF385C`)
- Search bar pill: "Anywhere | Anytime | Add guests" + pink search button
- Right side: "Become a host", globe icon, hamburger menu

#### Property Title Bar
- Title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10" (26px, bold)
- Right-aligned: Share + Save buttons with icons

#### Hero Gallery (Critical)
- **5 images** in a grid: 1 large left (50%), 4 small right (2×2)
- 8px gap between images
- 12px border-radius on outer corners only
- "Show all photos" button (bottom-right of last image)
- Images use local assets from `evidences/phototour/` folders
- Click opens Photo Tour

#### Property Info (Left Column, ~60%)
- "Entire serviced apartment in Candolim, India"
- "3 guests · 1 bedroom · 1 bed · 1 bathroom"
- Guest favourite badge with laurel wreath icons, 4.95 rating, 19 reviews
- Host info: Mirashya Homes avatar, 2 years hosting
- Three feature highlights: Outdoor entertainment, Designed for staying cool, Self check-in
- Translation notice bar
- Description with "Show more" link
- Where you'll sleep: 2 room cards (Bedroom, Living room)
- What this place offers: 10 amenities in 2-column grid + "Show all 50 amenities" button

#### Booking Card (Right Column, sticky)
- Coupon banner: "Get 10% off..." with Claim button
- Price: ₹28,499 for 5 nights (strikethrough on ₹28,499)
- Check-in/out dates in bordered card
- Guests selector
- Free cancellation note
- Reserve button (pink gradient `#E61E4D` → `#D70466`)
- "You won't be charged yet"
- Report this listing link

#### Sticky Navigation
- Appears on scroll: Photos | Amenities | Reviews | Location
- Right side: price + Reserve button
- Active tab underline

#### Calendar Section
- "5 nights in Candolim", Oct 18–23, 2026
- Dual month calendar display (static)

#### Reviews Section
- Large 4.95 with laurel icons, "Guest favourite" text
- Rating breakdown bars (Overall rating 1-5)
- Category scores: Cleanliness 5.0, Accuracy 5.0, Check-in 5.0, Communication 5.0, Location 4.8, Value 4.8
- Filter tags: Comfort 6, Accuracy 5, Hot tub 5, Condition 4, Hospitality 8, Cleanliness 4, Amenities 2, Decor 2, Indoor spaces 2, Location 2
- 6 review cards in 2-column grid

#### Location
- "Where you'll be" + "Candolim, Goa, India"
- Static map placeholder (green/blue pattern matching the screenshot)
- Neighbourhood highlights

#### Host Section
- Host card with avatar, 1,463 reviews, 4.68★, 2 years hosting
- Co-hosts grid (9 co-hosts)
- Host details: response rate 100%, responds within an hour
- "Message host" button

#### Things to Know
- 3-column: Cancellation policy, House rules, Safety & property

#### More Stays Nearby
- Horizontal card carousel with 5 properties

---

### 3. Amenities Modal

- Centered modal with backdrop overlay
- Close (×) button top-left
- Title: "What this place offers"
- Categories from evidence:
  - **Bathroom**: Hairdryer, Cleaning products, Shampoo, Hot water, Shower gel
  - **Bedroom and laundry**: Washing machine, Hangers, Bed linen, Room-darkening blinds, Iron, Clothes storage, Cot
  - **Entertainment**: TV
  - **Family**: Cot
  - **Heating and cooling**: Air conditioning, Ceiling fan
  - **Home safety**: Exterior security cameras, ~~Carbon monoxide alarm~~, ~~Smoke alarm~~
  - **Internet and office**: Wifi, Dedicated workspace
  - **Kitchen and dining**: Kitchen, Fridge, Freezer, Microwave, Cooking basics, Crockery and cutlery, Kettle, Coffee, Wine glasses, Toaster, Blender, Cooker
  - **Location features**: Private entrance
  - **Outdoor**: Patio or balcony, Outdoor dining area
  - **Parking and facilities**: Free parking on premises, Pool, Hot tub, Gym
  - **Services**: Pets allowed, Cleaning available during stay, Long-term stays allowed, Self check-in
- Strikethrough styling for unavailable items (Carbon monoxide alarm, Smoke alarm)
- Each item has icon + label, separated by subtle bottom borders
- Focus trap + Escape to close

---

### 4. Photo Tour

- Full-screen overlay page (white background)
- **Header bar**: Back arrow (left), "Photo tour" (center), Share + Heart icons (right)
- **Category Navigation Grid**: 9 thumbnails in a horizontal row (wrapping), each ~128×96px with 8px border-radius, label below
- Category order: Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos

Each category section has:
- **Left side** (~35%): Category title (bold, ~32px) + description tags (gray, dot-separated)
- **Right side** (~55%): Photo layout
  - Pattern: 1 large hero image (full width of right column, ~320px tall, 8px border-radius)
  - Below: 2 smaller images side by side (~50% each, ~160px tall, 8px gap)
  - Some categories have additional rows following the same large/pair pattern

Category details from evidence:
| Category | Features | Photos |
|---|---|---|
| Living room 1 | Sofa · Air conditioning · Ceiling fan · TV | 3 (1 large + 2 small) |
| Living room 2 | Ceiling fan · Hot tub | 7 (complex layout: large, 2 small, large, 2 small, large) |
| Full kitchen | Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery | 2 (2 side by side) |
| Bedroom | Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi | 6 (large, 2 small, large, 2 small) |
| Full bathroom | Hairdryer · Hot water · Shampoo · Shower gel | 1 (single large) |
| Gym | Air conditioning · Gym · Exercise equipment · Ceiling fan | 5 (large, 2 small, 2 small) |
| Exterior | (no features listed) | 6 (large, 2 small, large, 2 small) |
| Pool | Pool | 3 (large, 2 small) |
| Additional photos | (no features) | 10 (large, 2 small, large, 2 small, large, 2 small, large) |

- Clicking a thumbnail scrolls to that section
- Clicking any photo opens the Lightbox

---

### 5. Lightbox

- Full-screen black overlay (`rgba(0,0,0,0.9)`)
- Centered image with object-fit contain
- Close button (×) top-left, white
- Previous/Next arrow buttons (chevrons) on sides
- Image counter: "X / Y"
- Keyboard: ArrowLeft (prev), ArrowRight (next), Escape (close)
- Focus trap while open
- Body scroll lock
- Transitions: fade-in overlay (200ms), scale-up image (300ms ease-out), slide transitions between photos

---

### 6. Asset Management

All photos served from `evidences/phototour/` subfolders via Vite's `public/` directory (symlinked or copied).

> [!IMPORTANT]
> The `evidences` folder needs to be accessible to the Vite dev server. We'll copy the phototour assets to `public/photos/` organized by category slug.

---

### 7. CSS Design System

```css
:root {
  --color-primary: #FF385C;        /* Airbnb pink */
  --color-primary-dark: #D70466;   /* Button gradient end */
  --color-text: #222222;           /* Primary text */
  --color-text-secondary: #717171; /* Secondary text */
  --color-border: #DDDDDD;         /* Borders */
  --color-border-light: #EBEBEB;   /* Light borders */
  --color-bg: #FFFFFF;
  --max-width: 1120px;             /* Content max width */
  --font-family: 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

Typography scale:
- Page title: 26px / 600
- Section headings: 22px / 600
- Body text: 16px / 400
- Small text: 14px / 400
- Label text: 12px / 600 (uppercase for CHECK-IN labels)

---

## Verification Plan

### Manual Verification
1. Run `npm run dev` and visually compare every section against evidence screenshots
2. Test Photo Tour navigation and scroll behavior
3. Test Lightbox keyboard navigation (ArrowLeft, ArrowRight, Escape)
4. Test Amenities modal open/close/focus trap
5. Verify all images load from local assets
6. Check hover states on buttons and interactive elements
7. Verify no console errors

### Visual QA Checklist
- [ ] Header matches evidence
- [ ] Hero gallery grid matches (5 images, proportions)
- [ ] Property info section matches
- [ ] Booking card matches
- [ ] Amenities section + modal match
- [ ] Reviews section matches
- [ ] Photo Tour layout matches
- [ ] Lightbox works with keyboard
- [ ] All photos display correctly
