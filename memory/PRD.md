# PRD — Vinayak Awati Architecture Portfolio

## Original Problem Statement
"Build me a modern, minimal and aesthetic architecture portfolio website using my portfolio pdf" (Vinayak_work_2026 Portfolio.pdf). User choices: everything from the PDF (Home, About, Projects gallery, Contact); style decided from the PDF's own aesthetic; no contact form (mailto/socials only); no project detail pages (scroll-through gallery); smooth, good-looking, don't change PDF content.

## User Persona
- Vinayak Awati — B.Arch student (KLS GIT Belagavi, 2021–2026), Vijayapura, Karnataka. Needs a striking personal portfolio to share with studios/recruiters.
- Visitors — architecture studios, faculty, collaborators browsing his work.

## Architecture
- Frontend-only React app (CRA + craco + Tailwind), single editorial page.
- Motion: framer-motion (masked line reveals, scroll reveals, hero parallax), lenis (smooth momentum scroll), react-fast-marquee (editorial marquee).
- Imagery: 23 page-spreads extracted from the source PDF (PyMuPDF), downscaled to 1920w JPEGs in `/app/frontend/public/images/`; portrait cropped from page 2.
- Content: verbatim from PDF in `/app/frontend/src/data/portfolio.js`.
- Backend: untouched FastAPI template (`/api` health check works); no DB usage needed.

