# Cubrir Servicios — Sitio web

Desarrollo en HTML/CSS/JS estático, responsive, a partir del diseño aprobado.

## Estructura
```
index.html            → Home
quienes-somos.html    → Quiénes Somos
servicios.html        → Servicios (detalle de las 5 áreas)
contacto.html         → Contacto (formulario + datos)
css/styles.css        → Estilos (mobile-first, breakpoints 768px y 1024px)
js/main.js             → Menú móvil, acordeón FAQ, validación de formularios, animaciones al scroll
assets/logo.png        → Logo de la empresa
```

## Cómo verlo
Abrí `index.html` con doble clic en cualquier navegador, o serví la carpeta con
cualquier servidor estático (Live Server de VS Code, `python3 -m http.server`, etc.).
No requiere build ni instalación de dependencias.

## Responsive
- **Mobile** (< 768px): menú hamburguesa con panel deslizante, todas las
  grillas apiladas en una columna.
- **Tablet** (≥ 768px): grillas de 2 columnas, tipografía intermedia.
- **Desktop** (≥ 1024px): layout completo de 3-5 columnas según sección,
  menú horizontal con submenú desplegable en "Servicios".

Probado sin scroll horizontal en los tres anchos (390px, 834px, 1440px).

## Imágenes de la sección Servicios
Se usaron fotos libres de derechos con licencia Unsplash (uso comercial
permitido, sin atribución obligatoria), enlazadas directamente desde la CDN
de Unsplash:
- Seguridad Electrónica → cámara de seguridad
- Seguridad Física → guardia en ronda
- Limpieza y Mantenimiento → personal de limpieza en oficina
- Desinfección → técnico desinfectando
- Seguros → apretón de manos / acuerdo comercial

**Recomendación:** para producción, descargar estas imágenes y alojarlas en
el propio servidor (carpeta `img/`) en vez de enlazarlas desde Unsplash, y
reemplazarlas por fotos reales del personal y las instalaciones de Cubrir
Servicios cuando estén disponibles.

