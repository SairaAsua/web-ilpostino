import React from 'react';

function IlPostino() {
    return (
        <>
            <header className="hero section container">
                <div className="hero-content">
                    <h1>@ilpostino_bot</h1>
                    <h2>Tu rincón en internet.</h2>
                    <p className="subtitle">
                        Escribamos un nuevo verso para tu historia. ¿Qué quieres que el mundo lea hoy?
                    </p>
                    <div className="hero-actions">
                        <a href="https://t.me/journalBord_bot" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Ir al Bot de Telegram
                        </a>
                        <a href="https://cafecito.app/ilpostino_bot" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            Apoyanos en Cafecito
                        </a>
                    </div>
                </div>
            </header>

            <div className="wavy-divider"></div>

            <section className="manifesto section container">
                <div className="stamp-border">
                    <h2>Manifiesto: El Mensaje que Eres</h2>
                    <p>El mundo se ha llenado de ruido, pero se ha olvidado de los mensajes.</p>
                    <p>Hoy, nuestra identidad digital está dispersa en fragmentos: un perfil rígido que no nos representa, una red social que nos consume, un currículum que parece un formulario de oficina. Hemos perdido la capacidad de contar quiénes somos con la belleza que merecemos.</p>
                    <p><strong>@ilpostino_bot</strong> nace en esa intersección entre la tecnología y la poesía. Inspirado en la figura del cartero que recorría las costas de Isla Negra para entregar versos, nosotros recorremos los bits para entregar tu identidad.</p>
                    <ul>
                        <li><strong>No somos solo un bot de Telegram;</strong> somos tu mensajero personal.</li>
                        <li><strong>Somos la evolución del currículum:</strong> Porque tu trayectoria no es una lista de fechas, es una narrativa viva.</li>
                        <li><strong>Somos tu casa en la red:</strong> Un lugar propio donde tus redes, tu trabajo y tu voz convergen en un solo sitio, con la simplicidad de enviar un mensaje.</li>
                        <li><strong>Somos el puente:</strong> Facilitamos el acto de "postear" para que lo que realmente importe sea el contenido del mensaje, no la complejidad de la herramienta.</li>
                    </ul>
                    <p>Creemos que cada persona tiene una "metáfora" única que mostrar al mundo. Tu web no debería ser una tarea pendiente, sino una carta abierta que siempre llega a su destino.</p>
                </div>
            </section>

            <div className="wavy-divider"></div>

            <section className="story section container">
                <h2>La historia detrás del mensaje</h2>
                <div className="story-content">
                    <p>Todo comenzó en una noche. La nueva normalidad de las IA nos permitió construir esto: mis agentes y yo armando el sistema en horas.</p>
                    <p>El nombre, <em>ilpostino_bot</em>, surgió a raíz de un error tipográfico en el primer nombre que utilicé. La idea de rebautizarlo así fue de Nico, y yo la adopté de inmediato. <strong>Il Postino</strong> (El Cartero de Neruda) es una película fantástica sobre la metáfora, la poesía y la entrega de mensajes, que me recordó profundamente a mi profesora de literatura, Susana Salas, a quien le dedico el nombre de esta aplicación por su cariño de siempre.</p>
                    <p>Un agradecimiento inmenso a Nico por la idea, y a Annie, la primera usuaria valiente de la app.</p>
                </div>
            </section>

            <div className="wavy-divider"></div>

            <section className="bio section container">
                <h2>Sobre Saira</h2>
                <div className="stamp-border bio-content">
                    <p>Desde el corazón de Alta Gracia, mi camino siempre ha estado guiado por una misma brújula: el impacto real en las personas. Con una sólida trayectoria en el trabajo comunitario, aprendí que las mejores soluciones nacen de la escucha y la empatía.</p>
                    <p>Hoy, ese compromiso evoluciona hacia las nuevas fronteras de la tecnología. Me defino como una <em>development</em> aprendiz constante, explorando el mundo de la Inteligencia Artificial y el desarrollo de software. No solo busco escribir líneas de código, sino traducir herramientas complejas en soluciones humanas, creativas y accesibles.</p>
                    <p>Así que acá, aprendiendo.</p>

                    <div className="contact-info" style={{ marginTop: '2rem' }}>
                        <h3>Contacto y Apoyo</h3>
                        <p>Telegram: <a href="https://t.me/sairaasua" target="_blank" rel="noopener noreferrer">@sairaasua</a> (3547469632)</p>
                        <p><strong>Objetivo de Cafecito:</strong> Una compu nueva para seguir desarrollando.</p>
                        <a href="https://cafecito.app/ilpostino_bot" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            Donar en Cafecito
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default IlPostino;
