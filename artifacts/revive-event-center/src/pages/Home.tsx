import { motion, type Variants } from "framer-motion";
import { ArrowRight, CalendarHeart, PhoneCall, MapPin, Instagram, Facebook, Clock, CheckCircle2, Music, PartyPopper, Users, GlassWater, BookOpen, Star } from "lucide-react";
import { images, recentEventsGallery } from "@/content/images";
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
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
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
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />
            <img 
              src={images.hero} 
              alt="Revive Event Center elegant ballroom" 
              className="w-full h-full object-cover object-center scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
            />
          </div>
          
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 shadow-sm backdrop-blur-sm">
                <Star className="w-4 h-4 fill-primary/20" /> Grand Opening Venue
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-foreground leading-[1.1]">
                Events That <span className="text-primary italic pr-2">Revive</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                Central Merced's premier upscale destination for weddings, quinceañeras, corporate galas, concerts, and milestone celebrations. Step into the golden-lit elegance of a freshly renovated ballroom.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-md mx-auto sm:max-w-none">
                <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <a href={VENUESOS_TOUR} target="_blank" rel="noopener noreferrer">
                    Schedule a Tour <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:text-primary transition-all">
                  <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer">
                    Contact Us
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

        {/* SOCIAL PROOF & PACKAGE TEASER */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-8">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-medium">
                  Now Booking 2026 Events
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
                  Secure your date at Merced's newest upscale venue. We bring the polish of a hotel banquet floor paired with the warmth of a family-run space.
                </motion.p>
                <motion.div variants={fadeInUp} className="bg-primary/5 border border-primary/20 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BookOpen className="w-24 h-24 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3 relative z-10">All-Inclusive Packages Available</h3>
                  <p className="text-muted-foreground relative z-10 mb-6">
                    Ask about our all-inclusive per-person packages including venue, catering, service charge, and tax.
                  </p>
                  <Button asChild variant="default" className="bg-foreground text-background hover:bg-foreground/90 relative z-10">
                    <a href={VENUESOS_TOUR} target="_blank" rel="noopener noreferrer">
                      Schedule a Tour to Learn More
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img src={images.package} alt="Elegant catering setup at Revive" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg italic">"Bring your guests to life with events that revive."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY REVIVE (FEATURES) */}
        <section className="py-24 md:py-32 bg-background">
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

        {/* EVENT TYPES */}
        <section className="py-24 md:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Celebrations We Host</h2>
                <p className="text-lg text-muted-foreground">From the most sacred vows to the wildest corporate galas, our space transforms to fit your vision.</p>
              </div>
              <Button asChild variant="outline" className="shrink-0 hidden md:flex">
                <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer">Inquire About Your Event</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Weddings", image: images.weddings, desc: "Begin your forever in golden-lit elegance." },
                { title: "Quinceañeras", image: images.quinceaneras, desc: "A majestic setting for her milestone celebration." },
                { title: "Corporate Events", image: images.corporate, desc: "Impress clients and inspire your team." },
                { title: "Concerts", image: images.concerts, desc: "Incredible acoustics and premium staging." },
                { title: "Holiday Parties", image: images.holiday, desc: "Festive gatherings in a warm atmosphere." },
                { title: "Proms", image: images.prom, desc: "Unforgettable nights of dancing and memories." },
                { title: "Birthdays", image: images.birthdays, desc: "Celebrate another year in style." },
                { title: "Anniversaries", image: images.anniversaries, desc: "Mark the milestones that matter most." },
                { title: "Fundraisers", image: images.fundraisers, desc: "An elevated room for galas and giving." },
                { title: "Memorials", image: images.memorials, desc: "A respectful, dignified space to gather." }
              ].map((event, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-medium mb-1">{event.title}</h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RECENT EVENTS GALLERY */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Recent Events & Inspiration</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get inspired by the beautiful moments celebrated at Revive Event Center.</p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {recentEventsGallery.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
                  className="break-inside-avoid relative rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 bg-muted"
                >
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                    {item.eventType && <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{item.eventType}</span>}
                    {item.caption && <p className="text-white text-sm font-medium">{item.caption}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" /> Follow on Instagram
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" /> Follow on Facebook
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* BOOKING / IFRAME SECTION */}
        <section className="py-24 md:py-32 bg-primary/5 border-t border-border relative overflow-hidden" id="book">
          <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none">
            <CalendarHeart className="w-96 h-96" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Ready to Revive Your Event?</h2>
              <p className="text-lg text-muted-foreground">Book a private tour to see the space in person, or send us an inquiry with your event details.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border flex flex-col">
                <div className="p-6 border-b border-border bg-background">
                  <h3 className="text-2xl font-serif font-medium text-foreground">Schedule a Tour</h3>
                </div>
                <div className="flex-1 bg-muted/20">
                  <iframe 
                    src={VENUESOS_TOUR} 
                    title="Schedule a Tour"
                    className="w-full h-[750px] border-none"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border flex flex-col">
                <div className="p-6 border-b border-border bg-background">
                  <h3 className="text-2xl font-serif font-medium text-foreground">Contact Us</h3>
                </div>
                <div className="flex-1 bg-muted/20">
                  <iframe 
                    src={VENUESOS_INQUIRY} 
                    title="Contact Us"
                    className="w-full h-[700px] border-none"
                    loading="lazy"
                  />
                </div>
              </div>
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
                <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Inquire Now</a>
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
          Schedule Tour
        </a>
        <a href={VENUESOS_INQUIRY} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-xs font-medium text-foreground hover:bg-muted transition-colors">
          <CalendarHeart className="w-5 h-5 mb-1" />
          Contact Us
        </a>
      </div>
    </div>
  );
}