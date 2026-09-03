'use client'

import { motion } from 'framer-motion'

export default function TrustLogos() {
  const logos = [
    { name: 'Kiments.pe', image: '/negocio1.png' },
    { name: 'Adaza.pe', image: '/negocio6.png' },
    { name: 'Donna Sweet', image: '/negocio7.png' },
  ]

  return (
    <section className="bg-white py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Texto normal */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Clientes que ya confían en Nuvex
            </p>
          </div>

          {/* Carrusel infinito de empresas */}
          <div className="flex-1 overflow-hidden relative w-full">
            <motion.div
              className="flex gap-10 md:gap-14 items-center w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="h-16 md:h-20 flex items-center justify-center">
                    <img src={logo.image} alt={logo.name} className="max-w-full max-h-full object-contain rounded-md" />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-gray-600 whitespace-nowrap">
                    {logo.name}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Gradientes */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
