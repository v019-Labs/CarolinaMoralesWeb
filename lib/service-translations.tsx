import { ReactNode } from 'react'
import { Locale, defaultLocale } from './translations'

export type ServiceData = {
    title: string
    description: string
    content: ReactNode
}

export const serviceTranslations: Record<Locale, Record<string, ServiceData>> = {
    es: {
        "nacionalidad": {
            title: "Nacionalidad Española",
            description: "La obtención de la nacionalidad española representa la máxima integración jurídica en el Estado.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        La obtención de la nacionalidad española representa la máxima integración jurídica en el Estado, otorgando al ciudadano no solo derechos plenos dentro de España, sino también la ciudadanía de la Unión Europea. El ordenamiento jurídico español, principalmente a través del <strong className="font-semibold text-foreground">Código Civil</strong>, establece diversas vías para acceder a la nacionalidad, cada una con requisitos y procedimientos específicos.
                    </p>
                    <p>
                        A continuación, presentamos un análisis exhaustivo de todas las modalidades legales vigentes, diseñado para orientar a nuestros clientes en la identificación de la vía más adecuada a su situación personal.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">1. Nacionalidad Española por Residencia</h2>
                        <p className="mb-6">
                            Esta es la vía más común para los extranjeros que viven legalmente en España. Se regula fundamentalmente en el <strong className="font-semibold text-foreground">Artículo 22 del Código Civil</strong>. La concesión no es automática; es una potestad del Estado que exige el cumplimiento de plazos y requisitos de integración.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Requisitos Fundamentales</h3>
                        <p className="mb-4">Para solicitar la nacionalidad por residencia, el interesado debe acreditar:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Residencia Legal:</strong> El solicitante debe ser titular de una autorización de residencia vigente. La estancia (como visado de estudiante o turista) <em className="text-muted-foreground">no</em> computa para la nacionalidad.</li>
                            <li><strong className="font-semibold text-foreground">Residencia Continuada:</strong> No más de 90 días en un año.</li>
                            <li><strong className="font-semibold text-foreground">Residencia Inmediatamente Anterior:</strong> El permiso debe estar vigente al momento de la solicitud.</li>
                            <li><strong className="font-semibold text-foreground">Buena Conducta Cívica:</strong> Ausencia de antecedentes penales en España y en el país de origen.</li>
                            <li><strong className="font-semibold text-foreground">Integración:</strong> Acreditar suficiente grado de integración en la sociedad española (exámenes CCSE y DELE, salvo dispensa).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Plazos de Residencia Requeridos</h3>
                        <p className="mb-4">El tiempo de residencia varía según el origen o las circunstancias del solicitante.</p>
                        <div className="rounded-xl border border-border overflow-hidden bg-card/50 mb-8 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-semibold text-foreground w-1/4">Plazo</th>
                                        <th className="p-4 font-semibold text-foreground">Beneficiarios (Supuestos Legales)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">10 Años</td>
                                        <td className="p-4"><strong>Plazo General.</strong> Aplica a cualquier extranjero que no se encuentre en los supuestos reducidos siguientes.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">5 Años</td>
                                        <td className="p-4">Personas que hayan obtenido la condición de <strong>refugiado</strong> o asilo político.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">2 Años</td>
                                        <td className="p-4">Nacionales de <strong>países iberoamericanos</strong> (incluido Puerto Rico), Andorra, Filipinas, Guinea Ecuatorial, Portugal o personas de origen sefardí.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">1 Año</td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-4 space-y-1 mt-0 marker:text-primary/70">
                                                <li>Quien haya nacido en territorio español.</li>
                                                <li>Quien lleve <strong>un año casado</strong> con un español/a (y no separado legalmente o de hecho).</li>
                                                <li>El viudo/a de español/a.</li>
                                                <li>El nacido fuera de España de padre, madre, abuelo o abuela que hubieran sido originariamente españoles.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Pruebas de Integración (Instituto Cervantes)</h3>
                        <p className="mb-4">Salvo supuestos de dispensa (escolarización en España o discapacidad acreditada ante el Ministerio de Justicia):</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Prueba CCSE:</strong> Conocimientos constitucionales y socioculturales de España.</li>
                            <li><strong className="font-semibold text-foreground">Prueba DELE A2 (o superior):</strong> Diploma de español como lengua extranjera (solo para nacionales de países donde el español no es idioma oficial).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Documentación Exigible</h3>
                        <p className="mb-4">Para la conformación del expediente administrativo, es imprescindible aportar la siguiente documentación (traducida y legalizada/apostillada cuando proceda):</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Pasaporte completo y en vigor:</strong> Todas las páginas, incluidas las vacías.</li>
                            <li><strong className="font-semibold text-foreground">NIE / TIE en vigor.</strong></li>
                            <li><strong className="font-semibold text-foreground">Certificado de nacimiento:</strong> Del país de origen, debidamente legalizado/apostillado y traducido (si no es hispanohablante).</li>
                            <li><strong className="font-semibold text-foreground">Antecedentes penales:</strong> Del país de origen, expedido en los últimos meses, legalizado/apostillado y traducido.</li>
                            <li><strong className="font-semibold text-foreground">Exámenes del Instituto Cervantes (CCSE y DELE):</strong> Acreditación de APTO o certificados de dispensa.</li>
                            <li><strong className="font-semibold text-foreground">Justificante de pago de la Tasa:</strong> Modelo 790 código 026.</li>
                            <li><strong className="font-semibold text-foreground">Certificado de empadronamiento:</strong> Histórico y actual (Aunque la administración puede consultarlo, es recomendable aportarlo para evitar retrasos).</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">2. Nacionalidad por Matrimonio (Residencia Reducida)</h2>
                        <p className="mb-6">
                            Es un error común pensar que el matrimonio con un español otorga la nacionalidad automáticamente. Jurídicamente, el matrimonio es un <strong className="font-semibold text-foreground">supuesto de reducción de plazo</strong> dentro de la Nacionalidad por Residencia.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Requisitos Específicos</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Plazo:</strong> Un año de residencia legal y continuada en España.</li>
                            <li><strong className="font-semibold text-foreground">Convivencia:</strong> El cónyuge extranjero debe estar empadronado y conviviendo con el cónyuge español durante ese año.</li>
                            <li><strong className="font-semibold text-foreground">Vínculo:</strong> El matrimonio debe estar inscrito en el Registro Civil español. Si el matrimonio se celebró en el extranjero, debe realizarse primero el Exequátur o la inscripción en el Consulado/Registro Civil Central.</li>
                            <li><strong className="font-semibold text-foreground">Estado:</strong> No pueden estar separados legalmente ni de hecho en el momento de la solicitud.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">3. Nacionalidad Española de Origen</h2>
                        <p className="mb-6">
                            Regulada en el <strong className="font-semibold text-foreground">Artículo 17 del Código Civil</strong>, esta modalidad reconoce la nacionalidad, generalmente, desde el nacimiento.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">¿Quiénes son españoles de origen?</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Ius Sanguinis (Derecho de sangre):</strong> Los nacidos de padre o madre españoles, independientemente de dónde nazcan.</li>
                            <li><strong className="font-semibold text-foreground">Ius Soli (Derecho de suelo):</strong>
                                <ul className="list-disc pl-4 mt-2 space-y-2">
                                    <li>Los nacidos en España de padres extranjeros si, al menos, uno de ellos hubiera nacido también en España.</li>
                                    <li>Los nacidos en España de padres extranjeros si ambos carecen de nacionalidad o si la legislación de ninguno de ellos atribuye al hijo una nacionalidad (evitación de la apátrida).</li>
                                    <li>Los nacidos en España cuya filiación no resulte determinada.</li>
                                </ul>
                            </li>
                            <li><strong className="font-semibold text-foreground">Adopción:</strong> El extranjero menor de 18 años adoptado por un español adquiere, desde la adopción, la nacionalidad de origen.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">4. Nacionalidad por Opción</h2>
                        <p className="mb-4">El <strong className="font-semibold text-foreground">Artículo 20 del Código Civil</strong> permite a ciertas personas "optar" a la nacionalidad española si cumplen determinadas condiciones. Es un derecho subjetivo, no una concesión discrecional.</p>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Supuestos Clásicos</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary/70">
                            <li>Personas que estén o hayan estado sujetas a la <strong className="font-semibold text-foreground">patria potestad</strong> de un español.</li>
                            <li>Personas cuyo padre o madre hubiera sido originariamente español y nacido en España.</li>
                            <li>Adoptados por españoles mayores de 18 años (tienen un plazo de 2 años para optar).</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Ley de Memoria Democrática (Ley de Nietos) – <em className="text-muted-foreground">Vigente hasta octubre de 2025</em></h3>
                        <p className="mb-4">La Ley 20/2022 introdujo supuestos temporales clave que permiten optar a la nacionalidad:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li>Hijos o nietos de nacidos en España como españoles de origen.</li>
                            <li>Hijos o nietos de españoles que perdieron la nacionalidad por el exilio (guerra o dictadura).</li>
                            <li>Hijos mayores de edad de aquellos a quienes les fue reconocida la nacionalidad por la Ley de Memoria Histórica de 2007 o la actual Ley de Memoria Democrática.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">5. Nacionalidad por Carta de Naturaleza</h2>
                        <p className="mb-4">Regulada en el <strong className="font-semibold text-foreground">Artículo 21 del Código Civil</strong>, esta vía tiene carácter graciable y no se sujeta a las normas generales de procedimiento administrativo.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Concepto:</strong> Es otorgada discrecionalmente por el Gobierno mediante Real Decreto, tras valorar la concurrencia de <strong className="font-semibold text-foreground">circunstancias excepcionales</strong>.</li>
                            <li><strong className="font-semibold text-foreground">Casos habituales:</strong> Deportistas de élite, científicos de renombre internacional, víctimas de terrorismo o personas con vínculos extraordinarios con España que no encajan en otras vías.</li>
                            <li><strong className="font-semibold text-foreground">Procedimiento:</strong> Es complejo y sin garantías de aprobación, ya que depende totalmente de la voluntad política y administrativa del Consejo de Ministros.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">6. Nacionalidad para Sefardíes (Situación Actual)</h2>
                        <p className="mb-4">La Ley 12/2015 habilitó un procedimiento especial para los descendientes de judíos sefardíes expulsados de España.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Estado en 2025:</strong> El plazo de solicitud bajo esta ley <strong className="font-semibold text-foreground">finalizó en 2019</strong>. Actualmente, el Ministerio de Justicia se encuentra resolviendo los expedientes que se iniciaron en plazo.</li>
                            <li><strong className="font-semibold text-foreground">Vías alternativas:</strong> Los ciudadanos de origen sefardí que no aplicaron a tiempo pueden acogerse a la <strong className="font-semibold text-foreground">Nacionalidad por Residencia</strong> con el plazo reducido de <strong className="font-semibold text-foreground">2 años</strong>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        "arraigo": {
            title: "Arraigos",
            description: "Reglamento de Extranjería (Real Decreto 1155/2024). Reforma 2024-2025.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        El nuevo Reglamento de Extranjería (Real Decreto 1155/2024), en vigor a partir de mayo 2025, ha transformado el sistema de Arraigos, flexibilizando requisitos y reduciendo los periodos de estancia para facilitar la inclusión socio-laboral.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos Socio-Laboral</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Permanencia:</strong> 2 años (antes 3).</li>
                            <li><strong className="font-semibold text-foreground">Contrato:</strong> Mínimo 20 horas semanales.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos de Segunda Oportunidad</h2>
                        <p className="mb-8">Para quienes tuvieron residencia legal previa y cayeron en irregularidad. Permite trabajar desde el primer momento.</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Familiar (Modificado)</h2>
                        <p className="mb-8">Reservado para familiares de ciudadanos de la UE. Los familiares de españoles ahora tramitan la "Residencia temporal de familiares de españoles".</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Social</h2>
                        <p className="mb-4">Permanencia reducida a <strong>2 años</strong>.</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Con Vínculos:</strong> Sin necesidad de informe de inserción.</li>
                            <li><strong className="font-semibold text-foreground">Sin Vínculos:</strong> Requiere informe de inserción social.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Socioformativo</h2>
                        <p className="mb-4">Requiere 2 años en España y matriculación en estudios oficiales.</p>
                        <p><strong className="font-semibold text-foreground">Novedad 2025:</strong> Permite trabajar hasta 30 horas semanales mientras se estudia.</p>
                    </div>
                </div>
            )
        },
        "reagrupacion-familiar": {
            title: "Reagrupación Familiar",
            description: "Ayuda legal para reunir a tu familia en España.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Es una autorización de residencia temporal que se podrá conceder a los familiares de las personas extranjeras residentes en España.</p>
                </div>
            )
        },
        "derecho-penal": {
            title: "Derecho Penal",
            description: "Asesoramiento y defensa en materia penal.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Ofrecemos un servicio integral de asesoramiento y defensa en el ámbito del derecho penal, garantizando la protección de sus derechos en todo momento.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Defensa en procesos penales</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Cancelación de antecedentes penales y policiales</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Alcoholemias</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Conducir sin haber obtenido el carnet de conducir Español</h2>
                    </div>
                </div>
            )
        },
        "derecho-civil": {
            title: "Derecho Civil Matrimonial",
            description: "Gestión de divorcios, separaciones y convenios reguladores.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Le asesoramos en los procesos de derecho de familia, buscando siempre la solución más beneficiosa para todas las partes implicadas.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorcios mutuo acuerdo</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorcio ante Notario</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorcio Contencioso</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Pensión de alimentos y guarda y custodia</h2>
                    </div>
                </div>
            )
        },
        "reclamacion-accidentes": { title: "Reclamación Accidentes", description: "Gestión de indemnizaciones.", content: <p>Falta info</p> }
    },
    en: {
        "nacionalidad": {
            title: "Spanish Nationality",
            description: "Obtaining Spanish nationality represents the highest level of legal integration into the State.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        Obtaining Spanish nationality represents the highest level of legal integration into the State, granting the citizen not only full rights within Spain, but also citizenship of the European Union. The Spanish legal system, primarily through the <strong className="font-semibold text-foreground">Civil Code</strong>, establishes various pathways to nationality, each with specific requirements and procedures.
                    </p>
                    <p>
                        Below, we present a comprehensive analysis of all current legal options, designed to guide our clients in identifying the most suitable pathway for their personal circumstances.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">1. Spanish Nationality by Residence</h2>
                        <p className="mb-6">
                            This is the most common pathway for foreigners legally residing in Spain. It is primarily regulated by <strong className="font-semibold text-foreground">Article 22 of the Civil Code</strong>. Granting is not automatic; it is a prerogative of the State that requires compliance with deadlines and integration requirements.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Essential Requirements</h3>
                        <p className="mb-4">To apply for nationality by residence, the applicant must demonstrate:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Legal Residence:</strong> The applicant must hold a valid residence permit. Stays (such as on a student or tourist visa) <em className="text-muted-foreground">do not</em> count towards citizenship.</li>
                            <li><strong className="font-semibold text-foreground">Continuous Residence:</strong> No more than 90 days in a year outside of Spain.</li>
                            <li><strong className="font-semibold text-foreground">Immediately Previous Residence:</strong> The permit must be valid at the time of application.</li>
                            <li><strong className="font-semibold text-foreground">Good Civic Conduct:</strong> No criminal record in Spain or in the country of origin.</li>
                            <li><strong className="font-semibold text-foreground">Integration:</strong> Demonstrate a sufficient degree of integration into Spanish society (CCSE and DELE exams, unless exempt).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Required Residence Periods</h3>
                        <p className="mb-4">The residence period varies depending on the applicant's origin or circumstances.</p>
                        <div className="rounded-xl border border-border overflow-hidden bg-card/50 mb-8 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-semibold text-foreground w-1/4">Period</th>
                                        <th className="p-4 font-semibold text-foreground">Beneficiaries (Legal Basis)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">10 Years</td>
                                        <td className="p-4"><strong>General Period.</strong> Applies to any foreigner who does not fall under the following reduced circumstances.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">5 Years</td>
                                        <td className="p-4">Persons who have obtained <strong>refugee or political asylum</strong> status.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">2 Years</td>
                                        <td className="p-4">Nationals of <strong>Ibero-American countries</strong> (including Puerto Rico), Andorra, the Philippines, Equatorial Guinea, Portugal, or persons of Sephardic origin.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">1 Year</td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-4 space-y-1 mt-0 marker:text-primary/70">
                                                <li>Anyone born in Spanish territory.</li>
                                                <li>Anyone who has been <strong>married to a Spanish citizen</strong> for one year (and is not legally or de facto separated).</li>
                                                <li>The widow/widower of a Spanish citizen.</li>
                                                <li>Anyone born outside of Spain to a father, mother, grandfather, or grandmother who was originally Spanish.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Integration Tests (Instituto Cervantes)</h3>
                        <p className="mb-4">Except in cases of exemption (schooling in Spain or disability accredited before the Ministry of Justice):</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">CCSE Test:</strong> Constitutional and sociocultural knowledge of Spain.</li>
                            <li><strong className="font-semibold text-foreground">DELE A2 Test (or higher):</strong> Diploma of Spanish as a foreign language (only for nationals of countries where Spanish is not an official language).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Required Documentation</h3>
                        <p className="mb-4">To complete the administrative file, the following documentation is required (translated and legalized/apostilled where applicable):</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Valid passport:</strong> All pages, including blank ones.</li>
                            <li><strong className="font-semibold text-foreground">Valid NIE/TIE.</strong></li>
                            <li><strong className="font-semibold text-foreground">Birth certificate:</strong> From the country of origin, duly legalized/apostilled and translated (if not Spanish-speaking).</li>
                            <li><strong className="font-semibold text-foreground">Criminal record certificate:</strong> From the country of origin, issued within the last few months, legalized/apostilled and translated.</li>
                            <li><strong className="font-semibold text-foreground">Cervantes Institute exams (CCSE and DELE):</strong> Proof of passing or exemption certificates.</li>
                            <li><strong className="font-semibold text-foreground">Proof of payment of the fee:</strong> Form 790, code 026.</li>
                            <li><strong className="font-semibold text-foreground">Certificate of registration (Empadronamiento):</strong> Historical and current (Although the administration may consult it, it is advisable to provide it to avoid delays).</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">2. Nationality by Marriage (Reduced Residency)</h2>
                        <p className="mb-6">
                            It is a common misconception that marriage to a Spanish citizen automatically grants nationality. Legally, marriage is a case of reduced residency period within the Nationality by Residency program.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Specific Requirements</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Period:</strong> One year of legal and continuous residence in Spain.</li>
                            <li><strong className="font-semibold text-foreground">Cohabitation:</strong> The foreign spouse must be registered with and living with the Spanish spouse during that year.</li>
                            <li><strong className="font-semibold text-foreground">Relationship:</strong> The marriage must be registered in the Spanish Civil Registry. If the marriage took place abroad, the Exequatur (recognition of Spanish citizenship) or registration at the Consulate/Central Civil Registry must be obtained first.</li>
                            <li><strong className="font-semibold text-foreground">Status:</strong> The spouses cannot be legally or de facto separated at the time of application.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">3. Spanish Nationality by Origin</h2>
                        <p className="mb-6">
                            Regulated in Article 17 of the Civil Code, this modality recognizes nationality, generally, from birth.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Who are Spanish citizens by birth?</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Ius Sanguinis (Right of Blood):</strong> Those born to a Spanish father or mother, regardless of where they are born.</li>
                            <li><strong className="font-semibold text-foreground">Ius Soli (Right of Soil):</strong>
                                <ul className="list-disc pl-4 mt-2 space-y-2">
                                    <li>Those born in Spain to foreign parents if at least one of them was also born in Spain.</li>
                                    <li>Those born in Spain to foreign parents if both are stateless or if neither parent's legislation grants the child a nationality (avoidance of statelessness).</li>
                                    <li>Those born in Spain whose filiation is undetermined.</li>
                                </ul>
                            </li>
                            <li><strong className="font-semibold text-foreground">Adoption:</strong> A foreigner under 18 adopted by a Spanish citizen acquires Spanish nationality from the moment of adoption.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">4. Nationality by Option</h2>
                        <p className="mb-4"><strong className="font-semibold text-foreground">Article 20 of the Civil Code</strong> allows certain people to "opt" for Spanish nationality if they meet specific conditions. It is a subjective right, not a discretionary grant.</p>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Classic Cases</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary/70">
                            <li>People who are or have been subject to the <strong className="font-semibold text-foreground">parental authority</strong> of a Spaniard.</li>
                            <li>People whose father or mother was originally Spanish and born in Spain.</li>
                            <li>Adopted by Spaniards over the age of 18 (they have a 2-year period to opt).</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Democratic Memory Law (Grandchildren Law) – <em className="text-muted-foreground">Valid until October 2025</em></h3>
                        <p className="mb-4">Law 20/2022 introduced key temporary cases that allow opting for nationality:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li>Children or grandchildren of those born in Spain as Spaniards of origin.</li>
                            <li>Children or grandchildren of Spaniards who lost their nationality due to exile (war or dictatorship).</li>
                            <li>Adult children of those whose nationality was recognized by the 2007 Historical Memory Law or the current Democratic Memory Law.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">5. Nationality by Charter of Nature</h2>
                        <p className="mb-4">Regulated in <strong className="font-semibold text-foreground">Article 21 of the Civil Code</strong>, this route is gratuitous and not subject to the general rules of administrative procedure.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Concept:</strong> It is granted discretionally by the Government via Royal Decree, after assessing the concurrence of <strong className="font-semibold text-foreground">exceptional circumstances</strong>.</li>
                            <li><strong className="font-semibold text-foreground">Common cases:</strong> Elite athletes, internationally renowned scientists, victims of terrorism, or people with extraordinary links to Spain that do not fit into other routes.</li>
                            <li><strong className="font-semibold text-foreground">Procedure:</strong> It is complex and with no guarantees of approval, as it depends entirely on the political and administrative will of the Council of Ministers.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">6. Nationality for Sephardic Descendants (Current Situation)</h2>
                        <p className="mb-4">Law 12/2015 enabled a special procedure for the descendants of Sephardic Jews expelled from Spain.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Status in 2025:</strong> The application period under this law <strong className="font-semibold text-foreground">ended in 2019</strong>. Currently, the Ministry of Justice is resolving files that were initiated within the deadline.</li>
                            <li><strong className="font-semibold text-foreground">Alternative routes:</strong> Sephardic descendants who did not apply on time can apply for <strong className="font-semibold text-foreground">Nationality by Residence</strong> with the reduced period of <strong className="font-semibold text-foreground">2 years</strong>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        "arraigo": {
            title: "Arraigos",
            description: "New Immigration Regulations (2024-2025).",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        The new Immigration Regulation (Royal Decree 1155/2024), effective from May 2025, has transformed the Arraigos system, relaxing requirements and reducing required stay periods to facilitate socio-labor inclusion.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Socio-Labor Arraigos</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Stay:</strong> Reduced to 2 years (previously 3).</li>
                            <li><strong className="font-semibold text-foreground">Contract:</strong> Minimum 20 hours per week (SMI).</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Second Chance Arraigos</h2>
                        <p className="mb-8">New figure for those who previously had legal residence and fell into irregularity. Allows working from the first day.</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Family Arraigos (Modified)</h2>
                        <p className="mb-8">Reserved exclusively for family members of EU/EEA or Swiss citizens. Family members of Spanish nationals now process the new "Temporary residence for family members of Spanish nationals".</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Social Arraigos</h2>
                        <p className="mb-4">Stay reduced to <strong>2 years</strong>.</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">With Family Ties:</strong> No integration report needed if you have a spouse, parent, or resident children.</li>
                            <li><strong className="font-semibold text-foreground">With Integration Report:</strong> Mandatory if no direct family.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Socio-formative Arraigos</h2>
                        <p className="mb-4">Requires 2 years in Spain and enrollment in official studies (Vocational Training, etc.).</p>
                        <p><strong className="font-semibold text-foreground">2025 Update:</strong> Allows working up to 30 hours per week while studying.</p>
                    </div>
                </div>
            )
        },
        "reagrupacion-familiar": {
            title: "Family Reunification",
            description: "Legal help to reunite your family in Spain.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Temporary residence authorization for family members of foreigners residing in Spain.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Who can be reunited?</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong>Spouse or Partner.</strong></li>
                            <li><strong>Children:</strong> Under 18 or disabled.</li>
                            <li><strong>Ascendants:</strong> Over 65 or dependent.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        "derecho-penal": {
            title: "Criminal Law",
            description: "Legal advice and defense in criminal matters.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>We provide comprehensive legal advice and defense services in the area of criminal law, ensuring your rights are protected at all times.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Defense in criminal proceedings</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Cancellation of criminal and police records</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Breathalyzer tests</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Driving without a valid Spanish license</h2>
                    </div>
                </div>
            )
        },
        "derecho-civil": {
            title: "Family Law",
            description: "Management of divorces, separations, and regulatory agreements.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>We guide you through family law processes, always seeking the most beneficial solution for all parties involved.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Uncontested Divorces</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorce before a Notary</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Contested Divorce</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Child Support and Custody</h2>
                    </div>
                </div>
            )
        },
        "reclamacion-accidentes": { title: "Accident Claims", description: "Coming Soon", content: <p>Coming Soon</p> }
    },
    fr: {
        "nacionalidad": {
            title: "Nationalité Espagnole",
            description: "L'obtention de la nationalité espagnole représente le plus haut niveau d'intégration juridique dans l'État.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        L'obtention de la nationalité espagnole représente le plus haut niveau d'intégration juridique dans l'État, accordant au citoyen non seulement des droits complets en Espagne, mais aussi la citoyenneté de l'Union européenne. L'ordre juridique espagnol, principalement à travers le <strong className="font-semibold text-foreground">Code Civil</strong>, établit diverses voies pour accéder à la nationalité, chacune avec des exigences et des procédures spécifiques.
                    </p>
                    <p>
                        Ci-dessous, nous présentons une analyse complète de toutes les modalités légales en vigueur, conçue pour guider nos clients dans l'identification de la voie la plus adaptée à leur situation personnelle.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">1. Nationalité Espagnole par Résidence</h2>
                        <p className="mb-6">
                            C'est la voie la plus courante pour les étrangers résidant légalement en Espagne. Elle est régie principalement par l'<strong className="font-semibold text-foreground">Article 22 du Code Civil</strong>. L'octroi n'est pas automatique ; c'est un pouvoir de l'État qui exige le respect des délais et des conditions d'intégration.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Exigences Fondamentales</h3>
                        <p className="mb-4">Pour demander la nationalité par résidence, l'intéressé doit prouver :</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Résidence Légale :</strong> Le demandeur doit être titulaire d'un permis de séjour en vigueur. Le séjour (vrai pour un visa étudiant ou touriste) <em className="text-muted-foreground">ne compte pas</em> pour la nationalité.</li>
                            <li><strong className="font-semibold text-foreground">Résidence Continue :</strong> Pas plus de 90 jours d'absence en un an.</li>
                            <li><strong className="font-semibold text-foreground">Résidence Immédiatement Antérieure :</strong> Le permis doit être en vigueur au moment de la demande.</li>
                            <li><strong className="font-semibold text-foreground">Bonne Conduite Civique :</strong> Absence de casier judiciaire en Espagne et dans le pays d'origine.</li>
                            <li><strong className="font-semibold text-foreground">Intégration :</strong> Prouver un degré suffisant d'intégration dans la société espagnole (examens CCSE et DELE, sauf dispense).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Délais de Résidence Requis</h3>
                        <p className="mb-4">Le temps de résidence varie selon l'origine ou les circonstances du demandeur.</p>
                        <div className="rounded-xl border border-border overflow-hidden bg-card/50 mb-8 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-semibold text-foreground w-1/4">Délai</th>
                                        <th className="p-4 font-semibold text-foreground">Bénéficiaires (Cas Légaux)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">10 Ans</td>
                                        <td className="p-4"><strong>Délai Général.</strong> S'applique à tout étranger ne figurant pas dans les cas réduits suivants.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">5 Ans</td>
                                        <td className="p-4">Personnes ayant obtenu le statut de <strong>réfugié</strong> ou l'asile politique.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">2 Ans</td>
                                        <td className="p-4">Nationaux des <strong>pays ibéro-américains</strong> (y compris Porto Rico), Andorre, Philippines, Guinée équatoriale, Portugal ou personnes d'origine séfarade.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">1 An</td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-4 space-y-1 mt-0 marker:text-primary/70">
                                                <li>Né sur le territoire espagnol.</li>
                                                <li>Marié depuis <strong>un an</strong> avec un Espagnol (et non séparé légalement ou de fait).</li>
                                                <li>Veuf/veuve d'un Espagnol.</li>
                                                <li>Né hors d'Espagne d'un père, d'une mère, d'un grand-père ou d'une grand-mère qui était espagnol d'origine.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Tests d'Intégration (Institut Cervantes)</h3>
                        <p className="mb-4">Sauf dispense (scolarisation en Espagne ou handicap accrédité auprès du Ministère de la Justice) :</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Test CCSE :</strong> Connaissances constitutionnelles et socioculturelles de l'Espagne.</li>
                            <li><strong className="font-semibold text-foreground">Test DELE A2 (ou supérieur) :</strong> Diplôme d'espagnol comme langue étrangère (uniquement pour les nationaux de pays où l'espagnol n'est pas la langue officielle).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Documentation Requise</h3>
                        <p className="mb-4">Pour la constitution du dossier administratif, il est indispensable de fournir les documents suivants (traduits et légalisés/apostillés le cas échéant) :</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Passeport complet et en vigueur :</strong> Toutes les pages, y compris les pages vierges.</li>
                            <li><strong className="font-semibold text-foreground">NIE / TIE en vigueur.</strong></li>
                            <li><strong className="font-semibold text-foreground">Acte de naissance :</strong> Du pays d'origine, dûment légalisé/apostillé et traduit (si non francophone).</li>
                            <li><strong className="font-semibold text-foreground">Casier judiciaire :</strong> Du pays d'origine, délivré au cours des derniers mois, légalisé/apostillé et traduit.</li>
                            <li><strong className="font-semibold text-foreground">Examens de l'Institut Cervantes (CCSE et DELE) :</strong> Attestation de REUSSITE ou certificats de dispense.</li>
                            <li><strong className="font-semibold text-foreground">Justificatif de paiement de la taxe :</strong> Modèle 790 code 026.</li>
                            <li><strong className="font-semibold text-foreground">Certificat de recensement (Empadronamiento) :</strong> Historique et actuel.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">2. Nationalité par Mariage (Résidence Réduite)</h2>
                        <p className="mb-6">
                            Il est courant de penser que le mariage avec un Espagnol donne automatiquement la nationalité. Juridiquement, le mariage est un <strong className="font-semibold text-foreground">cas de réduction de délai</strong> dans le cadre de la Nationalité par Résidence.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Exigences Spécifiques</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Délai :</strong> Un an de résidence légale et continue en Espagne.</li>
                            <li><strong className="font-semibold text-foreground">Cohabitation :</strong> Le conjoint étranger doit être recensé et vivre avec le conjoint espagnol pendant cette année.</li>
                            <li><strong className="font-semibold text-foreground">Lien :</strong> Le mariage doit être inscrit au Registre Civil espagnol. Si le mariage a été célébré à l'étranger, l'Exequatur ou l'inscription au Consulat/Registre Civil Central doit d'abord être effectué.</li>
                            <li><strong className="font-semibold text-foreground">Statut :</strong> Ils ne peuvent pas être séparés légalement ou de fait au moment de la demande.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">3. Nationalité Espagnole d'Origine</h2>
                        <p className="mb-6">
                            Régie par l'<strong className="font-semibold text-foreground">Article 17 du Code Civil</strong>, cette modalité reconnaît la nationalité, généralement dès la naissance.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Qui sont Espagnols d'origine ?</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Ius Sanguinis (Droit du sang) :</strong> Les nés de père ou mère espagnols, quel que soit leur lieu de naissance.</li>
                            <li><strong className="font-semibold text-foreground">Ius Soli (Droit du sol) :</strong>
                                <ul className="list-disc pl-4 mt-2 space-y-2">
                                    <li>Les nés en Espagne de parents étrangers si au moins l'un d'eux est également né en Espagne.</li>
                                    <li>Les nés en Espagne de parents étrangers si aucun d'eux n'a de nationalité ou si la législation d'aucun d'eux n'attribue de nationalité à l'enfant (évitement de l'apatridie).</li>
                                    <li>Les nés en Espagne dont la filiation n'est pas déterminée.</li>
                                </ul>
                            </li>
                            <li><strong className="font-semibold text-foreground">Adoption :</strong> L'étranger de moins de 18 ans adopté par un Espagnol acquiert, dès l'adoption, la nationalité d'origine.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">4. Nationalité par Option</h2>
                        <p className="mb-4">L'<strong className="font-semibold text-foreground">Article 20 du Code Civil</strong> permet à certaines personnes d'"opter" pour la nationalité espagnole si elles remplissent certaines conditions. C'est un droit subjectif.</p>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Cas Classiques</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary/70">
                            <li>Les personnes qui sont ou ont été soumises à l'<strong className="font-semibold text-foreground">autorité parentale</strong> d'un Espagnol.</li>
                            <li>Les personnes dont le père ou la mère était espagnol d'origine et né en Espagne.</li>
                            <li>Les adoptés par des Espagnols de plus de 18 ans (ils ont un délai de 2 ans pour opter).</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Loi sur la Mémoire Démocratique (Loi des Petits-enfants) – <em className="text-muted-foreground">En vigueur jusqu'en octobre 2025</em></h3>
                        <p className="mb-4">La Loi 20/2022 a introduit des cas temporaires clés permettant d'opter pour la nationalité :</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li>Enfants ou petits-enfants de personnes nées en Espagne en tant qu'Espagnols d'origine.</li>
                            <li>Enfants ou petits-enfants d'Espagnols ayant perdu la nationalité à cause de l'exil (guerre ou dictature).</li>
                            <li>Enfants majeurs de ceux dont la nationalité a été reconnue par la Loi sur la Mémoire Historique de 2007 ou l'actuelle Loi sur la Mémoire Démocratique.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">5. Nationalité par Lettre de Nature</h2>
                        <p className="mb-4">Régie par l'<strong className="font-semibold text-foreground">Article 21 du Code Civil</strong>, cette voie a un caractère discrétionnaire.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Concept :</strong> Accordée discrétionnairement par le Gouvernement par Décret Royal, après évaluation de la présence de <strong className="font-semibold text-foreground">circonstances exceptionnelles</strong>.</li>
                            <li><strong className="font-semibold text-foreground">Cas habituels :</strong> Sportifs d'élite, scientifiques de renommée internationale, victimes du terrorisme ou personnes ayant des liens extraordinaires avec l'Espagne.</li>
                            <li><strong className="font-semibold text-foreground">Procédure :</strong> Elle est complexe et sans garantie d'approbation, car elle dépend totalement de la volonté politique.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">6. Nationalité pour les Séfarades (Situation Actuelle)</h2>
                        <p className="mb-4">La Loi 12/2015 a ouvert une procédure spéciale pour les descendants de Juifs séfarades expulsés d'Espagne.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Situation en 2025 :</strong> Le délai de demande sous cette loi a <strong className="font-semibold text-foreground">pris fin en 2019</strong>. Actuellement, le Ministère de la Justice résout les dossiers initiés dans les délais.</li>
                            <li><strong className="font-semibold text-foreground">Voies alternatives :</strong> Les citoyens d'origine séfarade qui n'ont pas postulé à temps peuvent recourir à la <strong className="font-semibold text-foreground">Nationalité par Résidence</strong> avec le délai réduit de <strong className="font-semibold text-foreground">2 ans</strong>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        "arraigo": {
            title: "Arraigos",
            description: "Règlement sur l'immigration (2024-2025).",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        Le nouveau règlement sur l'immigration (Décret royal 1155/2024), en vigueur à partir de mai 2025, a transformé le système d'Arraigos, assouplissant les exigences et réduisant les périodes de séjour pour faciliter l'intégration socio-laborale.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Socio-Laboral</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Séjour:</strong> Réduit à 2 ans (auparavant 3).</li>
                            <li><strong className="font-semibold text-foreground">Contrat:</strong> Minimum 20 heures par semaine (SMI).</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos de Seconde Chance</h2>
                        <p className="mb-8">Nouvelle figure pour ceux qui avaient auparavant une résidence légale et sont tombés dans l'irrégularité. Permet de travailler dès le premier jour.</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos Familial (Modifié)</h2>
                        <p className="mb-8">Réservé exclusivement aux membres de la famille de citoyens de l'UE/EEE ou de la Suisse. Les membres de la famille de ressortissants espagnols traitent désormais la nouvelle "Résidence temporaire pour les membres de la famille de ressortissants espagnols".</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Social</h2>
                        <p className="mb-4">Séjour réduit à <strong>2 ans</strong>.</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Avec Liens Familiaux:</strong> Pas de rapport d'intégration nécessaire si vous avez un conjoint, un parent ou des enfants résidents.</li>
                            <li><strong className="font-semibold text-foreground">Avec Rapport d'Intégration:</strong> Obligatoire s'il n'y a pas de famille directe.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos Socioformatif</h2>
                        <p className="mb-4">Nécessite 2 ans en Espagne et une inscription dans des études officielles (Formation professionnelle, etc.).</p>
                        <p><strong className="font-semibold text-foreground">Mise à jour 2025:</strong> Permet de travailler jusqu'à 30 heures par semaine tout en étudiant.</p>
                    </div>
                </div>
            )
        },
        "reagrupacion-familiar": {
            title: "Regroupement Familial",
            description: "Aide juridique pour réunir votre famille.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Autorisation de résidence temporaire pour les membres de la famille.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Qui peut être regroupé?</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong>Conjoint.</strong></li>
                            <li><strong>Enfants (-18 ans).</strong></li>
                            <li><strong>Ascendants (+65 ans).</strong></li>
                        </ul>
                    </div>
                </div>
            )
        },
        "derecho-penal": {
            title: "Droit Pénal",
            description: "Conseils juridiques et défense en matière pénale.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Nous fournissons des services complets de conseil juridique et de défense dans le domaine du droit pénal, garantissant la protection de vos droits en tout temps.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Défense dans les procédures pénales</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Annulation des casiers judiciaires et policiers</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Tests d'alcoolémie</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Conduite sans permis espagnol</h2>
                    </div>
                </div>
            )
        },
        "derecho-civil": {
            title: "Droit Civil et Matrimonial",
            description: "Gestion des divorces, séparations et accords réglementaires.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Nous vous conseillons dans les procédures de droit de la famille, en recherchant toujours la solution la plus bénéfique pour toutes les parties impliquées.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorces par consentement mutuel</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorce devant Notaire</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorce contentieux</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Pension alimentaire et garde d'enfants</h2>
                    </div>
                </div>
            )
        },
        "reclamacion-accidentes": { title: "Réclamations Accidents", description: "Bientôt disponible", content: <p>Bientôt disponible</p> }
    },
    pt: {
        "nacionalidad": {
            title: "Nacionalidade Espanhola",
            description: "A obtenção da nacionalidade espanhola representa o nível mais elevado de integração jurídica no Estado.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        A obtenção da nacionalidade espanhola representa o nível mais elevado de integração jurídica no Estado, concedendo ao cidadão não apenas direitos plenos em Espanha, mas também a cidadania da União Europeia. O ordenamento jurídico espanhol, principalmente através do <strong className="font-semibold text-foreground">Código Civil</strong>, estabelece diversas vias de acesso à nacionalidade, cada uma com requisitos e procedimentos específicos.
                    </p>
                    <p>
                        Apresentamos a seguir uma análise exaustiva de todas as modalidades legais em vigor, concebida para orientar os nossos clientes na identificação da via mais adequada à sua situação pessoal.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">1. Nacionalidade Espanhola por Residência</h2>
                        <p className="mb-6">
                            Esta é a via mais comum para os estrangeiros que vivem legalmente em Espanha. É regulada fundamentalmente pelo <strong className="font-semibold text-foreground">Artigo 22 do Código Civil</strong>. A concessão não é automática; é uma prerrogativa do Estado que exige o cumprimento de prazos e requisitos de integração.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Requisitos Fundamentais</h3>
                        <p className="mb-4">Para solicitar a nacionalidade por residência, o interessado deve comprovar:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Residência Legal :</strong> O requerente deve ser titular de uma autorização de residência válida. A estadia (como visto de estudante ou turista) <em className="text-muted-foreground">não conta</em> para a nacionalidade.</li>
                            <li><strong className="font-semibold text-foreground">Residência Continuada :</strong> Não mais de 90 dias de ausência por ano.</li>
                            <li><strong className="font-semibold text-foreground">Residência Imediatamente Anterior :</strong> A autorização deve estar válida no momento do pedido.</li>
                            <li><strong className="font-semibold text-foreground">Boa Conduta Cívica :</strong> Ausência de antecedentes penais em Espanha e no país de origem.</li>
                            <li><strong className="font-semibold text-foreground">Integração :</strong> Comprovar grau suficiente de integração na sociedade espanhola (exames CCSE e DELE, salvo dispensa).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Prazos de Residência Necessários</h3>
                        <p className="mb-4">O tempo de residência varia conforme a origem ou as circunstâncias do requerente.</p>
                        <div className="rounded-xl border border-border overflow-hidden bg-card/50 mb-8 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-semibold text-foreground w-1/4">Prazo</th>
                                        <th className="p-4 font-semibold text-foreground">Beneficiários (Casos Legais)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">10 Anos</td>
                                        <td className="p-4"><strong>Prazo Geral.</strong> Aplica-se a qualquer estrangeiro que não se encontre nos casos reduzidos abaixo.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">5 Anos</td>
                                        <td className="p-4">Pessoas que tenham obtido o estatuto de <strong>refugiado</strong> ou asilo político.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">2 Anos</td>
                                        <td className="p-4">Nacionais de <strong>países ibero-americanos</strong> (incluindo Porto Rico), Andorra, Filipinas, Guiné Equatorial, Portugal ou pessoas de origem sefardita.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">1 Ano</td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-4 space-y-1 mt-0 marker:text-primary/70">
                                                <li>Quem tenha nascido em território espanhol.</li>
                                                <li>Quem esteja <strong>casado há um ano</strong> com um espanhol/a (e não separado legalmente ou de fato).</li>
                                                <li>O viúvo/a de espanhol/a.</li>
                                                <li>O nascido fora de Espanha de pai, mãe ou avós que tenham sido originalmente espanhóis.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Provas de Integração (Instituto Cervantes)</h3>
                        <p className="mb-4">Salvo casos de dispensa (escolarização em Espanha ou deficiência comprovada perante o Ministério da Justiça) :</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Prova CCSE :</strong> Conhecimentos constitucionais e socioculturais de Espanha.</li>
                            <li><strong className="font-semibold text-foreground">Prova DELE A2 (ou superior) :</strong> Diploma de espanhol como língua estrangeira (apenas para nacionais de países onde o espanhol não é idioma oficial).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Documentação Necessária</h3>
                        <p className="mb-4">Para a composição do processo administrativo, é imprescindível apresentar a seguinte documentação (traduzida e legalizada/apostilhada quando aplicável) :</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Passaporte completo e válido :</strong> Todas as páginas, incluindo as em branco.</li>
                            <li><strong className="font-semibold text-foreground">NIE / TIE válido.</strong></li>
                            <li><strong className="font-semibold text-foreground">Certidão de nascimento :</strong> Do país de origem, devidamente legalizada/apostilhada e traduzida (se não for em espanhol).</li>
                            <li><strong className="font-semibold text-foreground">Antecedentes penais :</strong> Do país de origem, emitido nos últimos meses, legalizado/apostilado e traduzido.</li>
                            <li><strong className="font-semibold text-foreground">Exames do Instituto Cervantes (CCSE e DELE) :</strong> Comprovativo de APTO ou certificados de dispensa.</li>
                            <li><strong className="font-semibold text-foreground">Comprovativo de pagamento da Taxa :</strong> Modelo 790 código 026.</li>
                            <li><strong className="font-semibold text-foreground">Certidão de residência (Empadronamiento) :</strong> Histórico e atual.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">2. Nacionalidade por Casamento (Residência Reduzida)</h2>
                        <p className="mb-6">
                            É um erro comum pensar que o casamento com um espanhol concede a nacionalidade automaticamente. Juridicamente, o casamento é um <strong className="font-semibold text-foreground">motivo de redução de prazo</strong> dentro da Nacionalidade por Residência.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Requisitos Específicos</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Prazo :</strong> Um ano de residência legal e continuada em Espanha.</li>
                            <li><strong className="font-semibold text-foreground">Convivência :</strong> O cônjuge estrangeiro deve estar registrado e convivendo com o cônjuge espanhol durante esse ano.</li>
                            <li><strong className="font-semibold text-foreground">Vínculo :</strong> O casamento deve estar inscrito no Registro Civil espanhol. Se o casamento foi realizado no estrangeiro, deve ser feito primeiro o Exequátur ou a inscrição no Consulado/Registro Civil Central.</li>
                            <li><strong className="font-semibold text-foreground">Estado :</strong> Não podem estar separados legalmente nem de fato no momento do pedido.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">3. Nacionalidade Espanhola de Origem</h2>
                        <p className="mb-6">
                            Regulada pelo <strong className="font-semibold text-foreground">Artigo 17 do Código Civil</strong>, esta modalidade reconhece a nacionalidade, geralmente, desde o nascimento.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Quem são espanhóis de origem?</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Ius Sanguinis (Direito de sangue) :</strong> Os nascidos de pai ou mãe espanhóis, independentemente de onde nasçam.</li>
                            <li><strong className="font-semibold text-foreground">Ius Soli (Direito de solo) :</strong>
                                <ul className="list-disc pl-4 mt-2 space-y-2">
                                    <li>Os nascidos em Espanha de pais estrangeiros se, pelo menos, um deles também tiver nascido em Espanha.</li>
                                    <li>Os nascidos em Espanha de pais estrangeiros se ambos carecerem de nacionalidade ou se a legislação de nenhum deles atribuir uma nacionalidade ao filho (evitação da apatridia).</li>
                                    <li>Os nascidos em Espanha cuja filiação não esteja determinada.</li>
                                </ul>
                            </li>
                            <li><strong className="font-semibold text-foreground">Adoção :</strong> O estrangeiro menor de 18 anos adotado por um espanhol adquire, a partir da adoção, a nacionalidade de origem.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">4. Nacionalidade por Opção</h2>
                        <p className="mb-4">O <strong className="font-semibold text-foreground">Artigo 20 do Código Civil</strong> permite a certas pessoas "optar" pela nacionalidade espanhola se cumprirem determinadas condições. É um direito subjetivo.</p>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Casos Clássicos</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary/70">
                            <li>Pessoas que estejam ou tenham estado sujeitas ao <strong className="font-semibold text-foreground">pátrio poder</strong> de um espanhol.</li>
                            <li>Pessoas cujo pai ou mãe tenha sido originalmente espanhol e nascido em Espanha.</li>
                            <li>Adotados por espanhóis maiores de 18 anos (têm um prazo de 2 anos para optar).</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Lei da Memória Democrática (Lei de Netos) – <em className="text-muted-foreground">Vigente até outubro de 2025</em></h3>
                        <p className="mb-4">A Lei 20/2022 introduziu casos temporários fundamentais que permitem optar pela nacionalidade :</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li>Filhos ou netos de nascidos em Espanha como espanhóis de origem.</li>
                            <li>Filhos ou netos de espanhóis que perderam a nacionalidade devido ao exílio (guerra ou dictadura).</li>
                            <li>Filhos maiores de idade daqueles a quem foi reconhecida a nacionalidade pela Lei da Memória Histórica de 2007 ou pela atual Lei da Memória Democrática.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">5. Nacionalidade por Carta de Natureza</h2>
                        <p className="mb-4">Regulada pelo <strong className="font-semibold text-foreground">Artigo 21 do Código Civil</strong>, esta via tem caráter gracioso.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Conceito :</strong> É concedida discricionariamente pelo Governo através de Real Decreto, após avaliar a concorrência de <strong className="font-semibold text-foreground">circunstâncias excepcionais</strong>.</li>
                            <li><strong className="font-semibold text-foreground">Casos habituais :</strong> Atletas de elite, cientistas de renome internacional, vítimas de terrorismo ou pessoas com vínculos extraordinários com Espanha.</li>
                            <li><strong className="font-semibold text-foreground">Procedimento :</strong> É complexo e sem garantias de aprovação, pois depende totalmente da vontade política.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">6. Nacionalidade para Sefarditas (Situação Atual)</h2>
                        <p className="mb-4">A Lei 12/2015 habilitou um procedimento especial para os descendentes de judeus sefarditas expulsos de Espanha.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Estado em 2025 :</strong> O prazo de solicitação sob esta lei <strong className="font-semibold text-foreground">terminou em 2019</strong>. Atualmente, o Ministério da Justiça está resolvendo os processos que foram iniciados no prazo.</li>
                            <li><strong className="font-semibold text-foreground">Vias alternativas :</strong> Os cidadãos de origem sefardita que não aplicaram a tempo podem recorrer à <strong className="font-semibold text-foreground">Nacionalidade por Residência</strong> com o prazo reduzido de <strong className="font-semibold text-foreground">2 anos</strong>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        "arraigo": {
            title: "Arraigos",
            description: "Regulamento de Estrangeiros (2024-2025).",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        O novo Regulamento de Estrangeiros (Real Decreto 1155/2024), em vigor a partir de Maio de 2025, transformou o sistema de Arraigos, flexibilizando requisitos e reduzindo os períodos de permanência para facilitar a integração socio-laboral.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Socio-Laboral</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Permanência:</strong> Reduzida para 2 anos (antes 3).</li>
                            <li><strong className="font-semibold text-foreground">Contrato:</strong> Mínimo 20 horas por semana (SMI).</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos de Segunda Oportunidade</h2>
                        <p className="mb-8">Nova figura para quem teve residência legal prévia e caiu em irregularidade. Permite trabalhar desde o primeiro momento.</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Familiar (Modificado)</h2>
                        <p className="mb-8">Reservado exclusivamente para familiares de cidadãos da UE/EEE ou Suíça. Os familiares de espanhóis passam a tramitar a nova "Residência temporária de familiares de cidadãos espanhóis".</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Social</h2>
                        <p className="mb-4">Permanência reduzida para <strong>2 anos</strong>.</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Com Vínculos Familiares:</strong> Não necessita de relatório de inserção se tiver cônjuge, pais ou filhos residentes.</li>
                            <li><strong className="font-semibold text-foreground">Com Relatório de Inserção:</strong> Obrigatório se não houver família directa.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Socioformativo</h2>
                        <p className="mb-4">Exige 2 anos em Espanha e matrícula em estudos oficiais (Formação Profissional, etc.).</p>
                        <p><strong className="font-semibold text-foreground">Novidade 2025:</strong> Permite trabalhar até 30 horas por semana enquanto estuda.</p>
                    </div>
                </div>
            )
        },
        "reagrupacion-familiar": {
            title: "Reagrupamento Familiar",
            description: "Ajuda legal para reunir a sua família.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Autorização de residência temporária para familiares.</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                        <li><strong>Cônjuge.</strong></li>
                        <li><strong>Filhos (-18 anos).</strong></li>
                        <li><strong>Ascendentes (+65 anos).</strong></li>
                    </ul>
                </div>
            )
        },
        "derecho-penal": {
            title: "Direito Penal",
            description: "Assessoria jurídica e defesa em matéria penal.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Oferecemos serviços abrangentes de assessoria jurídica e defesa na área do direito penal, garantindo que os seus direitos sejam protegidos em todos os momentos.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Defesa em processos penais</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Cancelamento de antecedentes criminais e policiais</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Testes de bafômetro</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Conduzir sem habilitação espanhola</h2>
                    </div>
                </div>
            )
        },
        "derecho-civil": {
            title: "Direito Civil e Matrimonial",
            description: "Gestão de divórcios, separações e acordos regulamentares.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Nós lhe assessoramos nos processos de direito de família, buscando sempre a solução mais benéfica para todas as partes envolvidas.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divórcios por mútuo acordo</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divórcio perante Notário</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divórcio Litigioso</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Pensão de alimentos e guarda e custódia</h2>
                    </div>
                </div>
            )
        },
        "reclamacion-accidentes": { title: "Reclamação de Acidentes", description: "Em breve", content: <p>Em breve</p> }
    },
    ar: {
        "nacionalidad": {
            title: "الجنسية الإسبانية",
            description: "يمثل الحصول على الجنسية الإسبانية أعلى مستوى من التكامل القانوني في الدولة.",
            content: (
                <div className="space-y-6 text-justify" dir="rtl">
                    <p>
                        يمثل الحصول على الجنسية الإسبانية أعلى مستوى من التكامل القانوني في الدولة، حيث يمنح المواطن ليس فقط حقوقاً كاملة داخل إسبانيا، بل أيضاً مواطنة الاتحاد الأوروبي. يحدد النظام القانوني الإسباني، بشكل أساسي من خلال <strong className="font-semibold text-foreground">القانون المدني</strong>، عدة طرق للوصول إلى الجنسية، ولكل منها متطلبات وإجراءات محددة.
                    </p>
                    <p>
                        نقدم فيما يلي تحليلاً شاملاً لجميع الصيغ القانونية المعمول بها، والمصممة لتوجيه عملائنا في تحديد المسار الأكثر ملاءمة لوضعهم الشخصي.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">1. الجنسية الإسبانية عن طريق الإقامة</h2>
                        <p className="mb-6 text-right">
                            هذه هي الطريقة الأكثر شيوعاً للأجانب المقيمين بشكل قانوني في إسبانيا. ينظمها بشكل أساسي <strong className="font-semibold text-foreground">المادة 22 من القانون المدني</strong>. المنح ليس تلقائياً؛ بل هو سلطة للدولة تتطلب الامتثال للمدد وشروط الاندماج.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mb-4 text-right">المتطلبات الأساسية</h3>
                        <p className="mb-4 text-right">لطلب الجنسية عن طريق الإقامة، يجب على المعني إثبات:</p>
                        <ul className="list-disc pr-6 space-y-2 mb-8 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">الإقامة القانونية:</strong> يجب أن يكون المتقدم حاصلاً على تصريح إقامة ساري المفعول. فترة الإقامة (والتي تنطبق على تأشيرة الطالب أو السائح) <em className="text-muted-foreground">لا تحتسب</em> لغرض الجنسية.</li>
                            <li><strong className="font-semibold text-foreground">الاستمرارية:</strong> عدم الغياب لأكثر من 90 يوماً في السنة الواحدة.</li>
                            <li><strong className="font-semibold text-foreground">الإقامة السابقة مباشرة لطلب:</strong> يجب أن يكون التصريح ساري المفعول في لحظة تقديم الطلب.</li>
                            <li><strong className="font-semibold text-foreground">حسن السيرة والسلوك المدني:</strong> عدم وجود سجل جنائي في إسبانيا وفي بلد المنشأ.</li>
                            <li><strong className="font-semibold text-foreground">الاندماج:</strong> إثبات درجة كافية من الاندماج في المجتمع الإسباني (امتحانات CCSE و DELE، ما لم يتم الإعفاء منها).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4 text-right">فترات الإقامة المطلوبة</h3>
                        <p className="mb-4 text-right">تختلف مدة الإقامة حسب أصل المتقدم أو ظروفه.</p>
                        <div className="rounded-xl border border-border overflow-hidden bg-card/50 mb-8 overflow-x-auto">
                            <table className="w-full text-right" dir="rtl">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-semibold text-foreground w-1/4">المدة</th>
                                        <th className="p-4 font-semibold text-foreground">المستفيدون (الحالات القانونية)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">10 سنوات</td>
                                        <td className="p-4"><strong>المدة العامة.</strong> تنطبق على أي أجنبي لا يندرج تحت الحالات المخفضة التالية.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">5 سنوات</td>
                                        <td className="p-4">الأشخاص الذين حصلوا على صفة <strong>لاجئ</strong> أو حق اللجوء السياسي.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">سنتان</td>
                                        <td className="p-4">مواطنو <strong>دول أمريكا اللاتينية</strong> (بما في ذلك بورتوريكو)، أندورا، الفلبين، غينيا الاستوائية، البرتغال أو الأشخاص من أصل سيفارديم.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">سنة واحدة</td>
                                        <td className="p-4">
                                            <ul className="list-disc pr-4 space-y-1 mt-0 marker:text-primary/70">
                                                <li>من ولد في الأراضي الإسبانية.</li>
                                                <li>من تزوج لمدة <strong>سنة واحدة</strong> من إسباني/ة (ولم ينفصلا قانونياً أو فعلياً).</li>
                                                <li>أرمل أو أرملة المواطن الإسباني.</li>
                                                <li>من ولد خارج إسبانيا لأب أو أم أو جد أو جدة كانوا إسبانًا بالأصل.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-4 text-right">اختبارات الاندماج (معهد سيرفانتس)</h3>
                        <p className="mb-4 text-right">ما لم يتم الإعفاء (الدراسة في إسبانيا أو وجود إعاقة معتمدة لدى وزارة العدل):</p>
                        <ul className="list-disc pr-6 space-y-2 mb-8 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">اختبار CCSE:</strong> المعرفة الدستورية والاجتماعية والثقافية لإسبانيا.</li>
                            <li><strong className="font-semibold text-foreground">اختبار DELE A2 (أو أعلى):</strong> دبلوم اللغة الإسبانية كلغة أجنبية (فقط لمواطني الدول التي لا تعتبر الإسبانية لغتها الرسمية).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4 text-right">الوثائق المطلوبة</h3>
                        <p className="mb-4 text-right">لتكوين الملف الإداري، من الضروري تقديم الوثائق التالية (مترجمة ومصدقة/موشحة حسب الحالة):</p>
                        <ul className="list-disc pr-6 space-y-2 mb-8 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">جواز سفر كامل وساري المفعول:</strong> جميع الصفحات، بما في ذلك الصفحات الفارغة.</li>
                            <li><strong className="font-semibold text-foreground">NIE / TIE ساري المفعول.</strong></li>
                            <li><strong className="font-semibold text-foreground">شهادة الميلاد:</strong> من بلد المنشأ، مصدقة/موشحة حسب الأصول ومترجمة (إذا لم تكن بالإسبانية).</li>
                            <li><strong className="font-semibold text-foreground">السجل الجنائي:</strong> من بلد المنشأ، صادر في الأشهر الأخيرة، مصدق/موشح ومترجم.</li>
                            <li><strong className="font-semibold text-foreground">امتحانات معهد سيرفانتس (CCSE و DELE):</strong> شهادة "ناجح" أو شهادات الإعفاء.</li>
                            <li><strong className="font-semibold text-foreground">إثبات دفع الرسوم:</strong> نموذج 790 رمز 026.</li>
                            <li><strong className="font-semibold text-foreground">شهادة السكن (Empadronamiento):</strong> التاريخية والحالية.</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-right">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">2. الجنسية عن طريق الزواج (إقامة مخفضة)</h2>
                        <p className="mb-6">
                            من الشائع الاعتقاد بأن الزواج من إسباني يمنح الجنسية تلقائياً. قانونياً، الزواج هو <strong className="font-semibold text-foreground">سبب لتخفيض المدة</strong> ضمن إطار الجنسية عن طريق الإقامة.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4 text-right">المتطلبات المحددة</h3>
                        <ul className="list-disc pr-6 space-y-2 mb-8 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">المدة:</strong> سنة واحدة من الإقامة القانونية والمستمرة في إسبانيا.</li>
                            <li><strong className="font-semibold text-foreground">التعايش:</strong> يجب أن يكون الزوج الأجنبي مسجلاً في السكن ويتعايش مع الزوج الإسباني خلال تلك السنة.</li>
                            <li><strong className="font-semibold text-foreground">الرابطة:</strong> يجب أن يكون الزواج مسجلاً في السجل المدني الإسباني. إذا تم الزواج في الخارج، يجب إجراء "Exequatur" أو التسجيل في القنصلية/السجل المدني المركزي أولاً.</li>
                            <li><strong className="font-semibold text-foreground">الحالة:</strong> يجب ألا يكونا منفصلين قانونياً أو فعلياً في لحظة تقديم الطلب.</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-right">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">3. الجنسية الإسبانية الأصلية</h2>
                        <p className="mb-6 text-right">
                            ينظمها <strong className="font-semibold text-foreground">المادة 17 من القانون المدني</strong>، وهي الصيغة التي تعترف بالجنسية، عادة، منذ الولادة.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4 text-right">من هم الإسبان بالأصل؟</h3>
                        <ul className="list-disc pr-6 space-y-2 mb-8 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">حق الدم (Ius Sanguinis):</strong> المولودون لأب أو أم إسبانيين، بغض النظر عن مكان ولادتهم.</li>
                            <li><strong className="font-semibold text-foreground">حق الأرض (Ius Soli):</strong>
                                <ul className="list-disc pr-4 mt-2 space-y-2">
                                    <li>المولودون في إسبانيا لأبوين أجانب إذا كان أحدهما على الأقل مولوداً أيضاً في إسبانيا.</li>
                                    <li>المولودون في إسبانيا لأبوين أجانب إذا كانا يفتقران إلى الجنسية أو إذا كانت تشريعات أي منهما لا تمنح الجنسية للطفل (تجنب انعدام الجنسية).</li>
                                    <li>المولودون في إسبانيا الذين لم تحدد هويتهم.</li>
                                </ul>
                            </li>
                            <li><strong className="font-semibold text-foreground">التبني:</strong> الأجنبي الذي يقل عمره عن 18 عاماً والذي يتبناه إسباني يكتسب، منذ لحظة التبني، الجنسية الأصلية.</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-right">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">4. الجنسية عن طريق الاختيار</h2>
                        <p className="mb-4 text-right">تسمح <strong className="font-semibold text-foreground">المادة 20 من القانون المدني</strong> لبعض الأشخاص بـ "اختيار" الجنسية الإسبانية إذا استوفوا شروطاً معينة. هو حق شخصي.</p>
                        <h3 className="text-lg font-semibold text-foreground mb-4 text-right">الحالات الكلاسيكية</h3>
                        <ul className="list-disc pr-6 space-y-2 mb-6 marker:text-primary/70 text-right">
                            <li>الأشخاص الذين هم أو كانوا تحت <strong className="font-semibold text-foreground">الولاية الأبوية</strong> لإسباني.</li>
                            <li>الأشخاص الذين كان أبوهم أو أمهم إسبانيًا بالأصل ومولوداً في إسبانيا.</li>
                            <li>المتبنون من قبل إسبان وعمرهم أكبر من 18 عاماً (لديهم مهلة سنتين للاختيار).</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-foreground mb-2 text-right">قانون الذاكرة الديمقراطية (قانون الأحفاد) – <em className="text-muted-foreground">سارٍ حتى أكتوبر 2025</em></h3>
                        <p className="mb-4 text-right">أدخل القانون 20/2022 حالات مؤقتة رئيسية تسمح باختيار الجنسية:</p>
                        <ul className="list-disc pr-6 space-y-2 marker:text-primary/70 text-right">
                            <li>الأبناء أو الأحفاد للمولودين في إسبانيا كإسبان أصليين.</li>
                            <li>الأبناء أو الأحفاد للإسبان الذين فقدوا جنسيتهم بسبب المنفى (الحرب أو الديكتاتورية).</li>
                            <li>الأبناء البالغون لأولئك الذين تم الاعتراف بجنسيتهم بموجب قانون الذاكرة التاريخية لعام 2007 أو قانون الذاكرة الديمقراطية الحالي.</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-right">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">5. الجنسية بمرسوم ملكي (Carta de Naturaleza)</h2>
                        <p className="mb-4 text-right">ينظمها <strong className="font-semibold text-foreground">المادة 21 من القانون المدني</strong>، وهذا المسار له طابع تقديري.</p>
                        <ul className="list-disc pr-6 space-y-2 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">المفهوم:</strong> تمنحها الحكومة بشكل تقديري بموجب مرسوم ملكي، بعد تقييم وجود <strong className="font-semibold text-foreground">ظروف استثنائية</strong>.</li>
                            <li><strong className="font-semibold text-foreground">الحالات المعتادة:</strong> الرياضيون النخبة، العلماء المرموقون دولياً، ضحايا الإرهاب أو الأشخاص الذين لديهم روابط استثنائية مع إسبانيا.</li>
                            <li><strong className="font-semibold text-foreground">الإجراء:</strong> هو إجراء معقد وبدون ضمانات بالموافقة، حيث يعتمد تماماً على الإرادة السياسية.</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-right">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">6. الجنسية للسيفارديم (الوضع الحالي)</h2>
                        <p className="mb-4 text-right">أتاح القانون 12/2015 إجراءً خاصاً لأحفاد اليهود السيفارديم المطرودين من إسبانيا.</p>
                        <ul className="list-disc pr-6 space-y-2 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">الوضع في عام 2025:</strong> انتهى الموعد النهائي لتقديم الطلبات بموجب هذا القانون في <strong className="font-semibold text-foreground">عام 2019</strong>. حالياً، تقوم وزارة العدل بالبت في الملفات التي بدأت ضمن الموعد النهائي.</li>
                            <li><strong className="font-semibold text-foreground">المسارات البديلة:</strong> يمكن للمواطنين من أصل سيفارديم الذين لم يتقدموا في الوقت المناسب اللجوء إلى <strong className="font-semibold text-foreground">الجنسية عن طريق الإقامة</strong> بمدة مخفضة قدرها <strong className="font-semibold text-foreground">سنتان</strong>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        "arraigo": {
            title: "الإقامة (Arraigos)",
            description: "قانون الهجرة الجديد (2024-2025).",
            content: (
                <div className="space-y-6 text-justify" dir="rtl">
                    <p>
                        أحدث قانون الهجرة الجديد (المرسوم الملكي 1155/2024)، الساري اعتباراً من مايو 2025، تحولاً في نظام "الأرايغو"، حيث خفف المتطلبات وقلل فترات الإقامة المطلوبة لتسهيل الاندماج الاجتماعي والمهني.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">الأرايغو الاجتماعي والمهني (Socio-Laboral)</h2>
                        <ul className="list-disc pr-6 space-y-2 mb-8 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">الإقامة:</strong> تم تخفيضها إلى سنتين (بدلاً من 3 سنوات).</li>
                            <li><strong className="font-semibold text-foreground">العقد:</strong> حد أدنى 20 ساعة في الأسبوع (SMI).</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">أرايغو الفرصة الثانية (Segunda Oportunidad)</h2>
                        <p className="mb-8 text-right">صيغة جديدة لأولئك الذين لديهم إقامة قانونية سابقة وفقدوها. يسمح بالعمل منذ اللحظة الأولى.</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">الأرايغو العائلي (معدل)</h2>
                        <p className="mb-8 text-right">مخصص حصرياً لأفراد عائلات مواطني الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية أو سويسرا. أما أفراد عائلات المواطنين الإسبان فيقومون الآن بمعالجة "الإقامة المؤقتة لأفراد عائلة المواطنين الإسبان" الجديدة.</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">الأرايغو الاجتماعي (Social)</h2>
                        <p className="mb-4 text-right">تم تخفيض فترة الإقامة إلى <strong>سنتين</strong>.</p>
                        <ul className="list-disc pr-6 space-y-2 mb-8 marker:text-primary/70 text-right">
                            <li><strong className="font-semibold text-foreground">مع وجود روابط عائلية:</strong> لا داعي لتقرير الاندماج إذا كان لديك زوج/ة أو والدان أو أبناء مقيمون.</li>
                            <li><strong className="font-semibold text-foreground">مع تقرير الاندماج:</strong> إلزامي في حال عدم وجود عائلة مباشرة.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">الأرايغو الاجتماعي التعليمي (Socioformativo)</h2>
                        <p className="mb-4 text-right">يتطلب البقاء لمدة سنتين في إسبانيا والتسجيل في دراسات رسمية (التدريب المهني، إلخ).</p>
                        <p className="text-right"><strong className="font-semibold text-foreground">تحديث 2025:</strong> يسمح بالعمل لمدة تصل إلى 30 ساعة في الأسبوع أثناء الدراسة.</p>
                    </div>
                </div>
            )
        },
        "reagrupacion-familiar": {
            title: "لم الشمل العائلي",
            description: "مساعدة قانونية لجمع شمل عائلتك في إسبانيا.",
            content: (
                <div className="space-y-6 text-justify" dir="rtl">
                    <p>تصريح إقامة مؤقت لأفراد عائلة المقيمين الأجانب في إسبانيا.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">من يمكن لم شمله؟</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70 pr-6">
                            <li><strong>الزوج أو الزوجة.</strong></li>
                            <li><strong>الأبناء (أقل من 18 سنة).</strong></li>
                            <li><strong>الآباء (فوق 65 سنة).</strong></li>
                        </ul>
                    </div>
                </div>
            )
        },
        "derecho-penal": {
            title: "القانون الجنائي",
            description: "المشورة القانونية والدفاع في المسائل الجنائية.",
            content: (
                <div className="space-y-6 text-justify" dir="rtl">
                    <p>نقدم خدمات استشارية دفاعية وقانونية شاملة في مجال القانون الجنائي، مما يضمن حماية حقوقك في جميع الأوقات.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">الدفاع في الإجراءات الجنائية</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">إلغاء السجلات الجنائية والشرطية</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">اختبارات الكحول</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">القيادة بدون رخصة إسبانية</h2>
                    </div>
                </div>
            )
        },
        "derecho-civil": {
            title: "القانون المدني والزوجي",
            description: "إدارة حالات الطلاق والانفصال والاتفاقات التنظيمية.",
            content: (
                <div className="space-y-6 text-justify" dir="rtl">
                    <p>نرافقك في إجراءات قانون الأسرة، ونسعى دائماً للحل الأكثر فائدة لجميع الأطراف المعنية.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">الطلاق بالاتفاق المتبادل</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">الطلاق أمام كاتب العدل</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">الطلاق المتنازع عليه</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6 text-right">نفقة الطفل وحضانته</h2>
                    </div>
                </div>
            )
        },
        "reclamacion-accidentes": { title: "مطالبات الحوادث", description: "قريباً", content: <p>قريباً</p> }
    },
    zh: {
        "nacionalidad": {
            title: "西班牙国籍",
            description: "获得西班牙国籍代表了国家内部最高程度的法律融合。",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        获得西班牙国籍代表了国家内部最高程度的法律融合，赋予公民不仅在西班牙境内的充分权利，还包括欧洲联盟公民身份。西班牙法律体系主要通过<strong className="font-semibold text-foreground">《民法典》</strong>确立了多种获得国籍的途径，每种途径都有特定的要求和程序。
                    </p>
                    <p>
                        以下我们对当前所有合法形式进行了全面分析，旨在指导我们的客户确定最适合其个人情况的途径。
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">1. 居住入籍</h2>
                        <p className="mb-6">
                            这是居住在西班牙的外国人最常用的途径。它主要受<strong className="font-semibold text-foreground">《民法典》第22条</strong>的约束。获得国籍并非自动的；这是国家的一项特权，要求申请人遵守居住期限并满足社会融入要求。
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mb-4">基本要求</h3>
                        <p className="mb-4">要申请居住入籍，申请人必须证明：</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">合法居住：</strong> 申请人必须持有有效的居留许可（Residencia）。以学生或旅游签身份的停留（Estancia）<em className="text-muted-foreground">不计入</em>入籍所需的居住时间。</li>
                            <li><strong className="font-semibold text-foreground">连续居住：</strong> 每年在境外的时间不超过 90 天。</li>
                            <li><strong className="font-semibold text-foreground">申请前立即居住：</strong> 在申请时居留许可必须处于有效期内。</li>
                            <li><strong className="font-semibold text-foreground">良好的公民行为：</strong> 在西班牙和原籍国均无犯罪记录。</li>
                            <li><strong className="font-semibold text-foreground">社会融入：</strong> 证明对西班牙社会的融入程度（通过 CCSE 和 DELE 考试，除非获得豁免）。</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">所需居住期限</h3>
                        <p className="mb-4">居住时间根据申请人的原籍或个人情况而有所不同：</p>
                        <div className="rounded-xl border border-border overflow-hidden bg-card/50 mb-8 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-semibold text-foreground w-1/4">期限</th>
                                        <th className="p-4 font-semibold text-foreground">受益人（法定情形）</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">10年</td>
                                        <td className="p-4"><strong>一般期限。</strong> 适用于任何不属于以下缩短期情形的外国人。</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">5年</td>
                                        <td className="p-4">已获得<strong>难民</strong>身份或政治庇护的人员。</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">2年</td>
                                        <td className="p-4"><strong>伊比利亚美洲国家</strong>国民（包括波多黎各）、安道尔、菲律宾、赤道几内亚、葡萄牙国民，或具有塞法迪（Sefardí）血统的人员。</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">1年</td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-4 space-y-1 mt-0 marker:text-primary/70">
                                                <li>在西班牙领土出生的人。</li>
                                                <li>与西班牙公民<strong>结婚满一年</strong>（且无分居或事实分居）的人。</li>
                                                <li>西班牙公民的鳏夫/寡妇。</li>
                                                <li>父母或祖父母原籍为西班牙人且出生在海外的人。</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-4">融入测试（塞万提斯学院）</h3>
                        <p className="mb-4">除非符合豁免条件（如在西班牙完成学业或经司法部认可的残疾证明）：</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">CCSE 测试：</strong> 西班牙宪法和社会文化知识。</li>
                            <li><strong className="font-semibold text-foreground">DELE A2（或更高）：</strong> 西班牙语作为外语的证书（仅针对官方语言非西班牙语国家的国民）。</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">必备文件</h3>
                        <p className="mb-4">为了准备行政卷宗，必须提交以下文件（在适用时需翻译及认证/海牙认证）：</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">完整有效的护照：</strong> 包含所有页面，包括空白页。</li>
                            <li><strong className="font-semibold text-foreground">有效的 NIE / TIE。</strong></li>
                            <li><strong className="font-semibold text-foreground">出生证明：</strong> 原籍国签发，经认证/海牙认证及翻译（若非西班牙语）。</li>
                            <li><strong className="font-semibold text-foreground">无犯罪记录证明：</strong> 原籍国最近开具，经认证/海牙认证及翻译。</li>
                            <li><strong className="font-semibold text-foreground">塞万提斯学院考试证书：</strong> CCSE 和 DELE 合格证明或豁免证明。</li>
                            <li><strong className="font-semibold text-foreground">缴费证明：</strong> Modelo 790 编码 026。</li>
                            <li><strong className="font-semibold text-foreground">住址证明 (Empadronamiento)：</strong> 历史记录和当前记录。</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">2. 婚后入籍（缩短期居住）</h2>
                        <p className="mb-6">
                            一个常见的误区是认为与西班牙人结婚后即自动获得国籍。在法律上，婚姻是居住入籍框架下的一种<strong className="font-semibold text-foreground">缩短期限的理由</strong>。
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">特定要求</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">期限：</strong> 在西班牙合法且连续居住满一年。</li>
                            <li><strong className="font-semibold text-foreground">共同居住：</strong> 外籍配偶在该年内必须与西班牙配偶登记在同一住址并共同生活。</li>
                            <li><strong className="font-semibold text-foreground">婚姻关系：</strong> 婚姻必须在西班牙民事登记处注册。若在海外结婚，必须先进行 Exequátur 或在领事馆/中央民事登记处注册。</li>
                            <li><strong className="font-semibold text-foreground">状态：</strong> 在申请时双方不得处于法律分居或事实分居状态。</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">3. 原始西班牙国籍</h2>
                        <p className="mb-6">
                            受<strong className="font-semibold text-foreground">《民法典》第17条</strong>约束，这种形式通常从出生起就确认国籍。
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">谁是原始西班牙人？</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">血缘原则 (Ius Sanguinis)：</strong> 父母中有一方是西班牙人的人，无论出生地何处。</li>
                            <li><strong className="font-semibold text-foreground">出生地原则 (Ius Soli)：</strong>
                                <ul className="list-disc pl-4 mt-2 space-y-2">
                                    <li>在西班牙出生的人，且其父母中至少有一方也是在西班牙出生的。</li>
                                    <li>在西班牙出生的人，且父母双方均无国籍，或父母双方国家的法律均不赋予该子女国籍（旨在避免无国籍状态）。</li>
                                    <li>在西班牙出生且亲子关系不明的人。</li>
                                </ul>
                            </li>
                            <li><strong className="font-semibold text-foreground">收养：</strong> 由西班牙人收养的 18 岁以下外国人自收养之刻起获得原始国籍。</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">4. 选择入籍</h2>
                        <p className="mb-4"><strong className="font-semibold text-foreground">《民法典》第20条</strong>允许符合特定条件的个人“选择”西班牙国籍。这是一项主观权利。</p>
                        <h3 className="text-lg font-semibold text-foreground mb-4">经典案例</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary/70">
                            <li>受过或正受西班牙人<strong className="font-semibold text-foreground">亲权</strong>约束的人。</li>
                            <li>父母一方为原籍西班牙人且出生在西班牙的人。</li>
                            <li>由西班牙人收养的 18 岁以上人员（有 2 年期限可供选择）。</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-foreground mb-2">《民主记忆法》（后代法）—— <em className="text-muted-foreground">有效期至 2025 年 10 月</em></h3>
                        <p className="mb-4">第 20/2022 号法律引入了允许选择国籍的关键临时情形：</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li>在西班牙出生且原本具有原始国籍者的子女或孙子女。</li>
                            <li>因流亡（战争或独裁）而丧失国籍的西班牙人的子女或孙子女。</li>
                            <li>已通过 2007 年《历史记忆法》或现行《民主记忆法》获得国籍者的成年子女。</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">5. 特许入籍 (Carta de Naturaleza)</h2>
                        <p className="mb-4">受<strong className="font-semibold text-foreground">《民法典》第21条</strong>约束，此途径具有授予性质。</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">概念：</strong> 由政府在评估存在<strong className="font-semibold text-foreground">特殊情况</strong>后，通过皇家法令酌情授予。</li>
                            <li><strong className="font-semibold text-foreground">常见案例：</strong> 顶尖运动员、国际知名科学家、恐怖主义受害者或与西班牙有特殊联系的人。</li>
                            <li><strong className="font-semibold text-foreground">程序：</strong> 程序复杂且不保证通过，完全取决于政治意愿。</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">6. 塞法迪人入籍（现状）</h2>
                        <p className="mb-4">第 12/2015 号法律曾为被驱逐出西班牙的塞法迪犹太后裔开启了特殊程序。</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">2025 年现状：</strong> 该法律规定的申请期限已于 <strong className="font-semibold text-foreground">2019 年结束</strong>。目前，司法部正在处理在截止日期前提交的卷宗。</li>
                            <li><strong className="font-semibold text-foreground">替代途径：</strong> 未能及时申请的塞法迪后裔可以利用 <strong className="font-semibold text-foreground">居住入籍</strong> 途径，其居住期限可缩短至 <strong className="font-semibold text-foreground">2年</strong>。</li>
                        </ul>
                    </div>
                </div>
            )
        },
        "arraigo": {
            title: "扎根居留 (Arraigos)",
            description: "新移民法规 (2024-2025)。",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        2025年5月生效的新移民法规 (皇家法令 1155/2024) 改革了扎根居留体系，放宽了要求并缩短了所需的居住时间，以促进社会和劳动力融合。
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">社会劳工扎根 (Socio-Laboral)</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">居住时间：</strong> 缩短至 2 年（此前为 3 年）。</li>
                            <li><strong className="font-semibold text-foreground">合同：</strong> 每周最少 20 小时。</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">二次机会扎根 (Segunda Oportunidad)</h2>
                        <p className="mb-8">针对曾持有合法居留但失去身份的人的新形式。允许从第一天起就开始工作。</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">家庭扎根 (Family Arraigo)</h2>
                        <p className="mb-8">现仅限欧盟、欧洲经济区或瑞士公民的亲属。西班牙公民的亲属现在申请新的“西班牙籍人员亲属临时居留”。</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">社会扎根 (Social)</h2>
                        <p className="mb-4">居住时间缩短至 <strong>2 年</strong>。</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">有亲属关系：</strong> 如果有配偶、父母或持有家居留的孩子，则不需要融入报告。</li>
                            <li><strong className="font-semibold text-foreground">需集成报告：</strong> 如果没有直系亲属，则必须提供。</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">社会培训扎根 (Socioformativo)</h2>
                        <p className="mb-4">要求在西班牙居住满 2 年并注册参加官方学习（职业培训等）。</p>
                        <p><strong className="font-semibold text-foreground">2025 更新：</strong> 允许在学习期间每周工作长达 30 小时。</p>
                    </div>
                </div>
            )
        },
        "reagrupacion-familiar": {
            title: "家庭团聚",
            description: "帮助您在西班牙与家人团聚的法律援助。",
            content: (
                <div className="space-y-6 text-justify">
                    <p>为居住在西班牙的外国人的家庭成员提供的临时居留许可。</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">谁可以申请团聚？</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong>配偶或伴侣。</strong></li>
                            <li><strong>子女 (18岁以下)。</strong></li>
                            <li><strong>父母 (65岁以上)。</strong></li>
                        </ul>
                    </div>
                </div>
            )
        },
        "derecho-penal": {
            title: "刑法",
            description: "刑事事务的法律咨询和辩护。",
            content: (
                <div className="space-y-6 text-justify">
                    <p>我们提供刑法领域的综合法律咨询和辩护服务，确保您的权利始时刻受到保护。</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">刑事诉讼辩护</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">取消刑事和警务记录</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">酒精测试</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">无西班牙驾照驾驶</h2>
                    </div>
                </div>
            )
        },
        "derecho-civil": {
            title: "民事法律及婚姻事务",
            description: "处理离婚、分居及相关协议。",
            content: (
                <div className="space-y-6 text-justify">
                    <p>我们在家庭法诉讼过程中为您提供协助，始终寻求对所有相关方最有利的解决方案。</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">协议离婚</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">公证离婚</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">诉讼离婚</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">子女抚养费及监护权</h2>
                    </div>
                </div>
            )
        },
        "reclamacion-accidentes": { title: "事故索赔", description: "即将推出", content: <p>即将推出</p> }
    },
    ro: {
        "nacionalidad": {
            title: "Cetățenie spaniolă",
            description: "Obținerea cetățeniei spaniole reprezintă cel mai înalt nivel de integrare legală în stat.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        Obținerea cetățeniei spaniole reprezintă cel mai înalt nivel de integrare legală în stat, acordând cetățeanului nu doar drepturi depline în Spania, ci și cetățenia Uniunii Europene. Sistemul juridic spaniol, în principal prin <strong className="font-semibold text-foreground">Codul Civil</strong>, stabilește diverse căi către cetățenie, fiecare cu cerințe și proceduri specifice.
                    </p>
                    <p>
                        Mai jos, prezentăm o analiză cuprinzătoare a tuturor opțiunilor legale actuale, concepute pentru a ghida clienții noștri în identificarea celei mai potrivite căi pentru circumstanțele lor personale.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">1. Cetățenie spaniolă prin rezidență</h2>
                        <p className="mb-6">
                            Aceasta este cea mai comună cale pentru străinii care locuiesc legal în Spania. Este reglementată în principal de <strong className="font-semibold text-foreground">articolul 22 din Codul Civil</strong>. Acordarea cetățeniei nu este automată; este o prerogativă a statului care impune respectarea anumitor termene și cerințe de integrare.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Cerințe esențiale</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Rezidență legală:</strong> Solicitantul trebuie să dețină un permis de ședere valabil. Șederea temporară (cum ar fi vizele de student sau turistic) <em className="text-muted-foreground">nu</em> se ia în considerare pentru obținerea cetățeniei.</li>
                            <li><strong className="font-semibold text-foreground">Rezidență continuă:</strong> Nu mai mult de 90 de zile pe an în afara Spaniei.</li>
                            <li><strong className="font-semibold text-foreground">Rezidență imediat anterioară:</strong> Permisul trebuie să fie valabil la momentul depunerii cererii.</li>
                            <li><strong className="font-semibold text-foreground">Bună conduită civică:</strong> Fără cazier judiciar în Spania sau în țara de origine.</li>
                            <li><strong className="font-semibold text-foreground">Integrare:</strong> Demonstrarea unui grad suficient de integrare în societatea spaniolă (examenele CCSE și DELE, cu excepția cazului în care există scutiri).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Perioade de rezidență necesare</h3>
                        <div className="rounded-xl border border-border overflow-hidden bg-card/50 mb-8 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-semibold text-foreground w-1/4">Perioadă</th>
                                        <th className="p-4 font-semibold text-foreground">Beneficiari (Supuneri Legale)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">10 Ani</td>
                                        <td className="p-4"><strong>Termen General.</strong> Se aplică oricărui străin care nu se încadrează în următoarele categorii reduse.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">5 Ani</td>
                                        <td className="p-4">Persoane care au obținut statutul de <strong>refugiat</strong> sau azil politic.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">2 Ani</td>
                                        <td className="p-4">Cetățeni ai <strong>țărilor ibero-americane</strong> (inclusiv Puerto Rico), Andorra, Filipine, Guineea Ecuatorială, Portugalia sau persoane de origine sefardă.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">1 An</td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-4 space-y-1 mt-0 marker:text-primary/70">
                                                <li>Oricine născut pe teritoriul spaniol.</li>
                                                <li>Oricine este <strong>căsătorit cu un cetățean spaniol</strong> de un an (și nu este separat legal sau de facto).</li>
                                                <li>Văduva sau văduvul unui cetățean spaniol.</li>
                                                <li>Oricine născut în afara Spaniei, dintr-un tată, mamă, bunic sau bunică care a fost inițial spaniol.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Teste de Integrare (Instituto Cervantes)</h3>
                        <p className="mb-4">Cu excepția cazurilor de scutire (școlarizare în Spania sau dizabilitate acreditată de Ministerul Justiției):</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Test CCSE:</strong> Cunoștințe constituționale și socioculturale ale Spaniei.</li>
                            <li><strong className="font-semibold text-foreground">Test DELE A2 (sau superior):</strong> Diplomă de spaniolă ca limbă străină (numai pentru cetățenii țărilor în care spaniola nu este limbă oficială).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-4">Documentație necesară</h3>
                        <p className="mb-4">Pentru completarea dosarului administrativ, următoarele documente sunt esențiale (traduse și legalizate/apostilate, dacă este cazul):</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Pașaport valabil:</strong> Toate paginile, inclusiv cele goale.</li>
                            <li><strong className="font-semibold text-foreground">NIE/TIE valabil.</strong></li>
                            <li><strong className="font-semibold text-foreground">Certificat de naștere:</strong> Din țara de origine, legalizat/apostilat și tradus în mod corespunzător (dacă nu vorbitor de spaniolă).</li>
                            <li><strong className="font-semibold text-foreground">Cazier judiciar:</strong> Din țara de origine, emis în ultimele luni, legalizat/apostilat și tradus.</li>
                            <li><strong className="font-semibold text-foreground">Examene ale Institutului Cervantes (CCSE și DELE):</strong> Dovada promovării sau certificatele de scutire.</li>
                            <li><strong className="font-semibold text-foreground">Dovada plății taxei:</strong> Formularul 790, cod 026.</li>
                            <li><strong className="font-semibold text-foreground">Certificat de înregistrare (Empadronamiento):</strong> Istoric și actual (Deși administrația îl poate consulta, este recomandabil să îl furnizați pentru a evita întârzierile).</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">2. Cetățenie prin căsătorie (Rezidență redusă)</h2>
                        <p className="mb-6">
                            Este o concepție greșită des întâlnită că căsătoria cu un cetățean spaniol acordă automat cetățenia. Din punct de vedere legal, căsătoria este un caz de cerințe de rezidență reduse pentru Cetățenia prin rezidență.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Cerințe specifice</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Perioada de rezidență:</strong> Un an de rezidență legală și continuă în Spania.</li>
                            <li><strong className="font-semibold text-foreground">Concubinaj:</strong> Soțul/soția străină trebuie să fie înregistrată și să locuiască cu soțul/soția spaniolă în cursul anului respectiv.</li>
                            <li><strong className="font-semibold text-foreground">Relație:</strong> Căsătoria trebuie înregistrată în Registrul Civil spaniol. Dacă căsătoria a avut loc în străinătate, trebuie obținut mai întâi Exequaturul sau înregistrarea la Consulat/Registrul Civil Central.</li>
                            <li><strong className="font-semibold text-foreground">Stare civilă:</strong> Nu pot fi separați legal sau de fapt la momentul depunerii cererii.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">3. Cetățenie spaniolă de origine</h2>
                        <p className="mb-6">
                            Reglementată la articolul 17 din Codul Civil, această modalitate recunoaște, în general, cetățenia de la naștere.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Cine sunt spaniolii de origine?</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Ius Sanguinis (Dreptul de sânge):</strong> Cei născuți dintr-un tată sau o mamă spaniolă, indiferent de locul în care s-au născut.</li>
                            <li><strong className="font-semibold text-foreground">Ius Soli (Dreptul de sol):</strong>
                                <ul className="list-disc pl-4 mt-2 space-y-2">
                                    <li>Cei născuți în Spania din părinți străini, dacă cel puțin unul dintre ei s-a născut și în Spania.</li>
                                    <li>Cei născuți în Spania din părinți străini, dacă ambii sunt apatrizi sau dacă legislația niciunuia dintre părinți nu acordă copilului o cetățenie (prevenirea apatridiei).</li>
                                    <li>Cei născuți în Spania a căror filiație este nedeterminată.</li>
                                </ul>
                            </li>
                            <li><strong className="font-semibold text-foreground">Adopție:</strong> Un străin sub 18 ani adoptat de un cetățean spaniol dobândește cetățenia spaniolă din momentul adopției.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">4. Cetățenie prin opțiune</h2>
                        <p className="mb-4"><strong className="font-semibold text-foreground">Articolul 20 din Codul Civil</strong> permite anumitor persoane să "opteze" pentru cetățenia spaniolă dacă îndeplinesc anumite condiții. Este un drept subiectiv, nu o concesie discreționară.</p>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Cazuri clasice</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-primary/70">
                            <li>Persoane care sunt sau au fost sub <strong className="font-semibold text-foreground">autoritatea părintească</strong> a unui spaniol.</li>
                            <li>Persoane al căror tată sau mamă a fost spaniol la origine și născut în Spania.</li>
                            <li>Adoptați de spanioli cu vârsta peste 18 ani (au la dispoziție un termen de 2 ani pentru a opta).</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Legea Memoriei Democratice (Legea nepoților) – <em className="text-muted-foreground">Vigente până în octombrie 2025</em></h3>
                        <p className="mb-4">Legea 20/2022 a introdus cazuri temporare cheie care permit optarea pentru cetățenie:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li>Copii sau nepoți ai celor născuți în Spania ca spanioli de origine.</li>
                            <li>Copii sau nepoți ai spaniolilor care și-au pierdut cetățenia din cauza exilului (război sau dictatură).</li>
                            <li>Copii majori ai celor cărora le-a fost recunoscută cetățenia prin Legea Memoriei Istorice din 2007 sau actuala Lege a Memoriei Democratice.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">5. Cetățenie prin Cartă de Natură</h2>
                        <p className="mb-4">Reglementată la <strong className="font-semibold text-foreground">Articolul 21 din Codul Civil</strong>, această cale are caracter de grație și nu se supune normelor generale de procedură administrativă.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Concept:</strong> Este acordată discreționar de către Guvern prin Decret Regal, după evaluarea existenței unor <strong className="font-semibold text-foreground">circumstanțe excepționale</strong>.</li>
                            <li><strong className="font-semibold text-foreground">Cazuri obișnuite:</strong> Sportivi de elită, oameni de știință de renume internațional, victime ale terorismului sau persoane cu legături extraordinare cu Spania care nu se încadrează în alte căi.</li>
                            <li><strong className="font-semibold text-foreground">Procedură:</strong> Este complexă și fără garanții de aprobare, deoarece depinde în întregime de voința politică și administrativă a Consiliului de Miniștri.</li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">6. Cetățenie pentru sefarzi (Situația actuală)</h2>
                        <p className="mb-4">Legea 12/2015 a activat o procedură specială pentru descendenții evreilor sefarzi expulzați din Spania.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Situația în 2025:</strong> Termenul de solicitare sub această lege <strong className="font-semibold text-foreground">s-a încheiat în 2019</strong>. În prezent, Ministerul Justiției soluționează dosarele care au fost inițiate în termen.</li>
                            <li><strong className="font-semibold text-foreground">Căi alternative:</strong> Descendenții sefarzi care nu au aplicat la timp pot apela la <strong className="font-semibold text-foreground">Cetățenia prin rezidență</strong> cu termenul redus de <strong className="font-semibold text-foreground">2 ani</strong>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        "arraigo": {
            title: "Arraigos",
            description: "Regulamentul privind Imigrația (2024-2025).",
            content: (
                <div className="space-y-6 text-justify">
                    <p>
                        Noul Regulament privind Imigrația (Decretul Regal 1155/2024), în vigoare din mai 2025, a transformat sistemul de Arraigos, flexibilizând cerințele și reducând perioadele de ședere necesare pentru a facilita incluziunea socio-laborală.
                    </p>

                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Socio-Laboral</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Ședere:</strong> Redusă la 2 ani (anterior 3).</li>
                            <li><strong className="font-semibold text-foreground">Contract:</strong> Minim 20 ore pe săptămână (SMI).</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos de a doua șansă (Segunda Oportunidad)</h2>
                        <p className="mb-8">Nouă figură pentru cei care au avut rezidență legală anterioară și au căzut în neregularitate. Permite munca din prima clipă.</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos Familial (Modificat)</h2>
                        <p className="mb-8">Rezervat exclusiv pentru rudele cetățenilor UE/SEE sau Elveția. Rudele cetățenilor spanioli procesează acum noua „Rezidență temporară pentru membrii familiei cetățenilor spanioli”.</p>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigo Social</h2>
                        <p className="mb-4">Ședere redusă la <strong>2 ani</strong>.</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong className="font-semibold text-foreground">Cu legături de familie:</strong> Nu necesită raport de integrare dacă aveți soț/soție, părinți sau copii rezidenți.</li>
                            <li><strong className="font-semibold text-foreground">Cu raport de integrare:</strong> Obligatoriu dacă nu există familie directă.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Arraigos Socioformativ</h2>
                        <p className="mb-4">Necesită 2 ani în Spania și înscrierea în studii oficiale (Formare Profesională etc.).</p>
                        <p><strong className="font-semibold text-foreground">Noutate 2025:</strong> Permite munca până la 30 de ore pe săptămână în timpul studiilor.</p>
                    </div>
                </div>
            )
        },
        "reagrupacion-familiar": {
            title: "Reîntregirea Familiei",
            description: "Asistență juridică pentru reunirea familiei.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Autorizație de rezidență temporară pentru membrii familiei.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Cine poate fi reunit?</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary/70">
                            <li><strong>Soț/Soție.</strong></li>
                            <li><strong>Copii (sub 18 ani).</strong></li>
                            <li><strong>Ascendenți (peste 65 ani).</strong></li>
                        </ul>
                    </div>
                </div>
            )
        },
        "derecho-penal": {
            title: "Drept Penal",
            description: "Consultanță juridică și apărare în materie penală.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Oferim servicii complete de consultanță juridică și apărare în domeniul dreptului penal, garantând protecția drepturilor dumneavoastră în orice moment.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Apărarea în procesele penale</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Anularea cazierului judiciar și a evidențelor poliției</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Teste de alcoolemie</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Conducerea fără permis spaniol</h2>
                    </div>
                </div>
            )
        },
        "derecho-civil": {
            title: "Drept Civil și Matrimonial",
            description: "Gestionarea divorțurilor, separărilor și acordurilor de reglementare.",
            content: (
                <div className="space-y-6 text-justify">
                    <p>Vă însoțim în procesele de drept al familiei, căutând întotdeauna soluția cea mai avantajoasă pentru toate părțile implicate.</p>
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorțuri prin acord mutual</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorț în fața Notarului</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Divorț Contencios</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary border-b border-primary/20 pb-2 mb-6">Pensie alimentară și custodia copilului</h2>
                    </div>
                </div>
            )
        },
        "reclamacion-accidentes": { title: "Reclamații Accidente", description: "În curând", content: <p>În curând</p> }
    },
}

export function getServiceContent(locale: Locale, slug: string): ServiceData | null {
    // Fallback to English/Spanish for now or generic
    const localeServices = serviceTranslations[locale] || serviceTranslations[defaultLocale]
    return localeServices[slug] || serviceTranslations[defaultLocale][slug] || null
}
