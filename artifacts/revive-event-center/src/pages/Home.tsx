import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowRight, CalendarHeart, PhoneCall, MapPin, Instagram, Facebook, Clock, CheckCircle2, Music, PartyPopper, Users, GlassWater, BookOpen, Star, Navigation, Copy, FileSignature, ExternalLink } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { images } from "@/content/images";
import { Button } from "@/components/ui/button";
import { VenueImage } from "@/components/VenueImage";
import { MobileSectionNav, SECTION_LINKS } from "@/components/SectionNav";
import { VenueFaq } from "@/components/VenueFaq";
import { OptionalServices } from "@/components/OptionalServices";
import { venueOsUrl } from "@/content/venueos";

const VENUESOS_TOUR = venueOsUrl("tour");
const TEL_HREF = "tel:+12096001502";
const PHONE_DISPLAY = "Call (209) 600-1502";
const INSTAGRAM_URL = "https://instagram.com/revive_banquet_hall";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61582753781610";

const VENUE_ADDRESS = "443 West 18th Street, Merced, CA 95340";
const VENUE_ADDRESS_QUERY = encodeURIComponent(VENUE_ADDRESS);
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${VENUE_ADDRESS_QUERY}`;
const APPLE_MAPS_DIRECTIONS_URL = `https://maps.apple.com/?daddr=${VENUE_ADDRESS_QUERY}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${VENUE_ADDRESS_QUERY}&output=embed`;

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

