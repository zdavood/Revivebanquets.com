import { motion, type Variants } from "framer-motion";
import { ArrowRight, CalendarHeart, PhoneCall, MapPin, Instagram, Facebook, Clock, CheckCircle2, Music, PartyPopper, Users, GlassWater, BookOpen, Star } from "lucide-react";
import { images } from "@/content/images";
import { Button } from "@/components/ui/button";

const VENUESOS_TOUR = "https://venuesos.com/schedule-tour";
const VENUESOS_INQUIRY = "https://venuesos.com/inquiry";
const PHONE = "2096001502";
const PHONE_DISPLAY = "Call (209) 600-1502";
const INSTAGRAM_URL = "https://instagram.com/revive_banquet_hall";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61582753781610";

export default function Home() {
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
    <div className="min-h-[100dvh] w-full bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" data-testid="link-home-logo" className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-wide">
            REVIVE <span className="font-light text-foreground text-xl md:text-2xl">EVENT CENTER</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <a href="#venue" className="hidden lg:inline-block hover:text-primary transition-colors">The Venue</a>
            <a href="#celebrations" className="hidden lg:inline-block hover:text-primary transition-colors">Celebrations</a>
            <a href="tel:2096001502" data-testid="link-nav-phone" className="flex items-center gap-2 hover:text-primary transition-colors">
              <PhoneCall className="w-4 h-4 text-primary" /> {PHONE_DISPLAY}
            </a>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
              <a href={VENUESOS_TOUR} target="_blank" rel="noopener noreferrer" data-testid="link-nav-tour">
                Schedule a Tour
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-[90vh] md:min-h-[95vh] pt-20 flex items-center justify-center overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-background z-10" />
            <img 
              src={images.hero} 
              alt="Blush and ivory wedding reception styled inside the Revive Event Center ballroom" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white leading-[1.1] [text-shadow:0_2px_30px_rgba(0,0,0,0.4)]">
                Merced's Premier <span className="text-primary italic pr-2">Event Venue</span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 md:gap-4 text-sm md:text-base text-white/85 font-medium tracking-wide flex-wrap [text-shadow:0_1px_20px_rgba(0,0,0,0.5)]">
                <span>Up to 350 guests</span>
                <span className="text-primary" aria-hidden="true">·</span>
                <span>Flexible layouts</span>
                <span className="text-primary" aria-hidden="true">·</span>
                <span>Now booking 2026</span>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed [text-shadow:0_1px_20px_rgba(0,0,0,0.5)]">
                Weddings, Quinceañeras, Corporate Events, Concerts &amp; More
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-md mx-auto sm:max-w-none">
                <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <a href={VENUESOS_TOUR} target="_blank" rel="noopener noreferrer">
                    Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:text-primary transition-all">
                  <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer">
                    Send an Inquiry
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-base h-14 px-6 hover:bg-background/60 hover:text-primary transition-all">
                  <a href={`tel:${PHONE}`}>
                    <PhoneCall className="mr-2 w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CREDIBILITY STRIP */}
        <section className="bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4 text-center">
              {[
                { label: "350 Guest Capacity", icon: Users },
                { label: "Central Merced Location", icon: MapPin },
                { label: "Tables & Chairs Included", icon: CheckCircle2 },
                { label: "Kitchen & Bar Access", icon: GlassWater },
                { label: "All-inclusive pricing — one number, no surprises", icon: Star },
              ].map(({ label, icon: Icon }) => (
                <li key={label} className="flex flex-col items-center justify-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-[15px] font-medium text-foreground leading-snug">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY REVIVE (FEATURES) */}
        <section id="venue" className="py-24 md:py-32 bg-background scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">The Revive Standard</h2>
              <p className="text-lg text-muted-foreground">Every detail considered. Every amenity provided. A space designed to elevate your celebration.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Star, title: "Elegant Ballroom", desc: "Freshly renovated with stunning chandeliers and customizable lighting." },
                { icon: Users, title: "350 Seated Capacity", desc: "Spacious enough for grand celebrations while maintaining an intimate feel." },
                { icon: MapPin, title: "Central Merced Location", desc: "Conveniently located at 443 West 18th Street with easy access." },
                { icon: CheckCircle2, title: "Tables & Chairs Included", desc: "Premium seating and tables provided for your entire guest list." },
                { icon: GlassWater, title: "Kitchen & Bar Access", desc: "Fully equipped prep kitchen and elegant bar setup for your caterers." },
                { icon: BookOpen, title: "All-Inclusive Packages", desc: "Ask about all-inclusive per-person packages covering venue, catering, service charge, and tax." },
                { icon: PartyPopper, title: "Built for Every Celebration", desc: "Designed for weddings, quinceañeras, corporate events, concerts, memorials, and milestone celebrations." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEE THE SCALE — full-bleed venue showcase */}
        <section className="relative h-[80vh] min-h-[520px] md:min-h-[640px] w-full overflow-hidden">
          <img
            src={images.scaleFront}
            alt="The full Revive Event Center ballroom set with rows of round tables, chiavari chairs, chandeliers, and signature blue LED ceiling uplighting"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-white space-y-6"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.25em]">See the Scale</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.05] [text-shadow:0_2px_30px_rgba(0,0,0,0.5)]">
                Room for 350. <br className="hidden md:block" />
                Setup for any vision.
              </h2>
              <p className="text-lg text-white/90 leading-relaxed [text-shadow:0_1px_20px_rgba(0,0,0,0.5)]">
                Round tables, banquet rows, dance floors, stages with drape backdrops — our open-floor ballroom transforms to the room your event needs, not the other way around.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg">
                  <a href={VENUESOS_TOUR} target="_blank" rel="noopener noreferrer">
                    Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 bg-background/10 border-white/40 text-white hover:bg-background/20 hover:text-white backdrop-blur-sm">
                  <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer">Send an Inquiry</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EVENT TYPES */}
        <section id="celebrations" className="py-24 md:py-32 bg-card border-y border-border scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Celebrations We Host</h2>
                <p className="text-lg text-muted-foreground">From the most sacred vows to the wildest corporate galas, our space transforms to fit your vision.</p>
              </div>
              <Button asChild variant="outline" className="shrink-0 hidden md:flex">
                <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer">Send an Inquiry</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {[
                {
                  eyebrow: "01",
                  title: "Weddings & Quinceañeras",
                  image: images.weddings,
                  desc: "Elegant, fully customizable layouts designed for milestone celebrations.",
                  alt: "Blush and ivory wedding reception styled inside the Revive ballroom",
                },
                {
                  eyebrow: "02",
                  title: "Corporate & Formal Events",
                  image: images.corporate,
                  desc: "Clean, professional setups with room for presentations, dining, and large groups.",
                  alt: "Wide ballroom set with rows of round tables and chiavari chairs for a corporate event",
                },
                {
                  eyebrow: "03",
                  title: "Live Events — Concerts & Comedy",
                  image: images.concerts,
                  desc: "Stage-ready layout with programmable lighting and flexible seating for performances.",
                  alt: "Comedy night at Revive with performer on stage and seated audience under red uplighting",
                },
                {
                  eyebrow: "04",
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
                  className="group relative aspect-[5/4] rounded-2xl overflow-hidden bg-muted"
                >
                  <img
                    src={event.image}
                    alt={event.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
                    <span className="text-primary text-xs font-semibold tracking-[0.25em] mb-3">{event.eyebrow}</span>
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

        {/* NOW BOOKING 2026 — URGENCY ANCHOR */}
        <section className="py-20 md:py-28 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:col-span-3 space-y-6">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                  <CalendarHeart className="w-3.5 h-3.5" /> Now Booking 2026
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight">
                  Reserve your date at Merced's newest upscale venue.
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                  Saturdays in peak season fill first. Lock in your 2026 date now and ask about our all-inclusive per-person packages — venue, catering, service charge, and tax in one transparent number.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                    <a href={VENUESOS_TOUR} target="_blank" rel="noopener noreferrer">
                      Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8">
                    <a href={`tel:${PHONE}`}>
                      <PhoneCall className="mr-2 w-4 h-4" /> Call (209) 600-1502
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="lg:col-span-2 relative aspect-[4/5] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <img src={images.package} alt="Artisan grazing table with charcuterie, fruit, cheese and olives at Revive Event Center" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent flex items-end p-8">
                  <p className="text-white font-serif italic text-lg leading-snug">"Bring your guests to life with events that revive."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — 3 STEPS */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">How It Works</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6">A simple path to your event.</h2>
              <p className="text-lg text-muted-foreground">From first hello to last dance — three transparent steps, zero pressure.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
              {[
                { num: "01", title: "Schedule a Tour", desc: "Walk the ballroom in person, see the lighting, and ask every question. Tours are by appointment so you have our undivided attention.", icon: Clock },
                { num: "02", title: "Tailor Your Package", desc: "Pick an all-inclusive package or customize venue, catering, and bar to your vision. We send a clear, itemized proposal — no surprises.", icon: BookOpen },
                { num: "03", title: "Celebrate", desc: "Show up and be present. Our team handles setup, service, and breakdown so you can enjoy the night your guests will remember.", icon: PartyPopper },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <div className="text-7xl md:text-8xl font-serif font-light text-primary/25 leading-none mb-4 select-none">{step.num}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-primary" />
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
        <section id="book" className="py-24 md:py-32 bg-primary/5 border-t border-border relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none">
            <CalendarHeart className="w-96 h-96" />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Ready to Revive Your Event?</h2>
              <p className="text-lg text-muted-foreground">Book a private tour or send a quick inquiry — pick the path that fits.</p>
              <p className="mt-4 text-sm md:text-[15px] font-medium text-primary">
                Takes 30 seconds. No commitment. Lock in your date before it's gone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {/* Schedule a Tour card */}
              <a
                href={VENUESOS_TOUR}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="card-schedule-tour"
                className="group relative flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl border border-border hover:border-primary/40 p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Clock className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl md:text-[26px] font-serif font-medium mb-3">Schedule a Tour</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Pick a time that works for you and walk the ballroom in person — we'll show you the layouts, the lighting, and the kitchen.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-primary font-semibold">
                  Schedule a Tour <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* Send an Inquiry card */}
              <a
                href={VENUESOS_INQUIRY}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="card-send-inquiry"
                className="group relative flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl border border-border hover:border-primary/40 p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <CalendarHeart className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl md:text-[26px] font-serif font-medium mb-3">Send an Inquiry</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Tell us your date, guest count, and event type — we'll come back with available dates and pricing.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-primary font-semibold">
                  Send an Inquiry <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
              <p className="text-sm text-muted-foreground">
                Prefer to talk? Call{" "}
                <a href={`tel:${PHONE}`} className="text-primary font-medium hover:underline">
                  (209) 600-1502
                </a>{" "}
                — we answer.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-card pt-20 pb-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <a href="#" className="font-serif text-2xl font-bold text-primary tracking-wide block">
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
              <h4 className="font-medium text-lg">Visit Us</h4>
              <address className="not-italic text-muted-foreground space-y-2">
                <p>443 West 18th Street</p>
                <p>Merced, CA 95340</p>
                <p className="pt-2 text-primary">Private tours by appointment</p>
              </address>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-lg">Contact</h4>
              <div className="space-y-2 text-muted-foreground flex flex-col">
                <a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">Main: (209) 600-1502</a>
                <a href="tel:2092023059" className="hover:text-primary transition-colors">Booking: (209) 202-3059</a>
                <a href="mailto:bookings@revivebanquets.com" className="hover:text-primary transition-colors mt-2">bookings@revivebanquets.com</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-lg">Quick Links</h4>
              <div className="space-y-2 flex flex-col">
                <a href={VENUESOS_TOUR} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Schedule a Tour</a>
                <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Send an Inquiry</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Back to Top</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground pb-20 md:pb-0">
            <p>&copy; {new Date().getFullYear()} Revive Event Center. All rights reserved.</p>
            <p>Merced's Premier Event Destination</p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border flex shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <a href={`tel:${PHONE}`} className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-xs font-medium text-foreground hover:bg-muted transition-colors border-r border-border">
          <PhoneCall className="w-5 h-5 mb-1" />
          Call Now
        </a>
        <a href={VENUESOS_TOUR} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border-r border-primary/20">
          <Clock className="w-5 h-5 mb-1" />
          Schedule a Tour
        </a>
        <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-xs font-medium text-foreground hover:bg-muted transition-colors">
          <CalendarHeart className="w-5 h-5 mb-1" />
          Send an Inquiry
        </a>
      </div>
    </div>
  );
}