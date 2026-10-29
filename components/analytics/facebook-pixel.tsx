'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

type FacebookQueue = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  push?: FacebookQueue
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq?: FacebookQueue
    _fbq?: FacebookQueue
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? '4232174627079902'

export function trackFacebookEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
  window.fbq('track', event, params)
}

export default function FacebookPixel() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    trackFacebookEvent('PageView')
  }, [pathname])

  useEffect(() => {
    let timer: number | undefined

    const loadPixel = () => {
      if (window.fbq) return

      const fbq = ((...args: unknown[]) => {
        if (fbq.callMethod) {
          fbq.callMethod(...args)
        } else {
          fbq.queue.push(args)
        }
      }) as FacebookQueue

      fbq.queue = []
      fbq.push = fbq
      fbq.loaded = true
      fbq.version = '2.0'
      window.fbq = fbq
      window._fbq ??= fbq

      const script = document.createElement('script')
      script.async = true
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      document.head.appendChild(script)

      fbq('init', PIXEL_ID)
      fbq('track', 'PageView')

      document.removeEventListener('pointerdown', loadPixel)
      document.removeEventListener('keydown', loadPixel)
      if (timer) window.clearTimeout(timer)
    }

    document.addEventListener('pointerdown', loadPixel, { once: true, passive: true })
    document.addEventListener('keydown', loadPixel, { once: true })
    timer = window.setTimeout(loadPixel, 12_000)

    return () => {
      document.removeEventListener('pointerdown', loadPixel)
      document.removeEventListener('keydown', loadPixel)
      if (timer) window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') ?? ''
      if (href.includes('app.nuvex.pe/register')) {
        trackFacebookEvent('Lead', { content_name: 'registro' })
      } else if (href.includes('wa.me') || href.includes('whatsapp')) {
        trackFacebookEvent('Contact', { content_name: 'whatsapp' })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  if (!PIXEL_ID) return null

  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />`,
        }}
      />
    </>
  )
}
