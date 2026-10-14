"""Rendered route, content, keyboard and viewport checks against the built site."""
import argparse
import functools
import json
import threading
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from playwright.sync_api import sync_playwright

parser = argparse.ArgumentParser()
parser.add_argument('--root', default='dist')
parser.add_argument('--output', default='qa-artifacts')
options = parser.parse_args()
root = Path(options.root).resolve()
out = Path(options.output).resolve()
out.mkdir(parents=True, exist_ok=True)

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        clean = path.split('?', 1)[0].split('#', 1)[0]
        if clean.startswith('/web-ilpostino/'):
            clean = clean[len('/web-ilpostino'):]
        return super().translate_path(clean)
    def log_message(self, *args):
        pass

server = ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Handler, directory=str(root)))
thread = threading.Thread(target=server.serve_forever, daemon=True)
thread.start()
base = f'http://127.0.0.1:{server.server_port}/web-ilpostino/'
report = []
try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for width in [1440, 390, 320]:
            context = browser.new_context(viewport={'width': width, 'height': 1000}, reduced_motion='reduce')
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
            response = page.goto(base, wait_until='networkidle')
            assert response.status == 200
            page.get_by_role('heading', level=1).wait_for()
            page.evaluate('document.fonts.ready')
            assert page.locator('h1').count() == 1
            assert 'Tu historia' in page.locator('h1').inner_text()
            assert page.title() == 'Il Postino · Tu historia tiene casa'
            assert page.locator('html').get_attribute('lang') == 'es-AR'
            assert page.evaluate('document.fonts.check("16px Inter") && document.fonts.check("24px Playfair Display")')
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Horizontal overflow at {width}px'
            assert page.locator('img').evaluate_all('(images) => images.every(i => i.complete && i.naturalWidth > 0)')
            tiny = page.locator('a, summary').evaluate_all('(els) => els.filter(e => getComputedStyle(e).fontSize.replace("px", "") < 16).map(e => e.textContent)')
            assert not tiny, f'Small controls: {tiny}'
            page.screenshot(path=str(out / f'product-{width}.png'), full_page=True)
            if width == 1440:
                page.screenshot(path=str(out / 'product-first-screen.png'))
            page.keyboard.press('Tab')
            assert page.locator('.skip-link').evaluate('(el) => el === document.activeElement')
            assert page.locator('.skip-link').evaluate('(el) => getComputedStyle(el).outlineStyle != "none"')
            page.keyboard.press('Enter')
            assert page.locator('main').evaluate('(el) => el === document.activeElement')
            page.get_by_role('link', name='Conocé cómo funciona').click()
            page.wait_for_function('location.hash === "#como-funciona"')
            assert abs(page.locator('#como-funciona').bounding_box()['y']) < 80
            question = page.get_by_text('¿Ya puedo usar el recorrido completo?', exact=True)
            question.click()
            assert question.locator('..').get_attribute('open') is not None
            assert page.get_by_role('link', name='conversá con Saira', exact=True).get_attribute('href') == 'https://t.me/sairaasua'
            assert page.locator('a[href*="journalBord_bot"], a[href*="t.me/ilpostino_bot"]').count() == 0
            response = page.goto(base + 'ilpostino/', wait_until='networkidle')
            assert response.status == 200
            assert page.locator('link[rel=canonical]').get_attribute('href') == 'https://sairaasua.github.io/web-ilpostino/'
            page.get_by_role('navigation').get_by_role('link', name='La historia').click()
            page.wait_for_function('location.pathname.endsWith("/historia/")')
            page.wait_for_function('document.title === "La historia · Il Postino"')
            assert page.locator('h1').count() == 1
            assert page.locator('link[rel=canonical]').get_attribute('href').endswith('/historia/')
            assert page.get_by_role('heading', name='La nueva normalidad de las IA').count() == 1
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
            if width == 1440:
                page.screenshot(path=str(out / 'history-first-screen.png'))
            page.get_by_role('link', name='Il Postino · Inicio').click()
            page.wait_for_function('document.title === "Il Postino · Tu historia tiene casa"')
            assert page.evaluate('getComputedStyle(document.documentElement).scrollBehavior') == 'auto'
            assert not errors, errors
            report.append({'width': width, 'routes': 'passed', 'keyboard': 'passed', 'overflow': 'none', 'console_errors': errors})
            context.close()
        context = browser.new_context(java_script_enabled=False, viewport={'width': 390, 'height': 1000})
        page = context.new_page()
        for route in ['', 'ilpostino/', 'historia/']:
            response = page.goto(base + route)
            assert response.status == 200
            assert page.locator('h1').count() == 1
            assert page.locator('main').inner_text().strip()
        page.goto(base)
        page.get_by_text('¿Qué queda guardado y qué se publica?', exact=True).click()
        assert page.get_by_text('Publicar una versión y elegirla como portada de la home son dos pasos distintos.', exact=True).is_visible()
        report.append({'javascript_disabled': 'All three static routes and native questions are readable and usable'})
        browser.close()
finally:
    server.shutdown()
(out / 'browser-report.json').write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps(report))