## Core Requirements (static)
- Kinetic hero with masked line-by-line reveal + parallax.
- Numbered manifesto chapters, education/experience/skills grids.
- Scroll-through gallery of 6 projects using his own renders.
- Contact footer: mailto, phone, 2 Instagram handles. No contact form.
- Paper-grain texture, Cormorant Garamond / Manrope / JetBrains Mono, drafting-red accent (#D9381E).

## Implemented (2026-07 / build session 1)
- Hero: massive masked-reveal name, portfolio cover parallax image, scroll cue.
- Slow editorial marquee (Architecture · Photography · Experiments · Creative Work).
- About/manifesto: pull-quote, bio, cropped portrait, education, experience/leads, software, capabilities, competitions, interests.
- Work: 6 projects (AFTER, 2+ Design Collective, EDAM, ANTARA, CAD CHAOS, MISCELLANEOUS) with metadata + 18 full-spread plates, alternating asymmetric layouts, scroll reveals.
- Footer: "Let's build something." + mailto/phone/Instagram/location link rows, back-to-top.
- Verified: hero/about/work/footer screenshots, mailto + IG hrefs, zero console errors, `/api/` health OK.

## Implemented (2026-07 / build session 2)
- Full dark theme per user request: warm near-black canvas (#0D0C0A), bone text (#F2EFE9), muted taupe (#8E897F), drafting-red accent kept.
- Image blending: plates dissolve into the dark via feathered radial masks (`.plate-img`), hero cover + portrait use dissolve masks; plates subtly desaturated/darkened, brighten on hover.
- Photo arrangement rhythm: per project plates follow full-width → offset-right → offset-left column pattern for editorial flow.
- Footer deepened to #080706; grain overlay switched to overlay blend for dark.
- Verified: dark hero/about/plates screenshots, no console errors.

## Implemented (2026-07 / build session 3)
- Plates enlarged per user request: near edge-to-edge spans (full / 11-col offsets), work section padding reduced, mask feather reduced (84% solid) so spreads read bigger and sharper.
- Verified: EDAM spread near full-bleed on live site.

## Implemented (2026-07 / build session 4)
- Hero cover render enlarged (~66vw, max 1150px) and centered (mx-auto; framer-motion transform had overridden translate-x — fixed).
- Browser tab/link title renamed to "Vinayak portfolio" (frontend restart needed for public/index.html changes).
- Portrait re-cropped from PDF page 2 excluding the logo, upscaled 2x, contrast/sharpness enhanced; displayed larger (4-col).
- Verified: centered hero + new portrait screenshots, tab title confirmed.

## Implemented (2026-07 / build session 5)
- Portrait: full uncropped photo from PDF page 2, white page border auto-trimmed, enhanced; moved to the right side of the manifesto block (bio moved under the pull-quote).
- Caption changed from "Fig. 01 — The author" to "Vinayak" (italic serif).
- Verified: about-section screenshot shows side portrait + new caption.

## Implemented (2026-07 / build session 6)
- Portrait blur fixed: re-cut from the original 7086px-wide PDF page (1040×1184, ~3.7x sharper), text-column bleed trimmed.
- Projects reworked: each project now shows only its cover/title sheet with a "View N sheets +" glass pill; clicking expands (framer-motion height animation) to reveal the remaining sheets in the offset layout; click again to close. CAD CHAOS (single sheet) shows no toggle.
- Verified via browser automation: cover click expands sheets (asserted visible), EDAM/AFTER covers + expanded sheets screenshotted, portrait sharp.

## Implemented (2026-07 / build session 7)
- Hero overlap fix: cover render moved from absolutely-positioned background to in-flow block below the name/tagline; parallax retained (reduced amplitude).
- Verified: name bottom y=434 vs image top y=518 — no overlap, asserted programmatically.

## Implemented (2026-07 / build session 8)
- Swapped all project imagery to the newly uploaded "Vinayak's Portfolio.pdf" (46 single pages): extracted to /images/v2/p01–p46 at 1920w; re-mapped covers + sheets per project (AFTER p07–17, 2+ p18–24, EDAM p25–30, ANTARA p31–33, CAD CHAOS p35/34/36, MISC p37–44).
- Hero cover now uses new p01.
- Verified via browser automation: covers render, AFTER expands to sheets ("Close sheets" pill), hero shows new cover.

## Implemented (2026-07 / build session 9)
- Hero cover extended full-bleed to both side edges (negative margins breaking out of section padding; dissolve mask widened horizontally).
- Verified: image bounding box 0→1920px at 1920 viewport.

## Implemented (2026-07 / build session 10)
- Removed project cover sheets per user request: projects are now pure typographic headers (title shifts on hover, floating tilted thumbnail preview of first sheet appears, "View project" pill with rotating red plus).
- Click opens project with a clip-path wipe + staggered plate reveals showing all sheets; click again closes.
- Verified via browser automation: hover preview visible, expand asserts sheets visible, collapse asserts hidden.

## Implemented (2026-07 / build session 11)
- Reverted per user request: removed second PDF's pages everywhere; projects back to first PDF spreads (AFTER p04/05/07/08, 2+ p10/11/12, EDAM p13/14/15, ANTARA p16/17, CAD CHAOS p18, MISC p19–22); hero cover back to p01_0.jpg.
- Restored cover + "View N sheets" click-to-expand interaction (header-hover-preview version discarded).
- Verified via browser automation: EDAM cover visible, expands to original spreads, CAD CHAOS original title spread renders.

## Implemented (2026-07 / build session 12)
- EDAM cover replaced with user-uploaded image (Artboard 12.webp → /images/edam-cover.webp, 2000×1000); sheets remain p14/p15 spreads ("View 2 sheets").
- Verified: live screenshot shows new EDAM cover with View-sheets pill; src asserted.

## Implemented (2026-07 / build session 13)
- Vanish-on-scroll for main covers: hero cover fades/blurs/scales out tied to scroll (opacity 1→0, blur 0→10px, scale 1→1.08); each project cover gets the same treatment as it exits the viewport (VanishImage component, offset start start→end start).
- Hero entrance animation preserved by nesting (outer div = entrance+parallax, inner img = vanish).
- Verified: opacity measured 1 → 0.42 after 0.6 viewport scroll; screenshot shows dissolve mid-scroll.

## Implemented (2026-07 / build session 14)
- Sheets reworked per user request: opening a project now makes the main cover vanish (blur + fade + fold to zero height) and reveals all sheets as small thumbnails in a single horizontal row ("Sheet 02…" labels).
- Clicking a thumbnail opens a full-screen lightbox viewer: Sheet N/M counter, prev/next arrows, arrow-key navigation, Escape/backdrop close, Lenis scroll lock while open.
- "Close sheets" control added beside the row (cover pill folds away with the cover).
- Verified via browser automation: cover collapses to 0 on open, thumbs visible, lightbox opens/navigates (Sheet 2/3)/closes, cover restores (936px) on close.

## Implemented (2026-07 / build session 15)
- Big project covers removed per user request: each project is now header-only with a "View N sheets +" pill; the cover image joins the same thumbnail row as Sheet 01 with all other sheets.
- Lightbox now spans all plates (cover included), counter e.g. "Sheet 1 / 3".
- Verified via browser automation: no cover element, EDAM row shows Sheet 01–03, lightbox opens cover full-screen, toggle closes.

## Implemented (2026-07 / build session 16)
- Intro preloader: black curtain with "Vinayak Awati." masked reveal + red rule, lifts after ~1.7s; main content mounts as it lifts.
- Viewer zoom: +/- controls (100%–400%), scroll-wheel zoom, double-click toggle, drag-to-pan when zoomed; zoom resets per sheet.
- Footer: "Portfolio PDF — Download" row linking to /vinayak-awati-portfolio.pdf (original PDF copied to public/).
- Mobile polish (390px): nav text/gap reduced (no more collision), footer rows stack label-over-value with break-all email; thumb row swipes horizontally; viewer controls fit.
- Verified desktop + mobile: preloader plays/lifts, zoom 200% asserted, PDF href asserted, mobile nav/footer/row/lightbox screenshotted clean.

## Implemented (2026-07 / build session 17)
- Viewer swipe gestures: drag/swipe left-right flips sheets at 100% zoom (threshold 80px); when zoomed, drag pans instead; touch-pan-y preserved for page scroll.
- Footer: removed the "Studio / Vijayapura, Karnataka" row per user request.
- Verified on mobile viewport: swipe left moved Sheet 1/3 → 2/3; footer no longer contains Studio/Vijayapura.

## Backlog
- P0: none blocking.
- P1: mobile typography pass on very small screens; per-project plate lightbox (user opted out for now).
- P2: dark-mode toggle; OG meta image; PDF download link of original portfolio; analytics events.

## Next Tasks
1. Mobile QA pass (375px).
2. Optional: plate click-to-zoom lightbox.
3. Optional: downloadable original PDF link in footer.
