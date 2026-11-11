# Revive Photos

Every photo on the website lives in this folder, and every one is a real
photo taken at Revive Event Center, 443 W. 18th Street, Merced.

**Never add AI-generated, stock or "concept" ballroom images.** The six
styled color-theme tiles (blush, navy, garden, greenery, burgundy, teal) were
AI renders of a different room and were removed in November 2026.

## Adding a photo

1. Put the original (full-size camera file) in `attached_assets/`.
2. Add an entry to `PHOTOS` in `scripts/process_photos.py` (crop and gentle
   tone cleanup are optional per photo).
3. From `artifacts/revive-event-center`, run `python3 scripts/process_photos.py`.
   It writes `<name>.jpg` (max 2400 px) plus 640/1280/1920/2400 px WebP
   versions, and updates `src/content/photo-dimensions.json`. It never
   deletes files.
4. Reference it in `src/content/images.ts` (and add it to `gallery` there if
   it belongs in the gallery), with accurate alt text.

## Current set

| File | What it shows |
| --- | --- |
| event-wedding-red-setup | Red and white wedding reception (hero) |
| wedding-table-detail | Close crop of the same wedding's table |
| event-colorful-reception-setup | Reception with teal/purple linens and gold chair covers |
| cultural-dance, cultural-ceremony | Guests celebrating (ceremony is a video still) |
| comedy-wide, comedy-side, comedy-performer | Comedy night |
| ballroom-wide, ballroom-angle | The empty room |
| scale-front, scale-side, scale-angle, scale-rear | Room set for a large banquet, navy banquet chairs |
| ambiance | Evening blue lighting with candles |
| bar, bar-lounge | Bar counter; bar with cocktail tables |
| table-setting, centerpiece | Black linen setting; candle centerpiece |
| catering | Grazing table |
| exterior | Storefront and sign on W. 18th Street |
