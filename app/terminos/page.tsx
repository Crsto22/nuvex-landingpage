import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'

export const metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso de la plataforma Nuvex.',
  alternates: { canonical: '/terminos' },
}

const updatedAt = '9 de noviembre de 2026'

export default function TerminosPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="bg-[#101d69] px-4 pb-20 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Términos y Condiciones</h1>
          <p className="text-xl text-white/80">Última actualización: {updatedAt}</p>
        </div>
      </section>

      <article className="prose prose-lg mx-auto max-w-4xl px-4 py-16 text-gray-700 md:py-24">
        <p className="lead text-xl text-gray-600">
          Estos Términos y Condiciones regulan el acceso y uso del sitio web y la plataforma Nuvex. Al crear una cuenta,
          contratar un plan o utilizar el Servicio, aceptas estos términos en representación propia o de la empresa a la que
          representas. Si no estás de acuerdo, no utilices el Servicio.
        </p>

        <h2>1. Identificación del proveedor</h2>
        <p>
          Nuvex es una plataforma operada por <strong>CORDEX T &amp; D S.A.C.</strong>, con RUC N.° 20615136663,
          domicilio en Av. Los Ciruelos N.° 500, San Juan de Lurigancho, Lima, Perú (en adelante, “Nuvex”, “nosotros”
          o “el Proveedor”). Puedes contactarnos en <a href="mailto:contacto@nuvex.pe">contacto@nuvex.pe</a>.
        </p>

        <h2>2. El Servicio</h2>
        <p>
          Nuvex es una solución de software como servicio (SaaS) para la gestión comercial de negocios. Según el plan
          contratado, puede incluir punto de venta, caja, inventario, catálogo de productos, clientes, reportes, cuentas por
          cobrar, cotizaciones, envíos, asistencia de trabajadores y facturación electrónica.
        </p>
        <p>
          Algunas funcionalidades se conectan con servicios de terceros, tales como SUNAT, proveedores de mensajería,
          logística, almacenamiento en la nube, analítica y canales de comunicación. Su disponibilidad depende también de
          dichos terceros.
        </p>

        <h2>3. Cuenta, acceso y seguridad</h2>
        <ul>
          <li>Debes proporcionar información exacta, completa y actualizada al registrarte.</li>
          <li>Eres responsable de las credenciales de tus usuarios y de toda actividad realizada desde tu cuenta.</li>
          <li>Debes informar de inmediato cualquier acceso no autorizado o incidente de seguridad conocido.</li>
          <li>Podemos suspender accesos para proteger la seguridad del Servicio, investigar un uso indebido o cumplir la ley.</li>
        </ul>

        <h2>4. Planes, prueba, pagos y renovación</h2>
        <p>
          Los precios, funciones, límites y vigencia de cada plan son los publicados o acordados al momento de la contratación.
          Cuando esté disponible, el periodo de prueba es de catorce (14) días, salvo que se indique otra condición en la oferta
          aplicable. Al terminarlo, el acceso a funcionalidades de pago puede limitarse si no se contrata un plan.
        </p>
        <p>
          Los importes se expresan en soles peruanos, salvo indicación contraria. Los pagos, renovaciones y cobros adicionales
          se rigen por el plan o acuerdo aplicable. Un pago vencido puede ocasionar la suspensión del Servicio hasta su
          regularización. Informaremos cambios materiales de precio antes de que apliquen a una renovación futura.
        </p>

        <h2>5. Obligaciones del cliente</h2>
        <ul>
          <li>Usar el Servicio de conformidad con la legislación peruana y los derechos de terceros.</li>
          <li>Mantener datos comerciales, tributarios, de productos y de clientes correctos y actualizados.</li>
          <li>Obtener las autorizaciones necesarias para cargar o tratar datos personales mediante el Servicio.</li>
          <li>No usar la plataforma para fraude, suplantación, emisión de comprobantes falsos, spam o actividades ilícitas.</li>
          <li>No intentar vulnerar, descompilar, copiar, revender o interferir con la plataforma.</li>
        </ul>

        <h2>6. Datos del cliente y datos personales</h2>
        <p>
          El cliente conserva la titularidad de la información comercial, tributaria y de sus usuarios, trabajadores, clientes,
          proveedores y contactos que incorpora al Servicio. En relación con los datos personales que el cliente carga para usar
          la plataforma, el cliente actúa como responsable del tratamiento y Nuvex los trata siguiendo sus instrucciones,
          para prestar, asegurar y mejorar el Servicio, salvo cuando la ley exija un tratamiento distinto.
        </p>
        <p>
          El tratamiento de datos personales realizado directamente por Nuvex, así como las finalidades, terceros y derechos
          aplicables, se describe en nuestra <a href="/privacidad">Política de Privacidad</a>.
        </p>

        <h2>7. Facturación electrónica y SUNAT</h2>
        <p>
          Cuando el cliente habilite la facturación electrónica, autoriza a Nuvex a procesar la información necesaria y a
          transmitir comprobantes, resúmenes, comunicaciones y archivos relacionados a SUNAT, conforme a la configuración
          seleccionada. El cliente es responsable de la veracidad de los datos fiscales, de mantener vigentes sus credenciales
          y certificados, y de cumplir sus obligaciones tributarias.
        </p>
        <p>
          Nuvex no garantiza la aceptación de un documento por SUNAT cuando existan datos erróneos, incumplimientos
          normativos, indisponibilidad del tercero u otras causas ajenas a nuestro control.
        </p>

        <h2>8. Funcionalidades de asistencia y geolocalización</h2>
        <p>
          Si el cliente habilita asistencia mediante QR o ubicación, declara que cuenta con una base legal y ha informado a sus
          trabajadores sobre el tratamiento de sus datos, incluidos fecha, hora, dispositivo y ubicación, cuando corresponda.
          El cliente define el uso laboral de esta información y asume la responsabilidad de cumplir sus obligaciones como
          empleador y responsable del tratamiento.
        </p>

        <h2>9. Propiedad intelectual</h2>
        <p>
          Nuvex, su software, documentación, marca, diseños y demás elementos del Servicio son propiedad de CORDEX T &amp; D
          S.A.C. o de sus licenciantes. Te concedemos una licencia limitada, revocable, no exclusiva e intransferible para usar
          el Servicio durante la vigencia de tu plan y conforme a estos términos.
        </p>

        <h2>10. Disponibilidad, soporte y cambios</h2>
        <p>
          Procuramos mantener el Servicio operativo y seguro, pero no garantizamos funcionamiento ininterrumpido o libre de
          errores. Podemos realizar mantenimientos, actualizaciones o cambios razonables en las funcionalidades. Cuando sea
          posible, comunicaremos los mantenimientos programados que puedan afectar materialmente el uso del Servicio.
        </p>

        <h2>11. Suspensión, terminación y datos</h2>
        <p>
          Puedes solicitar la cancelación de tu cuenta escribiendo a nuestro correo de contacto. Podemos suspender o terminar
          el acceso por incumplimiento de estos términos, falta de pago, riesgo de seguridad o requerimiento legal. La
          conservación, eliminación o devolución de información puede estar sujeta a obligaciones legales, tributarias,
          contractuales y técnicas aplicables.
        </p>

        <h2>12. Limitación de responsabilidad</h2>
        <p>
          En la máxima medida permitida por ley, Nuvex no responde por daños indirectos, pérdida de ganancias, pérdida de
          oportunidad, interrupción del negocio o sanciones derivadas de información incorrecta proporcionada por el cliente,
          de obligaciones tributarias del cliente o de fallas de servicios externos. Nada de estos términos limita la
          responsabilidad que no pueda excluirse legalmente.
        </p>

        <h2>13. Modificaciones y ley aplicable</h2>
        <p>
          Podemos actualizar estos términos por cambios legales, operativos, de seguridad o del Servicio. Publicaremos la
          versión vigente en esta página y, cuando el cambio sea material, lo comunicaremos por medios razonables. Estos
          términos se rigen por las leyes de la República del Perú; las controversias se someten a las autoridades competentes,
          sin perjuicio de normas imperativas aplicables.
        </p>
      </article>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
