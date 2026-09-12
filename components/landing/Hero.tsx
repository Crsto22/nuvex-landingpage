'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight } from 'phosphor-react'

export default function Hero() {
  const [assistanceImageIndex, setAssistanceImageIndex] = useState(0)
  const [productImageIndex, setProductImageIndex] = useState(0)

  const assistanceImages = ['/asistencia 1.png', '/asistencia 2.png']
  const productImages = ['/fondos/mochila.png', '/fondos/ropa.png', '/fondos/zapatilla.png']

  useEffect(() => {
    const timer = setInterval(() => {
      setAssistanceImageIndex((prev) => (prev + 1) % assistanceImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [assistanceImages.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setProductImageIndex((prev) => (prev + 1) % productImages.length)
    }, 15000)
    return () => clearInterval(timer)
  }, [productImages.length])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <>
      {/* Hero 1 - POS */}
      <section className="relative bg-transparent pt-0 md:pt-0 pb-2 md:pb-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-24 -mt-2 lg:-mt-4">
          <div className="relative h-[720px] sm:h-[720px] lg:h-[540px]">
            <motion.div
              className="absolute inset-0 grid content-center grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Text Content */}
              <motion.div className="flex flex-col gap-8 lg:col-span-7 z-10" variants={itemVariants}>
                <motion.h1
                  className="text-[1.75rem] md:text-[2.1rem] lg:text-[2.6rem] font-extrabold text-[#101d69] leading-tight"
                  variants={itemVariants}
                >
                  Impulsa tu negocio desde{' '}
                  <span className="text-[#fd741a]">una sola plataforma</span>
                </motion.h1>

                <motion.p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  La plataforma para gestionar tiendas de ropa, calzado, accesorios y más. Controla tus ventas, inventario, caja y facturación desde un solo lugar.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4 w-full" variants={itemVariants}>
                  <a href="https://app.nuvex.pe/register" className="w-full sm:w-auto px-8 py-4 bg-[#101d69] text-white font-semibold rounded-full hover:bg-[#0d1650] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:bg-[#0d1650]">
                    Empezar gratis 30 días
                    <ArrowRight size={18} weight="bold" />
                  </a>
                  <a href="#planes" className="w-full sm:w-auto px-8 py-4 text-[#101d69] font-semibold rounded-full border-2 border-[#101d69] hover:bg-[#101d69] hover:text-white transition-all flex items-center justify-center gap-2">
                    Ver planes
                  </a>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="order-first lg:order-last lg:col-span-5 relative h-72 sm:h-80 lg:h-[430px] w-full flex justify-center lg:justify-start items-center mt-4 lg:mt-0 -translate-y-4 lg:-translate-y-8"
                variants={itemVariants}
              >
                <div className="relative w-full h-full flex items-center justify-center lg:justify-start">
                  <motion.img
                    src="/fondos/laptop.png"
                    alt="POS en laptop"
                    className="w-full lg:w-[100%] max-w-none object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                  <motion.img
                    src="/fondos/celular.png"
                    alt="POS en celular"
                    className="absolute right-0 bottom-[6%] w-[28%] sm:w-[26%] lg:w-[30%] max-w-none object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, x: 24, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                  />
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={productImages[productImageIndex]}
                      src={productImages[productImageIndex]}
                      alt="Producto en venta"
                      className="absolute left-0 bottom-[6%] z-10 w-[44%] sm:w-[42%] lg:w-[46%] max-w-none object-contain drop-shadow-2xl"
                      initial={{ opacity: 0, x: -24, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 24, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#101d69]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#fd741a]/5 rounded-full blur-3xl" />
      </section>

      {/* Hero 2 - Asistencias */}
      <section className="relative bg-transparent pt-4 md:pt-6 pb-8 md:pb-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 z-0 h-full w-[70%] bg-[url('/fondos/fondo2.png')] bg-left-top bg-no-repeat bg-contain"
        />
        <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-24">
          <div className="relative h-[720px] sm:h-[720px] lg:h-[540px]">
            <motion.div
              className="absolute inset-0 grid content-center grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Text Content */}
              <motion.div className="flex flex-col gap-8 lg:col-span-7 lg:order-last z-10" variants={itemVariants}>
                <motion.h1
                  className="text-[1.75rem] md:text-[2.1rem] lg:text-[2.6rem] font-extrabold text-[#101d69] leading-tight"
                  variants={itemVariants}
                >
                  Registra asistencia con QR{' '}
                  <br />
                  <span className="text-[#fd741a]">sin hojas ni filas</span>
                </motion.h1>

                <motion.p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  El trabajador entra a su plataforma, escanea el QR autorizado y marca su entrada o salida con validacion por ubicacion y dispositivo registrado.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4 w-full" variants={itemVariants}>
                  <a href="https://app.nuvex.pe/register" className="w-full sm:w-auto px-8 py-4 bg-[#101d69] text-white font-semibold rounded-full hover:bg-[#0d1650] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:bg-[#0d1650]">
                    Empezar gratis 7 días
                    <ArrowRight size={18} weight="bold" />
                  </a>
                  <a href="#planes" className="w-full sm:w-auto px-8 py-4 text-[#101d69] font-semibold rounded-full border-2 border-[#101d69] hover:bg-[#101d69] hover:text-white transition-all flex items-center justify-center gap-2">
                    Ver asistencias
                  </a>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="order-first lg:order-first lg:col-span-5 relative h-72 sm:h-80 lg:h-[430px] w-full flex justify-center lg:justify-start items-center mt-4 lg:mt-0"
                variants={itemVariants}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={assistanceImages[assistanceImageIndex]}
                    src={assistanceImages[assistanceImageIndex]}
                    alt="Control de asistencias en acción"
                    className="absolute inset-0 m-auto w-[70%] sm:w-[64%] lg:w-[72%] max-w-none h-full object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, x: 32, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -32, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#101d69]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#fd741a]/5 rounded-full blur-3xl" />
      </section>
    </>
  )
}
