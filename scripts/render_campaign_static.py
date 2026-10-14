"""Export exact editable campaign text with a local HTML/PDF renderer.

This is a publication-graphics export, not a browser qualification of the website.
"""
import argparse
import html
import json
from pathlib import Path
import pymupdf as fitz
from weasyprint import HTML

parser = argparse.ArgumentParser()
parser.add_argument('--output', default='qa-artifacts/social-static')
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
out = Path(args.output).resolve()
out.mkdir(parents=True, exist_ok=True)
(out / 'frames').mkdir(exist_ok=True)
campaign = json.loads((root / 'social/campaign.json').read_text())
css = (root / 'social/social.css').read_text()
font_root = (root / 'public/fonts').as_uri()
css = css.replace("../public/fonts", font_root)


def escape(value):
    return html.escape(value, quote=True)


def card(slide, index, mode):
    visual = ''
    if slide['visual'] == 'landscape':
        source = (root / 'public/images/postal-landscape.webp').as_uri()
        visual = f'<img class="landscape-image" src="{source}" alt="Ilustración postal junto al mar">'
    elif slide['visual'] == 'recipe':
        visual = ''.join(f'<div class="recipe-row"><span class="recipe-key">{key}</span><span class="recipe-value">{value}</span></div>' for key, value in [('Color', 'Tu paleta'), ('Letras', 'Tu tono'), ('Espacios', 'Tu ritmo'), ('Historia', 'La tuya')])
    elif slide['visual'] == 'steps':
        visual = ''.join(f'<div class="step-row"><span class="step">{i+1:02}</span><span>{value}</span></div>' for i, value in enumerate(['Borrador privado', 'Diseño elegido', 'Vista previa', 'Audiencia y publicación']))
    elif slide['visual'] == 'journal':
        visual = '<span class="note-label">Ejemplo ficticio · Bitácora</span><h2>Hoy abrimos las ventanas.</h2><p>Un lugar para las ideas que todavía están creciendo.</p>'
    elif slide['visual'] == 'letter':
        visual = '<span class="note-label">Para: tu casa en internet</span><p class="letter-message">Un proyecto.\nUna idea.\nUna historia que vuelve.</p><span class="signature">De: vos.</span>'
    elif slide['visual'] == 'contact':
        visual = f'<span class="contact-label">Conocé el proyecto</span><p class="contact-link">{escape(campaign["contact"])}</p><span class="contact-note">Homemaker · un proyecto de Annie y Oliva</span>'
    text = slide['reel'] if mode == 'reel' else slide['text']
    number = f'{[0, 2, 5].index(index) + 1} / 3' if mode == 'story' else campaign['contact'] if mode == 'square' else f'{index+1} / {len(campaign["slides"])}'
    return f'''<article class="social-card"><header class="card-header"><span class="wordmark">Il Postino.</span><span class="edition">Tu rincón en internet</span></header><p class="kicker">{escape(slide['kicker'])}</p><h1 class="title">{escape(slide['title'])}</h1><p class="body-copy">{escape(text)}</p><div class="visual {slide['visual']}">{visual}</div><footer class="card-footer"><span class="status">{escape(campaign['availability'])}</span><span class="page-number">{number}</span></footer></article>'''


def document(entries, mode, height):
    # Native CSS px convert to PDF points; raster export restores exactly 96dpi.
    override = f'@page {{ size: 1080px {height}px; margin: 0; }} .social-card {{ break-after: page; print-color-adjust: exact; }} .social-card:last-child {{ break-after: auto; }}'
    content = ''.join(card(campaign['slides'][i], i, mode) for i in entries)
    return f'<!doctype html><html lang="es-AR"><head><meta charset="utf-8"><title>Il Postino · Tu historia tiene casa</title><style>{css}\n{override}</style></head><body class="{mode}">{content}</body></html>'


def render(entries, mode, height, stem):
    source = document(entries, mode, height)
    pdf = out / f'{stem}.pdf'
    HTML(string=source, base_url=str(root)).write_pdf(pdf)
    doc = fitz.open(pdf)
    assert len(doc) == len(entries), (stem, len(doc), len(entries))
    outputs = []
    for page_number, index in enumerate(entries):
        page = doc[page_number]
        text = ' '.join(page.get_text().split())
        title = ' '.join(campaign['slides'][index]['title'].split())
        assert title in text, (stem, index, title, text)
        assert 'En desarrollo' in text, (stem, index)
        assert not page.get_text('dict')['blocks'] == []
        if mode == 'carousel':
            filename = f'carrusel-{page_number+1:02}.png'
        elif mode == 'story':
            filename = f'story-{page_number+1:02}.png'
        elif mode == 'reel':
            filename = f'frames/reel-{page_number+1:02}.png'
        else:
            filename = 'post-cuadrado.png'
        pix = page.get_pixmap(matrix=fitz.Matrix(4 / 3, 4 / 3), alpha=False)
        assert (pix.width, pix.height) == (1080, height), (filename, pix.width, pix.height)
        pix.save(out / filename)
        outputs.append({'file': filename, 'width': pix.width, 'height': pix.height, 'exact_title': True, 'availability_visible': True})
    doc.close()
    return outputs

report = []
report += render(list(range(6)), 'carousel', 1350, 'carrusel-linkedin')
report += render([0, 2, 5], 'story', 1920, 'stories-source')
report += render([0], 'square', 1080, 'square-source')
report += render(list(range(6)), 'reel', 1920, 'reel-source')
(out / 'export-report.json').write_text(json.dumps({'renderer': 'WeasyPrint/PyMuPDF; not browser QA', 'files': report}, indent=2) + '\n')
print(json.dumps(report))
