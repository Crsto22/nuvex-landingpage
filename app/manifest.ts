import type { MetadataRoute } from 'next'
import { siteDescription, siteName } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — POS y facturación electrónica SUNAT`,
    short_name: siteName,
    description: siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#101d69',
    lang: 'es-PE',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
