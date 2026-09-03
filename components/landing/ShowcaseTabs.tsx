'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChartLineUp, Package, Storefront } from 'phosphor-react'

export default function ShowcaseTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      icon: Storefront,
      title: 'Punto de Venta Ultra Rapido',
      description:
        'Atiende a tus clientes en segundos con una venta limpia, directa y lista para caja.',
      animation: 'nuvex-mascot--wave',
      eyebrow: 'Venta en accion',
      stat: 'Cobro rapido',
    },
    {
      id: 1,
      icon: Package,
      title: 'Control de Inventario Real',
      description:
        'Encuentra tallas, colores y existencias al instante sin moverte de tu mostrador.',
      animation: 'nuvex-mascot--idle',
      eyebrow: 'Stock ordenado',
      stat: 'Variantes claras',
    },
    {
      id: 2,
      icon: ChartLineUp,
      title: 'Cierres de Caja Perfectos',
      description:
        'Cuadra caja con movimientos visibles, reportes claros y menos trabajo manual.',
      animation: 'nuvex-mascot--celebrate',
      eyebrow: 'Cierre listo',
      stat: 'Reportes al dia',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [tabs.length])

  const active = tabs[activeTab]

  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-[#101d69] py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(253,116,26,0.20),transparent_32%),radial-gradient(circle_at_25%_80%,rgba(255,255,255,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#fd741a] md:text-base">
              La experiencia Nuvex
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Disenado para fluir con tu dia
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg">
              Cambia de modulo y mira como Nuvex acompana cada momento de tu tienda:
              venta, inventario y cierre.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index
              const Icon = tab.icon

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`group relative overflow-hidden rounded-[1.65rem] border p-5 text-left transition-all duration-500 md:p-6 ${
                    isActive
                      ? 'scale-[1.02] border-white/25 bg-white/12 shadow-2xl backdrop-blur-md'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10 flex items-start gap-4 md:gap-5">
                    <div
                      className={`flex-shrink-0 rounded-[1.25rem] p-3.5 transition-all duration-500 ${
                        isActive
                          ? 'bg-[#fd741a] text-white shadow-lg'
                          : 'bg-white/10 text-white/55 group-hover:text-white'
                      }`}
                    >
                      <Icon size={26} weight={isActive ? 'fill' : 'regular'} />
                    </div>

                    <div className="mt-1">
                      <h3
                        className={`mb-2 text-xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {tab.title}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="pr-4 text-sm leading-relaxed text-blue-50/80 md:text-base">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      key={activeTab}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#fd741a] to-[#ff9b52]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative min-h-[430px] md:min-h-[540px]">
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/15 bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-md" />
          <div className="absolute inset-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/95 to-blue-50 p-5 shadow-2xl md:inset-6 md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#fd741a]">
                  {active.eyebrow}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-[#101d69] md:text-3xl">
                  {active.title}
                </h3>
              </div>
              <span className="rounded-full bg-[#101d69] px-4 py-2 text-xs font-bold text-white">
                {active.stat}
              </span>
            </div>

            <div className="relative h-[310px] overflow-hidden rounded-[1.75rem] bg-[#101d69] md:h-[390px]">
              <div className="absolute left-5 top-5 right-5 z-10 grid grid-cols-3 gap-3">
                <div className="h-16 rounded-[1.2rem] bg-white/12 ring-1 ring-white/12" />
                <div className="h-16 rounded-[1.2rem] bg-[#fd741a]/80 ring-1 ring-white/12" />
                <div className="h-16 rounded-[1.2rem] bg-white/12 ring-1 ring-white/12" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10 rounded-[1.5rem] bg-white p-4 shadow-xl">
                <div className="mb-3 h-3 w-32 rounded-full bg-[#101d69]/15" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-10 rounded-xl bg-gray-100" />
                  <div className="h-10 rounded-xl bg-gray-100" />
                  <div className="h-10 rounded-xl bg-[#fd741a]/15" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="absolute inset-x-0 bottom-16 z-20 flex justify-center md:bottom-20"
                  initial={{ opacity: 0, y: 22, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className={`nuvex-mascot nuvex-mascot--showcase ${active.animation}`} />
                </motion.div>
              </AnimatePresence>

              <div className="absolute -bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#fd741a]/40 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
