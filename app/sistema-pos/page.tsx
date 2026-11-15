import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/landing/PageShell'
import JsonLd from '@/components/seo/json-ld'
import { absoluteUrl, ogImage } from '@/lib/site'

const title = 'Sistema POS en la nube para tiendas'
const description =
  'Sistema POS en la nube para tiendas de ropa, calzado y accesorios: ventas rápidas, inventario por talla y color, caja, sucursales y facturación electrónica. Desde S/ 19 al mes.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/sistema-pos' },
  openGraph: {
    title: `${title} | Nuvex`,
    description,
    url: '/sistema-pos',
    images: [ogImage],
  },
}

const pageFaqs = [
  {
    question: '¿Qué es un POS y en qué se diferencia de un sistema de ventas?',
    answer:
      'Un POS (punto de venta) es la caja donde registras la venta y cobras. Nuvex incluye eso y además inventario, caja, comprobantes electrónicos, reportes y sucursales, así que funciona como el sistema completo de tu tienda y no solo como una caja.',
  },
  {
    question: '¿Funciona sin conexión a internet?',
    answer:
      'Nuvex funciona en la nube, por lo que necesita internet para sincronizar ventas, stock y comprobantes electrónicos. En un local con internet estable el registro de ventas es inmediato.',
  },
  {
    question: '¿Puedo manejar productos con talla y color?',
    answer:
      'Sí. Nuvex está pensado para productos con variantes: registras talla, color y modelo, y el stock se descuenta por variante en cada venta.',
  },
  {
    question: '¿Sirve para varias tiendas o cajas?',
    answer:
      'Sí. Puedes tener sucursales, almacenes y cajas separadas, cada una con su stock y sus usuarios, y ver las ventas consolidadas según el plan que contrates.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/sistema-pos')}#faq`,
  mainEntity: pageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${absoluteUrl('/sistema-pos')}#software`,
  name: 'Nuvex POS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  description,
  url: absoluteUrl('/sistema-pos'),
  offers: {
    '@type': 'Offer',
    priceCurrency: 'PEN',
    price: '19.00',
    url: absoluteUrl('/precios'),
  },
}

export default function SistemaPosPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={softwareJsonLd} />
      <PageShell
        breadcrumbs={[
          { name: 'Inicio', href: '/' },
          { name: 'Sistema POS', href: '/sistema-pos' },
        ]}
        title="Sistema POS en la nube"
        highlight="para tu tienda"
        lead="Vende rápido, controla tu inventario por talla y color, cuadra tu caja y emite comprobantes electrónicos desde la misma pantalla. Sin instalar nada, desde cualquier dispositivo."
        bullets={[
          'Ventas con lector de código de barras',
          'Stock por talla, color y modelo',
          'Caja y reportes en tiempo real',
        ]}
        ctaLabel="Probar el POS gratis"
      >
        <h2>¿Qué es un sistema POS en la nube?</h2>
        <p>
          Un sistema POS (punto de venta) es el lugar donde se registra cada
          venta: se buscan los productos, se calcula el total, se elige el medio de
          pago y se emite el comprobante. Cuando es <strong>en la nube</strong>,
          toda esa información vive en internet en lugar de un servidor dentro de
          tu tienda, así que puedes vender desde la caja, desde una laptop o desde
          el celular, y ver los mismos datos en todas partes.
        </p>
        <p>
          Para una tienda de ropa o calzado esto marca la diferencia: el stock que
          se descuenta en la caja es el mismo que consulta el vendedor en el
          celular, y el reporte del día no hay que armarlo a mano al cerrar.
        </p>

        <h2>Funciones del POS de Nuvex</h2>
        <h3>Ventas rápidas</h3>
        <p>
          Búsqueda por nombre, código o lector de código de barras, selección de
          variantes y cobro en efectivo, tarjeta, Yape, Plin o transferencia. Cada
          venta queda asociada a un usuario y a una caja.
        </p>
        <h3>Inventario y kardex</h3>
        <p>
          Registras tus productos con talla, color y modelo, defines precios de
          compra y venta, y cada movimiento queda en el kardex. Puedes hacer
          transferencias entre almacenes y revisar qué productos se están
          agotando.
        </p>
        <h3>Caja y arqueo</h3>
        <p>
          Apertura y cierre de caja por turno, con el detalle de ingresos, egresos
          y medios de pago. Al cerrar sabes cuánto debería haber y cuánto hay
          realmente.
        </p>
        <h3>Comprobantes electrónicos</h3>
        <p>
          La venta se convierte en boleta o factura electrónica enviada a SUNAT,
          con su PDF y XML. Si quieres el detalle del proceso, revisa la página de{' '}
          <Link href="/facturacion-electronica">facturación electrónica SUNAT</Link>.
        </p>
        <h3>Sucursales y usuarios</h3>
        <p>
          Cada tienda puede tener su propio almacén y su propio equipo, con
          permisos por rol: el vendedor cobra, el administrador ve reportes y el
          dueño ve todo consolidado.
        </p>
        <h3>Reportes</h3>
        <p>
          Ventas por día, por producto, por vendedor y por medio de pago, además
          de reportes de clientes y de usuarios para detectar qué se mueve y qué
          no.
        </p>

        <h2>¿Para qué tipos de negocio funciona mejor?</h2>
        <ul>
          <li>Tiendas de ropa, calzado, carteras y mochilas.</li>
          <li>Bodegas y minimarkets con venta al por menor.</li>
          <li>Accesorios, cosmética y productos con variantes.</li>
          <li>Negocios con más de una tienda o punto de venta.</li>
        </ul>

        <h2>Cómo empezar en tres pasos</h2>
        <ol>
          <li>
            <strong>Crea tu cuenta.</strong> Prueba 14 días sin tarjeta de
            crédito.
          </li>
          <li>
            <strong>Carga tus productos.</strong> Puedes hacerlo a mano o con tu
            lista en Excel.
          </li>
          <li>
            <strong>Vende.</strong> Abre caja, cobra y emite el comprobante en la
            misma pantalla.
          </li>
        </ol>

        <h2>¿Cuánto cuesta el POS de Nuvex?</h2>
        <p>
          Los planes empiezan en <strong>S/ 19 al mes</strong> e incluyen POS,
          inventario, caja y facturación electrónica. Revisa los límites de
          productos, usuarios y comprobantes en{' '}
          <Link href="/precios">precios y planes</Link>, o mira cómo se resuelve el
          envío de pedidos con el <Link href="/envios">Enlace de Envíos</Link>.
        </p>

        <h2>Preguntas frecuentes sobre el POS</h2>
        {pageFaqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </PageShell>
    </>
  )
}
