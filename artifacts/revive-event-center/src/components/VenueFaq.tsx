import { ChevronDown } from "lucide-react";
import { FAQS } from "@/content/faq";

/**
 * Native <details> keeps every answer in the page's HTML (Google does not
 * click to expand), works without JavaScript and is keyboard accessible.
 */
export function VenueFaq() {
  return (
    <div className="w-full divide-y divide-border border-y border-border">
      {FAQS.map((f, i) => (
        <details key={f.q} className="group" data-testid={`faq-${i}`}>
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 text-left text-lg font-medium hover:text-ink-gold [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-lg font-medium">{f.q}</h3>
            <ChevronDown className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="text-base text-muted-foreground leading-relaxed pb-5 pr-8">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
