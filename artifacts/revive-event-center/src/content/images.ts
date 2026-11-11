/**
 * Every photo on the site comes from this file.
 *
 * All photos are real, taken at Revive Event Center (443 W. 18th Street,
 * Merced). Do not add stock, AI-generated or styled "concept" images, and do
 * not present décor as included with the rental.
 *
 * To add a photo: put the original in attached_assets/, add it to
 * scripts/process_photos.py, run `python3 scripts/process_photos.py`, then
 * reference "/revive-photos/<name>.jpg" below.
 */

const P = (name: string) => `/revive-photos/${name}.jpg`;

export const images = {
  hero: P("event-wedding-red-setup"),
  weddingDetail: P("wedding-table-detail"),
  colorfulReception: P("event-colorful-reception-setup"),
  culturalDance: P("cultural-dance"),
  culturalCeremony: P("cultural-ceremony"),
  comedyWide: P("comedy-wide"),
  comedySide: P("comedy-side"),
  comedyPerformer: P("comedy-performer"),
  ballroomWide: P("ballroom-wide"),
  ballroomAngle: P("ballroom-angle"),
  scaleFront: P("scale-front"),
  scaleSide: P("scale-side"),
  scaleAngle: P("scale-angle"),
  scaleRear: P("scale-rear"),
  ambiance: P("ambiance"),
  bar: P("bar"),
  barLounge: P("bar-lounge"),
  tableSetting: P("table-setting"),
  centerpiece: P("centerpiece"),
  catering: P("catering"),
  exterior: P("exterior"),
};

export const ALT: Record<keyof typeof images, string> = {
  hero: "Wedding reception at Revive with white floral centerpieces, red napkins and gold chairs under red ceiling lighting",
  weddingDetail: "Round wedding table at Revive with white roses, red napkins, glass charger plates and gold chairs",
  colorfulReception: "Reception at Revive with teal and purple linens, gold-covered chairs and a decorated stage",
  culturalDance: "Guests dancing on a white dance floor under a crystal chandelier at Revive",
  culturalCeremony: "Family celebration at Revive with musicians, bright drapes and floral arches",
  comedyWide: "Comedy night at Revive with a performer on stage and a seated audience under red lighting",
  comedySide: "Side view of a comedy show at Revive with the audience at candlelit tables",
  comedyPerformer: "Comedian on the Revive stage in front of a black drape backdrop with purple lighting",
  ballroomWide: "The empty Revive ballroom with three crystal chandeliers, a tiled ceiling and purple cove lighting",
  ballroomAngle: "Angled view of the empty Revive ballroom showing wall sconces and the pass-through to the bar",
  scaleFront: "The Revive ballroom set with rows of round tables and navy banquet chairs under blue cove lighting",
  scaleSide: "Side view of the Revive ballroom set with round tables and navy banquet chairs",
  scaleAngle: "Wide view of the Revive ballroom set for a large banquet with round tables and navy banquet chairs",
  scaleRear: "Rear view of the Revive ballroom set with round tables under chandeliers and blue lighting",
  ambiance: "Candlelit round tables under deep blue lighting for an evening event at Revive",
  bar: "Revive's granite-topped bar with a lit back-bar shelf",
  barLounge: "The bar area at Revive with gold and white cocktail tables",
  tableSetting: "Black linen table setting at Revive with gold chargers, clear chairs and a candle centerpiece",
  centerpiece: "Tall glass candle centerpiece with greenery on a black-linen table at Revive",
  catering: "Grazing table with charcuterie, cheese, fruit and olives at an event at Revive",
  exterior: "Revive Event Center storefront and sign at 443 W. 18th Street, Merced",
};

export type GalleryCategory = "Weddings & receptions" | "Celebrations" | "Live events" | "The room" | "Bar & details";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Weddings & receptions",
  "Celebrations",
  "Live events",
  "The room",
  "Bar & details",
];

export interface GalleryItem {
  id: keyof typeof images;
  caption: string;
  category: GalleryCategory;
}

export const gallery: GalleryItem[] = [
  { id: "colorfulReception", caption: "Colorful reception with stage", category: "Weddings & receptions" },
  { id: "hero", caption: "Red and white wedding reception", category: "Weddings & receptions" },
  { id: "weddingDetail", caption: "Wedding table detail", category: "Weddings & receptions" },
  { id: "culturalDance", caption: "On the dance floor", category: "Celebrations" },
  { id: "culturalCeremony", caption: "Family celebration with live music", category: "Celebrations" },
  { id: "comedyWide", caption: "Comedy night", category: "Live events" },
  { id: "comedySide", caption: "Show seating at candlelit tables", category: "Live events" },
  { id: "comedyPerformer", caption: "Stage and drape backdrop", category: "Live events" },
  { id: "ballroomWide", caption: "The empty room, front to back", category: "The room" },
  { id: "ballroomAngle", caption: "The empty room, corner view", category: "The room" },
  { id: "scaleAngle", caption: "Set for a large banquet", category: "The room" },
  { id: "ambiance", caption: "Evening lighting", category: "The room" },
  { id: "exterior", caption: "Our front door on W. 18th Street", category: "The room" },
  { id: "barLounge", caption: "Bar and cocktail tables", category: "Bar & details" },
  { id: "tableSetting", caption: "Black linen table setting", category: "Bar & details" },
  { id: "centerpiece", caption: "Candle centerpiece", category: "Bar & details" },
  { id: "catering", caption: "Grazing table", category: "Bar & details" },
];
