export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidad</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Información General</h2>
            <p className="text-muted-foreground leading-relaxed">
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016,
              relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a
              la libre circulación de estos datos (RGPD), Carolina Morales Abogada informa a los usuarios de esta página
              web sobre su política de protección de datos de carácter personal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Responsable del Tratamiento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Identidad: Carolina Morales
              <br />
              Dirección: Av. Principal 123, Centro, Ciudad
              <br />
              Email: contacto@carolinamorales.com
              <br />
              Teléfono: +34 123 456 789
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Finalidad del Tratamiento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los datos personales que nos proporcione serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Responder a las consultas realizadas a través de los formularios de contacto</li>
              <li>Gestionar la prestación de servicios profesionales contratados</li>
              <li>Enviar comunicaciones sobre nuestros servicios (con su consentimiento previo)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Derechos de los Usuarios</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los usuarios tienen derecho a acceder, rectificar, suprimir, limitar el tratamiento, portabilidad de datos
              y oposición. Para ejercer estos derechos, pueden contactarnos en contacto@carolinamorales.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Conservación de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los datos personales se conservarán mientras sean necesarios para las finalidades para las que fueron
              recabados y, posteriormente, durante el tiempo que sea necesario para atender responsabilidades derivadas
              del tratamiento.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
