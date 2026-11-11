/**
 * FAQ content. Rendered on the page and written into index.html at build
 * time (see vite.config.ts) so search engines read every answer.
 * Keep relative imports only.
 */
import { VENUE } from "./site";

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "How many guests can Revive accommodate?",
    a: `Up to ${VENUE.capacity} seated guests. The exact number depends on your tables, dance floor and staging, and we can walk through layouts with you on a tour.`,
  },
  {
    q: "How large is the ballroom?",
    a: "The main banquet area is about 50 by 100 feet (roughly 5,000 square feet). The bar, restrooms and prep kitchen are separate from that measurement.",
  },
  {
    q: "What kinds of events do you host?",
    a: "Weddings, quinceañeras, corporate events, cultural celebrations, birthdays, anniversaries and other private celebrations, plus live events such as comedy nights.",
  },
  {
    q: "What is included in the rental?",
    a: "Your proposal spells out exactly what your rental includes before you sign anything. Décor in our photos was arranged for each client's event.",
  },
  {
    q: "What optional services are available?",
    a: "Photo booth rentals, event staffing, catering through our preferred partners and hosted bar options. Each is optional, and availability and details are confirmed in your proposal.",
  },
  {
    q: "Can I bring outside vendors?",
    a: "Vendor arrangements depend on the event. Ask our team, and your proposal will confirm what applies to your date.",
  },
  {
    q: "How do I schedule a tour?",
    a: `Use Schedule a Tour to pick an available time, or call ${VENUE.phoneDisplay}. Tours are by appointment.`,
  },
  {
    q: "Is my date available?",
    a: "Send an inquiry with your preferred date and guest count, or call us. Our team confirms availability when we follow up.",
  },
  {
    q: "I don't have a date yet. Can I still reach out?",
    a: `Yes. Call ${VENUE.phoneDisplay} to talk through your plans, timing and guest count before you pick a date.`,
  },
  {
    q: "What happens after I send an inquiry?",
    a: "Our team follows up about your event details, availability and next steps, then prepares a proposal. Sending an inquiry doesn't commit you to anything; nothing is reserved until you review and sign an agreement.",
  },
];
