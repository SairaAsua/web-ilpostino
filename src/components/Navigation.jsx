import { Link, useLocation } from 'react-router-dom'
import { basePath } from '../site.js'

export default function Navigation() {
  const { pathname } = useLocation()
  return (
    <header className="site-header">
      <nav className="navigation container" aria-label="Navegación principal">
        <Link to="/" className="brand" aria-label="Il Postino · Inicio"><span>Il Postino<span className="brand-dot" aria-hidden="true">.</span></span><small>Tu rincón en internet</small></Link>
        <div className="nav-links"><a href={`${basePath}#como-funciona`}>Cómo funciona</a><a href={`${basePath}#homemaker`}>Homemaker</a><Link to="/historia/" aria-current={pathname.startsWith('/historia') ? 'page' : undefined}>La historia</Link></div>
      </nav>
    </header>
  )
}
