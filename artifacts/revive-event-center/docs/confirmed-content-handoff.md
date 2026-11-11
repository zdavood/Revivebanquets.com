# Revive website: confirmed content and external settings

## Website changes
- One Merced indoor ballroom, up to 350 seated depending on tables, dance floor and staging.
- Approximately 50 × 100 feet (about 5,000 square feet) describes only the main banquet area. Separate bar, bathrooms and prep kitchen are outside those dimensions, not additional seated capacity.
- Optional photo booth rentals, staffing, preferred-partner catering and hosted bar options; proposal confirms availability, details and inclusions.
- Existing authentic photos and tour/inquiry actions remain. Pictured décor is not promised as included.
- No public prices, valet claims, internal catalog labels or vendor/source details.
- No fixed tour booking window or invented response-time promise.

## VenueOS owner
1. **Return navigation:** Set any public “Back to website” or return action to Revive's verified website, https://revivebanquets.com/. Do not change internal form-step Back buttons into exit links. The hosted shared header currently defaults its back destination to `/`; callers must supply Revive's URL where a website-return link is shown. This cannot be changed by the separate marketing frontend.
2. **No date yet:** The current public inquiry page says “Choose a date first.” Its inspected inquiry code has no confirmed date-undecided option. Add an optional-date path in VenueOS if supported by its inquiry model; do not invent dates or reservations. Until then the website offers a call for planning without a date.
3. **No public pricing:** The hosted inquiry code still contains “Event Details & Pricing” and an “instant starting-price range estimate” description. Remove customer-facing prices, ranges and internal catalog/provider details in VenueOS too. These are separate from this website's source. No later form steps were submitted or tested.
4. **Tour scheduling:** Keep the owner's 14-day configuration authoritative. Only return eligible dates and slots from the scheduler. The website makes no static window promise and offers call/inquiry alternatives.
5. **Follow-up expectations:** The owner wants general wording, not an exact response-time promise. Say the team will follow up about event details, availability and next steps. Do not add a numerical deadline. Ensure confirmation accurately describes what follows a saved inquiry.

## Domain (updated Nov 2026)
- The public address is https://revivebanquets.com/. The canonical tag, share tags, structured data, robots.txt and sitemap all use it.
- `index.html` sends any visit to `*.replit.app` to revivebanquets.com with a script redirect. Replit can't switch its own address off, so a server-side 301 needs a different host or a proxy (e.g. Cloudflare) in front of the site.
- Add revivebanquets.com to Google Search Console and submit the sitemap. To verify with the HTML-tag method, set the `VITE_GOOGLE_SITE_VERIFICATION` env var to the token and redeploy.
- Unknown addresses now return "not found" (`public/404.html`); the catch-all rewrite was removed.

## Tracking
- Set `VITE_GA_MEASUREMENT_ID` (GA4, `G-...`) or `VITE_PLAUSIBLE_DOMAIN` and redeploy. One listener reports every element with `data-conversion-action` (`tour_click`, `inquiry_click`, `phone_click`, `email_click`, `directions_click`, `social_click`, `review_click`, plus `gallery_open` / `gallery_filter`) with the page section it came from.
- Tour, inquiry and consultation links all carry the venue code and pass through `utm_*` campaign tags.

## Reviews
- Paste the Business Profile "Ask for reviews" link into `GOOGLE_REVIEW_URL` in `src/content/site.ts`; the footer then shows a review link. Never add review text or star ratings by hand.

## Photos
- Only real photos of Revive. The six styled color-theme tiles (setup-*) were AI renders of a different room and were removed with their source collage. See `public/revive-photos/README.md` and `scripts/process_photos.py`.

## VenueOS owner (new requests from the Nov 2026 audit)
6. Give the hosted tour and inquiry pages Revive's look: the script "Revive" logo (`/brand/revive-logo-gold.svg` on revivebanquets.com), Cormorant Garamond headings, Manrope text, gold `#C9A777`, one real photo, and the same button labels ("Schedule a Tour", "Send an Inquiry").
7. Cut the inquiry's first step to one screen: name, phone, event type, date (optional) and guest count.
8. After an inquiry is submitted, offer next steps instead of a dead end: schedule a tour, call (209) 600-1502, or go back to the gallery (https://revivebanquets.com/#gallery).

## Verification scope
Public hosted pages and shipped code were inspected read-only. No inquiries, bookings, slot holds or emails were created. The website continues to use normal hosted links with `venue=revive` and an inquiry campaign-parameter allowlist.
