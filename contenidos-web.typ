// --- Configuración Global ---
#set page(
  paper: "a4",
  margin: (x: 2.5cm, y: 3cm),
  header: align(right, text(8pt, gray)[Investigación de contenidos para la web]),
  footer: [
    #set text(8pt, gray)
    #grid(
      columns: (1fr, 1fr),
      align(left)[#datetime.today().display("[day]-[month]-[year]")],
      align(right)[Página #context counter(page).display()]
    )
  ]
)

#set text(
  font: "New Computer Modern",
  size: 11pt,
  lang: "es",
  region: "ES"
)

#set par(justify: true, leading: 0.65em)

// --- Estilos de Títulos ---
#show heading.where(level: 1): it => [
  #set text(size: 24pt, weight: "bold", fill: rgb("#1a2a40"))
  #block(inset: (top: 1em, bottom: 0.5em))[#it]
]

#show heading.where(level: 2): it => [
  #set text(size: 16pt, weight: "semibold", fill: rgb("#2c3e50"))
  #block(inset: (top: 0.8em, bottom: 0.4em))[#it]
  #line(length: 100%, stroke: 0.5pt + gray)
]

// --- PORTADA ---
#align(center + horizon)[
  #text(32pt, weight: "bold", fill: rgb("#1a2a40"))[Carolina Morales] \
  #v(1em)
  #text(18pt, style: "italic", gray)[Abogada de Extranjería y Migración] \
  #v(3em)
  #text(22pt, weight: "semibold")[Guion de Contenidos Web] \
  #v(1em)
  #line(length: 40%, stroke: 1pt + rgb("#1a2a40"))
]

#pagebreak()

// --- ÍNDICE ---
#outline(title: "Índice de Contenidos", indent: 2em)

#pagebreak()

// --- SECCIONES (Añade tus títulos usando '= Título') ---

= Nacionalidad Española

La obtención de la nacionalidad española representa la máxima integración jurídica en el Estado, otorgando al ciudadano no solo derechos plenos dentro de España, sino también la ciudadanía de la Unión Europea. El ordenamiento jurídico español, principalmente a través del *Código Civil*, establece diversas vías para acceder a la nacionalidad, cada una con requisitos y procedimientos específicos.

A continuación, presentamos un análisis exhaustivo de todas las modalidades legales vigentes, diseñado para orientar a nuestros clientes en la identificación de la vía más adecuada a su situación personal.

#line(length: 100%)

=== 1. Nacionalidad Española por Residencia

Esta es la vía más común para los extranjeros que viven legalmente en España. Se regula fundamentalmente en el *Artículo 22 del Código Civil*. La concesión no es automática; es una potestad del Estado que exige el cumplimiento de plazos y requisitos de integración.

==== Requisitos Fundamentales

Para solicitar la nacionalidad por residencia, el interesado debe acreditar:

1. *Residencia Legal:* El solicitante debe ser titular de una autorización de residencia vigente. La estancia (como visado de estudiante o turista) _no_ computa para la nacionalidad.
2. *Residencia Continuada:* No más de 90 días en un año.
3. *Residencia Inmediatamente Anterior:* El permiso debe estar vigente al momento de la solicitud.
4. *Buena Conducta Cívica:* Ausencia de antecedentes penales en España y en el país de origen.
5. *Integración:* Acreditar suficiente grado de integración en la sociedad española (exámenes CCSE y DELE, salvo dispensa).

==== Plazos de Residencia Requeridos

El tiempo de residencia varía según el origen o las circunstancias del solicitante.

#table(
  columns: (auto, 1fr),
  stroke: 0.5pt + gray,
  fill: (x, y) => if y == 0 { rgb("#f1f1f1") } else { white },
  [*Plazo*], [*Beneficiarios (Supuestos Legales)*],
  [*10 Años*], [*Plazo General.* Aplica a cualquier extranjero que no se encuentre en los supuestos reducidos siguientes.],
  [*5 Años*], [Personas que hayan obtenido la condición de *refugiado* o asilo político.],
  [*2 Años*], [Nacionales de *países iberoamericanos* (incluido Puerto Rico), Andorra, Filipinas, Guinea Ecuatorial, Portugal o personas de origen sefardí.],
  [*1 Año*], [
    - Quien haya nacido en territorio español.
    - Quien lleve *un año casado* con un español/a (y no separado legalmente o de hecho).
    - El viudo/a de español/a.
    - El nacido fuera de España de padre, madre, abuelo o abuela que hubieran sido originariamente españoles.
  ],
)

