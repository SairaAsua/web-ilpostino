# Il Postino product website

A postal, Spanish product introduction for Il Postino and Homemaker. The landing
explains conversational content, visual choice, private preview and the planned
dmn.homes journey, with an honest development status and Saira's existing public
contact. The original experiment chronicle remains under `/historia/`.

## Develop and build

```sh
npm ci
npm run dev
npm run lint
npm run build
```

Use Node 22+ for the maintained CI route. `scripts/build.mjs` compiles the existing
React/Vite application and renders its actual components into three static pages:
`/web-ilpostino/`, `/web-ilpostino/ilpostino/` and `/web-ilpostino/historia/`.
The alias product page has the root canonical URL. A separate `404.html` is
noindex. The build also emits a sitemap of canonical routes. Text and native
questions remain available without JavaScript; hydration adds client navigation.

The existing Pages deployment runs only from `main` or explicit workflow dispatch.
A pushed review branch is not a public deployment.

## Verify

```sh
python -m pip install -r requirements-browser.txt
python -m playwright install chromium
python tests/browser_smoke.py
python scripts/render_social.py
```

The proposed `docs/review-workflow.example.yml` checks desktop/390px/320px, rendered route metadata, focus,
loaded fonts/images, overflow, reduced motion and reading without JavaScript.
It can export website screenshots, social images and a selectable-text carousel PDF
as a 14-day CI artifact after a maintainer installs the workflow. The current
GitHub connection has no `workflow` scope, so no review workflow is installed. No bot, social account or private home is contacted.

## Campaign source

`social/campaign.json` owns the exact Spanish copy. `social/index.html`,
`social/render.js` and `social/social.css` produce six carousel slides, three
stories, a square post and six vertical video frames using the same postal brand.
The frames are editorial graphics, not screenshots of a deployed product.
`qa-artifacts/` is ignored; final deliverables are packaged separately.

The product tracker and resumable plan remain in
[SairaAsua/ilpostino issue #21](https://github.com/SairaAsua/ilpostino/issues/21).
See [asset provenance](docs/ASSETS.md) and [review evidence](docs/REVIEW.md).
