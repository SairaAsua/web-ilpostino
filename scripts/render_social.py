"""Export the editable postal campaign through a real browser, preserving exact text."""
import functools
import json
import threading
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
out = root / 'qa-artifacts/social'
out.mkdir(parents=True, exist_ok=True)
(out / 'frames').mkdir(exist_ok=True)
campaign = json.loads((root / 'social/campaign.json').read_text())
class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass
server = ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Handler, directory=str(root)))
threading.Thread(target=server.serve_forever, daemon=True).start()
url = f'http://127.0.0.1:{server.server_port}/social/index.html'
report = []
try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1080, 'height': 1920}, device_scale_factor=1)
        exports = [('carousel', i, f'carrusel-{i+1:02}.png') for i in range(6)]
        exports += [('story', i, f'story-{number:02}.png') for number, i in enumerate([0, 2, 5], 1)]
        exports += [('square', 0, 'post-cuadrado.png')]
        exports += [('reel', i, f'frames/reel-{i+1:02}.png') for i in range(6)]
        for mode, index, filename in exports:
            page.goto(f'{url}?format={mode}&slide={index}', wait_until='networkidle')
            page.wait_for_function('window.campaignReady === true')
            assert page.locator('.title').inner_text() == campaign['slides'][index]['title']
            assert page.locator('.status').inner_text() == 'En desarrollo'
            assert page.locator('img').evaluate_all('(els) => els.every(i => i.complete && i.naturalWidth > 0)')
            metrics = page.locator('.social-card').evaluate("(card) => ({width:card.clientWidth,height:card.clientHeight,overflow:card.scrollHeight>card.clientHeight,footer:card.querySelector('footer').getBoundingClientRect().bottom,visual:card.querySelector('.visual').getBoundingClientRect().bottom})")
            assert not metrics['overflow'], (filename, metrics)
            assert metrics['visual'] < metrics['footer'] - 45, (filename, metrics)
            page.locator('.social-card').screenshot(path=str(out / filename))
            report.append({'file': filename, **metrics})
        page.goto(f'{url}?format=document', wait_until='networkidle')
        page.wait_for_function('window.campaignReady === true')
        page.pdf(path=str(out / 'carrusel-linkedin.pdf'), prefer_css_page_size=True, print_background=True)
        browser.close()
finally:
    server.shutdown()
(out / 'render-report.json').write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps(report))
