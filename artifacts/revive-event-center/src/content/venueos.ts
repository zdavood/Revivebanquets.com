// Public tenant identity confirmed by the venue owner; not a credential.
// Keep relative imports only: vite.config.ts also reads this file.
export const VENUEOS_CONFIG = {
  origin: "https://venuesos.com",
  slug: "revive",
} as const;

const paths = {
  tour: "/schedule-tour",
  consultation: "/schedule-call",
  inquiry: "/inquiry",
  availability: "/availability",
} as const;

export type VenueOsDestination = keyof typeof paths;

// Only campaign attribution may cross to the hosted pages.
const CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export function venueOsUrl(destination: VenueOsDestination, search = ""): string {
  if (!VENUEOS_CONFIG.slug.trim()) {
    throw new Error("VenueOS public venue slug is not configured.");
  }
  const url = new URL(paths[destination], VENUEOS_CONFIG.origin);
  url.searchParams.set("venue", VENUEOS_CONFIG.slug);

  const incoming = new URLSearchParams(search);
  for (const key of CAMPAIGN_KEYS) {
    const value = incoming.get(key);
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}
