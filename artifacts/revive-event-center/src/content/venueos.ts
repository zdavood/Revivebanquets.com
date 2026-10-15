// Public tenant identity confirmed by the venue owner; not a credential.
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

export function venueOsUrl(
  destination: keyof typeof paths,
  search = "",
): string {
  if (!VENUEOS_CONFIG.slug.trim()) {
    throw new Error("VenueOS public venue slug is not configured.");
  }
  const url = new URL(paths[destination], VENUEOS_CONFIG.origin);
  url.searchParams.set("venue", VENUEOS_CONFIG.slug);

  // Only campaign attribution may cross to the hosted inquiry page.
  if (destination === "inquiry") {
    const incoming = new URLSearchParams(search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
      const value = incoming.get(key);
      if (value) url.searchParams.set(key, value);
    }
  }
  return url.toString();
}
