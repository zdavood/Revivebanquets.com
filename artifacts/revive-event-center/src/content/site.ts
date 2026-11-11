/**
 * Venue facts used across the site, in one place.
 * Keep relative imports only: vite.config.ts also reads this file.
 *
 * Owner-confirmed rules: up to 350 seated depending on layout; the
 * ~5,000 sq ft figure is the main banquet area only. No public prices,
 * no response-time promises, no invented reviews.
 */
export const SITE_URL = "https://revivebanquets.com";

export const VENUE = {
  name: "Revive Event Center",
  phoneE164: "+12096001502",
  phoneDisplay: "(209) 600-1502",
  email: "bookings@revivebanquets.com",
  street: "443 W. 18th Street",
  streetLong: "443 West 18th Street",
  city: "Merced",
  region: "CA",
  postalCode: "95340",
  capacity: 350,
} as const;

export const TEL_HREF = `tel:${VENUE.phoneE164}`;
export const MAILTO_HREF = `mailto:${VENUE.email}`;
export const VENUE_ADDRESS = `${VENUE.streetLong}, ${VENUE.city}, ${VENUE.region} ${VENUE.postalCode}`;

export const SOCIAL = {
  instagram: "https://instagram.com/revive_banquet_hall",
  facebook: "https://www.facebook.com/profile.php?id=61582753781610",
  tiktok: "https://www.tiktok.com/@revive_banquet_hall",
} as const;

// Searching by name + address lets Google show the Business Profile card
// (name, rating, reviews) instead of a bare street pin.
const MAPS_QUERY = encodeURIComponent(`${VENUE.name}, ${VENUE_ADDRESS}`);
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
export const APPLE_MAPS_DIRECTIONS_URL = `https://maps.apple.com/?daddr=${encodeURIComponent(VENUE_ADDRESS)}&q=${encodeURIComponent(VENUE.name)}`;

/**
 * Paste the Google Business Profile "Ask for reviews" link here once it is
 * available (Business Profile > Ask for reviews). While empty, the site shows
 * no review prompt. Never add review text or ratings by hand.
 */
export const GOOGLE_REVIEW_URL = "";
