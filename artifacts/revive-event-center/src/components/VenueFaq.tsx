import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How many guests can Revive accommodate?",
    a: "The ballroom seats up to 350 guests. The right layout for your count depends on tables, dance floor, and staging, which we can walk through on a tour.",
  },
  {
    q: "What kinds of events do you host?",
    a: "Weddings, quinceañeras, corporate events, cultural celebrations, private celebrations such as birthdays and anniversaries, and live events like comedy nights.",
  },
  {
    q: "How do I schedule a tour?",
    a: "Use the Schedule a Tour button to open our scheduling page on VenueSOS in a new tab, or call (209) 600-1502. Tours are by appointment.",
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
    a: "Rental inclusions and optional services are confirmed in your proposal. Items such as kitchen use, bar setup, catering, and staffing are worth discussing with our team; they are not guaranteed to be included.",
  },
  {
    q: "Is my date available?",
    a: "Send an inquiry with your preferred date and guest count, or call us. Availability is only confirmed once our team responds.",
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
