import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // No se bloquea /_next/: Googlebot necesita el CSS y JS para renderizar.
      disallow: ['/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
