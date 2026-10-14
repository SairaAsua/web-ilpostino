const campaign = await fetch('campaign.json').then((response) => response.json())
const params = new URLSearchParams(location.search)
const format = params.get('format') || 'carousel'
const selected = Number(params.get('slide') || 0)
const root = document.getElementById('campaign')
document.body.className = format

function node(tag, className, text) {
  const el = document.createElement(tag)
  el.className = className
  if (text) el.textContent = text
  return el
}
function card(slide, index) {
  const panel = node('article', 'social-card')
  const top = node('header', 'card-header')
  top.append(node('span', 'wordmark', 'Il Postino.'), node('span', 'edition', 'Tu rincón en internet'))
  panel.append(top, node('p', 'kicker', slide.kicker), node('h1', 'title', slide.title), node('p', 'body-copy', format === 'reel' ? slide.reel : slide.text))
  const visual = node('div', `visual ${slide.visual}`)
  if (slide.visual === 'landscape') {
    const image = node('img', 'landscape-image')
    image.src = '../public/images/postal-landscape.webp'
    image.alt = 'Ilustración postal junto al mar'
    visual.append(image)
  }
  if (slide.visual === 'recipe') {
    for (const [label, value] of [['Color', 'Tu paleta'], ['Letras', 'Tu tono'], ['Espacios', 'Tu ritmo'], ['Historia', 'La tuya']]) {
      const row = node('div', 'recipe-row')
      row.append(node('span', 'recipe-key', label), node('span', 'recipe-value', value))
      visual.append(row)
    }
  }
  if (slide.visual === 'steps') {
    for (const [index, text] of ['Borrador privado', 'Diseño elegido', 'Vista previa', 'Audiencia y publicación'].entries()) {
      const row = node('div', 'step-row')
      row.append(node('span', 'step', String(index + 1).padStart(2, '0')), node('span', '', text))
      visual.append(row)
    }
  }
  if (slide.visual === 'journal') visual.append(node('span', 'note-label', 'Ejemplo ficticio · Bitácora'), node('h2', '', 'Hoy abrimos las ventanas.'), node('p', '', 'Un lugar para las ideas que todavía están creciendo.'))
  if (slide.visual === 'letter') visual.append(node('span', 'note-label', 'Para: tu casa en internet'), node('p', 'letter-message', 'Un proyecto.\nUna idea.\nUna historia que vuelve.'), node('span', 'signature', 'De: vos.'))
  if (slide.visual === 'contact') visual.append(node('span', 'contact-label', 'Conocé el proyecto'), node('p', 'contact-link', campaign.contact), node('span', 'contact-note', 'Homemaker · un proyecto de Annie y Oliva'))
  panel.append(visual)
  const footer = node('footer', 'card-footer')
  footer.append(node('span', 'status', campaign.availability), node('span', 'page-number', `${index + 1} / ${campaign.slides.length}`))
  panel.append(footer)
  return panel
}
const entries = format === 'document' ? campaign.slides : [campaign.slides[selected]]
for (const [i, slide] of entries.entries()) root.append(card(slide, format === 'document' ? i : selected))
await document.fonts.ready
window.campaignReady = true
