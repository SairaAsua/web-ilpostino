import { Link } from 'react-router-dom'
import { basePath, contactUrl } from '../site.js'

const steps = [
  ['Conversá', 'Contá quién sos y qué querés compartir. Tu presentación, tus proyectos y tus archivos encuentran lugar en un borrador al que podés volver.'],
  ['Elegí tu casa', 'En Homemaker explorás mundos visuales, combinás sus ingredientes y elegís la apariencia que te representa.'],
  ['Revisá', 'El diseño y tu contenido se reúnen en una vista previa privada. Mirá el resultado y ajustá lo que haga falta.'],
  ['Compartí', 'Cuando esté listo, elegís la audiencia y pedís publicar en tu home de dmn.homes, mediante su conexión autorizada.'],
]

export default function IlPostino() {
  return (
    <>
      <section className="hero container" aria-labelledby="product-title">
        <div className="hero-copy">
          <p className="eyebrow">Il Postino · Tu rincón en internet</p>
          <h1 id="product-title">Tu historia<br />tiene <em>casa.</em></h1>
          <p className="hero-description">Contá quién sos, compartí tus proyectos y seguí escribiendo desde una conversación.</p>
          <p className="hero-detail">Con Il Postino preparás el contenido. Con Homemaker elegís cómo se ve tu casa en internet.</p>
          <a href="#como-funciona" className="button button-primary">Conocé cómo funciona <span aria-hidden="true">↗</span></a>
          <p className="availability-note"><span className="status-dot" aria-hidden="true" />El recorrido completo está en desarrollo.</p>
        </div>
        <figure className="hero-postcard">
          <div className="postcard-heading"><span>Una carta abierta</span><span className="postal-stamp" aria-hidden="true">IP<br />✦</span></div>
          <img src={`${basePath}images/postal-landscape.webp`} width="1600" height="529" alt="Ilustración postal: una bicicleta junto al mar y una pluma que se convierte en aviones de papel." fetchPriority="high" />
          <figcaption><span>Para: tu rincón en internet</span><span className="postcard-signature">De: vos.</span></figcaption>
        </figure>
      </section>
      <section className="introduction container section" aria-labelledby="story-title">
        <p className="eyebrow">Un lugar propio</p>
        <div className="section-heading"><h2 id="story-title">Todo lo que sos,<br />con lugar para lo que viene.</h2><p>Para quienes crean, trabajan por su cuenta o simplemente quieren reunir lo que hacen en una casa que puedan seguir habitando.</p></div>
        <div className="content-list">
          <div><span aria-hidden="true">✦</span><h3>Tu presentación</h3><p>Una bienvenida y una historia que te representen.</p></div>
          <div><span aria-hidden="true">✦</span><h3>Tus proyectos</h3><p>Lo que hacés, lo que construís y lo que querés mostrar.</p></div>
          <div><span aria-hidden="true">✦</span><h3>Tu bitácora</h3><p>Entradas, fotos, audios y videos para seguir contando.</p></div>
        </div>
      </section>
      <section id="como-funciona" className="journey section" aria-labelledby="journey-title">
        <div className="container">
          <p className="eyebrow">De la conversación a la casa</p>
          <div className="section-heading"><h2 id="journey-title">Vos traés el mensaje.<br />Le damos un recorrido.</h2><p>Estamos uniendo estas cuatro etapas para que puedas preparar, revisar y compartir desde tu conversación en Telegram.</p></div>
          <ol className="journey-steps">{steps.map(([title, text], index) => <li key={title}><span className="step-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
          <p className="journey-afterword">Después volvés al chat para sumar una entrada o un archivo. El contenido nuevo conserva tu diseño y pasa por una nueva vista previa antes de publicar.</p>
        </div>
      </section>
      <section id="homemaker" className="homemaker container section" aria-labelledby="homemaker-title">
        <div className="homemaker-copy">
          <p className="eyebrow">La apariencia, con Homemaker</p><h2 id="homemaker-title">Una casa que<br />se parezca a vos.</h2>
          <p>Homemaker es el taller donde elegís cómo se ve tu home: doce mundos visuales, casas completas para empezar y elementos que podés combinar a tu manera.</p>
          <p>Colores, tipografías, imágenes, espacios y secciones. Comparás versiones, elegís una y devolvés ese diseño a Il Postino para reunirlo con tu contenido.</p>
          <p className="homemaker-credit">Un proyecto de Annie y Oliva. También puede construir una home sin Il Postino.</p>
        </div>
        <div className="recipe-note">
          <span className="recipe-label">Una receta para tu casa</span>
          <dl><div><dt>Color</dt><dd>Tu paleta</dd></div><div><dt>Letras</dt><dd>Tu tono visual</dd></div><div><dt>Espacios</dt><dd>Tu ritmo</dd></div><div><dt>Historia</dt><dd>Siempre la tuya</dd></div></dl>
          <p>Cambiar la apariencia conserva el contenido y las direcciones de tus entradas.</p>
          <p className="supporting-text">Las pruebas del taller viven en la pestaña abierta. Exportá el diseño que elijas para conservarlo; Il Postino guarda su borrador por separado.</p>
        </div>
      </section>
      <section className="example-section section" aria-labelledby="example-title">
        <div className="container example-layout">
          <div><p className="eyebrow">Un ejemplo de lo que podés contar</p><h2 id="example-title">Una historia.<br />Muchos días por delante.</h2><p>Imaginá una casa donde conviven tu presentación, un proyecto en marcha y las notas del camino.</p><p>Podés cambiar el diseño sin empezar otra vez tu relato. La bitácora crece con cada mensaje que elegís compartir.</p><p className="supporting-text">Este ejemplo es ficticio. Ilustra el contenido de una casa, con el lenguaje gráfico de Il Postino.</p></div>
          <article className="example-letter" aria-label="Ejemplo ficticio de una entrada de bitácora">
            <div className="letter-top"><span>Casa del viento</span><span aria-hidden="true">✳</span></div><p className="eyebrow">Bitácora · Primera entrada</p><h3>Hoy abrimos<br />las ventanas.</h3><p>Empezamos un jardín de preguntas. Un lugar para guardar lo que construimos, las imágenes que nos acompañan y las ideas que todavía están creciendo.</p><div className="letter-bottom"><span>Sol y Bruma · personajes ficticios</span><span aria-hidden="true">↗</span></div>
          </article>
        </div>
      </section>
      <section id="preguntas" className="questions container section" aria-labelledby="questions-title">
        <p className="eyebrow">Antes de empezar</p><h2 id="questions-title">Unas preguntas,<br />con respuestas claras.</h2>
        <details><summary>¿Ya puedo usar el recorrido completo?</summary><p>Estamos integrando Il Postino y Homemaker para publicar en dmn.homes. El recorrido completo todavía está en desarrollo. Si te interesa el proyecto, <a href={contactUrl} target="_blank" rel="noopener noreferrer">conversá con Saira</a>.</p></details>
        <details><summary>¿Qué queda guardado y qué se publica?</summary><p>Il Postino conserva el borrador y sus archivos en privado. Una vista previa permite revisar el resultado. Publicar es un paso explícito, con la audiencia elegida y una conexión autorizada a tu home.</p><p>Publicar una versión y elegirla como portada de la home son dos pasos distintos.</p></details>
        <details><summary>¿Puedo seguir escribiendo y cambiar el diseño?</summary><p>Sí: el recorrido permite sumar entradas, fotos, audios y videos al borrador. El contenido y el diseño se guardan por separado. Cuando elegís otro mundo visual, se conservan tu historia y las direcciones de tus entradas.</p></details>
        <details><summary>¿Necesito Il Postino para usar Homemaker?</summary><p>Homemaker también funciona por su cuenta. Il Postino suma la conversación y el borrador editorial al mismo taller de diseño y al mismo sistema de construcción.</p></details>
      </section>
      <section className="invitation container section" aria-labelledby="invitation-title">
        <div><p className="eyebrow">El mensaje sigue</p><h2 id="invitation-title">Las buenas historias<br />empiezan conversando.</h2><p>Il Postino nació de una noche de preguntas, poesía y ganas de construir. Lo seguimos haciendo crecer.</p><Link to="/historia/" className="text-link">Leé la historia del proyecto <span aria-hidden="true">↗</span></Link></div>
        <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Conversá con Saira <span aria-hidden="true">↗</span></a>
      </section>
    </>
  )
}
