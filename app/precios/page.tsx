import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'
import PricingSection from '@/components/landing/PricingSection'
import Breadcrumbs from '@/components/seo/breadcrumbs'
import JsonLd from '@/components/seo/json-ld'
import { absoluteUrl, ogImage } from '@/lib/site'

const title = 'Precios y planes simples y transparentes'
const description =
  'Planes de POS y facturación electrónica desde S/ 19 al mes. Compara límites de productos, usuarios y comprobantes, paga mes a mes o anual con 10 % de ahorro y prueba 14 días gratis.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/precios' },
  openGraph: {
    title: `${title} | Nuvex`,
    description,
    url: '/precios',
    images: [ogImage],
  },
}

// Los precios se refrescan cada hora desde la API.
export const revalidate = 3600

const pageFaqs = [
  {
    question: '¿Los precios incluyen IGV?',
    answer:
      'Sí, los precios que se muestran en el sitio incluyen IGV. No hay costos de instalación ni cargos ocultos.',
  },
  {
    question: '¿Puedo cambiar de plan después?',
    answer:
      'Sí. Puedes subir o bajar de plan cuando lo necesites; el cambio se aplica según el ciclo de facturación vigente.',
  },
  {
    question: '¿Qué diferencia hay entre pago mensual y anual?',
    answer:
      'El pago anual tiene 10 % de ahorro frente al mensual. Por ejemplo, el plan Básico queda en S/ 205.20 al año, equivalente a S/ 17.10 al mes.',
  },
  {
    question: '¿Necesito tarjeta de crédito para la prueba?',
    answer:
      'No. La prueba de 14 días no pide tarjeta y puedes usarla para probar ventas, inventario y facturación electrónica antes de contratar.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/precios')}#faq`,
  mainEntity: pageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const offerJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Nuvex — POS y facturación electrónica SUNAT',
  description,
  url: absoluteUrl('/precios'),
  brand: { '@type': 'Brand', name: 'Nuvex' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'PEN',
    lowPrice: '19.00',
    highPrice: '99.00',
    offerCount: 6,
    availability: 'https://schema.org/InStock',
    url: absoluteUrl('/precios'),
  },
}

export default function PreciosPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={offerJsonLd} />
      <main className="w-full bg-white">
        <Header />

        <section className="bg-gradient-to-b from-[#f4f6ff] to-white pt-10 pb-4 md:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#101d69] px-5 py-8 sm:px-10 md:py-12">
              <Breadcrumbs
                items={[
                  { name: 'Inicio', href: '/' },
                  { name: 'Precios y planes', href: '/precios' },
                ]}
              />
              <h1 className="max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.6rem]">
                Precios y planes{' '}
                <span className="text-[#fd741a]">simples y transparentes</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                Un solo sistema con POS, inventario, caja y facturación
                electrónica SUNAT. Sin costo de instalación, sin contratos
                forzosos y con 14 días de prueba gratis.
              </p>

              <dl className="mt-6 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-white/60">
                    Desde
                  </dt>
                  <dd className="text-lg font-bold text-white">S/ 19 /mes</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-white/60">
                    Prueba
                  </dt>
                  <dd className="text-lg font-bold text-white">14 días gratis</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-white/60">
                    Ahorro anual
                  </dt>
                  <dd className="text-lg font-bold text-white">10 %</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <PricingSection />

        <section className="border-t border-gray-100 bg-white pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rich-text">
              <h2>Qué incluye cada plan</h2>
              <p>
                Todos los planes de Nuvex incluyen el punto de venta, el control
                de inventario, la caja y la facturación electrónica. Lo que cambia
                entre un plan y otro es la capacidad: cantidad de productos,
                variantes, usuarios, tiendas, almacenes, comprobantes al mes y
                consultas de DNI y RUC.
              </p>

              <h2>Cómo elegir tu plan</h2>
              <ul>
                <li>
                  <strong>Una sola tienda y catálogo pequeño:</strong> el plan
                  Básico alcanza para vender, controlar stock y facturar.
                </li>
                <li>
                  <strong>Más productos, variantes o comprobantes:</strong>
                  conviene subir a un plan intermedio antes de quedarte corto.
                </li>
                <li>
                  <strong>Varias tiendas, almacenes o usuarios:</strong> los planes
                  altos permiten operar sucursales con permisos por rol y reportes
                  consolidados.
                </li>
              </ul>
              <p>
                Si no sabes cuál elegir, empieza con la prueba gratis y revisa tu
                consumo real en los reportes. También puedes escribirnos por
                WhatsApp y te ayudamos a calcularlo.
              </p>

              <h2>Facturación electrónica incluida</h2>
              <p>
                Emitir facturas, boletas, notas de crédito y guías de remisión no
                se cobra aparte: viene dentro del plan, con envío automático a
                SUNAT y descarga de PDF, XML y CDR. Si quieres el detalle del
                proceso, revisa{' '}
                <Link href="/facturacion-electronica">
                  facturación electrónica SUNAT
                </Link>
                .
              </p>

              <h2>Enlace de Envíos incluido</h2>
              <p>
                Los planes que incluyen el módulo de envíos te permiten generar un
                link por venta para que tu cliente complete sus datos de despacho.{' '}
                <Link href="/envios">Conoce el Enlace de Envíos</Link>.
              </p>

              <h2>Preguntas frecuentes sobre precios</h2>
              {pageFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}

              <h2>Sigue explorando</h2>
              <p>
                Revisa el <Link href="/sistema-pos">sistema POS</Link>, la{' '}
                <Link href="/facturacion-electronica">
                  facturación electrónica SUNAT
                </Link>{' '}
                o los <Link href="/sistemas-a-medida">sistemas a medida</Link> si
                tu operación necesita algo más específico.
              </p>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
