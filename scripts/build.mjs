import { build } from 'vite'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Compile the existing React application, then render its actual routes to HTML.
// Pages gets real directory entries instead of returning the SPA via HTTP 404.
await build()
await build({ build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr' } })
const { render, pages, basePath, siteOrigin } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')))
const shell = await readFile('dist/index.html', 'utf8')
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

async function emit(page, robots = 'index,follow') {
  const canonical = page.canonical ? `${siteOrigin}${page.canonical}` : ''
  let html = shell.replaceAll('__PAGE_TITLE__', escape(page.title))
    .replaceAll('__PAGE_DESCRIPTION__', escape(page.description))
    .replaceAll('__PAGE_CANONICAL__', escape(canonical))
    .replaceAll('__PAGE_ROBOTS__', robots)
    .replace('<!--app-html-->', render(page.path))
  if (!canonical) html = html.replace(/\s*<link rel="canonical" href=""\s*\/>/, '')
  const destination = resolve('dist', page.output)
  await mkdir(resolve(destination, '..'), { recursive: true })
  await writeFile(destination, html)
}
for (const page of pages) await emit(page)
await emit({ path: '/missing-page/', output: '404.html', title: 'Página no encontrada · Il Postino', description: 'Volvé al inicio de Il Postino para conocer el proyecto y su historia.' }, 'noindex,follow')
const canonicalPages = pages.filter((page) => `${basePath.replace(/\/$/, '')}${page.path}` === page.canonical)
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${canonicalPages.map((page) => `<url><loc>${siteOrigin}${page.canonical}</loc></url>`).join('')}</urlset>\n`)
await rm('dist-ssr', { recursive: true })
console.log(`Prerendered ${pages.length} routes, a real 404 page and the canonical sitemap.`)
