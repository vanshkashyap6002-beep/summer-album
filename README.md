# The days we keep

A React memory book with CSS 3D page turns, pointer drag, touch swipe, arrow-key navigation, a chapter index, fullscreen reading, and reduced-motion support.

## Run

Use Node 22.13 or newer. Run `npm ci`, then `npm run dev`. The development server uses port 5173. Run npm run build, then npm run preview (or npm start) for the static production preview. Source photos live in public/images and are copied into dist/images. The active Vite entry is client.tsx; retained server/database scaffolding is not used.

## Content architecture

`lib/album.ts` defines the serializable Album, Chapter, and Photo contracts and the nine-chapter sample. `client.tsx` provides this data to `<Book album={...} />`. A future API can supply validated album data by customer/album ID. The reading components do not fetch data or depend on storage.

`components/Book.tsx` exports Book, BookCover, Page, PhotoPage, LetterPage, CollagePage, TimelinePage, QuotePage, and FinalPage. The Page dispatcher selects a composition by chapter.type; reorder the chapters array to change the sequence. Cover title, subtitle, image, author names, and date come from Album. Authentication, customer editing, uploads, and persistence are intentionally left for the next implementation stage.

Photos are local JPEG assets, sized to 1000px and compressed at quality 78. The complete photo set is under 800 KB. Typography uses Google Fonts with system fallbacks. No 3D engine or animation dependency is used.

## Sample photo credits

- Cover / coast: Ivan Rohovchenko, https://unsplash.com/photos/XJFcsYhk1RM
- Town: Henrique Ferreira, https://unsplash.com/photos/igdMOAseMpg
- Coastline: https://unsplash.com/photos/woHgvh9woms
- Sunset: Rodrigo Silva, https://unsplash.com/photos/Xwx854nud4o
- Flowers: micheile henderson, https://unsplash.com/photos/27YL--2ES9k

The story and names are fictional sample content.

## Standalone edition

The sibling file `The days we keep.html` bundles React, all page styles, and every photo into one file. Open it in a modern browser; no server is needed. Web fonts load when online and fall back gracefully when offline.

## Validation

The active client can be checked with TypeScript and built with Vite. No database is connected. The standalone file is regenerated from the current production build by build-standalone.mjs. Publication is outside this repair phase.
