import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/landing/PageShell'
import JsonLd from '@/components/seo/json-ld'
import { absoluteUrl, ogImage } from '@/lib/site'

const title = 'Facturación Electrónica SUNAT en Perú'
const description =
  'Emite facturas, boletas, notas de crédito y guías de remisión conectadas a SUNAT, con PDF y XML automáticos. Controla tus series y consulta tus comprobantes. Desde S/ 19 al mes.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/facturacion-electronica' },
  openGraph: {
    title: `${title} | Nuvex`,
    description,
    url: '/facturacion-electronica',
    images: [ogImage],
  },
}

const pageFaqs = [
  {
    question: '¿Nuvex está conectado directamente a SUNAT?',
    answer:
      'Sí. Nuvex envía cada comprobante a SUNAT, guarda la respuesta (CDR) y te avisa si el comprobante fue aceptado, observado o rechazado para que puedas corregirlo.',
  },
  {
    question: '¿Puedo emitir facturas y boletas desde el celular?',
    answer:
      'Sí. Nuvex funciona en la nube y se adapta a celular, tablet y computadora, así que puedes emitir comprobantes desde cualquier lugar con internet.',
  },
  {
    question: '¿Qué pasa si SUNAT rechaza un comprobante?',
    answer:
      'El sistema muestra el motivo del rechazo y el comprobante queda marcado para que lo corrijas y lo vuelvas a enviar. No se pierde la venta ni el correlativo.',
  },
  {
    question: '¿Puedo descargar mis comprobantes después?',
    answer:
      'Sí. Puedes descargar el PDF, el XML y el CDR de cada comprobante desde el módulo de comprobantes o desde la página pública de consulta con el RUC, tipo, serie, correlativo, fecha e importe.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/facturacion-electronica')}#faq`,
  mainEntity: pageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl('/facturacion-electronica')}#service`,
  name: 'Facturación electrónica SUNAT',
  serviceType: 'Facturación electrónica',
  description,
  url: absoluteUrl('/facturacion-electronica'),
  areaServed: { '@type': 'Country', name: 'Perú' },
  provider: {
    '@type': 'Organization',
    name: 'Nuvex',
    url: absoluteUrl('/'),
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'PEN',
    price: '19.00',
    url: absoluteUrl('/precios'),
  },
}

export default function FacturacionElectronicaPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <PageShell
        breadcrumbs={[
          { name: 'Inicio', href: '/' },
          {
            name: 'Facturación electrónica SUNAT',
            href: '/facturacion-electronica',
          },
        ]}
        title="Facturación electrónica"
        highlight="SUNAT en Perú"
        lead="Emite facturas, boletas, notas de crédito y guías de remisión desde un solo sistema, con envío automático a SUNAT y tus documentos en PDF, XML y CDR siempre disponibles."
        bullets={[
          'Envío automático a SUNAT',
          'PDF, XML y CDR listos',
          'Series y correlativos a tu medida',
        ]}
        ctaLabel="Probar facturación gratis"
      >
        <h2>¿Qué es la facturación electrónica en Perú?</h2>
        <p>
          La facturación electrónica es el reemplazo digital de las facturas y
          boletas de papel. En lugar de imprimir un comprobante, tu sistema genera
          un archivo XML firmado digitalmente y lo envía a SUNAT, que lo valida y
          responde con una constancia. Ese comprobante tiene el mismo valor legal
          que el papel, pero puedes consultarlo, descargarlo y enviarlo por correo
          o WhatsApp en segundos.
        </p>
        <p>
          Para una tienda, el impacto es directo: dejas de escribir comprobantes a
          mano, reduces errores en el correlativo, no pierdes ventas por quedarte
          sin talonarios y puedes atender a clientes que piden factura con RUC al
          instante.
        </p>

        <h2>¿Qué comprobantes electrónicos puedes emitir con Nuvex?</h2>
        <p>
          Nuvex cubre los comprobantes que necesita una tienda o un negocio de
          servicios en Perú:
        </p>
        <ul>
          <li>
            <strong>Factura electrónica</strong> para ventas a empresas con RUC.
          </li>
          <li>
            <strong>Boleta electrónica</strong> para consumidores finales.
          </li>
          <li>
            <strong>Nota de crédito</strong> para devoluciones, descuentos o
            correcciones.
          </li>
          <li>
            <strong>Nota de débito</strong> para ajustes posteriores a la venta.
          </li>
          <li>
            <strong>Guía de remisión remitente</strong> para trasladar mercadería
            entre tu tienda, almacén o el cliente.
          </li>
        </ul>
        <p>
          Cada comprobante se genera en <strong>PDF</strong> para enviarlo al
          cliente, en <strong>XML</strong> para respaldarlo y con su{' '}
          <strong>CDR</strong> de aceptación, que es la prueba de que SUNAT lo
          recibió correctamente.
        </p>

        <h2>Cómo funciona la facturación electrónica en Nuvex</h2>
        <ol>
          <li>
            <strong>Configura tu empresa.</strong> Registras tu RUC, razón social,
            dirección y logo una sola vez.
          </li>
          <li>
            <strong>Define tus series.</strong> Creas las series de factura,
            boleta y notas con su correlativo inicial.
          </li>
          <li>
            <strong>Vende como siempre.</strong> La venta se registra en el POS y
            se elige el tipo de comprobante.
          </li>
          <li>
            <strong>SUNAT valida automáticamente.</strong> Nuvex envía el
            comprobante, recibe el CDR y guarda el estado.
          </li>
          <li>
            <strong>Entrega el documento.</strong> Envías el PDF al cliente y
            conservas el XML y el CDR para tu contabilidad.
          </li>
        </ol>

        <h2>¿Qué necesitas para empezar a facturar?</h2>
        <ul>
          <li>
            RUC activo y habilitado para emitir comprobantes electrónicos.
          </li>
          <li>
            Certificado digital o credenciales de facturación, según cómo esté
            configurada tu empresa ante SUNAT.
          </li>
          <li>
            Las series autorizadas para cada tipo de comprobante que vayas a
            emitir.
          </li>
          <li>Un navegador con internet: no se instala ningún programa.</li>
        </ul>

        <h2>Consulta y descarga de comprobantes</h2>
        <p>
          Tus clientes y tu equipo de contabilidad pueden verificar un
          comprobante con el RUC del emisor, el tipo, la serie, el correlativo, la
          fecha de emisión y el importe total. La descarga de PDF, XML y CDR está
          disponible desde la página de{' '}
          <Link href="/consulta">consulta de comprobantes electrónicos</Link>.
        </p>

        <h2>¿Cuánto cuesta facturar electrónicamente con Nuvex?</h2>
        <p>
          La facturación electrónica está incluida en los planes de Nuvex desde{' '}
          <strong>S/ 19 al mes</strong>, junto con el punto de venta, el control de
          inventario y la caja. Puedes revisar el detalle de límites y funciones en{' '}
          <Link href="/precios">precios y planes</Link> o ver cómo funciona el{' '}
          <Link href="/sistema-pos">sistema POS</Link>.
        </p>

        <h2>Preguntas frecuentes sobre facturación electrónica</h2>
        {pageFaqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}

        <h2>Empieza a facturar hoy</h2>
        <p>
          Crea tu cuenta y emite tus primeros comprobantes electrónicos el mismo
          día. Si tienes dudas, escríbenos por WhatsApp y te acompañamos en la
          configuración de tus series y tu certificado.
        </p>
      </PageShell>
    </>
  )
}
