'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const Pricing = dynamic(() => import('./Pricing'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="min-h-[850px] bg-white"
    />
  ),
})

export default function DeferredPricing() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || shouldLoad) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '800px 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div id="planes" ref={sectionRef} className="scroll-mt-24">
      {shouldLoad ? (
        <Pricing />
      ) : (
        <section className="min-h-[850px] bg-white py-16 md:py-24">
          <h2 className="sr-only">Elige el plan perfecto para tu tienda</h2>
        </section>
      )}
    </div>
  )
}
