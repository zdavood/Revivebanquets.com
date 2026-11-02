import { motion } from "framer-motion";
import { Camera, Users, UtensilsCrossed, GlassWater, FileText } from "lucide-react";

const SERVICES = [
  { icon: Camera, title: "Photo Booth Rentals", desc: "Ask about a photo booth rental for your celebration." },
  { icon: Users, title: "Event Staffing", desc: "Optional staffing to help your event run smoothly, arranged for your date." },
  { icon: UtensilsCrossed, title: "Catering", desc: "Catering is available through Revive’s preferred catering partners." },
  { icon: GlassWater, title: "Hosted Bar Options", desc: "Hosted bar options can be arranged for your celebration." },
];

export function OptionalServices() {
  return (
    <section id="services" tabIndex={-1} aria-labelledby="services-heading" className="focus:outline-none py-24 md:py-32 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="text-ink-gold text-sm font-semibold uppercase tracking-[0.25em]">Add to Your Event</span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6">Optional Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose only what your event needs. These services are optional and are not automatically included in the ballroom rental.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5" data-testid="text-services-note">
              <FileText className="w-5 h-5 text-ink-gold mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-[15px] leading-relaxed text-foreground">
                Availability and details for each service are confirmed in your event proposal.
              </p>
            </div>
          </div>
          <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                data-testid={`card-service-${i}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-ink-gold" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-ink-gold">Optional</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
