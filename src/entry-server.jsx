import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { basePath } from './site.js'

export function render(pathname) {
  return renderToString(<StaticRouter basename={basePath} location={`${basePath.replace(/\/$/, '')}${pathname}`}><App /></StaticRouter>)
}

export { pages, basePath, siteOrigin } from './site.js'
