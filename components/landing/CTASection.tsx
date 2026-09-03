'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'phosphor-react'

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1142] via-[#101d69] to-[#0d1650] py-16 md:py-24 overflow-hidden">
      {/* Ola superior */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 30C240 70 480 0 720 20C960 40 1200 80 1440 30L1440 0L0 0Z" fill="white" />
        </svg>
      </div>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 70C240 30 480 100 720 80C960 60 1200 20 1440 70L1440 100L0 100Z" fill="white" />
        </svg>
      </div>

      {/* Estrellas decorativas */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.3s' }} />

      {/* Nebulosas */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#fd741a] opacity-20 blur-[100px] rounded-full" />
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-blue-400 opacity-15 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Empieza hoy. 7 dias gratis.
          </h2>
          <p className="text-lg md:text-xl text-blue-100/90 mb-2">
            Sin tarjeta. Asesoria personalizada incluida.
          </p>

          <motion.a
            href="https://app.nuvex.pe/register"
            className="mt-8 px-10 py-4 bg-[#fd741a] text-white font-bold text-lg rounded-full hover:bg-[#e5650f] transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Crear mi cuenta gratis
            <ArrowRight size={20} weight="bold" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
