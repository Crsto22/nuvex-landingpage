import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import FacebookPixel from '@/components/analytics/facebook-pixel'
import JsonLd from '@/components/seo/json-ld'
import {
  absoluteUrl,
  appUrl,
  company,
  logoImage,
  mainNav,
  secondaryNav,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from '@/lib/site'
import './globals.css'

const organizationId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`
const softwareId = `${siteUrl}/#software`
const webAppId = `${appUrl}/#webapp`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'facturación electrónica',
    'facturación electrónica SUNAT',
    'comprobantes electrónicos',
    'boleta electrónica',
    'factura electrónica Perú',
    'sistema POS',
    'POS en la nube',
    'punto de venta',
    'sistema de ventas',
    'software para tiendas',
    'control de inventario',
    'control de caja',
    'SaaS Perú',
    'Nuvex',
  ],
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: company.legalName,
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
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [{ url: '/Norvitex.ico' }, { url: '/Norvitex.png', type: 'image/png' }],
    apple: '/Norvitex.png',
  },
  other: {
    'geo.region': 'PE-LIM',
    'geo.placename': 'Lima',
  },
}

export const viewport: Viewport = {
  themeColor: '#101d69',
  colorScheme: 'light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteName,
      legalName: company.legalName,
      taxID: company.ruc,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: logoImage,
        width: 844,
        height: 797,
      },
      image: logoImage,
      email: company.email,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.district,
        addressRegion: company.address.region,
        addressCountry: company.address.country,
      },
      areaServed: {
        '@type': 'Country',
        name: company.address.countryName,
      },
      owns: { '@id': webAppId },
      sameAs: [...company.social],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteUrl,
      name: siteName,
      inLanguage: 'es-PE',
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': softwareId,
      name: siteName,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'POS y facturación electrónica',
      operatingSystem: 'Web, Android, iOS',
      url: siteUrl,
      description: siteDescription,
      inLanguage: 'es-PE',
      featureList: [
        'Facturación electrónica SUNAT',
        'Punto de venta (POS)',
        'Control de inventario y kardex',
        'Variantes por talla y color',
        'Control de caja',
        'Multiples sucursales y almacenes',
        'Reportes de ventas',
        'Enlace de envíos para clientes',
      ],
      screenshot: absoluteUrl('/kiments-erp.webp'),
      installUrl: `${appUrl}/register`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'PEN',
        lowPrice: '19.00',
        highPrice: '99.00',
        offerCount: 6,
        availability: 'https://schema.org/InStock',
        url: absoluteUrl('/precios'),
      },
      publisher: { '@id': organizationId },
      potentialAction: [
        {
          '@type': 'RegisterAction',
          name: 'Prueba gratis 14 días',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://app.nuvex.pe/register',
            actionPlatform: [
              'https://schema.org/DesktopWebPlatform',
              'https://schema.org/MobileWebPlatform',
            ],
          },
        },
        {
          '@type': 'LoginAction',
          name: 'Ingresar a Nuvex',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://app.nuvex.pe/login',
            actionPlatform: [
              'https://schema.org/DesktopWebPlatform',
              'https://schema.org/MobileWebPlatform',
            ],
          },
        },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': webAppId,
      name: 'Nuvex App',
      alternateName: 'Nuvex POS',
      url: appUrl,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'POS y facturación electrónica',
      operatingSystem: 'Web',
      browserRequirements: 'Requiere JavaScript habilitado',
      inLanguage: 'es-PE',
      isAccessibleForFree: false,
      publisher: { '@id': organizationId },
      isPartOf: { '@id': websiteId },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'PEN',
        lowPrice: '19.00',
        highPrice: '99.00',
        offerCount: 6,
        availability: 'https://schema.org/InStock',
        url: absoluteUrl('/precios'),
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/#sitelinks`,
      itemListElement: [...mainNav, ...secondaryNav].map((item, index) => ({
        '@type': 'SiteNavigationElement',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.href),
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-PE" className="bg-white">
      <body className="font-sans antialiased bg-white">
        <JsonLd data={jsonLd} />
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
