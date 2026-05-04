/**
 * Revive Event Center Images
 * 
 * Every image URL on the site comes from this file.
 * To swap in real Revive photos, drop your files into public/revive-photos/ 
 * and replace the URL with the local path, e.g. "/revive-photos/my-photo.jpg".
 * 
 * The Recent Events gallery at the bottom of the home page is driven by the 
 * recentEventsGallery array — edit each entry's image/caption/alt to swap photos.
 */

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  eventType?: string;
}

export const images = {
  hero: "/revive-photos/hero.jpg",
  ballroom: "/revive-photos/ballroom.jpg",
  exterior: "/revive-photos/exterior.jpg",
  weddings: "/revive-photos/wedding.jpg",
  quinceaneras: "/revive-photos/quinceanera.jpg",
  corporate: "/revive-photos/corporate.jpg",
  concerts: "/revive-photos/concert.jpg",
  holiday: "/revive-photos/holiday.jpg",
  package: "/revive-photos/package.jpg",
  prom: "/revive-photos/prom.jpg",
  birthdays: "/revive-photos/birthday.jpg",
  fundraisers: "/revive-photos/fundraiser.jpg",
  anniversaries: "/revive-photos/anniversary.jpg",
  memorials: "/revive-photos/memorial.jpg",
};

export const recentEventsGallery: GalleryItem[] = [
  {
    id: "g1",
    image: "/revive-photos/wedding.jpg",
    alt: "Elegant wedding reception setup",
    caption: "A timeless wedding reception",
    eventType: "Wedding",
  },
  {
    id: "g2",
    image: "/revive-photos/quinceanera.jpg",
    alt: "Quinceañera celebration details",
    caption: "A night to remember",
    eventType: "Quinceañera",
  },
  {
    id: "g3",
    image: "/revive-photos/corporate.jpg",
    alt: "Corporate gala seating",
    caption: "Annual corporate gala",
    eventType: "Corporate",
  },
  {
    id: "g4",
    image: "/revive-photos/hero.jpg",
    alt: "Golden hour lighting in the ballroom",
    caption: "Breathtaking golden hour glow",
    eventType: "Venue",
  },
  {
    id: "g5",
    image: "/revive-photos/concert.jpg",
    alt: "Live concert lighting and stage",
    caption: "Live entertainment setup",
    eventType: "Concert",
  },
  {
    id: "g6",
    image: "/revive-photos/holiday.jpg",
    alt: "Holiday party decor",
    caption: "Festive holiday celebrations",
    eventType: "Holiday Party",
  },
  {
    id: "g7",
    image: "/revive-photos/ballroom.jpg",
    alt: "Ballroom chandeliers and uplighting",
    caption: "Our signature uplighting",
    eventType: "Venue Details",
  },
  {
    id: "g8",
    image: "/revive-photos/package.jpg",
    alt: "Gourmet catering presentation",
    caption: "Exquisite catering options",
    eventType: "Catering",
  },
];