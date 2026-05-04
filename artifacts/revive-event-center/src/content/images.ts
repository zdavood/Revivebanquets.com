/**
 * Revive Event Center Images
 *
 * Every image URL on the site comes from this file.
 * The site now ships with the real Revive Event Center photo set in
 * public/revive-photos/ — wide ballroom shots, the exterior storefront,
 * artisan catering, and six fully-styled event setups (blush, navy,
 * garden, greenery, burgundy, teal). To swap in additional or updated
 * photos later, drop a file into public/revive-photos/ and replace the
 * URL below with its path, e.g. "/revive-photos/my-photo.jpg".
 *
 * The Recent Events gallery is driven by the recentEventsGallery array —
 * edit each entry's image / caption / alt to swap photos.
 */

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  eventType?: string;
}

export const images = {
  // Real venue interior + exterior + catering
  hero: "/revive-photos/setup-blush.jpg",
  ballroom: "/revive-photos/ballroom-angle.jpg",
  exterior: "/revive-photos/exterior.jpg",
  package: "/revive-photos/catering.jpg",

  // Event-type cards mapped to fully-styled setup photos so each celebration
  // type shows what a finished room looks like in that color story.
  weddings: "/revive-photos/setup-blush.jpg",
  quinceaneras: "/revive-photos/setup-burgundy.jpg",
  corporate: "/revive-photos/setup-navy.jpg",
  concerts: "/revive-photos/ballroom-angle.jpg",
  holiday: "/revive-photos/setup-burgundy.jpg",
  prom: "/revive-photos/setup-teal.jpg",
  birthdays: "/revive-photos/setup-greenery.jpg",
  anniversaries: "/revive-photos/setup-garden.jpg",
  fundraisers: "/revive-photos/setup-navy.jpg",
  memorials: "/revive-photos/ballroom-wide.jpg",
};

export const recentEventsGallery: GalleryItem[] = [
  {
    id: "g1",
    image: "/revive-photos/setup-blush.jpg",
    alt: "Blush pink draping with floral centerpieces and chiavari chairs at a Revive wedding reception",
    caption: "Blush & ivory wedding reception",
    eventType: "Wedding",
  },
  {
    id: "g2",
    image: "/revive-photos/setup-navy.jpg",
    alt: "Navy and gold ballroom styling with mirrored dance floor for a corporate gala",
    caption: "Navy & gold gala styling",
    eventType: "Corporate Gala",
  },
  {
    id: "g3",
    image: "/revive-photos/setup-garden.jpg",
    alt: "Garden greenery wall and wood-tone tablescape inside the Revive ballroom",
    caption: "Garden greenery wall",
    eventType: "Wedding",
  },
  {
    id: "g4",
    image: "/revive-photos/ballroom-angle.jpg",
    alt: "Wide interior view of the Revive ballroom with crystal chandeliers and signature purple LED uplighting",
    caption: "Signature uplighting & chandeliers",
    eventType: "Venue",
  },
  {
    id: "g5",
    image: "/revive-photos/setup-burgundy.jpg",
    alt: "Crimson red drapes and floral arrangements styled for a quinceañera celebration",
    caption: "Crimson & ivory quinceañera",
    eventType: "Quinceañera",
  },
  {
    id: "g6",
    image: "/revive-photos/catering.jpg",
    alt: "Artisan grazing table with charcuterie boards, fresh fruit, cheeses, and olives",
    caption: "Artisan grazing tables",
    eventType: "Catering",
  },
  {
    id: "g7",
    image: "/revive-photos/setup-teal.jpg",
    alt: "Teal and ivory ballroom setup with white florals and a mirrored dance floor",
    caption: "Teal & ivory color story",
    eventType: "Wedding",
  },
  {
    id: "g8",
    image: "/revive-photos/setup-greenery.jpg",
    alt: "Lush greenery wall and tall floral centerpieces inside the Revive ballroom",
    caption: "Lush greenery & blooms",
    eventType: "Milestone Celebration",
  },
  {
    id: "g9",
    image: "/revive-photos/exterior.jpg",
    alt: "Revive Event Center storefront with custom gold lattice doors at 443 W 18th Street, Merced",
    caption: "Welcome to Revive — 443 W 18th Street",
    eventType: "Venue",
  },
];
