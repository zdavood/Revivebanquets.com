import { useState, type MouseEvent, type ReactNode } from "react";
import {
  ArrowRight,
  CalendarHeart,
  CheckCircle2,
  Clock,
  Copy,
  ExternalLink,
  Facebook,
  FileSignature,
  GlassWater,
  Instagram,
  Lightbulb,
  MapPin,
  Music,
  Navigation,
  PhoneCall,
  Ruler,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { VenueImage } from "@/components/VenueImage";
import { MobileSectionNav, SECTION_LINKS } from "@/components/SectionNav";
import { VenueFaq } from "@/components/VenueFaq";
import { OptionalServices } from "@/components/OptionalServices";
import { Gallery } from "@/components/Gallery";
import { ALT, images } from "@/content/images";
import { EVENTS } from "@/content/events";
import { venueOsUrl } from "@/content/venueos";
import {
  APPLE_MAPS_DIRECTIONS_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_REVIEW_URL,
  MAILTO_HREF,
  MAPS_EMBED_URL,
  SOCIAL,
  TEL_HREF,
  VENUE,
  VENUE_ADDRESS,
} from "@/content/site";

function isAppleMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  // iPadOS 13+ reports as Mac; treat as Apple device only when touch-enabled
  return ua.includes("Macintosh") && typeof document !== "undefined" && "ontouchend" in document;
}

function handleDirectionsClick(event: MouseEvent<HTMLAnchorElement>) {
  if (isAppleMobileDevice()) {
    event.preventDefault();
    window.open(APPLE_MAPS_DIRECTIONS_URL, "_blank", "noopener,noreferrer");
  }
}

const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`${light ? "text-primary" : "text-ink-gold"} text-sm font-semibold uppercase tracking-[0.25em]`}>
      {children}
    </span>
  );
}

const ROOM_FACTS = [
  { icon: Users, title: `Up to ${VENUE.capacity} seated guests`, desc: "Depending on your tables, dance floor and staging." },
  { icon: Ruler, title: "About 5,000 sq ft banquet floor", desc: "Roughly 50 × 100 ft, with the bar, restrooms and prep kitchen alongside." },
  { icon: Lightbulb, title: "Chandeliers and color lighting", desc: "Three crystal chandeliers and an LED cove you can set to your colors." },
  { icon: GlassWater, title: "On-site bar", desc: "A granite bar with cocktail tables for your hosted bar." },
];

