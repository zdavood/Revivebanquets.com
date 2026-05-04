# Revive Photos — Drop your real photos here

This folder is the home for the user-supplied Revive Event Center photos that
will eventually replace the royalty-free placeholder imagery used throughout
the site.

## How to swap in your own photos

1. Drop your image files (`.jpg`, `.jpeg`, `.png`, `.webp`) directly into this
   folder. Keep the filenames descriptive — for example:
   - `ballroom-wide.jpg`
   - `wedding-table-setting.jpg`
   - `quinceanera-dance-floor.jpg`
   - `corporate-event-stage.jpg`
   - `golden-hour-exterior.jpg`

2. Open `src/content/images.ts`. Every photo URL used by the website is
   exported from that single file. Replace the placeholder URL for each
   image with the path to your file in this folder. For example:

   ```ts
   // before
   ballroomWide: "https://images.unsplash.com/...",

   // after
   ballroomWide: "/revive-photos/ballroom-wide.jpg",
   ```

3. The "Recent Events & Inspiration" gallery on the home page is driven by a
   separate exported array (`recentEventsGallery`) in the same file. Edit the
   `image` field of each entry the same way to swap in your own photos.

That's it — no other code changes are required.

## Notes

- Files placed in `public/` are served from the site root. A file at
  `public/revive-photos/foo.jpg` is reachable at `/revive-photos/foo.jpg`.
- Images should be reasonably optimized (1600–2400px on the long edge,
  compressed JPEG/WebP). Very large originals will slow the page down.
