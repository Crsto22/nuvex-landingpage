import Link from 'next/link'
import { ArrowRightIcon } from './icons'

const links = [
  {
    title: 'Facturación electrónica SUNAT',
    description:
      'Emite facturas, boletas, notas de crédito y guías de remisión conectadas a SUNAT.',
    href: '/facturacion-electronica',
  },
  {
    title: 'Sistema POS en la nube',
    description:
      'Vende, controla tu inventario por talla y color, y cuadra tu caja desde un solo lugar.',
    href: '/sistema-pos',
  },
  {
    title: 'Enlace de Envíos',
    description:
      'Tu cliente completa el envío desde un link y los datos llegan solos a la venta.',
    href: '/envios',
  },
  {
    title: 'Precios y planes',
    description:
      'Compara los planes de Nuvex y elige el que se ajusta a tu tienda. Desde S/ 19 al mes.',
    href: '/precios',
  },
  {
    title: 'Sistemas a medida',
    description:
      'Desarrollamos ERP, ecommerce e integraciones para tu operación.',
    href: '/sistemas-a-medida',
  },
  {
    title: 'Consulta de comprobantes',
    description:
      'Descarga tus comprobantes electrónicos en PDF, XML y CDR.',
    href: '/consulta',
  },
]

export default function ExploreLinks() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#101d69] md:text-3xl">
          Explora Nuvex
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          Todo lo que necesitas para vender, facturar y controlar tu negocio en Perú.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#101d69] hover:shadow-lg"
              >
                <span>
                  <span className="block text-base font-bold text-[#101d69]">
                    {link.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-gray-600">
                    {link.description}
                  </span>
                </span>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#fd741a]">
                  Ver más
                  <ArrowRightIcon
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
