import Home from './Home.jsx'
import { basePath } from '../site.js'

export default function History() {
  return (
    <div className="history-page">
      <section className="container section history-intro">
        <p className="eyebrow">De dónde venimos</p><h1>La historia<br />detrás del mensaje.</h1>
        <div className="history-origin"><div><p>Todo comenzó en una noche: Saira, sus agentes de IA y una idea para convertir una conversación en un lugar propio en internet.</p><p>Nico propuso el nombre Il Postino. Saira lo adoptó por su relación con la metáfora, la poesía y la entrega de mensajes, y lo dedicó a su profesora de literatura, Susana Salas.</p><p>Annie fue la primera usuaria que se animó a probarlo. El proyecto sigue creciendo, ahora junto al taller de casas de Homemaker.</p></div><img src={`${basePath}images/original-mark.webp`} alt="Marca original de Il Postino: una pluma azul y un avión de papel." width="720" height="393" loading="lazy" /></div>
        <div className="creator-note"><h2>Sobre Saira</h2><p>Desde Alta Gracia, Saira explora la inteligencia artificial y el desarrollo de software con la experiencia del trabajo comunitario: escuchar, aprender y traducir herramientas complejas en soluciones humanas, creativas y accesibles.</p></div>
      </section>
      <div className="container archive-label"><p className="eyebrow">Archivo del proyecto</p><p>La crónica que sigue cuenta la primera etapa de Il Postino y conserva la voz de ese comienzo.</p></div>
      <Home />
    </div>
  )
}