## Formularios
El formulario de cotización (Home) y el de contacto (Contacto) envían por
POST a **info@cubrirservicios.com** usando [FormSubmit](https://formsubmit.co/)
(sin necesidad de backend propio). Incluyen validación en el cliente y un
mensaje de confirmación visual.

**Importante — activación única:** la primera vez que alguien envíe un
formulario, FormSubmit manda un email de confirmación a
info@cubrirservicios.com con un link para "activar" ese buzón. Hasta que se
haga clic en ese link, los envíos no llegan a la bandeja de entrada. Después
de esa activación única, todo funciona automáticamente.

## Redes sociales y Empleos
- Facebook, Instagram y LinkedIn (header/footer y tarjeta de contacto) ya
  apuntan a las páginas reales de Cubrir Servicios, abriendo en pestaña nueva.
- "Empleos" (menú y footer) redirige directamente a la bolsa de trabajo en
  Odoo: https://cubrirservicios.adhoc.ar/jobs (en pestaña nueva). Se optó por
  el redirect en vez de embeber esa página, ya que los portales de Odoo
  suelen bloquear ser mostrados dentro de un iframe (X-Frame-Options) y un
  redirect es la opción más simple y confiable de mantener.

## Mapa de Contacto
La sección "Cómo llegar" ahora tiene un embed real de Google Maps centrado
en España 2182, Rosario, Santa Fe (sin necesidad de API key).

## Pendientes / próximos pasos sugeridos
- Optimizar imágenes (WebP, tamaños múltiples) al pasar a producción.
- Crear una imagen social (1200×630) dedicada para `og:image` — por ahora se
  reutiliza el logo, que no tiene la proporción ideal para compartidos en
  redes.
- Confirmar el dominio real (se usó `https://cubrirservicios.com` como base
  para canonical, sitemap y datos estructurados).

## Cambios recientes
- **Título del hero de la Home**: cambiado a "Servicios integrales para
  lo que más te importa" (mantuve el acento en lima sobre "lo que más te
  importa" para conservar el estilo visual del hero).
- **Bajada del hero de Servicios**: reemplacé el texto con paréntesis
  ("Seguridad (Vigilancia y Seguridad Electrónica) y Limpieza...") por uno
  más natural: "Vigilancia, tecnología electrónica, limpieza y
  desinfección: dos grandes áreas de trabajo con el mismo compromiso de
  cuidar tu hogar, comercio o empresa." También actualicé la meta
  description de esa página (SEO) para que use la misma redacción.


- **Número de WhatsApp unificado**: todos los botones que llevan a WhatsApp
  del sitio (hero, banner final, tarjeta de contacto y el botón flotante,
  en las 4 páginas) ahora usan el mismo número, +54 9 3416 92-5299, con el
  mensaje "Hola te escribo desde la página web de Cubrir Servicios...".
  Ya no quedan los 3 números distintos que había antes.
  - **Excepción a propósito**: el cotizador de alarma (sección "Cotizá tu
    alarma en simples pasos" de la Home) también apunta ahora a este mismo
    número, pero **mantiene su propio mensaje**, armado automáticamente con
    las respuestas del formulario (tipo de propiedad, accesos, nombre,
    etc.) en vez del mensaje genérico — si le pusiera el mensaje genérico
    ahí, se perdería toda la información de la cotización. Avisame si
    preferís que ese botón sí diga el mensaje genérico en cambio.


- **Espaciado en Quiénes Somos y Servicios**: agregué padding inferior al
  párrafo del hero (22px en mobile, 32px en desktop) para que no quede
  pegado a la franja de estadísticas que flota justo debajo. Contacto no
  se tocó porque ahí no hay esa franja superpuesta.


- **Contadores movidos a la Home**: los saqué de Quiénes Somos y ahora
  están en la franja de estadísticas debajo del Hero de la Home (donde
  antes decía "+20 años / 2 áreas / Rosario / 24-7"). Ahora esa franja
  anima hasta +26 años de trayectoria, +145 colaboradores activos,
  +26.000 horas mensuales y +75 objetivos, con íconos nuevos para
  colaboradores (personas) y objetivos (diana). Quiénes Somos y Servicios
  conservan su franja de estadísticas original (años/áreas/Rosario/24-7),
  sin cambios.


- **Carrusel de reseñas reales de Google**: debajo de la tarjeta de
  calificación (4.3/5) agregué un carrusel con las 6 reseñas reales de
  5 estrellas que me pasaste (Alejo Salvia, Matias Elias, Julian Lomanas,
  Juan M. Rosario, Tomas Morales Raffe, Joaquin Ravaioli), con el texto
  transcripto tal cual de las capturas. Tiene flechas, indicadores (dots)
  y también se puede deslizar con el dedo en mobile. La séptima captura
  que mandaste era un resumen de tarjeta/movimientos bancarios, no una
  reseña, así que no la usé.


- **Contadores animados en Quiénes Somos**: debajo de "Nuestra historia" ya
  hay 4 contadores que animan hasta el número final al entrar en pantalla
  (+26 años, +145 colaboradores, +26.000 horas mensuales, +75 objetivos).
- **Testimonios reemplazados por un resumen real de Google**: saqué los 3
  testimonios de ejemplo (María G., Javier P., Roberto S. — eran texto de
  muestra que yo redacté al armar el diseño, no reseñas reales) y los
  reemplacé por una tarjeta con la calificación real y verificable de
  Google (4.3/5, +135 reseñas) con estrellas parciales y un botón que
  lleva directo a las reseñas reales en Google Maps. **No tengo forma de
  extraer el texto de las reseñas individuales** porque Google Maps
  requiere JavaScript para cargarlas y mis herramientas no pueden
  navegarlo interactivamente. Si querés mostrar 2-3 citas textuales de
  clientes reales, pasame el texto y el nombre tal cual figuran en Google
  (copiado y pegado desde ahí) y los agrego debajo de la tarjeta de
  calificación.


- **Imagen de Seguridad, elegida por el cliente**: cámara de seguridad
  blanca sobre poste con cielo nublado claro de fondo (foto libre de
  Unsplash, Pawel Czerwinski). Aplicada en la tarjeta "Seguridad" de la
  Home y en el detalle de "Seguridad Electrónica" en Servicios.


- **Bug del desplegable de Servicios (desktop) resuelto**: el menú tenía un
  hueco invisible de 14px entre el botón "Servicios" y las opciones, así
  que al mover el mouse en diagonal hacia abajo el cursor salía del área
  "hover" antes de llegar a las opciones y el menú se cerraba. Ahora ese
  espacio queda dentro del área interactiva, así que el menú se mantiene
  abierto mientras el mouse se mueve hacia las opciones.
- **Imagen de Seguridad cambiada**: la cámara de seguridad con fondo de
  pared oscura se reemplazó por una cámara con cielo despejado de fondo
  (se ve tanto en la tarjeta de "Seguridad" de la Home como en el detalle
  de "Seguridad Electrónica" en la página de Servicios).


- Logo del header actualizado a la última versión que pasaron (texto en
  azul acero en vez de negro).
- **Servicios reestructurados**: ahora son 2 grandes áreas en vez de 5
  servicios sueltos:
  - **Seguridad** → Vigilancia (antes "Seguridad Física") + Seguridad
    Electrónica
  - **Limpieza** → Limpieza y Mantenimiento + Desinfecciones (antes
    "Desinfección", ahora en plural)
  - Se sacó **Seguros** de todo el sitio (grilla de la Home, detalle en
    Servicios, menú, footer, formularios y datos estructurados SEO).
  - En la Home, la sección de servicios ahora muestra 2 tarjetas grandes
    (Seguridad / Limpieza), cada una con sus 2 sub-servicios listados
    adentro y un link a "Ver todo sobre...".
  - En Servicios, cada área tiene un encabezado propio (`#seguridad`,
    `#limpieza`) seguido de sus 2 sub-servicios en detalle, con el mismo
    formato de antes (imagen + features + botón).
  - La imagen de la tarjeta "Seguridad" en la Home ahora es la cámara de
    seguridad (antes eran dos tarjetas separadas, una con cámara y otra
    con guardia). La imagen del guardia se conserva dentro del detalle de
    "Vigilancia" en la página de Servicios.
- Botón flotante de WhatsApp (ya estaba agregado del pedido anterior, con
  el mismo número y mensaje).


- Se sacó el párrafo de bajada del hero ("Seguridad electrónica, vigilancia
  física...").
- Tipografía: preparado el sistema para **BW Quinta Pro** (Regular/Medium/
  Bold/Black) — ver sección más abajo, `fonts/README.md`.
- Botón flotante de WhatsApp en las 4 páginas, abajo a la derecha, con el
  número +54 9 3416 02-3605 y el mensaje "Hola te escribo desde la página
  web." precargado.

**Ojo:** en el sitio quedaron **tres números de WhatsApp distintos**:
- `+54 9 341 240-7143` en los botones "Hablar por WhatsApp" del hero, el
  banner final y la tarjeta de contacto.
- `+54 9 3416 02-3605` en el botón flotante nuevo.
- `+54 9 3416 358219` en el cotizador de alarma (número que vino en el
  código que había pasado el cliente).

No unifiqué estos números porque no me confirmaron si son la misma línea o
áreas distintas (ventas / cotizaciones / línea general) — decime cuál es
el número correcto para cada caso y lo dejo consistente en todo el sitio.


- El header usa la imagen del logo (ícono + wordmark). El footer usa el
  ícono de marca solo.
- El cotizador de alarma se agrandó, tiene un borde azul institucional
  (`#01426a`) y una sombra detrás, para que se note más como elemento
  destacado de la sección.
- El mapa de Contacto ahora ocupa un alto mucho mayor (320px en mobile,
  420px en tablet, 520px en desktop) para que se vea con más protagonismo,
  manteniéndose responsive.
- El crédito del footer ("Diseño y Desarrollo Web por Wargo Studio") es un
  único link a https://wargostudio.com/ en toda la frase.

## Manual de marca (Clyckmedia)
El sitio ya está preparado para **BW Quinta Pro** (Regular/Medium/Bold/
Black): `css/styles.css` y `widgets/presupuestador.html` tienen las reglas
`@font-face` apuntando a `/fonts/BWQuintaPro-*.woff2`. Como esa fuente es
paga (Bold Wolves Type Foundry) y no tenemos los archivos con licencia,
el sitio usa **Poppins** (Google Fonts, mismos 4 pesos) como reemplazo
visual mientras tanto — apenas se agreguen los archivos reales a `/fonts/`
con los nombres indicados en `fonts/README.md`, el cambio es automático.

Los colores institucionales (`#c5e86c` lima y `#01426a` navy) ya coinciden
con los Pantone 374C y 7694C del manual, así que no fue necesario tocarlos.

**Nota importante:** el manual lista 6 servicios oficiales de marca
(Seguridad Física y Vigilancia, Custodia de Mercaderías en Tránsito,
Seguridad Personal, Limpieza y Mantenimiento, Gestión de Siniestros,
Consultoría Profesional), cada uno con su propio color de acento. El sitio
actual tiene 5 servicios (Seguridad Electrónica, Seguridad Física, Limpieza
y Mantenimiento, Desinfección, Seguros), tomados del contenido real de
cubrirservicios.com. No cambié el listado de servicios porque excede lo
pedido ("colores y tipografías") — si la empresa quiere alinear el sitio a
esta nueva nomenclatura de 6 servicios, es un cambio de contenido que
conviene charlar aparte.

## Logo y favicon
- El footer usa el logo con el texto en blanco (fondo navy oscuro) — es el
  mismo archivo que se había recibido al principio del proyecto, solo que el
  texto blanco no se veía sobre fondo claro.
- El favicon se generó a partir del ícono adjunto, recortado a un canvas
  cuadrado transparente, en 32px, 192px y 180px (apple-touch-icon).

## Cotizador de alarma
La sección "Cotizá tu alarma en simples pasos" de la Home ahora tiene el
wizard funcional de 7 pasos (provisto por el cliente), embebido en
`widgets/presupuestador.html` dentro de un iframe aislado para que sus
estilos y su JS no interfieran con el resto del sitio. Al completar el
formulario final, arma un mensaje prellenado y abre WhatsApp con el número
configurado en el código (5493416358219). El iframe ajusta su altura
automáticamente en cada paso.

## SEO
Cada página tiene:
- Título y meta description únicos y optimizados.
- `link rel="canonical"` (asumiendo el dominio `cubrirservicios.com`).
- Open Graph y Twitter Card completos.
- Datos estructurados JSON-LD: `LocalBusiness` en la Home (con dirección,
  teléfono, horario y los 5 servicios como `Offer`), y `BreadcrumbList` en
  las páginas internas.
- `sitemap.xml` y `robots.txt` en la raíz del sitio.

Si el dominio final no es `cubrirservicios.com`, hay que actualizar las URLs
en `canonical`, Open Graph, JSON-LD, `sitemap.xml` y `robots.txt`.

