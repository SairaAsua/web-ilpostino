import React from 'react';

function Home() {
    return (
        <div className="home-page section container">
            <div className="stamp-border">
                <h1>La nueva normalidad de las IA</h1>
                <p className="subtitle">
                    Crónica de un experimento doméstico, medio técnico y medio delirante, escrita para contar con claridad lo que pasó hoy entre esta charla, la terminal con Claude, un bot que ya funciona y dos repositorios que dejaron huella.
                </p>

                <p>Este documento resume, en lenguaje humano y sin pedirle a nadie que haga un posgrado en informática, qué hicimos hoy para probar eso que hasta hace poco sonaba futurista: instalar un director de agentes, hacerlo arrancar, conversar con él, diseñar una idea de producto y comprobar que ya existe una manera bastante real de trabajar con IA como si fuera parte de un equipo.</p>

                <p><strong>Repositorios mencionados:</strong> <a href="https://github.com/SairaAsua/ilpostino" target="_blank" rel="noopener noreferrer">ilpostino</a> (bot) y <a href="https://github.com/anyprinter001-source/sites" target="_blank" rel="noopener noreferrer">sites</a> (primeras webs creadas).</p>

                <div className="wavy-divider"></div>

                <h2>1. Qué pasó hoy, dicho simple</h2>
                <p>Hoy no se trató de usar una IA para charlar nomás. Se trató de pasar de la conversación a la infraestructura mínima para que una IA haga cosas concretas: instalar herramientas, conectarlas con una clave, abrir un agente persistente y ponerlo a trabajar en una idea real.</p>
                <p>La escena fue bastante contemporánea: una persona no programadora, una terminal de Linux Mint, Claude ayudando paso a paso, Google ADK como motor, un ejemplo oficial de agente con memoria persistente, y después una conversación donde esa capacidad técnica empezó a mezclarse con imaginación, negocios, identidad digital y bots de Telegram.</p>
                <p>En otras palabras: no fue sólo una prueba técnica. Fue un pequeño ensayo general de una vida nueva, en la que una persona puede hablar con varias IA, pedirles que le preparen el terreno, y terminar el día con software instalado, un bot andando y una nueva intuición sobre cómo podrían hacerse empresas enteras a partir de agentes.</p>

                <h2>2. Línea de tiempo del experimento</h2>
                <ul>
                    <li><strong>Inicio:</strong> Se le dio a Claude un prompt claro para instalar en Linux Mint la stack de Google para crear agentes con Gemini.</li>
                    <li><strong>Preparación:</strong> Verificó Python, pip, git y node; instaló lo que faltaba y creó un entorno virtual.</li>
                    <li><strong>Instalación:</strong> Instaló google-adk y clonó el ejemplo always-on-memory-agent del repositorio oficial de ejemplos.</li>
                    <li><strong>Configuración:</strong> Se generó y configuró la API key de Google AI Studio.</li>
                    <li><strong>Arranque:</strong> Se ejecutó el agente y también su dashboard visual en Streamlit.</li>
                    <li><strong>Desplazamiento de foco:</strong> Después de eso, la conversación dejó de ser puramente técnica y pasó a explorar negocios, bots, webs y nuevas formas de trabajo con IA.</li>
                </ul>

                <h2>3. Lo que pasó en la terminal con Claude</h2>
                <p>La parte más concreta del día ocurrió en la terminal. Ahí se trabajó con Claude como si fuera una especie de copiloto técnico: se le dio un objetivo, revisó el entorno y fue avanzando por etapas. Primero detectó que Python 3.12 ya estaba presente, pero no había pip. Entonces instaló python3-pip y python3-venv, creó un entorno virtual y dejó listo el terreno.</p>
                <p>Después instaló el paquete principal, google-adk, y clonó el repositorio oficial de ejemplos de Google Cloud, pero no entero sino de forma más eficiente, trayendo sólo lo necesario para llegar al ejemplo que interesaba: always-on-memory-agent. Esa decisión ya dice bastante sobre la nueva normalidad: una IA no sólo explica qué sería conveniente hacer, sino que puede elegir un camino más prolijo, más liviano y menos torpe.</p>
                <p>Luego instaló las dependencias del agente, creó una carpeta inbox para alimentar el sistema con archivos y dejó un .env.example preparado para la API key. En el resumen final del proceso aparecía casi una ficha técnica de la jornada: Python 3.12.3, pip 26.0.1, git, node, google-adk 1.26.0 y streamlit funcionando en el mismo entorno virtual.</p>
                <blockquote>
                    <p>La sensación, traducida al idioma no-programadora, sería algo así: "yo le hablé al coso, el coso revisó mi compu, instaló todo, me dejó carpetas, archivos y comandos, y de pronto ya no estaba fantaseando con agentes: los tenía respirándome en localhost."</p>
                </blockquote>

                <h2>4. La parte gloriosa, torpe y muy humana</h2>
                <p>Como suele pasar cuando la tecnología empieza a sentirse real, enseguida aparecieron preguntas muy normales: si la API key costaba plata, si venía incluida con Google, qué había que poner exactamente en la variable de entorno, y cómo abrir el archivo correcto sin perderse en la computadora. Esa parte importa porque muestra que el problema ya no es sólo técnico: también es pedagógico.</p>
                <p>Hubo incluso un momento completamente de época: la clave API se pegó en el chat, Claude frenó de inmediato y advirtió que eso era un riesgo de seguridad. La recomendación fue regenerarla. Es una escena perfecta de esta nueva etapa: una persona aprende haciendo, se equivoca como se equivocaría cualquiera, y la IA hace de acompañante serio, un poco guardavidas y un poco tutora.</p>
                <p>Después vino el clásico episodio terminal-humana: se copiaron comandos largos, hubo saltos de línea medio accidentados, grep se quejó, la shell mostró medio universo de variables de entorno, pero a pesar del caos apareció Streamlit dando la bienvenida. Esa mezcla de desorden y resultado también es parte del nuevo paisaje. No hace falta ser ingeniera para llegar; hace falta persistir lo suficiente como para atravesar los momentos en que la computadora parece contestar en sánscrito.</p>

                <h2>5. ¿Qué se instaló exactamente?</h2>
                <p>Se instaló la stack de Google para agentes con Gemini, usando ADK como framework principal y un ejemplo oficial llamado always-on-memory-agent. La idea central de ese ejemplo es atractiva incluso para quien no programa: un agente que puede ingerir materiales, consolidar memoria y luego responder consultas, en lugar de comportarse como un chat que olvida todo enseguida.</p>
                <p>Según el resumen de la sesión de terminal, el sistema quedó preparado para correr un agente principal con tres especializaciones: una capa de ingesta de archivos, otra de consolidación de memoria y otra de consulta. Eso es importante porque cambia la imagen mental de la IA: ya no es sólo una cajita donde una escribe preguntas, sino un pequeño sistema de trabajo con tareas diferenciadas.</p>
                <p>Dicho sin solemnidad: no se instaló solamente una respuesta automática. Se instaló una especie de oficinita digital, todavía modesta, pero con recepción, archivo y mesa de informes.</p>

                <h2>6. De la infraestructura a la imaginación</h2>
                <p>Una vez logrado el primer objetivo -tener el director de agentes instalado y corriendo-, la conversación cambió de tono. Ya no era cómo instalo esto, sino qué podría hacer con esto. Ahí aparecieron varias ideas: una empresa digital coordinada por agentes, un sistema para construir webs personales desde formularios y Telegram, modelos de monetización en Telegram, diferencias entre Stars y TON, y finalmente un giro hacia una nueva pieza de escritura para Cafecito.</p>
                <p>En el medio nació <strong>JournalBord</strong> como nombre para una propuesta: convertir información dispersa de una persona en una web personal viva, estética y actualizable desde Telegram. Aunque luego el foco cambió, la idea fue muy útil porque permitió pensar el director de agentes no como un juguete técnico sino como un posible coordinador de onboarding, identidad, edición, curaduría y publicación.</p>
                <p>El dato más valioso de esa parte no es si JournalBord seguirá igual o mutará. Lo importante es que la tecnología ya estaba lo bastante cerca como para pasar de quiero explorar agentes a quiero mapear un producto, sus agentes, su flujo y su MVP.</p>

                <h2>7. Las huellas concretas: repositorios y bot funcionando</h2>
                <p>Este experimento no quedó en una nube teórica. Dejó rastros concretos en repositorios y en un bot que ya funciona. El repositorio ilpostino quedó nombrado como el lugar del bot. El repositorio sites quedó señalado como el espacio de las primeras webs creadas. Aunque aquí no hace falta entrar en detalles de implementación, su sola existencia muestra algo importante: la conversación con IA ya no termina en un texto bonito. Puede terminar en código, en un repositorio y en una herramienta viva.</p>
                <p>También quedó claro que Telegram dejó de ser sólo un lugar para hablar y pasó a convertirse en interfaz de producto: un bot que pregunta datos para una web, recibe materiales y permite generar publicaciones desde el mismo entorno. Ese detalle es poderoso porque comprime fricción. En lugar de pedirle a una persona que aprenda un panel complejo, se usa un canal cotidiano para producir resultados digitales.</p>

                <h2>8. ¿Qué dice todo esto sobre la nueva normalidad de las IA?</h2>
                <ul>
                    <li><strong>Primero</strong>, que la IA dejó de ser sólo una máquina de responder preguntas. Ahora puede ser instructora, operadora, organizadora de carpetas, redactora, planificadora y compañera de debugging. No reemplaza mágicamente la comprensión humana, pero sí achica de forma brutal la distancia entre una intuición y una primera implementación.</li>
                    <li><strong>Segundo</strong>, que el umbral de entrada cambió. Antes, para acercarse a un sistema así, hacía falta una identidad técnica muy consolidada. Hoy una persona puede llegar sin asumirse programadora, con curiosidad, paciencia y conversación. La inteligencia no está sólo en el software instalado; también está en el ida y vuelta que traduce términos raros a decisiones concretas.</li>
                    <li><strong>Tercero</strong>, que la habilidad nueva no es memorizar comandos sino aprender a pedir, revisar, corregir y encuadrar. El arte ya no pasa solamente por escribir código desde cero, sino por dirigir bien a distintas inteligencias, validar lo que hacen y convertirlo en algo que efectivamente sirva.</li>
                    <li><strong>Último</strong>, que trabajar con IA se parece cada vez menos a consultar una herramienta y cada vez más a coordinar un pequeño elenco: una IA para instalar, otra para pensar producto, otra para redactar, otra para revisar, otra para convertir eso en un documento amable para publicar.</li>
                </ul>

                <h2>9. En primera persona, sin careta técnica</h2>
                <p>Si tuviera que contarlo en un castellano sincerísimo, diría algo como esto: yo hoy no programé en el sentido clásico. Más bien coordiné. Pregunté. Copié cosas con fe. Me peleé un poco con la terminal. Le di instrucciones a una IA para que prepare el terreno. Otra IA me ayudó a pensar qué empresa podría nacer de eso. Y al final no terminé con una sensación de "uy, no entiendo nada", sino con algo mucho más extraño y más nuevo: <strong>"capaz sí puedo hacer cosas grandes aunque no hable fluidamente computés"</strong>.</p>

                <h2>10. Cierre</h2>
                <p>Lo más interesante de esta jornada no fue sólo el resultado técnico, aunque el resultado técnico fue real. Lo más interesante fue comprobar una forma nueva de trabajo: una persona puede tener una intuición, conversar con una IA para instalar la infraestructura mínima, conversar con otra para pensar un negocio, y terminar el día con más capacidad real que la que tenía por la mañana.</p>
                <p>Eso no significa que todo esté resuelto ni que el software haga magia por sí solo. Significa algo quizá más importante: que entramos en una etapa donde la distancia entre imaginar y prototipar se achicó muchísimo. Y cuando esa distancia se achica, cambian los proyectos posibles, la autoestima técnica y la escala de lo que una persona se anima a intentar.</p>
                <p>En ese sentido, lo que pasó hoy no fue un anecdotario nerd. Fue una pequeña escena de época.</p>
            </div>
        </div>
    );
}

export default Home;
