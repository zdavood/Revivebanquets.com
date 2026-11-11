import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TEL_HREF, VENUE } from "@/content/site";

export const SECTION_LINKS = [
  { href: "#celebrations", label: "Celebrations" },
  { href: "#venue", label: "The Room" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#book", label: "Plan Your Event" },
  { href: "#faq", label: "FAQ" },
  { href: "#find-us", label: "Find Us" },
] as const;

/** Mobile/tablet section menu. Radix Dialog handles focus trap, Escape, and focus return. */
export function MobileSectionNav({ tourUrl }: { tourUrl: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="xl:hidden shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-md border border-border text-foreground hover:bg-muted"
        aria-label="Open section menu"
        data-testid="button-open-menu"
      >
        <Menu className="w-5 h-5" />
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col">
        <SheetTitle className="font-serif text-2xl">Revive Event Center</SheetTitle>
        <SheetDescription>Jump to a section of this page.</SheetDescription>
        <nav aria-label="Page sections" className="mt-4">
          <ul className="flex flex-col">
            {SECTION_LINKS.map((l) => (
              <li key={l.href}>
                <SheetClose asChild>
                  <a href={l.href} className="block py-3 text-lg border-b border-border hover:text-ink-gold" data-testid={`link-menu-${l.href.slice(1)}`}>
                    {l.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-3 pt-6" data-track-section="menu">
          <a href={tourUrl} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer" className="h-12 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold" data-testid="link-menu-tour">
            Schedule a Tour<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={TEL_HREF} data-conversion-action="phone_click" className="h-12 inline-flex items-center justify-center rounded-md border border-border font-medium" data-testid="link-menu-call">
            Call {VENUE.phoneDisplay}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
