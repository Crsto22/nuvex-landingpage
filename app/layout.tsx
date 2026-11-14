import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import FacebookPixel from '@/components/analytics/facebook-pixel'
import './globals.css'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nuvex.pe').replace(/\/$/, '')

const siteTitle = 'Nuvex | POS en la Nube y Sistema de Ventas para Negocios'
const siteDescription =
  'Nuvex es el POS en la nube y sistema de ventas para negocios y tiendas: vende rápido, controla tu inventario, emite comprobantes electrónicos a SUNAT y cuadra tu caja desde un solo lugar.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Nuvex',
  },
  description: siteDescription,
  keywords: [
    'POS',
    'punto de venta',
    'sistema de ventas',
    'software para negocios',
    'software para tiendas',
    'inventario',
    'control de inventario',
    'facturación electrónica',
    'comprobantes electrónicos',
    'SUNAT',
    'control de caja',
    'SaaS Perú',
    'Nuvex',
  ],
  applicationName: 'Nuvex',
  authors: [{ name: 'Nuvex', url: siteUrl }],
  creator: 'Nuvex',
  publisher: 'Nuvex',
  generator: 'Next.js',
  category: 'business',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: siteUrl,
    siteName: 'Nuvex',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/logopng.webp',
        width: 900,
        height: 300,
        alt: 'Nuvex - POS en la nube para negocios y tiendas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/logopng.webp'],
  },
  icons: {
    icon: [
      { url: '/Norvitex.ico' },
      { url: '/Norvitex.png', type: 'image/png' },
    ],
    apple: '/Norvitex.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Nuvex',
      url: siteUrl,
      logo: `${siteUrl}/logopng.webp`,
      sameAs: [
        'https://www.instagram.com/nuvexpe/',
        'https://www.tiktok.com/@nuvexpe',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Nuvex',
      inLanguage: 'es-PE',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Nuvex',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: siteUrl,
      description: siteDescription,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PEN',
        description: 'Prueba gratis de 14 días',
      },
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-white">
      <body className="font-sans antialiased bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <FacebookPixel />
          </>
        )}
      </body>
    </html>
  )
}
