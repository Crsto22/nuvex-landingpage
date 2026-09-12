'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowsLeftRight,
  ChartLineUp,
  Storefront,
  Globe,
} from 'phosphor-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

const WHATSAPP_URL =
  'https://wa.me/51923328058?text=' +
  encodeURIComponent('Hola, quiero un sistema a medida para mi negocio')

export default function CustomSystems() {
  return (
    <section id="sistemas" className="relative z-10 overflow-hidden py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <img
              src="/iconos/medida.png"
              alt="Sistemas a medida para tu negocio"
              className="h-auto w-full max-w-xl object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[1.75rem] md:text-[2.1rem] lg:text-[2.6rem] font-extrabold text-[#101d69] leading-tight [text-shadow:2px_2px_0_#ffffff,-2px_-2px_0_#ffffff,2px_-2px_0_#ffffff,-2px_2px_0_#ffffff,2px_0_0_#ffffff,-2px_0_0_#ffffff,0_2px_0_#ffffff,0_-2px_0_#ffffff]">
              Sistemas a medida{' '}
              <span className="text-[#fd741a]">para tu negocio</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Diseñamos y desarrollamos el software exacto que tu operación
              necesita, desde ERP, ecommerce, integraciones y más.
            </p>
            <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#101d69] text-white font-semibold rounded-full hover:bg-[#0d1650] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:bg-[#0d1650]"
              >
                Solicitar una asesoría
                <ArrowRight size={18} weight="bold" />
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="w-full sm:w-auto px-8 py-4 text-[#101d69] font-semibold rounded-full border-2 border-[#101d69] hover:bg-[#101d69] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Ver ejemplos
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border-0 p-6 md:p-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#fd741a]">
                      Caso de éxito
                    </p>
                    <DialogTitle className="mt-1 text-2xl font-bold text-[#101d69] md:text-3xl">
                      Kiments
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm text-gray-600 md:text-base">
                      ERP + Ecommerce desarrollados desde cero
                    </DialogDescription>
                  </div>

                  <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
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

                    <div className="flex flex-col items-center gap-2 py-2 lg:py-0">
                      <div className="flex items-center gap-2 rounded-full bg-[#fd741a] px-4 py-2 text-xs font-bold text-white shadow-lg md:text-sm">
                        <ArrowsLeftRight size={18} weight="bold" />
                        Sincronizado
                      </div>
                      <div className="hidden h-16 w-px bg-gradient-to-b from-[#fd741a]/60 to-transparent lg:block" />
                    </div>

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
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    Los pedidos del ecommerce se sincronizan con el stock y el
                    ERP: cada venta descuenta inventario al instante.
                  </p>

                  <a
                    href="https://kiments.com.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-[#101d69] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#0d1650] hover:shadow-xl md:text-base"
                  >
                    <Globe size={20} weight="bold" />
                    Visitar tienda
                    <ArrowRight size={18} weight="bold" />
                  </a>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
