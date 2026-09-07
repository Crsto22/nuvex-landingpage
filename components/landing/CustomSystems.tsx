'use client'

import { motion } from 'framer-motion'
import {
  WhatsappLogo,
  Lightning,
  ChartLineUp,
  Package,
  Storefront,
  ArrowsLeftRight,
  Globe,
  Sparkle,
} from 'phosphor-react'

const WHATSAPP_URL =
  'https://wa.me/51923328058?text=' +
  encodeURIComponent('Hola, quiero un sistema a medida para mi negocio')

const features = [
  {
    icon: Lightning,
    title: 'Ventas integradas',
    text: 'Pedidos del ecommerce y de tienda física en un solo flujo con comprobantes electrónicos.',
  },
  {
    icon: Package,
    title: 'Stock sincronizado',
    text: 'Inventario real por sucursal: cada venta online descuenta el ERP al instante.',
  },
  {
    icon: ChartLineUp,
    title: 'Reportes en tiempo real',
    text: 'Dashboard con ventas, tendencias y rendimiento de canales online y físico.',
  },
]

export default function CustomSystems() {
  return (
    <section id="sistemas" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#fd741a]/40 bg-[#fd741a]/10 px-4 py-1.5">
            <Sparkle size={16} weight="fill" className="text-[#fd741a]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#fd741a] md:text-sm">
              Desarrollo de software
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-[#101d69] md:text-4xl lg:text-5xl">
            Sistemas a medida para tu negocio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Tu negocio no funciona como ningún otro. Diseñamos y desarrollamos el
            software exacto que tu operación necesita — no una plantilla.
          </p>
        </motion.div>

        {/* Caso Kiments */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#fd741a]">
                Caso de éxito
              </p>
              <h3 className="mt-1 text-2xl font-bold text-[#101d69] md:text-3xl">Kiments</h3>
            </div>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 md:text-sm">
              ERP + Ecommerce desarrollados desde cero
            </span>
          </div>

          {/* Diagrama: ERP <-> Ecommerce */}
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* Tarjeta ERP */}
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-5 shadow-[0_4px_20px_rgba(16,29,105,0.06)] md:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-[#101d69] p-2.5 text-white">
                  <ChartLineUp size={22} weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#101d69] md:text-base">
                    Sistema ERP
                  </p>
                  <p className="text-xs text-gray-500">Desarrollo a medida</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[10px] font-medium text-gray-400">
                    ERP Kiments — Dashboard
                  </span>
                </div>
                <img
                  src="/kiments-erp.png"
                  alt="Sistema ERP a medida desarrollado para Kiments"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Conexión */}
            <div className="flex flex-col items-center gap-2 py-2 lg:py-0">
              <div className="flex items-center gap-2 rounded-full bg-[#fd741a] px-4 py-2 text-xs font-bold text-white shadow-lg md:text-sm">
                <ArrowsLeftRight size={18} weight="bold" />
                Sincronizado
              </div>
              <div className="hidden h-16 w-px bg-gradient-to-b from-[#fd741a]/60 to-transparent lg:block" />
            </div>

            {/* Tarjeta Ecommerce */}
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-5 shadow-[0_4px_20px_rgba(16,29,105,0.06)] md:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-[#fd741a] p-2.5 text-white">
                  <Storefront size={22} weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#101d69] md:text-base">
                    Ecommerce
                  </p>
                  <p className="text-xs text-gray-500">kiments.com.pe</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[10px] font-medium text-gray-400">
                    kiments.com.pe
                  </span>
                </div>
                <img
                  src="/kiments-ecommerce.png"
                  alt="Ecommerce de Kiments conectado al ERP"
                  className="w-full object-cover"
                />
              </div>
              <a
                href="https://kiments.com.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#101d69] transition-colors hover:text-[#fd741a]"
              >
                <Globe size={18} weight="bold" />
                Visitar tienda
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_4px_20px_rgba(16,29,105,0.06)]"
                >
                  <Icon size={24} weight="fill" className="mb-3 text-[#fd741a]" />
                  <p className="text-sm font-bold text-[#101d69] md:text-base">{f.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-600 md:text-sm">
                    {f.text}
                  </p>
                </div>
              )
            })}
          </div>

          {/* TikTok + CTA */}
          <div className="mt-8 flex flex-col items-center gap-6 rounded-[1.75rem] border border-gray-200 bg-white px-6 py-8 shadow-[0_4px_20px_rgba(16,29,105,0.06)] md:flex-row md:justify-between md:px-10">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-[#101d69] md:text-2xl">
                ¿Deseas un sistema a medida?
              </h4>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                Cuéntanos qué necesita tu negocio y lo construimos contigo.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 items-center gap-2 rounded-full bg-[#25d366] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all hover:scale-105 hover:bg-[#1fb855] md:text-base"
            >
              <WhatsappLogo size={24} weight="fill" />
              Contacta con nosotros
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
