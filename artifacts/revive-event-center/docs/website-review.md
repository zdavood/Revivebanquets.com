# Revive website review and VenueOS handoff

Development changes only. No domain, DNS, redirects, production publishing, backend endpoints, CRM, booking logic, or database changes were made by this work.

## Preserved

The gold/cream identity, typefaces, real venue photographs (including both latest uploads), event-category cards, maps/directions, social links, and existing external tour/inquiry destinations.

## Corrected

- Clear Merced wedding/event-venue headline, up to 350 seated guests, address, evergreen reservations language.
- Removed dated 2026 urgency, unsupported scarcity and guaranteed service/inclusion wording; no advertised numeric prices changed. The proposal now determines inclusions and optional services.
- Booking process now progresses through touring, discussing details/proposal, and reviewing the agreement/securing a reservation.
- Added section navigation on smaller screens, keyboard-accessible FAQ, skip link, explicit copy-address failure/success feedback, focus styles, safe-area spacing and reduced-motion support.
- Phone links use `tel:+12096001502`.
- Pinch zoom is no longer disabled.
- Search structured data previously said 250 guests; now says 350. Removed unverified opening hours, coordinates, in-house catering, on-site parking, accessibility and pricing assertions.
- Canonical, social and sitemap references now use the deployment-service verified current URL, https://revive-event-hub.replit.app/. The former referenced reviveeventcenter.com failed DNS resolution during this review.
- Preserved social image (1280×720), added accurate local metadata and a no-JavaScript contact summary. Unknown routes have visitor-friendly content and client-side noindex.
- Removed duplicate unused Inter font download and CSS font import; existing brand fonts load via a preconnected stylesheet with swap.
- Responsive WebP photos use real dimensions, no upscaling, lazy loading below the fold and high-priority hero loading.

## Measurements

TypeScript passes. All 66 generated WebP files were decoded and their declared source widths checked against actual dimensions.

| Image | Original JPEG | 640px WebP | Larger WebP |
|---|---:|---:|---:|
| Hero | 168,775 bytes | 44,476 bytes | 87,688 bytes (1200px) |
| Red reception | 672,439 bytes | 63,868 bytes | 224,178 bytes (1280px) |
| Colorful reception | 565,881 bytes | 55,358 bytes | 186,790 bytes (1280px) |
| Full ballroom | 707,776 bytes | 44,808 bytes | 199,134 bytes (1280px) |

These are file-size measurements, not measured page-speed improvements. Actual browser choice depends on viewport and pixel density. No Lighthouse score, field Core Web Vitals result or full WCAG certification is claimed.

Computed WCAG contrast for solid theme colors: dark button text on gold 7.54:1 (previous white/gold 2.16:1); dark gold text on cream 6.72:1. Both new pairs exceed 4.5:1 for normal text. Photo-overlay contrast and all interaction states require separate visual assessment.

## VenueOS integration contract — pending coordination, not implemented

Current external links remain:
- Tour: `https://venuesos.com/schedule-tour`
- Inquiry: `https://venuesos.com/inquiry`

Both return HTTP 200 and a generic VenueOS HTML application shell. This does not establish that a venue-specific scheduling or inquiry flow works. Do not treat those checks as completed bookings. See browser findings below.

Browser-confirmed blockers: the tour route renders a generic “Reserve a Private Tour” calendar, no Revive identity, all October 2026 dates disabled and “No openings this month.” The inquiry route displays “This venue inquiry is unavailable. We could not safely identify the venue for this link. Please request a current inquiry link from the venue.” Both external tabs logged 401/503 resource failures. The VenueOS agent must resolve venue routing and endpoint errors and supply working links. These cannot be fixed safely by changing this public website or inventing a venue identifier.

The VenueOS agent must provide:
1. Approved public HTTPS URLs or embed URLs scoped to Revive, with no staff login required, and supported optional attribution parameters. Confirm the correct venue identity before swapping either constant in Home.tsx.
2. Inquiry fields: required name, one usable contact method (email or phone), event type, preferred date or “flexible,” and guest count; optional message. Confirm exact field names, validation, maximum lengths, privacy notice/consent, spam protections and allowed origins. The website should not collect or store duplicate inquiries.
3. If an embedded form is approved: documented loading/readiness, field-validation, submission-in-progress, accepted and failure states. Disable duplicate sends while pending; preserve entries after errors; allow retry and offer phone fallback.
4. Only a backend-accepted response may trigger success. A proposed response contract is `{status:"accepted", inquiryId:string}`; validation errors should identify fields, and rate-limit/server failures need user-safe messages. This is a proposal for the other agent, NOT an existing API.
5. For cross-origin embeds, agree on an origin-validated postMessage contract (version, event type, venue identity, opaque event ID), check event.source, and never trust arbitrary origins or display success on a click. Do not include guest PII in analytics payloads.
6. VenueOS owns notifications, database records, availability, proposals, contracts, payment/reservation rules and authoritative accepted/confirmed events.

