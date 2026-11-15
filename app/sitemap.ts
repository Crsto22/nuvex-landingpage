import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

/**
 * Fechas reales de modificación por página. No usar `new Date()`:
 * un lastmod que cambia en cada build hace que Google lo ignore.
 */
const updated = {
  home: '2026-11-15',
  precios: '2026-11-15',
  facturacion: '2026-11-15',
  pos: '2026-11-15',
  envios: '2026-11-15',
  sistemas: '2026-11-15',
  consulta: '2026-11-15',
  privacidad: '2026-11-09',
  terminos: '2026-11-09',
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: updated.home,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/facturacion-electronica`,
      lastModified: updated.facturacion,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/precios`,
      lastModified: updated.precios,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sistema-pos`,
      lastModified: updated.pos,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/envios`,
      lastModified: updated.envios,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/sistemas-a-medida`,
      lastModified: updated.sistemas,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/consulta`,
      lastModified: updated.consulta,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/privacidad`,
      lastModified: updated.privacidad,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terminos`,
      lastModified: updated.terminos,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
