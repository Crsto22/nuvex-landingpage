import Link from 'next/link'
import { ChevronRightIcon } from '@/components/landing/icons'
import JsonLd from './json-ld'
import { absoluteUrl } from '@/lib/site'

export type BreadcrumbItem = {
  name: string
  href: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

/**
 * Migas de pan visibles + BreadcrumbList para Google.
 * El último elemento es la página actual y no se enlaza.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Ruta de navegación" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-white/70 sm:text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.href} className="flex items-center gap-1">
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-white">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {item.name}
                    </Link>
                    <ChevronRightIcon
                      size={12}
                      className="text-white/40"
                    />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
