import { useEffect } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import History from './pages/History'
import IlPostino from './pages/IlPostino'
import { basePath, pageForPath, siteOrigin, contactUrl } from './site.js'

function PageMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const page = pageForPath(pathname)
    document.title = page.title
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) document.querySelector(selector)?.setAttribute('content', page.description)
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute('content', page.title)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (page.canonical) {
      canonical?.setAttribute('href', `${siteOrigin}${page.canonical}`)
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${siteOrigin}${page.canonical}`)
    } else canonical?.removeAttribute('href')
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return <section className="container section missing-page"><p className="eyebrow">Una carta sin dirección</p><h1>Esta página<br />no está acá.</h1><p>Podés volver al inicio y encontrar el recorrido de Il Postino.</p><Link className="button button-primary" to="/">Volver al inicio</Link></section>
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a><PageMetadata /><Navigation />
      <main id="contenido-principal" tabIndex="-1"><Routes><Route path="/" element={<IlPostino />} /><Route path="/ilpostino" element={<IlPostino />} /><Route path="/historia" element={<History />} /><Route path="*" element={<NotFound />} /></Routes></main>
      <footer className="site-footer"><div className="container footer-content"><div><Link to="/" className="footer-brand">Il Postino.</Link><p>Una casa para lo que elegís contar.</p></div><div className="footer-links"><a href={contactUrl} target="_blank" rel="noopener noreferrer">Contacto</a><a href="https://cafecito.app/ilpostino_bot" target="_blank" rel="noopener noreferrer">Apoyá el proyecto</a><Link to="/historia/">La historia</Link></div><p className="footer-note">© 2026 Il Postino · Hecho con imaginación y cuidado.</p><a href={`${basePath}#contenido-principal`} className="back-top">Volver arriba ↑</a></div></footer>
    </>
  )
}
