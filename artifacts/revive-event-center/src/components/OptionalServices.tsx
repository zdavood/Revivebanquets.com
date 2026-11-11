import { Camera, Users, UtensilsCrossed, GlassWater } from "lucide-react";

const SERVICES = [
  { icon: UtensilsCrossed, title: "Catering", desc: "Menus through Revive’s preferred catering partners." },
  { icon: GlassWater, title: "Hosted Bar", desc: "Bar service at our on-site bar, arranged for your celebration." },
  { icon: Users, title: "Event Staffing", desc: "Staff to help your day run smoothly, scheduled for your date." },
  { icon: Camera, title: "Photo Booth", desc: "A photo booth rental for your guests." },
];

export function OptionalServices() {
  return (
    <section id="services" tabIndex={-1} aria-labelledby="services-heading" className="focus:outline-none py-20 md:py-28 bg-card border-y border-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <span className="text-ink-gold text-sm font-semibold uppercase tracking-[0.25em]">Add to Your Event</span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6">Services, à la carte</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Add only what your event needs. Your proposal lists exactly what’s included and confirms each service for your date.
            </p>
          </div>
          <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-4 p-6 rounded-2xl bg-background border border-border"
                data-testid={`card-service-${i}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-ink-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
