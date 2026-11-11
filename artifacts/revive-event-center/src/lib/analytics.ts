/**
 * Visitor and lead tracking.
 *
 * Google Analytics 4 is on by default (DEFAULT_GA_ID below). Optional
 * build-time overrides:
 *   VITE_GA_MEASUREMENT_ID   another G-XXXXXXXXXX
 *   VITE_PLAUSIBLE_DOMAIN    e.g. revivebanquets.com (adds Plausible)
 *
 * Every call, tour, inquiry and directions link carries
 * data-conversion-action="..."; one delegated listener reports those clicks
 * with the page section they came from. No personal data is sent.
 */

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: ((event: string, options?: { props?: Params }) => void) & { q?: unknown[] };
  }
}

// Revive's GA4 property "revivebanquets.com" (stream "Revive website").
// Measurement IDs are public by design; an env var can override it.
const DEFAULT_GA_ID = "G-QJPYPRDDP0";
const GA_ID = ((import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || DEFAULT_GA_ID).trim();
const PLAUSIBLE_DOMAIN = (import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined)?.trim();

function addScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  document.head.appendChild(s);
}

export function track(event: string, params: Params = {}) {
  if (window.gtag) window.gtag("event", event, params);
  if (window.plausible) window.plausible(event, { props: params });
  if (import.meta.env.DEV) console.debug("[track]", event, params);
}

let started = false;

export function initAnalytics() {
  if (started || typeof window === "undefined") return;
  started = true;

  if (GA_ID && /^G-[A-Z0-9]+$/.test(GA_ID)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  }

  if (PLAUSIBLE_DOMAIN) {
    window.plausible =
      window.plausible ||
      Object.assign(
        (...args: unknown[]) => {
          (window.plausible!.q = window.plausible!.q || []).push(args);
        },
        { q: [] as unknown[] },
      );
    addScript("https://plausible.io/js/script.js", { "data-domain": PLAUSIBLE_DOMAIN, defer: "" });
  }

  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-conversion-action]");
      if (!el) return;
      const section = el.closest<HTMLElement>("[data-track-section], section[id], header, footer, nav");
      track(el.dataset.conversionAction!, {
        location:
          el.dataset.trackLocation ||
          section?.dataset.trackSection ||
          section?.id ||
          section?.tagName.toLowerCase() ||
          "page",
        link_text: (el.querySelector("h3")?.textContent ?? el.textContent ?? "").replace("(opens in a new tab)", "").trim().slice(0, 60),
      });
    },
    { capture: true },
  );
}
