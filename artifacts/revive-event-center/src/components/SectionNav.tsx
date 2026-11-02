import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const SECTION_LINKS = [
  { href: "#venue", label: "The Venue" },
  { href: "#celebrations", label: "Celebrations" },
  { href: "#services", label: "Optional Services" },
  { href: "#how-it-works", label: "How Booking Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#find-us", label: "Find Us" },
] as const;

/** Mobile/tablet section menu. Radix Dialog handles focus trap, Escape, and focus return. */
export function MobileSectionNav({ tourUrl, telHref }: { tourUrl: string; telHref: string }) {
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
        <div className="mt-auto flex flex-col gap-3 pt-6">
          <a href={tourUrl} data-conversion-action="tour_click" target="_blank" rel="noopener noreferrer" className="h-12 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold" data-testid="link-menu-tour">
            Schedule a Tour
          </a>
          <a href={telHref} data-conversion-action="phone_click" className="h-12 inline-flex items-center justify-center rounded-md border border-border font-medium" data-testid="link-menu-call">
            Call (209) 600-1502
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
