'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretDown } from 'phosphor-react'

const faqs = [
  {
    question: '¿Los 7 días gratis son reales?',
    answer:
      'Totalmente. Te damos 7 días de acceso completo a todas las funcionalidades de Nuvex sin costo, sin tarjeta de crédito y sin compromiso. Queremos que pruebes todo antes de decidir.',
  },
  {
    question: '¿Cuánto cuesta después de los 7 días?',
    answer:
      'Después de la prueba gratis, puedes elegir el plan que mejor se adapte a tu negocio. Tenemos planes desde S/ 49 al mes. Puedes ver todos los detalles en nuestra sección de planes.',
  },
  {
    question: '¿Necesito saber de contabilidad para usarlo?',
    answer:
      'No. Nuvex está diseñado para que cualquier persona pueda usarlo sin conocimientos contables. La plataforma automatiza los procesos y te guía paso a paso. Además, nuestro equipo de soporte está siempre disponible.',
  },
  {
    question: '¿La declaración a SUNAT está incluida?',
    answer:
      'Sí. Desde el plan Emprende, preparamos tu declaración mensual y un contador colegiado la revisa antes del envío. Tú solo enfócate en vender, nosotros nos encargamos del resto.',
  },
  {
    question: '¿Nuvex es para mi tipo de negocio?',
    answer:
      'Nuvex está diseñado especialmente para tiendas de ropa, calzado y boutiques que manejan productos con variantes como talla, color y modelo. Si vendes productos con estas características, Nuvex es para ti.',
  },
  {
    question: '¿Qué pasa si supero los comprobantes de mi plan?',
    answer:
      'No te preocupes. Te notificaremos cuando estés cerca del límite y podrás seguir emitiendo comprobantes. Solo se ajustará automáticamente al plan que corresponda según tu volumen. Sin interrupciones en tu operación.',
  },
  {
    question: '¿Puedo cambiar de plan después?',
    answer:
      'Sí, puedes subir o bajar de plan en cualquier momento desde tu panel de control. El cambio es inmediato y solo pagarás la diferencia proporcional. Sin contratos forzosos ni penalizaciones.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="preguntas" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight">
            Resolvemos tus dudas antes de empezar
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
              className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden transition-colors hover:border-[#101d69]/20"
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
    </section>
  )
}
