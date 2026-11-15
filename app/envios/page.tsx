import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/landing/PageShell'
import JsonLd from '@/components/seo/json-ld'
import { absoluteUrl, ogImage } from '@/lib/site'

const title = 'Enlace de Envíos para tiendas'
const description =
  'Deja de pedir datos de envío por WhatsApp: genera un link desde la venta, tu cliente elige agencia, método y fecha, y los datos llegan solos al pedido. Incluido en Nuvex.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/envios' },
  openGraph: {
    title: `${title} | Nuvex`,
    description,
    url: '/envios',
    images: [ogImage],
  },
}

const pageFaqs = [
  {
    question: '¿El enlace de envíos tiene un costo adicional?',
    answer:
      'No. El Enlace de Envíos está incluido en los planes de Nuvex que incluyen el módulo de envíos, sin costo extra por link generado.',
  },
  {
    question: '¿El cliente necesita crear una cuenta?',
    answer:
      'No. Tu cliente abre el link, completa sus datos de envío y listo. No tiene que registrarse ni descargar nada.',
  },
  {
    question: '¿Puedo usarlo con cualquier agencia de transporte?',
    answer:
      'Sí. Configuras las agencias y sedes con las que trabajas, y tu cliente elige entre esas opciones al completar el formulario.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/envios')}#faq`,
  mainEntity: pageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function EnviosPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageShell
        breadcrumbs={[
          { name: 'Inicio', href: '/' },
          { name: 'Enlace de Envíos', href: '/envios' },
        ]}
        title="Enlace de Envíos"
        highlight="sin 30 mensajes de WhatsApp"
        lead="Genera el link desde la venta, tu cliente completa su envío y los datos llegan solos al pedido. Sin pedir DNI, dirección y agencia uno por uno por WhatsApp."
        bullets={[
          'Link generado desde la venta',
          'El cliente elige agencia y sede',
          'Datos guardados en el pedido',
        ]}
        ctaLabel="Probar el Enlace de Envíos"
      >
        <h2>El problema: cada envío son 30 mensajes</h2>
        <p>
          Cuando vendes ropa o calzado por redes sociales, la conversación de
          WhatsApp termina siempre igual: pides nombres, apellidos, DNI, celular,
          agencia, sede y fecha. El cliente responde por partes, tú copias y pegas
          en el pedido, y muchas veces el dato queda incompleto o mal escrito.
        </p>
        <p>
          El resultado son envíos observados, paquetes devueltos, reclamos y horas
          perdidas en chats que no son ventas.
        </p>

        <h2>Cómo funciona el Enlace de Envíos</h2>
        <ol>
          <li>
            <strong>Registras la venta.</strong> Al confirmar el pedido, Nuvex
            genera un enlace único para ese envío.
          </li>
          <li>
            <strong>Envías el link.</strong> Se lo mandas a tu cliente por el mismo
            WhatsApp de siempre.
          </li>
          <li>
            <strong>Tu cliente completa el formulario.</strong> Elige agencia,
            método de envío, sede y fecha, y confirma sus datos personales.
          </li>
          <li>
            <strong>Los datos llegan al pedido.</strong> La información queda
            guardada en la venta, lista para despachar.
          </li>
        </ol>

        <h2>Qué datos llegan automáticamente a la venta</h2>
        <ul>
          <li>Nombres y apellidos de quien recibe.</li>
          <li>DNI o documento de identidad.</li>
          <li>Celular de contacto.</li>
          <li>Agencia y sede de destino.</li>
          <li>Método de envío y fecha estimada.</li>
        </ul>

        <h2>Por qué ahorra tiempo y evita errores</h2>
        <ul>
          <li>
            <strong>Menos mensajes.</strong> Un link reemplaza una conversación
            entera.
          </li>
          <li>
            <strong>Datos completos.</strong> El formulario pide todo lo necesario:
            no hay campos vacíos.
          </li>
          <li>
            <strong>Información ordenada.</strong> Cada envío queda asociado a su
            venta, no perdido en el chat.
          </li>
          <li>
            <strong>Mejor experiencia.</strong> Tu cliente completa el envío cuando
            le conviene, sin depender de tu horario.
          </li>
        </ul>

        <h2>¿Para quién es útil?</h2>
        <p>
          Para cualquier negocio que despache pedidos a otras ciudades: tiendas de
          ropa, calzado, accesorios, mochilas, bodegas con delivery y también
          emprendedores que venden por Instagram o TikTok. Si vendes por redes y
          envías por agencia, este módulo está pensado para ti.
        </p>

        <h2>Incluido en el POS de Nuvex</h2>
        <p>
          El Enlace de Envíos no es un sistema aparte: funciona dentro del mismo
          POS donde registras la venta. Puedes ver cómo se integra en la página del{' '}
          <Link href="/sistema-pos">sistema POS</Link>, revisar los planes en{' '}
          <Link href="/precios">precios y planes</Link> o empezar a emitir tus{' '}
          <Link href="/facturacion-electronica">
            facturas electrónicas SUNAT
          </Link>{' '}
          con el mismo sistema.
        </p>

        <h2>Preguntas frecuentes sobre el Enlace de Envíos</h2>
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
