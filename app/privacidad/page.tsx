import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'

export const metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y tratamiento de datos personales de Nuvex.',
  alternates: { canonical: '/privacidad' },
}

const updatedAt = '9 de noviembre de 2026'

export default function PrivacidadPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="bg-[#101d69] px-4 pb-20 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Política de Privacidad</h1>
          <p className="text-xl text-white/80">Última actualización: {updatedAt}</p>
        </div>
      </section>

      <article className="prose prose-lg mx-auto max-w-4xl px-4 py-16 text-gray-700 md:py-24">
        <p className="lead text-xl text-gray-600">
          Esta Política explica cómo Nuvex trata los datos personales obtenidos a través de su sitio web y plataforma. Está
          elaborada de acuerdo con la Ley N.° 29733, Ley de Protección de Datos Personales, y su Reglamento aprobado por el
          Decreto Supremo N.° 016-2024-JUS.
        </p>

        <h2>1. Responsable y contacto</h2>
        <p>
          El responsable del tratamiento de los datos personales descritos en esta Política es <strong>CORDEX T &amp; D S.A.C.</strong>,
          RUC N.° 20615136663, con domicilio en Av. Los Ciruelos N.° 500, San Juan de Lurigancho, Lima, Perú. Para consultas
          de privacidad o para ejercer tus derechos, escribe a <a href="mailto:contacto@nuvex.pe">contacto@nuvex.pe</a>.
        </p>

        <h2>2. Datos que podemos tratar</h2>
        <ul>
          <li><strong>Datos de cuenta y contacto:</strong> nombres, apellidos, correo, teléfono, empresa, RUC, DNI, cargo y credenciales.</li>
          <li><strong>Datos de negocio:</strong> razón social, dirección, sucursales, productos, inventario, ventas, pagos y reportes.</li>
          <li><strong>Datos de clientes y proveedores cargados por el cliente:</strong> identificación, nombre o razón social, teléfono, correo, dirección y operaciones comerciales.</li>
          <li><strong>Datos tributarios:</strong> información de comprobantes, series, credenciales y archivos necesarios para la facturación electrónica.</li>
          <li><strong>Datos de asistencia:</strong> identificación, horario, fecha y hora de marcaje, datos del dispositivo y, cuando la función esté habilitada, ubicación y precisión.</li>
          <li><strong>Datos técnicos y de uso:</strong> dirección IP, navegador, dispositivo, registros de seguridad, cookies, eventos de navegación e interacción con el sitio.</li>
        </ul>

        <h2>3. Finalidades</h2>
        <p>Tratamos los datos para las siguientes finalidades:</p>
        <ul>
          <li>Crear y administrar cuentas, planes, accesos y solicitudes de soporte.</li>
          <li>Prestar las funcionalidades contratadas de venta, inventario, reportes, envío, asistencia y facturación electrónica.</li>
          <li>Procesar comprobantes y comunicaciones exigidas por SUNAT.</li>
          <li>Proteger el Servicio, prevenir fraude, atender incidentes y mantener registros de auditoría.</li>
          <li>Responder consultas, ejercer derechos y cumplir obligaciones legales, tributarias y contractuales.</li>
          <li>Medir el desempeño del sitio y, cuando corresponda, mostrar o medir campañas publicitarias.</li>
        </ul>

        <h2>4. Datos cargados por nuestros clientes</h2>
        <p>
          Cuando una empresa cliente incorpora a Nuvex datos de sus propios clientes, trabajadores, proveedores o contactos,
          dicha empresa determina las finalidades y medios del tratamiento y es responsable de informar y obtener las
          autorizaciones que correspondan. Nuvex actúa como encargado del tratamiento para prestar el Servicio, aplicar
          medidas de seguridad y atender obligaciones legales aplicables.
        </p>

        <h2>5. Comunicaciones y terceros</h2>
        <p>
          Podemos compartir los datos estrictamente necesarios con proveedores que nos ayudan a operar el Servicio, bajo
          obligaciones de seguridad y confidencialidad. Según las funciones que uses, estos pueden incluir servicios de
          infraestructura y almacenamiento en la nube, proveedores de correo o comunicación, herramientas de analítica,
          proveedores logísticos y servicios de prevención de fraude.
        </p>
        <p>
          Para la facturación electrónica, transmitimos la información pertinente a SUNAT. Si eliges servicios de mensajería,
          logística o enlaces compartidos por WhatsApp, la información necesaria se tratará también conforme a las políticas
          de dichos servicios. Podemos realizar transferencias internacionales cuando nuestros proveedores tecnológicos
          procesen información fuera del Perú, aplicando las salvaguardas exigibles.
        </p>

        <h2>6. Cookies, analítica y publicidad</h2>
        <p>
          Nuestro sitio utiliza cookies y tecnologías similares para su funcionamiento, seguridad, medición y analítica. En
          particular, puede utilizar Vercel Analytics y Meta Pixel, que recaban información técnica y de interacción, como
          páginas visitadas, eventos de registro o contacto y datos del navegador. Puedes administrar o eliminar cookies desde
          la configuración de tu navegador; hacerlo puede afectar algunas funciones del sitio.
        </p>

        <h2>7. Conservación</h2>
        <p>
          Conservamos los datos durante el tiempo necesario para las finalidades informadas, la vigencia de la relación con el
          cliente, la atención de obligaciones legales o tributarias, la resolución de controversias y la protección frente a
          reclamaciones. Una vez cumplidas esas finalidades, los eliminaremos, anonimizaremos o bloquearemos según
          corresponda.
        </p>

        <h2>8. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas, organizativas y administrativas razonables para prevenir el acceso no autorizado,
          pérdida, alteración o divulgación indebida de datos. Entre ellas se incluyen controles de acceso, cifrado de
          credenciales sensibles, almacenamiento privado para archivos tributarios y registros de actividad. Ningún sistema es
          completamente infalible; por ello, también debes proteger tus credenciales y dispositivos.
        </p>

        <h2>9. Tus derechos</h2>
        <p>
          Puedes solicitar el acceso, rectificación, cancelación, oposición y, cuando corresponda, revocación del consentimiento
          respecto de tus datos personales. Para ejercerlos, escribe a <a href="mailto:contacto@nuvex.pe">contacto@nuvex.pe</a>
          indicando tu nombre, medio de contacto, el derecho que deseas ejercer y la información necesaria para verificar tu
          identidad. Atenderemos la solicitud en los plazos previstos por la normativa aplicable. También puedes acudir a la
          Autoridad Nacional de Protección de Datos Personales si consideras que tu solicitud no ha sido atendida adecuadamente.
        </p>

        <h2>10. Datos de menores</h2>
        <p>
          Nuvex está dirigido a empresas y usuarios autorizados para fines comerciales. No buscamos recopilar intencionalmente
          datos de menores de edad. Si consideras que un menor nos proporcionó datos sin la autorización correspondiente,
          comunícate con nosotros para evaluarlo.
        </p>

        <h2>11. Cambios a esta Política</h2>
        <p>
          Podemos actualizar esta Política por cambios normativos, tecnológicos u operativos. Publicaremos la versión vigente
          en esta página, con la fecha de actualización. Si el cambio es relevante, procuraremos comunicarlo por medios
          razonables.
        </p>
      </article>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
