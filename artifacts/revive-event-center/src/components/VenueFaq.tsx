import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How many guests can Revive accommodate?",
    a: "The ballroom seats up to 350 guests. Actual capacity depends on your layout, including tables, dance floor, and staging, which we can walk through on a tour.",
  },
  {
    q: "How large is the ballroom?",
    a: "The main banquet area is approximately 50 ft x 100 ft (about 5,000 sq ft). That measurement covers the banquet area only; the bar, restrooms, and prep kitchen are separate and outside those dimensions.",
  },
  {
    q: "What optional services are available?",
    a: "Photo booth rentals, event staffing, catering through our preferred catering partners, and hosted bar options. None are automatically included in the rental; availability and details are confirmed in your event proposal.",
  },
  {
    q: "What kinds of events do you host?",
    a: "Weddings, quinceañeras, corporate events, cultural celebrations, private celebrations such as birthdays and anniversaries, and live events like comedy nights.",
  },
  {
    q: "How do I schedule a tour?",
    a: "Use the Schedule a Tour button to open Revive’s booking form in a new tab and choose from the times shown there. If no time works for you, call (209) 600-1502 or send an inquiry. Tours are by appointment.",
  },
  {
    q: "How does booking work?",
    a: "First, explore or tour the venue. Next, share your event details and we prepare a proposal. Finally, you review the agreement and secure your reservation.",
  },
  {
    q: "Can I bring outside vendors?",
    a: "Vendor arrangements vary by event. Please ask our team; your proposal will confirm what applies to your date.",
  },
  {
    q: "What is included in the rental?",
    a: "Rental inclusions and optional services are confirmed in your proposal. Optional services such as photo booths, staffing, catering, and hosted bar are not automatically included. Décor shown in our photos reflects individual events and is not automatically included with the rental.",
  },
  {
    q: "Is my date available?",
    a: "Send an inquiry with your preferred date and guest count, or call us. Availability is only confirmed once our team follows up.",
  },
  {
    q: "I don’t have a date yet. Can I still reach out?",
    a: "Yes. Call (209) 600-1502 to talk through your plans, timing, and guest count before you pick a date.",
  },
  {
    q: "What happens after I send an inquiry?",
    a: "Our team follows up about your event details and date availability, then prepares a proposal confirming rental inclusions and any optional services. Nothing is reserved until you review and sign an agreement.",
  },
];

export function VenueFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.map((f, i) => (
        <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-ink-gold py-5" data-testid={`button-faq-${i}`}>
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
