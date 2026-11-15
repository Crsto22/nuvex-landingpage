export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nuvex.pe'
).replace(/\/$/, '')

export const appUrl = 'https://app.nuvex.pe'
export const registerUrl = `${appUrl}/register`
export const loginUrl = `${appUrl}/login`

export const whatsappUrl = (message?: string) =>
  message
    ? `https://wa.me/51923328058?text=${encodeURIComponent(message)}`
    : 'https://wa.me/51923328058'

export const siteName = 'Nuvex'

export const siteTitle =
  'Sistema de Facturación Electrónica SUNAT en Perú | Nuvex'

export const siteDescription =
  'Sistema de facturación electrónica SUNAT y POS para tiendas en Perú. Emite boletas y facturas, controla stock y caja. Desde S/ 19/mes. Prueba gratis 14 días.'

export const company = {
  brand: 'Nuvex',
  legalName: 'CORDEX T & D S.A.C.',
  ruc: '20615136663',
  email: 'contacto@nuvex.pe',
  phone: '+51923328058',
  phoneLabel: '+51 923 328 058',
  address: {
    street: 'Av. Los Ciruelos N.° 500',
    district: 'San Juan de Lurigancho',
    region: 'Lima',
    country: 'PE',
    countryName: 'Perú',
  },
  social: [
    'https://www.instagram.com/nuvexpe/',
    'https://www.tiktok.com/@nuvexpe',
  ],
} as const

export const logoImage = `${siteUrl}/Norvitex.png`

/** Imagen generada por app/opengraph-image.tsx (1200x630). */
export const ogImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Nuvex — Sistema de facturación electrónica SUNAT y POS en Perú',
}

export function absoluteUrl(path = '/') {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

/** Rutas principales del sitio. Las usan la navegación, el sitemap y el JSON-LD. */
export const mainNav = [
  {
    label: 'Facturación SUNAT',
    href: '/facturacion-electronica',
    name: 'Facturación electrónica SUNAT',
  },
  { label: 'POS', href: '/sistema-pos', name: 'Sistema POS en la nube' },
  { label: 'Precios', href: '/precios', name: 'Precios y planes' },
  { label: 'Envíos', href: '/envios', name: 'Enlace de Envíos' },
] as const

export const secondaryNav = [
  {
    label: 'Sistemas a medida',
    href: '/sistemas-a-medida',
    name: 'Sistemas a medida',
  },
  {
    label: 'Consulta de comprobantes',
    href: '/consulta',
    name: 'Consulta de comprobantes electrónicos',
  },
] as const