==== Pruebas de Integración (Instituto Cervantes)

Salvo supuestos de dispensa (escolarización en España o discapacidad acreditada ante el Ministerio de Justicia):

- *Prueba CCSE:* Conocimientos constitucionales y socioculturales de España.
- *Prueba DELE A2 (o superior):* Diploma de español como lengua extranjera (solo para nacionales de países donde el español no es idioma oficial).

==== Documentación Exigible

Para la conformación del expediente administrativo, es imprescindible aportar la siguiente documentación (traducida y legalizada/apostillada cuando proceda):

- *Pasaporte completo y en vigor:* Todas las páginas, incluidas las vacías.
- *NIE / TIE en vigor.*
- *Certificado de nacimiento:* Del país de origen, debidamente legalizado/apostillado y traducido (si no es hispanohablante).
- *Antecedentes penales:* Del país de origen, expedido en los últimos meses, legalizado/apostillado y traducido.
- *Exámenes del Instituto Cervantes (CCSE y DELE):* Acreditación de APTO o certificados de dispensa.
- *Justificante de pago de la Tasa:* Modelo 790 código 026.
- *Certificado de empadronamiento:* Histórico y actual (Aunque la administración puede consultarlo, es recomendable aportarlo para evitar retrasos).

#line(length: 100%)

=== 2. Nacionalidad por Matrimonio (Residencia Reducida)

Es un error común pensar que el matrimonio con un español otorga la nacionalidad automáticamente. Jurídicamente, el matrimonio es un *supuesto de reducción de plazo* dentro de la Nacionalidad por Residencia.

==== Requisitos Específicos

- *Plazo:* Un año de residencia legal y continuada en España.
- *Convivencia:* El cónyuge extranjero debe estar empadronado y conviviendo con el cónyuge español durante ese año.
- *Vínculo:* El matrimonio debe estar inscrito en el Registro Civil español. Si el matrimonio se celebró en el extranjero, debe realizarse primero el Exequátur o la inscripción en el Consulado/Registro Civil Central.
- *Estado:* No pueden estar separados legalmente ni de hecho en el momento de la solicitud.

#line(length: 100%)

=== 3. Nacionalidad Española de Origen

Regulada en el *Artículo 17 del Código Civil*, esta modalidad reconoce la nacionalidad, generalmente, desde el nacimiento.

==== ¿Quiénes son españoles de origen?

1. *Ius Sanguinis (Derecho de sangre):* Los nacidos de padre o madre españoles, independientemente de dónde nazcan.
2. *Ius Soli (Derecho de suelo):*
  - Los nacidos en España de padres extranjeros si, al menos, uno de ellos hubiera nacido también en España.
  - Los nacidos en España de padres extranjeros si ambos carecen de nacionalidad o si la legislación de ninguno de ellos atribuye al hijo una nacionalidad (evitación de la apátrida).
  - Los nacidos en España cuya filiación no resulte determinada.
3. *Adopción:* El extranjero menor de 18 años adoptado por un español adquiere, desde la adopción, la nacionalidad de origen.

#line(length: 100%)

=== 4. Nacionalidad por Opción

El *Artículo 20 del Código Civil* permite a ciertas personas "optar" a la nacionalidad española si cumplen determinadas condiciones. Es un derecho subjetivo, no una concesión discrecional.

==== Supuestos Clásicos

- Personas que estén o hayan estado sujetas a la *patria potestad* de un español.
- Personas cuyo padre o madre hubiera sido originariamente español y nacido en España.
- Adoptados por españoles mayores de 18 años (tienen un plazo de 2 años para optar).

==== Ley de Memoria Democrática (Ley de Nietos) – _Vigente hasta octubre de 2025_

La Ley 20/2022 introdujo supuestos temporales clave que permiten optar a la nacionalidad:

1. Hijos o nietos de nacidos en España como españoles de origen.
2. Hijos o nietos de españoles que perdieron la nacionalidad por el exilio (guerra o dictadura).
3. Hijos mayores de edad de aquellos a quienes les fue reconocida la nacionalidad por la Ley de Memoria Histórica de 2007 o la actual Ley de Memoria Democrática.

