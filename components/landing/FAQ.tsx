'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretDown } from 'phosphor-react'

const faqs = [
  {
    question: '¿Los 30 días gratis son reales?',
    answer:
      'Sí. Te damos 30 días de acceso completo a todas las funcionalidades, sin tarjeta de crédito y sin compromiso. Prueba todo antes de decidir.',
  },
  {
    question: '¿Para qué tipo de negocios sirve?',
    answer:
      'Ideal para tiendas de ropa, calzado y cualquier producto con variantes (talla, color, modelo). También funciona para bodegas, minimarkets y otros comercios que necesitan vender, controlar stock y facturar.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Los planes empiezan desde S/ 39 al mes con el plan Básico. Eliges el que mejor se adapte a tu negocio y puedes cambiarlo cuando quieras.',
  },
  {
    question: '¿Qué pasa si supero los comprobantes de mi plan?',
    answer:
      'No te preocupes: sigues facturando sin interrupciones. Solo se cobra un monto extra según los comprobantes adicionales que emitas.',
  },
  {
    question: '¿Puedo controlar varias tiendas, almacenes y usuarios?',
    answer:
      'Sí. Administras todas tus sucursales, almacenes y usuarios desde una sola cuenta, según tu plan.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="preguntas" className="relative z-10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img
              src="/iconos/preguntas.png"
              alt="Preguntas frecuentes sobre Nuvex"
              className="h-auto w-full max-w-md object-contain"
            />
          </motion.div>

          <div>
            <motion.div
              className="mb-10 md:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold leading-tight text-[#101d69] md:text-3xl lg:text-4xl [text-shadow:2px_2px_0_#ffffff,-2px_-2px_0_#ffffff,2px_-2px_0_#ffffff,-2px_2px_0_#ffffff,2px_0_0_#ffffff,-2px_0_0_#ffffff,0_2px_0_#ffffff,0_-2px_0_#ffffff]">
                Resolvemos tus dudas{' '}
                <span className="text-[#fd741a]">antes de empezar</span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-gray-50 overflow-hidden transition-colors hover:bg-gray-100"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <CaretDown
                        size={20}
                        weight="bold"
                        className="text-[#101d69]"
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                          <div className="h-px bg-gradient-to-r from-transparent via-[#fd741a]/30 to-transparent mb-4" />
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