export default function Home() {
  const VENUESOS_INQUIRY = venueOsUrl(
    "inquiry",
    typeof window === "undefined" ? "" : window.location.search,
  );
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

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-[100dvh] w-full bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* HEADER */}
      <a href="#main" className="skip-link">Skip to main content</a>
      <header className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          <a href="#top" data-testid="link-home-logo" className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-ink-gold tracking-wide whitespace-nowrap">
            REVIVE <span className="font-light text-foreground text-xl md:text-2xl">EVENT CENTER</span>
          </a>
          <nav aria-label="Primary" className="flex items-center gap-3 lg:gap-6 text-sm font-medium">
            {SECTION_LINKS.filter((link) => ["#venue", "#celebrations", "#faq"].includes(link.href)).map((l) => (
              <a key={l.href} href={l.href} className="hidden xl:inline-block hover:text-ink-gold transition-colors">{l.label}</a>
            ))}
            <a href={TEL_HREF} data-conversion-action="phone_click" data-testid="link-nav-phone" className="hidden lg:flex items-center gap-2 hover:text-ink-gold transition-colors whitespace-nowrap">
              <PhoneCall className="w-4 h-4 text-ink-gold" /> {PHONE_DISPLAY}
            </a>
            <Button asChild size="lg" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
              <a href={VENUESOS_TOUR} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer" data-testid="link-nav-tour">
                Schedule a Tour
              </a>
            </Button>
            <MobileSectionNav tourUrl={VENUESOS_TOUR} telHref={TEL_HREF} />
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="focus:outline-none">
        {/* HERO */}
        <section id="top" className="relative min-h-[90vh] md:min-h-[95vh] pt-20 flex items-center justify-center overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/75 to-black/80 z-10" />
            <VenueImage
              src={images.hero}
              alt="Blush and ivory wedding reception styled inside the Revive Event Center ballroom"
              priority
              sizes="100vw"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 py-12 sm:py-20 flex flex-col items-center text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-5 md:space-y-6">
              <motion.h1 variants={fadeInUp} className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white leading-[1.1] [text-shadow:0_2px_30px_rgba(0,0,0,0.4)]">
                Wedding &amp; Event Venue <span className="text-primary italic pr-2">in Merced</span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 md:gap-4 text-sm md:text-base text-white/85 font-medium tracking-wide flex-wrap [text-shadow:0_1px_20px_rgba(0,0,0,0.5)]">
                <span className="font-semibold text-white">Up to 350 Guests Seated</span>
                <span className="text-primary" aria-hidden="true">·</span>
                <span>443 W. 18th Street, Merced</span>
                <span className="text-primary" aria-hidden="true">·</span>
                <span>Now Accepting Reservations</span>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-sm text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">Seated capacity depends on your layout, dance floor, and staging.</motion.p>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed [text-shadow:0_1px_20px_rgba(0,0,0,0.5)]">
                A 5,000-square-foot Merced ballroom for weddings, quinceañeras, receptions, and large celebrations. Book a tour.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-md mx-auto sm:max-w-none">
                <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <a href={VENUESOS_TOUR} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer">
                    Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:text-ink-gold transition-all">
                  <a href={VENUESOS_INQUIRY} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer">
                    Send an Inquiry
                  </a>
                </Button>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-sm text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                Tour and inquiry open Revive’s booking form in a new tab. Prefer to talk? <a href={TEL_HREF} data-conversion-action="phone_click" className="underline underline-offset-4 font-medium text-white">Call (209) 600-1502</a>
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* CREDIBILITY STRIP */}
        <section className="bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4 text-center">
              {[
                { label: "Up to 350 Guests Seated", icon: Users },
                { label: "Central Merced Location", icon: MapPin },
                { label: "Flexible Ballroom Layouts", icon: CheckCircle2 },
                { label: "Indoor Event Space", icon: Star },
                { label: "Tours by Appointment", icon: Clock },
              ].map(({ label, icon: Icon }) => (
                <li key={label} className="flex flex-col items-center justify-center gap-2">
                  <Icon className="w-5 h-5 text-ink-gold" aria-hidden="true" />
                  <span className="text-sm md:text-[15px] font-medium text-foreground leading-snug">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY REVIVE (FEATURES) */}
        <section id="venue" tabIndex={-1} className="focus:outline-none py-24 md:py-32 bg-background scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Why Families and Planners Choose Revive</h2>
              <p className="text-lg text-muted-foreground">One indoor ballroom, room for up to 350 seated guests, and layouts that adapt to your event. Seated capacity depends on tables, dance floor, and staging. What your rental includes is spelled out in your proposal.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Star, title: "Indoor Ballroom", desc: "Chandeliers and programmable lighting in a single open indoor room." },
                { icon: Users, title: "Up to 350 Seated", desc: "Layout-dependent: actual seated capacity varies with tables, dance floor, and staging." },
                { icon: BookOpen, title: "About 5,000 sq ft Banquet Area", desc: "The main banquet area is approximately 50 ft x 100 ft. The bar, restrooms, and prep kitchen are separate from these dimensions." },
                { icon: MapPin, title: "Central Merced Location", desc: "443 West 18th Street, Merced, CA 95340." },
                { icon: CheckCircle2, title: "Flexible Layouts", desc: "Round tables, banquet rows, dance floor, and stage arrangements to discuss on your tour." },
                { icon: GlassWater, title: "Optional Services", desc: "Photo booths, staffing, catering through preferred partners, and hosted bar options are available, never automatically included." },
                { icon: BookOpen, title: "Clear Proposal", desc: "Rental inclusions and optional services are confirmed in writing in your proposal before you commit." },
                { icon: PartyPopper, title: "Built for Every Celebration", desc: "Weddings, quinceañeras, corporate events, cultural celebrations, and private celebrations." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-ink-gold" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INSIDE REVIVE — real amenities: bar + evening ambiance */}
        <section className="py-24 md:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-ink-gold text-sm font-semibold uppercase tracking-[0.25em]">Inside Revive</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4">More than a room</h2>
              <p className="text-lg text-muted-foreground mt-6">An on-site bar and programmable lighting let the same room feel bright and celebratory or candlelit and intimate.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {[
                {
                  image: images.bar,
                  title: "The Bar",
                  desc: "A granite-topped service bar with lit displays. Hosted bar options are optional and confirmed in your proposal.",
                  alt: "Granite-topped service bar with backlit wine and liquor display inside Revive Event Center",
                },
                {
                  image: images.ambiance,
                  title: "Evening Ambiance",
                  desc: "Programmable LED lighting and candlelit round tables set a dramatic, intimate evening tone.",
                  alt: "Round tables with flickering candles set under deep blue LED uplighting for an evening event at Revive",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative min-h-[320px] sm:min-h-0 sm:aspect-[16/11] rounded-2xl overflow-hidden bg-muted"
                >
                  <VenueImage
                    src={item.image}
                    alt={item.alt}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="relative h-full min-h-[inherit] flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-white text-2xl md:text-[28px] font-serif font-medium leading-tight mb-2 [text-shadow:0_1px_20px_rgba(0,0,0,0.4)]">
                      {item.title}
                    </h3>
                    <p className="text-white/85 text-[15px] leading-relaxed max-w-[42ch]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEE THE SCALE — full-bleed venue showcase */}
        <section className="relative min-h-[560px] md:h-[80vh] md:min-h-[640px] md:min-h-[640px] w-full overflow-hidden">
          <VenueImage
            src={images.scaleFront}
            sizes="100vw"
            alt="The full Revive Event Center ballroom set with rows of round tables, chiavari chairs, chandeliers, and signature blue LED ceiling uplighting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
          <div className="relative z-10 h-full min-h-[inherit] max-w-7xl mx-auto px-6 py-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-white space-y-6"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.25em]">See the Scale</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.05] [text-shadow:0_2px_30px_rgba(0,0,0,0.5)]">
                Seats up to 350.* <br className="hidden md:block" />
                Setup for any vision.
              </h2>
              <p className="text-lg text-white/90 leading-relaxed [text-shadow:0_1px_20px_rgba(0,0,0,0.5)]">
                Round tables, banquet rows, dance floors, and stages with drape backdrops. Walk the open floor with us and talk through the layout your event needs.
              </p>
              <p className="text-sm text-white/80">*Seated capacity depends on layout. Main banquet area approx. 50 ft x 100 ft (about 5,000 sq ft), not including the separate bar, restrooms, and prep kitchen.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg">
                  <a href={VENUESOS_TOUR} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer">
                    Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 bg-background/10 border-white/40 text-white hover:bg-background/20 hover:text-white backdrop-blur-sm">
                  <a href={VENUESOS_INQUIRY} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer">Send an Inquiry</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EVENT TYPES */}
        <section id="celebrations" tabIndex={-1} className="focus:outline-none py-24 md:py-32 bg-card border-y border-border scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Celebrations We Host</h2>
                <p className="text-lg text-muted-foreground">Weddings, quinceañeras, corporate events, cultural celebrations, and private celebrations. These photos are from real events and setups at Revive.</p>
                <p className="mt-3 text-sm text-muted-foreground">Pictured décor and event setups were arranged for individual events and are not automatically included with the rental.</p>
              </div>
              <Button asChild variant="outline" className="shrink-0 hidden md:flex">
                <a href={VENUESOS_INQUIRY} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer">Send an Inquiry</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {[
                {
                  eyebrow: "01",
                  title: "Weddings & Quinceañeras",
                  image: images.weddings,
                  desc: "Elegant, fully customizable layouts designed for milestone celebrations.",
                  alt: "Wedding reception at Revive with white floral centerpieces, red table settings, and red ceiling lighting",
                },
                {
                  eyebrow: "02",
                  title: "Celebrations & Receptions",
                  image: images.cultural,
                  desc: "An open dance floor and grand chandeliers for gathering, dining, and celebrating together.",
                  alt: "Guests dancing on the white dance floor beneath a crystal chandelier at Revive",
                },
                {
                  eyebrow: "03",
                  title: "Ceremonies & Cultural Traditions",
                  image: images.ceremonies,
                  desc: "Religious ceremonies, cultural rituals, and multi-day celebrations honored with space, staging, and care.",
                  alt: "Colorful reception setup at Revive with teal and purple tables, gold chair covers, and a decorated stage",
                },
                {
                  eyebrow: "04",
                  title: "Corporate & Formal Events",
                  image: images.corporate,
                  desc: "Clean, professional setups with room for presentations, dining, and large groups.",
                  alt: "Wide ballroom set with rows of round tables and chiavari chairs for a corporate event",
                },
                {
                  eyebrow: "05",
                  title: "Live Events — Concerts & Comedy",
                  image: images.concerts,
                  desc: "Stage-ready layout with programmable lighting and flexible seating for performances.",
                  alt: "Comedy night at Revive with a performer on stage under dramatic red uplighting",
                },
                {
                  eyebrow: "06",
                  title: "Private Celebrations",
                  image: images.birthdays,
                  desc: "Birthdays, anniversaries, and gatherings tailored to your vision.",
                  alt: "Lush greenery wall and floral centerpieces inside the Revive ballroom",
                },
              ].map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative min-h-[340px] sm:min-h-0 sm:aspect-[5/4] rounded-2xl overflow-hidden bg-muted"
                >
                  <VenueImage
                    src={event.image}
                    alt={event.alt}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="relative h-full min-h-[inherit] flex flex-col justify-end p-6 md:p-8">
                    <span className="text-primary text-xs font-semibold tracking-[0.25em] mb-3" aria-hidden="true">{event.eyebrow}</span>
                    <h3 className="text-white text-2xl md:text-[28px] font-serif font-medium leading-tight mb-2 [text-shadow:0_1px_20px_rgba(0,0,0,0.4)]">
                      {event.title}
                    </h3>
                    <p className="text-white/85 text-[15px] leading-relaxed max-w-[34ch]">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <OptionalServices />

        {/* RESERVATIONS */}
        <section className="py-20 md:py-28 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:col-span-3 space-y-6">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-ink-gold text-xs font-semibold uppercase tracking-wider">
                  <CalendarHeart className="w-3.5 h-3.5" aria-hidden="true" /> Now Accepting Reservations
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight">
                  Planning a date? Start with a conversation.
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                  Share your preferred date, guest count, and event type. Our team will talk through availability and send a proposal that confirms rental inclusions and any optional services, such as catering or staffing, before you sign anything. No date yet? Call (209) 600-1502 and we can talk through your plans.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                    <a href={VENUESOS_TOUR} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer">
                      Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8">
                    <a href={VENUESOS_INQUIRY} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer">
                      Send an Inquiry
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="lg:col-span-2 relative aspect-[4/5] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <VenueImage src={images.package} alt="Artisan grazing table with charcuterie, fruit, cheese and olives at Revive Event Center" sizes="(min-width: 1024px) 40vw, 100vw" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent flex items-end p-8">
                  <p className="text-white font-serif italic text-lg leading-snug">"Bring your guests to life with events that revive."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — 3 STEPS */}
        <section id="how-it-works" tabIndex={-1} className="py-24 md:py-32 bg-background scroll-mt-24 focus:outline-none">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-ink-gold text-sm font-semibold uppercase tracking-[0.2em]">How Booking Works</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6">Three steps to your reservation.</h2>
              <p className="text-lg text-muted-foreground">Nothing is reserved until you review and sign an agreement.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
              {[
                { num: "01", title: "Explore or Tour", desc: "Browse the photos here, then schedule an appointment to walk the ballroom and ask questions in person.", icon: Clock },
                { num: "02", title: "Discuss Details & Get a Proposal", desc: "Share your date, guest count, and event type. We prepare a proposal confirming rental inclusions and any optional services.", icon: BookOpen },
                { num: "03", title: "Review & Secure Your Date", desc: "Review the agreement, ask anything that is unclear, and secure your reservation once you are ready.", icon: FileSignature },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <div className="text-7xl md:text-8xl font-serif font-light text-ink-gold/40 leading-none mb-4 select-none" aria-hidden="true">{step.num}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-ink-gold" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section id="book" tabIndex={-1} className="py-24 md:py-32 bg-primary/5 border-t border-border relative overflow-hidden scroll-mt-24 focus:outline-none">
          <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none">
            <CalendarHeart className="w-96 h-96" aria-hidden="true" />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Ready to Revive Your Event?</h2>
              <p className="text-lg text-muted-foreground">Seeing the room in person is the best first step. If you are not ready to tour, send an inquiry with your event details.</p>
              <p className="mt-4 text-sm md:text-[15px] text-muted-foreground">
                Both buttons open Revive’s booking form in a new tab. Submitting is not a confirmed reservation; our team follows up about your details, availability, and a proposal. If no tour time shown works for you, or you don’t have a date yet, call (209) 600-1502 or send an inquiry. If either page does not load, call (209) 600-1502 or email bookings@revivebanquets.com.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {/* Schedule a Tour card */}
              <a
                href={VENUESOS_TOUR} data-conversion-action="tour_click"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="card-schedule-tour"
                className="group relative flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl border border-border hover:border-primary/40 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Clock className="w-6 h-6 text-ink-gold group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-[26px] font-serif font-medium mb-3">Schedule a Tour</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Choose from the available times on Revive’s booking form and walk the ballroom in person to see layouts and lighting and ask your questions.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-ink-gold font-semibold">
                  Schedule a Tour <ExternalLink className="w-4 h-4" aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                </div>
              </a>

              {/* Send an Inquiry card */}
              <a
                href={VENUESOS_INQUIRY} data-conversion-action="inquiry_click"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="card-send-inquiry"
                className="group relative flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl border border-border hover:border-primary/40 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <CalendarHeart className="w-6 h-6 text-ink-gold group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-[26px] font-serif font-medium mb-3">Send an Inquiry</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Share your date, guest count, and event type. Our team follows up about your details, availability, and a proposal.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-ink-gold font-semibold">
                  Send an Inquiry <ExternalLink className="w-4 h-4" aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                </div>
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
              <p className="text-sm text-muted-foreground">
                Prefer to talk? Call{" "}
                <a href={TEL_HREF} data-conversion-action="phone_click" className="text-ink-gold font-medium hover:underline">
                  (209) 600-1502
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        {/* FIND US — MAP & DIRECTIONS */}
        <section id="faq" tabIndex={-1} className="py-24 md:py-32 bg-card border-t border-border scroll-mt-24 focus:outline-none">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-ink-gold text-sm font-semibold uppercase tracking-[0.2em]">Questions</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4">Frequently Asked</h2>
            </div>
            <VenueFaq />
            <p className="mt-10 text-center text-muted-foreground">
              Still have a question? <a href={TEL_HREF} data-conversion-action="phone_click" className="text-ink-gold font-medium underline underline-offset-4">Call (209) 600-1502</a> or <a href={VENUESOS_INQUIRY} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer" className="text-ink-gold font-medium underline underline-offset-4">send an inquiry<span className="sr-only"> (opens in a new tab)</span></a>.
            </p>
          </div>
        </section>

        <section id="find-us" tabIndex={-1} className="py-24 md:py-32 bg-background border-t border-border scroll-mt-24 focus:outline-none">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-ink-gold text-sm font-semibold uppercase tracking-[0.2em]">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6">Right in the heart of Merced.</h2>
              <p className="text-lg text-muted-foreground">443 West 18th Street, Merced, CA 95340. Ask our team about parking and arrival details for your event.</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
              {/* Map embed */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-xl bg-muted aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
              >
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Map showing Revive Event Center at 443 West 18th Street, Merced, CA 95340"
                  className="w-full h-full border-none block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  data-testid="iframe-venue-map"
                />
              </motion.div>

              {/* Address & Directions card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-ink-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-medium">Revive Event Center</h3>
                </div>

                <address className="not-italic mb-8">
                  <p className="text-lg text-foreground font-medium leading-relaxed select-text" data-testid="text-venue-address">
                    443 West 18th Street<br />
                    Merced, CA 95340
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    data-testid="button-copy-address"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink-gold transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    Copy address
                  </button>
                  <p role="status" aria-live="polite" className="mt-2 text-sm min-h-[1.25rem]" data-testid="status-copy-address">
                    {copyStatus === "copied" && <span className="text-foreground">Address copied to clipboard.</span>}
                    {copyStatus === "failed" && <span className="text-destructive">Could not copy. Please select the address above and copy it manually.</span>}
                  </p>
                </address>

                <div className="space-y-3 mb-8 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-ink-gold mt-1 shrink-0" />
                    <p className="text-sm leading-relaxed">Tours are by appointment. Schedule online or call to set a time.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-ink-gold mt-1 shrink-0" />
                    <p className="text-sm leading-relaxed">Parking and arrival details can be confirmed with our team.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <Button
                    asChild
                    size="lg"
                    className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                  >
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDirectionsClick}
                      data-testid="link-get-directions"
                    >
                      <Navigation className="mr-2 w-4 h-4" />
                      Get Directions
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full h-14"
                  >
                    <a href={TEL_HREF} data-conversion-action="phone_click" data-testid="link-find-us-call">
                      <PhoneCall className="mr-2 w-4 h-4" />
                      {PHONE_DISPLAY}
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-card pt-20 pb-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <a href="#top" className="font-serif text-2xl font-bold text-ink-gold tracking-wide block">
                REVIVE
              </a>
              <p className="text-muted-foreground italic">"Bring your guests to life with events that revive."</p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.tiktok.com/@revive_banquet_hall" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Music className="w-5 h-5" />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-medium text-lg">Visit Us</h2>
              <address className="not-italic text-muted-foreground space-y-2">
                <p>443 West 18th Street</p>
                <p>Merced, CA 95340</p>
                <p className="pt-2 text-ink-gold">Private tours by appointment</p>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDirectionsClick}
                  data-testid="link-footer-directions"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-ink-gold transition-colors pt-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </address>
            </div>

            <div className="space-y-4">
              <h2 className="font-medium text-lg">Contact</h2>
              <div className="space-y-2 text-muted-foreground flex flex-col">
                <a href={TEL_HREF} data-conversion-action="phone_click" className="hover:text-ink-gold transition-colors">(209) 600-1502</a>
                <a href="mailto:bookings@revivebanquets.com" className="hover:text-ink-gold transition-colors mt-2">bookings@revivebanquets.com</a>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-medium text-lg">Quick Links</h2>
              <div className="space-y-2 flex flex-col">
                <a href={VENUESOS_TOUR} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-ink-gold transition-colors">Schedule a Tour</a>
                <a href={VENUESOS_INQUIRY} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-ink-gold transition-colors">Send an Inquiry</a>
                <a href="#faq" className="text-muted-foreground hover:text-ink-gold transition-colors">FAQ</a>
                <a href="#top" className="text-muted-foreground hover:text-ink-gold transition-colors">Back to Top</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
            <p>&copy; {new Date().getFullYear()} Revive Event Center. All rights reserved.</p>
            <p>Wedding &amp; Event Venue in Merced, CA</p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR */}
      <nav aria-label="Quick contact" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border flex pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <a href={TEL_HREF} data-conversion-action="phone_click" className="flex-1 flex flex-col items-center justify-center min-h-[56px] py-3 px-2 text-xs font-medium text-foreground hover:bg-muted transition-colors border-r border-border">
          <PhoneCall className="w-5 h-5 mb-1" aria-hidden="true" />
          Call Now
        </a>
        <a href={VENUESOS_TOUR} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center min-h-[56px] py-3 px-2 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border-r border-primary/20">
          <Clock className="w-5 h-5 mb-1" aria-hidden="true" />
          Schedule a Tour
        </a>
        <a href={VENUESOS_INQUIRY} data-conversion-action="inquiry_click" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center min-h-[56px] py-3 px-2 text-xs font-medium text-foreground hover:bg-muted transition-colors">
          <CalendarHeart className="w-5 h-5 mb-1" aria-hidden="true" />
          Send an Inquiry
        </a>
      </nav>
    </div>
    </MotionConfig>
  );
}