import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/landing/PageShell'
import JsonLd from '@/components/seo/json-ld'
import { absoluteUrl, ogImage, whatsappUrl } from '@/lib/site'

const title = 'Sistemas a medida para tu negocio'
const description =
  'Diseñamos y desarrollamos sistemas a medida: ERP, ecommerce, integraciones y aplicaciones para tu operación. Caso real: ERP y tienda online de Kiments sincronizados.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/sistemas-a-medida' },
  openGraph: {
    title: `${title} | Nuvex`,
    description,
    url: '/sistemas-a-medida',
    images: [ogImage],
  },
}

const pageFaqs = [
  {
    question: '¿Cuánto demora un sistema a medida?',
    answer:
      'Depende del alcance. Un módulo o integración puede tomar pocas semanas; un ERP completo con ecommerce suele requerir un proyecto por etapas. Primero levantamos el alcance y te damos un cronograma.',
  },
  {
    question: '¿El sistema queda a mi nombre?',
    answer:
      'Sí. El desarrollo se entrega para tu empresa, con el código y los accesos correspondientes según lo acordado en el proyecto.',
  },
  {
    question: '¿Pueden integrarse con mi sistema actual?',
    answer:
      'Sí. Trabajamos integraciones con APIs, pasarelas de pago, sistemas de facturación, marketplaces y plataformas de ecommerce.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/sistemas-a-medida')}#faq`,
  mainEntity: pageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl('/sistemas-a-medida')}#service`,
  name: 'Desarrollo de sistemas a medida',
  serviceType: 'Desarrollo de software a medida',
  description,
  url: absoluteUrl('/sistemas-a-medida'),
  areaServed: { '@type': 'Country', name: 'Perú' },
  provider: {
    '@type': 'Organization',
    name: 'Nuvex',
    url: absoluteUrl('/'),
  },
}

export default function SistemasAMedidaPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <PageShell
        breadcrumbs={[
          { name: 'Inicio', href: '/' },
          { name: 'Sistemas a medida', href: '/sistemas-a-medida' },
        ]}
        title="Sistemas a medida"
        highlight="para tu negocio"
        lead="Diseñamos y desarrollamos el software exacto que tu operación necesita: ERP, ecommerce, integraciones y aplicaciones internas. Sin funciones que no usas y sin pagar por licencias que no necesitas."
        bullets={[
          'ERP y ecommerce sincronizados',
          'Integraciones con APIs y pagos',
          'Soporte y evolución del sistema',
        ]}
        ctaLabel="Solicitar una asesoría"
        ctaHref={whatsappUrl(
          'Hola, quiero un sistema a medida para mi negocio',
        )}
        ctaNote="Te respondemos por WhatsApp para coordinar el alcance."
      >
        <h2>Cuándo conviene un sistema a medida</h2>
        <p>
          Un software estándar resuelve el 80 % de un negocio, pero hay
          operaciones que tienen reglas propias: precios por lista, comisiones
          especiales, procesos de producción, almacenes con lógica particular o
          una tienda online que debe hablar con el inventario en tiempo real. Ahí
          es donde un sistema a medida evita que tu equipo trabaje con Excel y
          parches.
        </p>

        <h2>Qué desarrollamos</h2>
        <ul>
          <li>
            <strong>ERP a medida:</strong> ventas, compras, inventario,
            tesorería y reportes según cómo opera tu empresa.
          </li>
          <li>
            <strong>Ecommerce:</strong> tienda online conectada a tu stock, con
            pagos y pedidos sincronizados.
          </li>
          <li>
            <strong>Integraciones:</strong> APIs, pasarelas de pago, facturación
            electrónica, marketplaces y sistemas legados.
          </li>
          <li>
            <strong>Aplicaciones internas:</strong> paneles de control, apps de
            campo y herramientas para tu equipo.
          </li>
        </ul>

        <h2>Caso real: ERP y ecommerce de Kiments</h2>
        <p>
          Para Kiments desarrollamos desde cero un ERP y su tienda online{' '}
          <strong>kiments.com.pe</strong>. Los pedidos del ecommerce se
          sincronizan con el stock y el ERP: cada venta descuenta inventario al
          instante, sin cargar productos dos veces ni revisar a mano qué se vendió
          por la web.
        </p>
        <p>
          Ese es el tipo de problema que resolvemos: dos sistemas que deberían ser
          uno solo.
        </p>

        <h2>Cómo trabajamos</h2>
        <ol>
          <li>
            <strong>Levantamiento.</strong> Entendemos tu operación, tus reglas y
            los cuellos de botella actuales.
          </li>
          <li>
            <strong>Alcance y propuesta.</strong> Definimos módulos, etapas,
            tiempos y costos antes de escribir código.
          </li>
          <li>
            <strong>Diseño y desarrollo.</strong> Entregas por etapas para que
            valides cada parte con tu equipo.
          </li>
          <li>
            <strong>Despliegue y capacitación.</strong> Puesta en marcha,
            migración de datos y entrenamiento a usuarios.
          </li>
          <li>
            <strong>Evolución.</strong> Soporte, mejoras y nuevas funciones según
            crece el negocio.
          </li>
        </ol>

        <h2>¿Para quién es este servicio?</h2>
        <p>
          Para empresas en crecimiento que ya probaron soluciones estándar y se
          quedaron cortas: comercializadoras, tiendas con varias sucursales,
          negocios de producción y distribución, y empresas que necesitan conectar
          su ecommerce con su operación.
        </p>

        <h2>¿Y si solo necesitas un POS?</h2>
        <p>
          Si tu operación es una tienda de ropa, calzado o accesorios, probablemente
          no necesites desarrollo a medida: el{' '}
          <Link href="/sistema-pos">sistema POS de Nuvex</Link> ya incluye ventas,
          inventario, caja y{' '}
          <Link href="/facturacion-electronica">facturación electrónica SUNAT</Link>
          . Revisa los planes en <Link href="/precios">precios y planes</Link>.
        </p>

        <h2>Preguntas frecuentes sobre sistemas a medida</h2>
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
