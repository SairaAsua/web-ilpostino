# Product website review evidence

Workstream: SairaAsua/ilpostino #21. Branch: `eko/product-homemaker-web`.
Date: 2026-10-14. Source state: prepared for review, not deployed.

The landing now leads with the product, retains the postal paper/ink/yellow
identity and explains Homemaker, saved content, private review and explicit
audience/publication. The development offer has an informational primary CTA
and the existing Saira contact. No bot identity, price or live publisher was
selected. The original chronicle is retained on the story route.

Build-time rendering reuses the actual React components, emits real route files
and per-route metadata, and preserves the original product URL as a root-canonical
alias. This prepares direct HTTP 200 delivery on Pages once integrated; it does
not alter the currently deployed website. Fonts load locally with source/license
records, images have delivery variants, navigation reflows and native questions
remain readable without JavaScript.

Local lint/build and the proposed browser workflow supply separate checks.
GitHub rejected the workflow push because the current OAuth connection has no
`workflow` scope. The proposed file is retained as documentation; no workflow
installation or CI browser result is claimed. Browser screenshots/reports and exact commit/run links are added to the
owning PR and #21 when observed. Local Chromium did not produce a usable session;
that failed attempt is not counted as a rendered check. Review CI must qualify
all three widths, route/keyboard behavior, assets, console and no-JavaScript paths
before this contribution is reported as visually reviewed.

The social campaign is generated from exact editable text with a visible
'En desarrollo' label. Source templates live in `social/`; browser exports and
video/package evidence accompany the campaign handoff. Public launch materials
use the existing contact `https://t.me/sairaasua` while the product journey is
being integrated.

## Campaign export observed

The browser-independent export produced all six 1080×1350 carousel slides, three
1080×1920 stories, one 1080×1080 post and six 1080×1920 reel frames. The six-page
PDF retains selectable text. Exact titles, development labels, page count and
output dimensions were verified; all carousel pages and portrait/square samples
were visually inspected. This evidence comes from the HTML/PDF graphics renderer,
not a simulated browser session. Delivery records retain the actual renderer,
asset hashes, selected public CTA and final MP4 qualification.

The campaign is a presentation of a product in development. It contains no
private workshop/source catalog or fabricated deployed-session screenshot.
