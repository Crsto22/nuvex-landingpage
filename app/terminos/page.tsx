import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'

export const metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sistema POS Nuvex para tiendas de ropa y boutiques en el Perú.',
  alternates: {
    canonical: '/terminos',
  },
  openGraph: {
    title: 'Términos y Condiciones | Nuvex',
    description: 'Términos y condiciones de uso del sistema POS Nuvex para tiendas de ropa y boutiques en el Perú.',
    url: '/terminos',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TerminosPage() {
  const currentDate = new Date().toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#101d69] pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-white/80">
            Última actualización: {currentDate}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          <p className="lead text-xl text-gray-600 mb-8">
            Al acceder al sitio web de Nuvex o registrarse en la plataforma (en adelante, "el Servicio"), declaras haber leído, comprendido y aceptado los presentes Términos y Condiciones. Si no estás de acuerdo con alguna parte, te pedimos no usar el Servicio.
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">1. Datos de la empresa</h2>
          <p>
            El Servicio es prestado por <strong>Nuvex</strong>.
            <br />
            <strong>Correo de contacto:</strong> contacto@nuvex.com
            <br />
            <strong>Sitio web:</strong> https://nuvex.com
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">2. Descripción del servicio</h2>
          <p>
            Nuvex es una plataforma SaaS (Software as a Service) de gestión empresarial dirigida a tiendas de ropa y boutiques en el Perú, que ofrece — según el plan contratado — funcionalidades como:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Punto de venta (POS) y caja diseñado para venta rápida de ropa.</li>
            <li>Control de inventario especializado (tallas, colores, modelos) en tiempo real.</li>
            <li>Facturación electrónica integrada con envío directo a SUNAT (boletas, facturas, notas).</li>
            <li>Gestión de clientes y reportes financieros u operativos.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">3. Cuenta y registro</h2>
          <p>
            Para usar el Servicio debes crear una cuenta proporcionando datos verídicos, completos y actualizados (entre ellos, RUC, datos de contacto del negocio y del responsable). Eres responsable de mantener la confidencialidad de tus credenciales y de toda actividad realizada con ellas.
          </p>
          <p>
            El cliente declara tener autorización para usar dichas credenciales. La vigencia y renovación del certificado digital (si aplica) son responsabilidad del titular del RUC.
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">4. Planes, precios y pagos</h2>
          <p>
            El servicio funciona con suscripción según el plan contratado. Los precios en soles peruanos (PEN) están publicados en el sitio web y pueden actualizarse. Cualquier cambio que te afecte se comunicará con anticipación razonable.
          </p>
          <p>
            La renovación puede ser automática o manual, según la pasarela y configuración del cliente. La falta de pago habilita la suspensión parcial o total del servicio.
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">5. Período de prueba (30 días) y cancelación</h2>
          <p>
            Los nuevos usuarios pueden probar el Servicio durante <strong>30 días gratis</strong>. Al finalizar el período, la cuenta continuará activa únicamente si el usuario contrata un plan de pago.
          </p>
          <p>
            El cliente puede cancelar su plan en cualquier momento antes del siguiente ciclo de renovación. Nuvex puede cancelar o suspender la cuenta por incumplimiento contractual o uso indebido. La cancelación no elimina obligaciones pendientes de pago.
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">6. Obligaciones del usuario</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Usar el Servicio conforme a la normativa peruana vigente y a la moral.</li>
            <li>El cliente es responsable de la veracidad y legalidad de su información fiscal y comercial.</li>
            <li>No usar el Servicio para emitir comprobantes con información falsa, fraude, suplantación o actividades ilícitas.</li>
            <li>Mantener actualizados los datos de tu negocio y notificarnos cualquier cambio relevante.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">7. Propiedad intelectual</h2>
          <p>
            El software, código fuente, marca, logos, diseños y elementos visuales son propiedad de Nuvex o sus licenciantes. El cliente recibe una licencia limitada, no exclusiva e intransferible para uso del servicio.
          </p>
          <p>
            Los datos comerciales y tributarios cargados por el cliente son de titularidad exclusiva del cliente. Se prohíbe copiar, revender, sublicenciar o hacer ingeniería inversa sin autorización escrita.
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">8. Asistencia con SUNAT</h2>
          <p>
            Nuvex envía electrónicamente tus comprobantes a SUNAT. Los rechazos, observaciones o bajas de SUNAT por datos errados son responsabilidad del emisor.
          </p>
          <p>
            Nuvex no garantiza la aceptación automática cuando los datos no cumplen la normativa o hay incidencias externas. La responsabilidad tributaria final del cumplimiento de obligaciones recae en el contribuyente.
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">9. Disponibilidad del servicio</h2>
          <p>
            Hacemos esfuerzos razonables para mantener el Servicio disponible (objetivo referencial: 99.5%). Se podrán realizar mantenimientos programados con aviso previo. Se excluyen eventos de fuerza mayor e incidencias de terceros (SUNAT, hosting, DNS, red).
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">10. Limitación de responsabilidad</h2>
          <p>
            Nuvex no responde por daño indirecto, lucro cesante, pérdida reputacional u oportunidad de negocio. Tampoco responde por multas, sanciones o contingencias tributarias originadas por los datos proporcionados por el cliente.
          </p>
          <p>
            La responsabilidad total de Nuvex, de corresponder, se limitará a tres mensualidades del plan vigente. Esta limitación no aplica cuando la ley prohíba excluir dolo o culpa grave.
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">11. Modificaciones a los términos</h2>
          <p>
            Nuvex puede actualizar estos términos por cambios normativos, operativos o de seguridad. Se notificará por medios razonables dentro de la plataforma o canales registrados. El uso continuado del Servicio implica la aceptación de la versión vigente.
          </p>

          <h2 className="text-2xl font-bold text-[#101d69] mt-12 mb-4">12. Ley aplicable y jurisdicción</h2>
          <p>
            Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia derivada de la interpretación o ejecución se someterá a los Juzgados y Tribunales competentes, salvo que la ley señale un fuero distinto de carácter imperativo.
          </p>

        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
