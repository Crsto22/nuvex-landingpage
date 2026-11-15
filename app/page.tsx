import Image from 'next/image'
import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import ShippingLinkFeature from '@/components/landing/ShippingLinkFeature'
import BusinessTypes from '@/components/landing/BusinessTypes'
import FeaturedFeatures from '@/components/landing/FeaturedFeatures'
import PricingSection from '@/components/landing/PricingSection'
import CustomSystems from '@/components/landing/CustomSystems'
import FAQ from '@/components/landing/FAQ'
import ExploreLinks from '@/components/landing/ExploreLinks'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'
import JsonLd from '@/components/seo/json-ld'
import { faqs } from '@/lib/faqs'
import { absoluteUrl, siteDescription, siteName } from '@/lib/site'

// Los planes se revalidan cada hora para que el HTML no quede con precios viejos.
export const revalidate = 3600

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/')}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': absoluteUrl('/'),
  url: absoluteUrl('/'),
  name: 'Sistema de Facturación Electrónica SUNAT y POS en Perú',
  description: siteDescription,
  inLanguage: 'es-PE',
  isPartOf: { '@id': `${absoluteUrl('/')}#website` },
  about: { '@id': `${absoluteUrl('/')}#software` },
  publisher: {
    '@type': 'Organization',
    name: siteName,
    url: absoluteUrl('/'),
  },
}

export default function Home() {
  return (
    <main className="relative w-full bg-white">
      <JsonLd data={faqJsonLd} />
      <JsonLd data={webPageJsonLd} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 h-[560px] w-[60%] lg:h-[620px]"
      >
        <Image
          src="/fondos/fondo1.webp"
          alt=""
          fill
          sizes="60vw"
          unoptimized
          loading="eager"
          fetchPriority="high"
          className="object-contain object-right-top"
        />
      </div>
      <Header />
      <Hero />
      <ShippingLinkFeature />
      <BusinessTypes />
      <FeaturedFeatures />
      <PricingSection />
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-0"
        >
          <Image
            src="/fondos/fondo 5.webp"
            alt=""
            width={699}
            height={1322}
            className="h-full w-auto"
            loading="lazy"
          />
        </div>
        <CustomSystems />
        <FAQ />
      </div>
      <ExploreLinks />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