No local form was added because there is no approved submission contract. Current public pages open the external interface and provide phone/email fallbacks; the public site cannot truthfully report external submission success.

## Analytics

No existing application analytics provider was found in this website's source. No redundant analytics system or paid service was added. Stable `data-conversion-action` attributes distinguish tour, inquiry and telephone clicks; these are hooks, not active tracking.

If an approved analytics provider is selected, attach page-view and distinct click events there. Form-start and accepted-inquiry/confirmed-booking events must come from VenueOS's actual lifecycle, not from outbound link clicks. Deduplicate accepted events by opaque ID; do not send names, phones, emails or free-text messages. Consent requirements and cross-domain attribution must be agreed with the owner.

## Owner approvals and outstanding facts

- Confirm standard rental inclusions and which services are optional: tables/chairs, kitchen/bar access, vendors, catering, staffing, setup and breakdown. No new price or rental policy is asserted.
- Confirm parking/accessibility information and hours before publishing those claims.
- Confirm permission to publish identifiable guests in existing photos and any genuine reviews supplied later. No reviews, ratings or awards were fabricated.
- Confirm the existing bookings@revivebanquets.com address and social links remain owner-controlled; they were preserved, not independently authenticated.
- Approve final domain choice and the VenueOS venue-specific destinations before release.

## Domain migration recommendation — approval required

The older https://revivebanquets.com/ responds with an existing website. Do not redirect or disable it yet. No domain changes were made.

1. Owner chooses one canonical domain and confirms control of it and the old site. Verify email delivery is independent of website hosting; preserve MX/mail configuration.
2. Inventory old indexed pages, backlinks and landing pages. Map each useful old URL to its closest relevant new page, rather than redirecting every URL blindly.
3. After approval, connect the selected domain, verify HTTPS and complete the VenueOS journey. Update canonical, OG/Twitter URLs, JSON-LD and sitemap/robots together.
4. Publish and verify the new site before enabling server-side permanent redirects. Choose one www/non-www host; avoid chains and loops; retain useful campaign parameters.
5. Verify both sites in Search Console, submit the new sitemap, use Change of Address where applicable, and monitor crawl errors and inquiry/tour outcomes. Keep old redirects active long term.

## SEO limitations

Main page content remains client-rendered with static head metadata and a no-JavaScript summary. JavaScript-capable crawlers can render it, but no guarantee of indexing or rankings is made. No keyword-stuffed duplicate location pages were added. Unknown routes are client-side noindex; a true server HTTP 404 and full prerendering would need a separately scoped hosting/rendering change.

## Photo maintenance

Run `node scripts/responsive-photos.cjs` after adding a JPEG to public/revive-photos. It generates WebP variants and the matching dimension manifest. The full photo-processing script now invokes this step automatically. Keep the hero preload in index.html synchronized if the hero source changes.

## Browser test results

Tested in the development preview on October 15, 2026. No live inquiries or bookings were submitted.

- 390×844 mobile, 768×1024 tablet, 1024×768 small desktop, 1440×1000 desktop, plus 320px narrow-width check: no document overflow. Hero, capacity, CTAs and responsive header fit.
- Mobile section menu: Escape closes and returns focus; internal venue/location links navigate correctly.
- FAQ: Enter expands and Space collapses, with visible focus and correct capacity.
- Address copy: success status observed. Code also exposes failure feedback if the clipboard is unavailable.
- All seven phone links checked use the approved international phone format.
- All 11 visible main images loaded successfully from WebP sources after scrolling, including the two new event photographs.
- Mobile footer links and copyright remain reachable above the sticky contact bar.
- No homepage console errors observed.
- Metadata canonical/title/robots and capacity 350 verified in browser. The branded nonexistent-page screen has client-side noindex but HTTP 200 from the SPA host.
- External booking/inquiry journey FAILED for the VenueOS reasons above. Phone remains the fallback. This is not a fully completed online conversion flow.
- Accessibility checks covered keyboard navigation, focus, zoom settings, safe-area CSS, selected contrast pairs and responsive layout. This is not a comprehensive assistive-technology audit.

Before/after hero screenshots are saved under screenshots/conversion-before-mobile.jpg, screenshots/conversion-after-mobile.jpg, screenshots/conversion-before-desktop.jpg and screenshots/conversion-after-desktop.jpg. The downloadable HTML report embeds them.
