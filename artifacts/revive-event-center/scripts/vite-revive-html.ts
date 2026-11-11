/**
 * Writes real page content into index.html at build time.
 *
 * The site is a React app, so without this the HTML that crawlers, link
 * previews and "view source" see is nearly empty. This plugin fills
 * <!--app-shell--> with the headline, event types, every FAQ answer and the
 * contact details, using the same content files the React page uses.
 * React replaces the shell when it starts.
 *
 * Optional env: VITE_GOOGLE_SITE_VERIFICATION (Search Console HTML tag token).
 */
import type { Plugin } from "vite";
import { EVENTS } from "../src/content/events";
import { FAQS } from "../src/content/faq";
import { MAILTO_HREF, TEL_HREF, VENUE, VENUE_ADDRESS } from "../src/content/site";
import { venueOsUrl } from "../src/content/venueos";
import photos from "../src/content/photo-dimensions.json";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const HERO = "event-wedding-red-setup.jpg";

export function heroSrcSet(): string {
  const p = (photos as Record<string, { sources: { file: string; width: number }[] }>)[HERO];
  return p.sources.map((s) => `/revive-photos/${s.file} ${s.width}w`).join(", ");
}


function shell(): string {
  const tour = esc(venueOsUrl("tour"));
  const inquiry = esc(venueOsUrl("inquiry"));
  return `
      <div class="shell">
        <header class="shell-header"><a href="#top"><img src="/brand/revive-logo-gold.svg" alt="Revive Event Center" width="104" height="48" /></a><a class="shell-tel" href="${TEL_HREF}">${VENUE.phoneDisplay}</a></header>
        <section id="top" class="shell-hero">
          <img src="/revive-photos/event-wedding-red-setup-1280.webp" srcset="${heroSrcSet()}" sizes="100vw" alt="Wedding reception at Revive with white floral centerpieces, red napkins and gold chairs under red ceiling lighting" fetchpriority="high" />
          <div class="shell-hero-text">
            <h1>Wedding &amp; Event Venue <em>in Merced</em></h1>
            <p class="shell-facts">Up to ${VENUE.capacity} seated guests · ${esc(VENUE.street)}, Merced</p>
            <p>One indoor ballroom with crystal chandeliers and color lighting, ready for your wedding, quinceañera, celebration or corporate event.</p>
            <p class="shell-ctas"><a class="gold" href="${tour}">Schedule a Tour</a><a class="white" href="${inquiry}">Send an Inquiry</a></p>
            <p>Prefer to talk? <a href="${TEL_HREF}">Call ${VENUE.phoneDisplay}</a></p>
          </div>
        </section>
        <main class="shell-body">
          <h2>Celebrations we host</h2>
          <ul>${EVENTS.map((e) => `<li><h3>${esc(e.title)}</h3><p>${esc(e.desc)}</p></li>`).join("")}</ul>
          <h2>The room</h2>
          <p>An open indoor ballroom in central Merced: up to ${VENUE.capacity} seated guests depending on layout, a banquet floor of about 5,000 sq ft (50 × 100 ft) with the bar, restrooms and prep kitchen alongside, three crystal chandeliers and color LED lighting. Optional catering through preferred partners, hosted bar, event staffing and photo booth rentals.</p>
          <h2>Frequently asked questions</h2>
          ${FAQS.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("\n          ")}
          <h2>Find us</h2>
          <p>${esc(VENUE_ADDRESS)} · <a href="${TEL_HREF}">${VENUE.phoneDisplay}</a> · <a href="${MAILTO_HREF}">${VENUE.email}</a></p>
          <p><a href="${tour}">Schedule a Tour</a> · <a href="${inquiry}">Send an Inquiry</a></p>
        </main>
      </div>`;
}

export function reviveHtml(): Plugin {
  return {
    name: "revive-html",
    transformIndexHtml(html) {
      let out = html.replace("<!--app-shell-->", shell()).replaceAll("%HERO_SRCSET%", heroSrcSet());
      const token = process.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
      if (token) {
        out = out.replace("</head>", `  <meta name="google-site-verification" content="${esc(token)}" />\n  </head>`);
      }
      return out;
    },
  };
}
