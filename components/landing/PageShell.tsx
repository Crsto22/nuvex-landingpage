import Link from 'next/link'
import { ArrowRightIcon, CheckCircleIcon } from './icons'
import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import Breadcrumbs, { type BreadcrumbItem } from '@/components/seo/breadcrumbs'
import { registerUrl, whatsappUrl } from '@/lib/site'

type PageShellProps = {
  breadcrumbs: BreadcrumbItem[]
  title: string
  highlight?: string
  lead: string
  children: React.ReactNode
  /** Texto del botón principal. Por defecto invita a la prueba gratis. */
  ctaLabel?: string
  ctaHref?: string
  ctaNote?: string
  bullets?: string[]
}

export default function PageShell({
  breadcrumbs,
  title,
  highlight,
  lead,
  children,
  ctaLabel = 'Empezar gratis 14 días',
  ctaHref = registerUrl,
  ctaNote = 'Sin tarjeta de crédito. Configúralo en minutos.',
  bullets = [],
}: PageShellProps) {
  const isExternal = ctaHref.startsWith('http')

  return (
    <main className="w-full bg-white">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f6ff] to-white pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#101d69] px-5 py-8 sm:px-10 md:py-12">
            <Breadcrumbs items={breadcrumbs} />

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.6rem]">
                  {title}{' '}
                  {highlight ? (
                    <span className="text-[#fd741a]">{highlight}</span>
                  ) : null}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                  {lead}
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  {bullets.length > 0 && (
                    <ul className="mb-5 space-y-2">
                      {bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-white/90"
                        >
                          <CheckCircleIcon
                            size={17}
                            className="mt-0.5 shrink-0 text-[#fd741a]"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {isExternal ? (
                    <a
                      href={ctaHref}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#fd741a] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#e2650f]"
                    >
                      {ctaLabel}
                      <ArrowRightIcon size={16} />
                    </a>
                  ) : (
                    <Link
                      href={ctaHref}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#fd741a] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#e2650f]"
                    >
                      {ctaLabel}
                      <ArrowRightIcon size={16} />
                    </Link>
                  )}

                  <p className="mt-3 text-center text-xs text-white/70">{ctaNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <article className="lg:col-span-8">
            <div className="rich-text">{children}</div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-bold text-[#101d69]">
                Prueba Nuvex gratis
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                14 días con todas las funciones, sin tarjeta de crédito.
              </p>
              <a
                href={registerUrl}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#101d69] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d1650]"
              >
                Crear mi cuenta
                <ArrowRightIcon size={16} />
              </a>
              <a
                href={whatsappUrl('Hola, quiero saber más sobre Nuvex')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-[#101d69] px-5 py-3 text-sm font-semibold text-[#101d69] transition-colors hover:bg-[#101d69] hover:text-white"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
