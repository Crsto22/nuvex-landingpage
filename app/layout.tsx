import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
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

export const metadata: Metadata = {
  title: 'Nuvex - POS en la Nube para Tu Negocio',
  description: 'Vende rápido, cuadra tu caja y controla el inventario de tus productos con variantes (talla, color, modelo). El SaaS de punto de venta para negocios con productos por variantes.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/Norvitex.ico' },
      { url: '/Norvitex.png', type: 'image/png' },
    ],
    apple: '/Norvitex.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-white">
      <body className={`${sora.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