export default function Home() {
  const search = typeof window === "undefined" ? "" : window.location.search;
  const TOUR_URL = venueOsUrl("tour", search);
  const INQUIRY_URL = venueOsUrl("inquiry", search);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");

  const handleCopyAddress = async () => {
    try {
      if (!navigator.clipboard) throw new Error("no clipboard");
      await navigator.clipboard.writeText(VENUE_ADDRESS);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    setTimeout(() => setCopyStatus("idle"), 4000);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <a href="#main" className="skip-link">Skip to main content</a>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          <a href="#top" data-testid="link-home-logo" className="shrink-0">
            <img src="/brand/revive-logo-gold.svg" alt="Revive Event Center" width={104} height={48} className="h-12 w-auto" />
          </a>
          <nav aria-label="Primary" className="flex items-center gap-3 lg:gap-6 text-sm font-medium">
            {SECTION_LINKS.filter((l) => ["#celebrations", "#venue", "#gallery", "#faq"].includes(l.href)).map((l) => (
              <a key={l.href} href={l.href} className="hidden xl:inline-block hover:text-ink-gold transition-colors">{l.label}</a>
            ))}
            <a href={TEL_HREF} data-conversion-action="phone_click" data-testid="link-nav-phone" className="hidden lg:flex items-center gap-2 hover:text-ink-gold transition-colors whitespace-nowrap">
              <PhoneCall className="w-4 h-4 text-ink-gold" aria-hidden="true" /> {VENUE.phoneDisplay}
            </a>
            <Button asChild size="lg" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
              <a href={TOUR_URL} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer" data-testid="link-nav-tour">
                Schedule a Tour<NewTab />
              </a>
            </Button>
            <MobileSectionNav tourUrl={TOUR_URL} />
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="focus:outline-none">
        {/* HERO — real reception photo, no fade-in */}
        <section id="top" data-track-section="hero" className="relative min-h-[88vh] md:min-h-[92vh] pt-20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <VenueImage src={images.hero} alt={ALT.hero} priority sizes="100vw" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/40" />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(0,0,0,0.45), rgba(0,0,0,0) 75%), linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0) 40%)" }}
            />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 sm:py-20 flex flex-col items-center text-center space-y-6">
            <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl font-serif font-medium tracking-tight text-white leading-[1.05] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
              <span className="sm:whitespace-nowrap">Wedding &amp; Event Venue</span>{" "}
              <span className="block text-primary italic mt-1">in Merced</span>
            </h1>
            <p className="flex items-center justify-center gap-x-3 gap-y-1 text-base md:text-lg text-white font-medium flex-wrap [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
              <span>Up to {VENUE.capacity} seated guests</span>
              <span className="text-primary" aria-hidden="true">·</span>
              <span>{VENUE.street}, Merced</span>
            </p>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] text-pretty">
              One indoor ballroom with crystal chandeliers and color lighting, ready for your wedding, quinceañera, celebration or corporate event.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md mx-auto sm:max-w-none">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg">
                <a href={TOUR_URL} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer">
                  Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /><NewTab />
                </a>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-white text-foreground hover:bg-white/90 font-semibold shadow-lg">
                <a href={INQUIRY_URL} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer">
                  Send an Inquiry<NewTab />
                </a>
              </Button>
            </div>
            <p className="text-base text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
              Prefer to talk? <a href={TEL_HREF} data-conversion-action="phone_click" className="underline underline-offset-4 font-semibold">Call {VENUE.phoneDisplay}</a>
            </p>
          </div>
        </section>

        {/* EVENT DOORS */}
        <section id="celebrations" tabIndex={-1} className="focus:outline-none py-20 md:py-28 bg-card border-b border-border scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <Eyebrow>Celebrations We Host</Eyebrow>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-5 text-balance">One room, styled for your event</h2>
                <p className="text-lg text-muted-foreground">Every photo below is from a real event at Revive.</p>
              </div>
              <Button asChild variant="outline" className="shrink-0 hidden md:inline-flex h-12 px-6 font-semibold">
                <a href={INQUIRY_URL} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer">Tell us about your event<NewTab /></a>
              </Button>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EVENTS.map((event) => (
                <li key={event.title} className="group relative min-h-[340px] sm:min-h-0 sm:aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                  <VenueImage
                    src={images[event.image]}
                    alt={ALT[event.image]}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="relative h-full min-h-[inherit] flex flex-col justify-end p-6 md:p-7">
                    <h3 className="text-white text-2xl md:text-[28px] font-serif font-semibold leading-tight mb-2">{event.title}</h3>
                    <p className="text-white/90 text-[15px] leading-relaxed">{event.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 md:hidden">
              <Button asChild variant="outline" className="w-full h-12 font-semibold">
                <a href={INQUIRY_URL} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer">Tell us about your event<NewTab /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* THE ROOM */}
        <section id="venue" tabIndex={-1} className="focus:outline-none py-20 md:py-28 bg-background scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-xl">
                <VenueImage src={images.ballroomWide} alt={ALT.ballroomWide} sizes="(min-width: 1024px) 50vw, 100vw" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div>
                <Eyebrow>The Room</Eyebrow>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-5 text-balance">A blank canvas in central Merced</h2>
                <p className="text-lg text-muted-foreground mb-8">An open, column-free ballroom you can set with round tables, banquet rows, a dance floor or a stage. Walk it with us and plan your layout in person.</p>
                <ul className="grid sm:grid-cols-2 gap-6">
                  {ROOM_FACTS.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <f.icon className="w-6 h-6 text-ink-gold shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h3 className="font-sans text-base font-semibold">{f.title}</h3>
                        <p className="text-muted-foreground text-[15px] leading-relaxed">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-12">
              {[
                { image: images.barLounge, alt: ALT.barLounge, title: "The Bar", desc: "A granite bar with a lit back shelf and cocktail tables." },
                { image: images.ambiance, alt: ALT.ambiance, title: "Evening Lighting", desc: "Set the cove lighting to your colors, from bright to candlelit." },
              ].map((item) => (
                <figure key={item.title} className="group relative min-h-[300px] sm:min-h-0 sm:aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
                  <VenueImage src={item.image} alt={item.alt} sizes="(min-width: 768px) 50vw, 100vw" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <figcaption className="relative h-full min-h-[inherit] flex flex-col justify-end p-6 md:p-8">
                    <span className="text-white text-2xl md:text-[28px] font-serif font-semibold leading-tight mb-1">{item.title}</span>
                    <span className="text-white/90 text-[15px] leading-relaxed">{item.desc}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SEE THE SCALE */}
        <section data-track-section="scale" className="relative min-h-[520px] md:h-[72vh] md:min-h-[600px] w-full overflow-hidden">
          <VenueImage src={images.scaleFront} sizes="100vw" alt={ALT.scaleFront} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
          <div className="relative z-10 h-full min-h-[inherit] max-w-7xl mx-auto px-6 py-16 flex items-center">
            <div className="max-w-xl text-white space-y-6">
              <Eyebrow light>See the Scale</Eyebrow>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.05] text-balance">
                Room for {VENUE.capacity} at the table.
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Set for a large banquet, the room still leaves space to move. Come see it, and we’ll talk through the layout your guest list needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 font-semibold shadow-lg">
                  <a href={TOUR_URL} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer">
                    Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /><NewTab />
                  </a>
                </Button>
                <Button asChild size="lg" className="h-14 px-8 bg-white text-foreground hover:bg-white/90 font-semibold">
                  <a href={INQUIRY_URL} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer">Send an Inquiry<NewTab /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        <OptionalServices />

        {/* PLAN YOUR EVENT — one booking section */}
        <section id="book" tabIndex={-1} className="py-20 md:py-28 bg-background scroll-mt-24 focus:outline-none">
          <span id="how-it-works" className="block -mt-24 pt-24" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Eyebrow>Plan Your Event</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-5 text-balance">Three steps to your date</h2>
              <p className="text-lg text-muted-foreground">Asking costs nothing and commits you to nothing. Your date is reserved only once you review and sign an agreement.</p>
            </div>

            <ol className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Clock, title: "Tour or tell us", desc: "Walk the ballroom with us, or send your date, guest count and event type." },
                { icon: CalendarHeart, title: "Get your proposal", desc: "We confirm availability and send a proposal with your inclusions and any add-ons." },
                { icon: FileSignature, title: "Secure your date", desc: "Review the agreement, ask anything, and reserve when you’re ready." },
              ].map((s, i) => (
                <li key={s.title} className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                  <span className="font-serif text-4xl text-ink-gold leading-none w-8 shrink-0" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { href: TOUR_URL, action: "tour_click", icon: Clock, title: "Schedule a Tour", desc: "Pick a time that works and see the room, the lighting and the layouts in person.", testid: "card-schedule-tour" },
                { href: INQUIRY_URL, action: "inquiry_click", icon: CalendarHeart, title: "Send an Inquiry", desc: "Share your date, guest count and event type. Our team follows up about availability and next steps.", testid: "card-send-inquiry" },
              ].map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  data-conversion-action={c.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={c.testid}
                  className="group flex flex-col bg-card rounded-2xl shadow-md hover:shadow-xl border border-border hover:border-primary p-6 sm:p-8 transition-all"
                >
                  <c.icon className="w-8 h-8 text-ink-gold mb-5" aria-hidden="true" />
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-ink-gold font-semibold">
                    {c.title} <ExternalLink className="w-4 h-4" aria-hidden="true" /><NewTab />
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-foreground">
              No date yet, or rather talk it through? Call{" "}
              <a href={TEL_HREF} data-conversion-action="phone_click" className="text-ink-gold font-semibold underline underline-offset-4">{VENUE.phoneDisplay}</a>{" "}
              or email{" "}
              <a href={MAILTO_HREF} data-conversion-action="email_click" className="text-ink-gold font-semibold underline underline-offset-4">{VENUE.email}</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" tabIndex={-1} className="py-20 md:py-28 bg-card border-t border-border scroll-mt-24 focus:outline-none">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <Eyebrow>Questions</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4">Frequently Asked</h2>
            </div>
            <VenueFaq />
            <p className="mt-10 text-center text-muted-foreground">
              Still have a question? <a href={TEL_HREF} data-conversion-action="phone_click" className="text-ink-gold font-medium underline underline-offset-4">Call {VENUE.phoneDisplay}</a> or{" "}
              <a href={INQUIRY_URL} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer" className="text-ink-gold font-medium underline underline-offset-4">send an inquiry<NewTab /></a>.
            </p>
          </div>
        </section>

        {/* FIND US */}
        <section id="find-us" tabIndex={-1} className="py-20 md:py-28 bg-background border-t border-border scroll-mt-24 focus:outline-none">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Eyebrow>Find Us</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-5">In the heart of Merced</h2>
              <p className="text-lg text-muted-foreground">{VENUE_ADDRESS}. Ask our team about parking and arrival details for your event.</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
              <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-lg bg-muted aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
                <iframe
                  src={MAPS_EMBED_URL}
                  title={`Map showing Revive Event Center at ${VENUE_ADDRESS}`}
                  className="w-full h-full border-none block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  data-testid="iframe-venue-map"
                />
              </div>

              <div className="lg:col-span-2 bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <div className="relative aspect-[16/9] bg-muted">
                  <VenueImage src={images.exterior} alt={ALT.exterior} sizes="(min-width: 1024px) 40vw, 100vw" className="absolute inset-0 w-full h-full object-cover object-[center_15%]" />
                </div>
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Revive Event Center</h3>
                  <address className="not-italic mb-6">
                    <p className="text-lg text-foreground font-medium leading-relaxed select-text" data-testid="text-venue-address">
                      {VENUE.streetLong}<br />
                      {VENUE.city}, {VENUE.region} {VENUE.postalCode}
                    </p>
                    <button type="button" onClick={handleCopyAddress} data-testid="button-copy-address" className="mt-2 inline-flex items-center gap-2 min-h-11 text-sm text-muted-foreground hover:text-ink-gold transition-colors">
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      Copy address
                    </button>
                    <p role="status" aria-live="polite" className="text-sm min-h-[1.25rem]" data-testid="status-copy-address">
                      {copyStatus === "copied" && <span className="text-foreground">Address copied.</span>}
                      {copyStatus === "failed" && <span className="text-destructive">Couldn’t copy. Please select the address and copy it.</span>}
                    </p>
                  </address>
                  <p className="flex items-start gap-3 text-sm text-muted-foreground mb-6">
                    <Clock className="w-4 h-4 text-ink-gold mt-0.5 shrink-0" aria-hidden="true" />
                    Tours by appointment. Book online or call to set a time.
                  </p>
                  <div className="flex flex-col gap-3 mt-auto">
                    <Button asChild size="lg" className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" onClick={handleDirectionsClick} data-conversion-action="directions_click" data-testid="link-get-directions">
                        <Navigation className="mr-2 w-4 h-4" aria-hidden="true" /> Get Directions<NewTab />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full h-14 font-semibold">
                      <a href={TEL_HREF} data-conversion-action="phone_click" data-testid="link-find-us-call">
                        <PhoneCall className="mr-2 w-4 h-4" aria-hidden="true" /> Call {VENUE.phoneDisplay}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-card pt-16 pb-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            <div className="space-y-5">
              <a href="#top" className="inline-block">
                <img src="/brand/revive-logo-gold.svg" alt="Revive Event Center" width={152} height={70} className="h-16 w-auto" loading="lazy" />
              </a>
              <p className="text-muted-foreground italic">Bring your guests to life with events that revive.</p>
              <div className="flex gap-3">
                {[
                  { href: SOCIAL.instagram, label: "Instagram", Icon: Instagram },
                  { href: SOCIAL.facebook, label: "Facebook", Icon: Facebook },
                  { href: SOCIAL.tiktok, label: "TikTok", Icon: Music },
                ].map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-conversion-action="social_click" className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">{label} (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-sans font-semibold text-lg">Visit Us</h2>
              <address className="not-italic text-muted-foreground space-y-1">
                <p>{VENUE.streetLong}</p>
                <p>{VENUE.city}, {VENUE.region} {VENUE.postalCode}</p>
                <p className="pt-2 text-ink-gold">Tours by appointment</p>
                <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" onClick={handleDirectionsClick} data-conversion-action="directions_click" data-testid="link-footer-directions" className="inline-flex items-center gap-2 min-h-11 text-sm text-foreground hover:text-ink-gold transition-colors">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> Get Directions<NewTab />
                </a>
              </address>
            </div>

            <div className="space-y-4">
              <h2 className="font-sans font-semibold text-lg">Contact</h2>
              <div className="space-y-2 text-muted-foreground flex flex-col">
                <a href={TEL_HREF} data-conversion-action="phone_click" className="hover:text-ink-gold transition-colors">{VENUE.phoneDisplay}</a>
                <a href={MAILTO_HREF} data-conversion-action="email_click" className="hover:text-ink-gold transition-colors">{VENUE.email}</a>
                {GOOGLE_REVIEW_URL && (
                  <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" data-conversion-action="review_click" className="inline-flex items-center gap-2 pt-2 hover:text-ink-gold transition-colors">
                    <Star className="w-4 h-4 text-ink-gold" aria-hidden="true" /> Celebrated with us? Leave a Google review<NewTab />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-sans font-semibold text-lg">Plan Your Event</h2>
              <div className="space-y-2 flex flex-col text-muted-foreground">
                <a href={TOUR_URL} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer" className="hover:text-ink-gold transition-colors">Schedule a Tour<NewTab /></a>
                <a href={INQUIRY_URL} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer" className="hover:text-ink-gold transition-colors">Send an Inquiry<NewTab /></a>
                <a href="#gallery" className="hover:text-ink-gold transition-colors">Photo Gallery</a>
                <a href="#faq" className="hover:text-ink-gold transition-colors">FAQ</a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
            <p>&copy; {new Date().getFullYear()} Revive Event Center. All rights reserved.</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-ink-gold" aria-hidden="true" /> Wedding &amp; Event Venue in Merced, CA</p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR */}
      <nav aria-label="Quick contact" data-track-section="sticky_bar" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border flex pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <a href={TEL_HREF} data-conversion-action="phone_click" className="flex-1 flex flex-col items-center justify-center min-h-[56px] py-3 px-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors border-r border-border">
          <PhoneCall className="w-5 h-5 mb-1" aria-hidden="true" />
          Call
        </a>
        <a href={TOUR_URL} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center min-h-[56px] py-3 px-2 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          <Clock className="w-5 h-5 mb-1" aria-hidden="true" />
          Schedule a Tour<NewTab />
        </a>
        <a href={INQUIRY_URL} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center min-h-[56px] py-3 px-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors border-l border-border">
          <CalendarHeart className="w-5 h-5 mb-1" aria-hidden="true" />
          Inquire<NewTab />
        </a>
      </nav>
    </div>
  );
}
