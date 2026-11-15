import { ImageResponse } from 'next/og'

export const alt = 'Nuvex — Sistema de facturación electrónica SUNAT y POS en Perú'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #101d69 0%, #1b2f8f 100%)',
          padding: '64px 72px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              borderRadius: 18,
              background: '#fd741a',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 42,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: -1,
            }}
          >
            nuvex
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 66,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Facturación electrónica SUNAT y POS en la nube
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: '#c3cbef',
              maxWidth: 900,
            }}
          >
            Para tiendas en Perú · Desde S/ 19/mes · Prueba gratis 14 días
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              display: 'flex',
              width: 12,
              height: 12,
              borderRadius: 999,
              background: '#22c55e',
            }}
          />
          <div style={{ display: 'flex', fontSize: 24, color: '#c3cbef' }}>
            nuvex.pe
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
