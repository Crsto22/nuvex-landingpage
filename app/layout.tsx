import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import FacebookPixel from '@/components/analytics/facebook-pixel'
import './globals.css'

const sora = localFont({
  src: [
    { path: '../public/fonts/Sora-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Sora-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Sora-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Sora-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/Sora-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/Sora-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-sora'
});

const plusJakartaSans = localFont({
  src: [
    { path: '../public/fonts/PlusJakartaSans-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/PlusJakartaSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/PlusJakartaSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/PlusJakartaSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/PlusJakartaSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/PlusJakartaSans-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-jakarta'
});

const jetbrainsMono = localFont({
  src: [
    { path: '../public/fonts/JetBrainsMono-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/JetBrainsMono-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-jetbrains'
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nuvex.pe').replace(/\/$/, '')

const siteTitle = 'Nuvex | POS en la Nube y Sistema de Ventas para Tiendas de Ropa'
const siteDescription =
  'Nuvex es el POS en la nube y sistema de ventas para tiendas de ropa y boutiques: vende rápido, controla el inventario por talla, color y modelo, emite comprobantes electrónicos a SUNAT y cuadra tu caja.'

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
    'software para tiendas de ropa',
    'inventario por variantes',
    'talla color modelo',
    'facturación electrónica',
    'comprobantes electrónicos',
    'SUNAT',
    'boutique',
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
        url: '/logopng.png',
        width: 2173,
        height: 724,
        alt: 'Nuvex - POS en la nube para tiendas de ropa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/logopng.png'],
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
      logo: `${siteUrl}/logopng.png`,
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
        description: 'Prueba gratis de 30 días',
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
      <body className={`${sora.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white`}>
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
