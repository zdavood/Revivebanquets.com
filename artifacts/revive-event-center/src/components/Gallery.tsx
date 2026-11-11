import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VenueImage } from "@/components/VenueImage";
import { ALT, GALLERY_CATEGORIES, gallery, images, type GalleryCategory } from "@/content/images";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open === null ? null : items[open];

  return (
    <section id="gallery" tabIndex={-1} aria-labelledby="gallery-heading" className="focus:outline-none py-20 md:py-28 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-ink-gold text-sm font-semibold uppercase tracking-[0.25em]">Gallery</span>
            <h2 id="gallery-heading" className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-4">Real events at Revive</h2>
            <p className="text-lg text-muted-foreground">Every photo here was taken in our ballroom. Each client styled their own event, so the room can look completely different from one celebration to the next.</p>
          </div>
        </div>

        <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2 mb-8">
          {(["All", ...GALLERY_CATEGORIES] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => {
                setFilter(f);
                track("gallery_filter", { filter: f });
              }}
              className={cn(
                "min-h-11 px-4 rounded-full border text-sm font-medium transition-colors",
                filter === f
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card border-border text-foreground hover:border-primary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, i) => (
            <li key={item.id} className={cn(i === 0 && filter === "All" && "col-span-2 row-span-2")}>
              <button
                type="button"
                onClick={() => {
                  setOpen(i);
                  track("gallery_open", { photo: item.id });
                }}
                className="group relative block w-full h-full aspect-[4/3] rounded-xl overflow-hidden bg-muted"
              >
                <VenueImage
                  src={images[item.id]}
                  alt={ALT[item.id]}
                  sizes={i === 0 && filter === "All" ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 p-3 pt-10 text-left text-sm font-medium text-white bg-gradient-to-t from-black/75 to-transparent">
                  {item.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <DialogPrimitive.Root open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90" />
          <DialogPrimitive.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-10 focus:outline-none">
            {current && (
              <>
                <DialogPrimitive.Title className="sr-only">{current.caption}</DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">{ALT[current.id]}</DialogPrimitive.Description>
                <figure className="flex flex-col items-center max-w-6xl w-full">
                  <VenueImage
                    key={current.id}
                    src={images[current.id]}
                    alt={ALT[current.id]}
                    sizes="100vw"
                    priority
                    className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg"
                  />
                  <figcaption className="mt-4 text-white/90 text-center">
                    {current.caption}
                    <span className="text-white/60"> · {open! + 1} of {items.length}</span>
                  </figcaption>
                </figure>
                <button type="button" onClick={() => step(-1)} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center" aria-label="Previous photo">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button type="button" onClick={() => step(1)} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center" aria-label="Next photo">
                  <ChevronRight className="w-6 h-6" />
                </button>
                <DialogPrimitive.Close className="absolute right-3 top-3 md:right-6 md:top-6 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center" aria-label="Close photo">
                  <X className="w-6 h-6" />
                </DialogPrimitive.Close>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}
