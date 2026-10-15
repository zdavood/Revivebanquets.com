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

  // Wide blue-uplit setup shots that demonstrate the venue's true scale —
  // rows of round tables, chiavari chairs, signature LED ceiling halo.
  scaleFront: "/revive-photos/scale-front.jpg",
  scaleSide: "/revive-photos/scale-side.jpg",
  scaleAngle: "/revive-photos/scale-angle.jpg",
  scaleRear: "/revive-photos/scale-rear.jpg",

  // Comedy night — proves the concert/performance/show use case with
  // real stage, audience, and dramatic red uplighting.
  comedyWide: "/revive-photos/comedy-wide.jpg",
  comedySide: "/revive-photos/comedy-side.jpg",
  comedyPerformer: "/revive-photos/comedy-performer.jpg",
  comedyRed: "/revive-photos/comedy-red.jpg",

  // Cultural / multicultural celebrations — real South Asian weddings,
  // reception dances, and traditional ceremonies hosted at Revive.
  culturalDance: "/revive-photos/cultural-dance.jpg",
  culturalCeremony: "/revive-photos/cultural-ceremony.jpg",

  // Real amenities & atmosphere: the full bar and candlelit evening ambiance.
  bar: "/revive-photos/bar.jpg",
  ambiance: "/revive-photos/ambiance.jpg",

  // Event-type cards mapped to fully-styled setup photos so each celebration
  // type shows what a finished room looks like in that color story.
  weddings: "/revive-photos/event-wedding-red-setup.jpg",
  quinceaneras: "/revive-photos/setup-burgundy.jpg",
  cultural: "/revive-photos/cultural-dance.jpg",
  ceremonies: "/revive-photos/event-colorful-reception-setup.jpg",
  corporate: "/revive-photos/scale-front.jpg",
  concerts: "/revive-photos/comedy-red.jpg",
  holiday: "/revive-photos/setup-burgundy.jpg",
  prom: "/revive-photos/setup-teal.jpg",
  birthdays: "/revive-photos/setup-greenery.jpg",
  anniversaries: "/revive-photos/setup-garden.jpg",
  fundraisers: "/revive-photos/scale-side.jpg",
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
    image: "/revive-photos/scale-front.jpg",
    alt: "Wide front-on view of the Revive ballroom set with rows of round tables, chiavari chairs, and signature blue LED ceiling uplighting",
    caption: "Full ballroom — set for 200+",
    eventType: "Venue Scale",
  },
  {
    id: "g3",
    image: "/revive-photos/comedy-wide.jpg",
    alt: "Stand-up comedy night at Revive Event Center with a performer on stage, black drape backdrop, and seated audience under red LED uplighting",
    caption: "Comedy night — red uplighting",
    eventType: "Live Show",
  },
  {
    id: "g4",
    image: "/revive-photos/setup-navy.jpg",
    alt: "Navy and gold ballroom styling with mirrored dance floor for a corporate gala",
    caption: "Navy & gold gala styling",
    eventType: "Corporate Gala",
  },
  {
    id: "g5",
    image: "/revive-photos/scale-angle.jpg",
    alt: "Angled wide view of the Revive ballroom showing depth, chandeliers, and dozens of round tables under blue LED uplighting",
    caption: "Room depth & ceiling halo",
    eventType: "Venue Scale",
  },
  {
    id: "g6",
    image: "/revive-photos/setup-burgundy.jpg",
    alt: "Crimson red drapes and floral arrangements styled for a quinceañera celebration",
    caption: "Crimson & ivory quinceañera",
    eventType: "Quinceañera",
  },
  {
    id: "g7",
    image: "/revive-photos/comedy-performer.jpg",
    alt: "Comedian on the Revive stage in front of a black velvet backdrop with purple stage lighting",
    caption: "Stage, drape & spotlight",
    eventType: "Live Show",
  },
  {
    id: "g8",
    image: "/revive-photos/setup-garden.jpg",
    alt: "Garden greenery wall and wood-tone tablescape inside the Revive ballroom",
    caption: "Garden greenery wall",
    eventType: "Wedding",
  },
  {
    id: "g9",
    image: "/revive-photos/catering.jpg",
    alt: "Artisan grazing table with charcuterie boards, fresh fruit, cheeses, and olives",
    caption: "Artisan grazing tables",
    eventType: "Catering",
  },
  {
    id: "g10",
    image: "/revive-photos/setup-teal.jpg",
    alt: "Teal and ivory ballroom setup with white florals and a mirrored dance floor",
    caption: "Teal & ivory color story",
    eventType: "Wedding",
  },
  {
    id: "g11",
    image: "/revive-photos/scale-rear.jpg",
    alt: "Rear-angle view of the Revive ballroom set with rows of tables under dramatic blue LED uplighting and chandeliers",
    caption: "Capacity & flow",
    eventType: "Venue Scale",
  },
  {
    id: "g12",
    image: "/revive-photos/setup-greenery.jpg",
    alt: "Lush greenery wall and tall floral centerpieces inside the Revive ballroom",
    caption: "Lush greenery & blooms",
    eventType: "Milestone Celebration",
  },
  {
    id: "g13",
    image: "/revive-photos/exterior.jpg",
    alt: "Revive Event Center storefront with custom gold lattice doors at 443 W 18th Street, Merced",
    caption: "Welcome to Revive — 443 W 18th Street",
    eventType: "Venue",
  },
];