#line(length: 100%)

=== 5. Nacionalidad por Carta de Naturaleza

Regulada en el *Artículo 21 del Código Civil*, esta vía tiene carácter graciable y no se sujeta a las normas generales de procedimiento administrativo.

- *Concepto:* Es otorgada discrecionalmente por el Gobierno mediante Real Decreto, tras valorar la concurrencia de *circunstancias excepcionales*.
- *Casos habituales:* Deportistas de élite, científicos de renombre internacional, víctimas de terrorismo o personas con vínculos extraordinarios con España que no encajan en otras vías.
- *Procedimiento:* Es complejo y sin garantías de aprobación, ya que depende totalmente de la voluntad política y administrativa del Consejo de Ministros.

#line(length: 100%)

=== 6. Nacionalidad para Sefardíes (Situación Actual)

La Ley 12/2015 habilitó un procedimiento especial para los descendientes de judíos sefardíes expulsados de España.

- *Estado en 2025:* El plazo de solicitud bajo esta ley *finalizó en 2019*. Actualmente, el Ministerio de Justicia y la DGSJyFP se encuentran resolviendo los expedientes que se iniciaron en plazo o que obtuvieron subsanaciones.
- *Vías alternativas:* Los ciudadanos de origen sefardí que no aplicaron a tiempo pueden acogerse a la *Nacionalidad por Residencia* con el plazo reducido de *2 años*, siempre que residan legalmente en España. La vía de la Carta de Naturaleza por motivo sefardí es posible teóricamente, pero altamente restrictiva en la práctica actual.

#pagebreak()

= Autorizaciones por Arraigo (Reforma 2024-2025)

El nuevo Reglamento de Extranjería (Real Decreto 1155/2024), en vigor desde mayo de 2025, ha transformado el sistema de arraigos, flexibilizando requisitos y reduciendo los tiempos de permanencia exigidos para facilitar la inclusión socio-laboral.

=== Arraigo Socio-Laboral

Diseñado para personas con una oferta de empleo que ya se encuentran en España.

- *Permanencia:* Se reduce a *2 años* (antes 3).
- *Contrato:* Mínimo de *20 horas semanales* (antes 30) garantizando el SMI.
- *Requisito:* No requiere informe de inserción social, basta con cumplir los requisitos laborales y de permanencia.

#line(length: 100%, stroke: 0.5pt + gray)

=== Arraigo de Segunda Oportunidad

Nueva figura para quienes tuvieron residencia legal previa y cayeron en irregularidad.

- *Requisitos:* Haber tenido residencia legal en los *últimos 2 años* y residir de forma continuada en España.
- *Beneficio:* Permite recuperar la regularidad administrativa y habilita a trabajar desde el primer momento.

#line(length: 100%, stroke: 0.5pt + gray)

=== Arraigo Familiar (Modificado)

*Importante:* Esta vía queda reservada *exclusivamente* para familiares de ciudadanos de la UE, EEE o Suiza.

- *Familiares de Españoles:* Deben tramitar la nueva "Residencia temporal de familiares de personas con nacionalidad española".
- *Perfil:* Progenitores de menores comunitarios o cuidadores de personas con discapacidad de la UE.

#line(length: 100%, stroke: 0.5pt + gray)

=== Arraigo Social

Para quienes cuentan con integración social demostrable, con o sin contrato.

- *Permanencia:* Reducida a *2 años*.
- *Vías:*
  - *Con Vínculos Familiares:* No requiere informe si se tiene cónyuge, padres o hijos residentes.
  - *Con Informe de Inserción:* Obligatorio si no hay familia directa. Evalúa la vivienda, medios de vida y esfuerzos de integración.

#line(length: 100%, stroke: 0.5pt + gray)

=== Arraigo Socioformativo (Antiguo Arraigo para la Formación)

Potenciado para combinar estudio y trabajo.

- *Permanencia:* *2 años* en España.
- *Compromiso:* Matriculación en Formación Profesional, certificados de profesionalidad o estudios conducentes a certificación oficial.
- *Requisito:* Se exige aportar un *Informe de Integración Social* obligatorio.
