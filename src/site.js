export const basePath = import.meta.env.BASE_URL
export const siteOrigin = 'https://sairaasua.github.io'
export const contactUrl = 'https://t.me/sairaasua'

const product = {
  title: 'Il Postino · Tu historia tiene casa',
  description: 'Conocé Il Postino: contenido desde una conversación, diseño con Homemaker y un recorrido para preparar tu casa en dmn.homes.',
  canonical: basePath,
}

export const pages = [
  { ...product, path: '/', output: 'index.html' },
  { ...product, path: '/ilpostino/', output: 'ilpostino/index.html' },
  {
    path: '/historia/', output: 'historia/index.html',
    title: 'La historia · Il Postino',
    description: 'La primera etapa de Il Postino: una noche de preguntas, agentes de IA y una idea de casa en internet. Una crónica de Saira.',
    canonical: `${basePath}historia/`,
  },
]

export function pageForPath(pathname) {
  return pages.find((page) => page.path.replace(/\/$/, '') === pathname.replace(/\/$/, '')) || {
    title: 'Página no encontrada · Il Postino',
    description: 'Volvé a la casa de Il Postino para conocer el proyecto y su historia.',
    canonical: null,
  }
}
