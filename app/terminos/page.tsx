export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Términos y Condiciones</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Objeto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los presentes Términos y Condiciones regulan el uso del sitio web www.carolinamorales.com y la prestación
              de servicios profesionales de asesoría legal por parte de Carolina Morales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Servicios Profesionales</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los servicios prestados incluyen asesoría y representación legal en las áreas de derecho civil, familiar,
              corporativo e inmobiliario, conforme a la legislación vigente y el código deontológico de la abogacía.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Honorarios</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los honorarios profesionales se establecerán en función de la complejidad del caso, el tiempo dedicado y
              los recursos necesarios. Se informará al cliente de forma transparente antes de iniciar cualquier
              actuación profesional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Confidencialidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Toda la información proporcionada por el cliente será tratada con absoluta confidencialidad, cumpliendo
              con el secreto profesional de la abogacía y la normativa de protección de datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              El ejercicio profesional se realizará con la máxima diligencia y profesionalidad. No obstante, no se
              garantizan resultados específicos en procedimientos judiciales, dado que estos dependen de múltiples
              factores ajenos al control profesional.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
