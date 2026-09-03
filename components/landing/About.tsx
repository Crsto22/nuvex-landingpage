'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Users } from 'phosphor-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Misión',
      description:
        'Empoderar a microempresarios textiles con tecnología accesible que simplifique su operación diaria.',
    },
    {
      icon: Lightbulb,
      title: 'Visión',
      description:
        'Ser el sistema POS estándar para boutiques y tiendas de ropa en Latinoamérica.',
    },
    {
      icon: Users,
      title: 'Valores',
      description:
        'Transparencia, confiabilidad y enfoque en la satisfacción del cliente por encima de todo.',
    },
  ]

  return (
    <section id="nosotros" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
              Sobre nosotros
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight mb-6">
              Somos Nuvex
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Nacimos de una necesidad real. Vimos a pequeños empresarios textiles
              lidiando con sistemas complicados, pierden dinero por errores de
              inventario y no tenían claridad en sus números.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Decidimos crear una solución diferente: un POS diseñado específicamente
              para tiendas de ropa, fácil de usar, confiable y transparente en precio.
              Hoy, cientos de boutiques y negocios textiles confían en Nuvex para
              controlar su operación.
            </p>

            <div className="space-y-4">
              <p className="font-semibold text-gray-900">Nuestro compromiso:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#fd741a] font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    Soporte rápido y dedicado para tu negocio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#fd741a] font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    Seguridad de nivel bancario en tus datos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#fd741a] font-bold mt-1">✓</span>
                  <span className="text-gray-700">
                    Mejoras constantes basadas en tu feedback
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white flex items-center justify-center">
              {/* Ventanita de Software UI */}
              <div className="w-[320px] h-[380px] xl:w-[420px] xl:h-[480px] bg-white rounded-3xl shadow-xl overflow-hidden rotate-3 border-4 border-white/10">
                <div className="h-10 bg-gray-50 flex items-center px-4 gap-2 border-b border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="p-6">
                  <div className="w-1/2 h-4 bg-gray-200 rounded-full mb-6" />
                  <div className="w-full h-32 bg-gradient-to-br from-[#fd741a]/10 to-transparent rounded-2xl border border-[#fd741a]/20 mb-4" />
                  <div className="w-3/4 h-16 bg-blue-50 rounded-2xl" />
                </div>
              </div>

              {/* Mascota */}
              <img
                src="/tu-mascota-entera2.png"
                alt="Mascota Nuvex"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl pointer-events-none scale-[1.15]"
              />
            </div>
          </motion.div>
        </div>

        {/* Values grid below */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                className="p-6 md:p-8 bg-white rounded-xl border border-gray-200 hover:border-[#101d69] hover:shadow-lg transition-all hover:bg-[#101d69]/5"
                whileHover={{ y: -4 }}
              >
                <IconComponent
                  size={40}
                  weight="bold"
                  className="text-[#fd741a] mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
