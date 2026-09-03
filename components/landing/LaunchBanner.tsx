'use client'

import { motion } from 'framer-motion'

export default function LaunchBanner() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1142] via-[#101d69] to-[#0d1650] pt-0 md:pt-0 pb-10 md:pb-14 overflow-hidden">
      {/* Ola superior */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 40C240 80 480 0 720 20C960 40 1200 80 1440 30L1440 0L0 0Z" fill="white" />
        </svg>
      </div>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 80C240 40 480 120 720 100C960 80 1200 40 1440 90L1440 120L0 120Z" fill="white" />
        </svg>
      </div>
      {/* Estrellas Brillantes */}
      <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse" />
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-white rounded-full opacity-90 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-12 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-12 right-16 w-2.5 h-2.5 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50" />

      {/* Nebulosas */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#fd741a] opacity-30 blur-[100px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500 opacity-20 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 p-8 md:p-12 lg:px-16 lg:py-14 min-h-[350px]">

          {/* MASCOTA EN COHETE - IZQUIERDA */}
          <motion.div
            className="lg:w-2/5 flex justify-center lg:justify-start w-full relative h-[280px] lg:h-[400px] z-20 mb-8 lg:mb-0 order-first lg:order-first"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <div className="absolute -bottom-8 lg:-bottom-20 left-0 w-full lg:w-full h-[120%] lg:h-[130%] flex justify-start items-end pointer-events-none">
              <img
                src="/mascota-espacio.png"
                alt="Mascota Norbitex en el espacio"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(253,116,26,0.3)] rotate-[3deg]"
              />
            </div>
          </motion.div>

          {/* Textos - DERECHA */}
          <div className="lg:w-3/5 text-white mb-12 lg:mb-0 z-20 order-last lg:order-last">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Impulsamos tu tienda hacia las estrellas
            </h3>
            <p className="text-blue-100/90 text-base lg:text-lg max-w-xl leading-relaxed">
              Norbitex te da el control absoluto. Administra, vende y escala tu negocio a velocidades que nunca imaginaste. ¡Abróchate el cinturón!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
