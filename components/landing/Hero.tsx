'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, CaretLeft, CaretRight, Star } from 'phosphor-react'

export default function Hero() {
  const words = ['ropa', 'calzado']
  const [wordIndex, setWordIndex] = useState(0)
  const [heroIndex, setHeroIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState(1)
  const [assistanceImageIndex, setAssistanceImageIndex] = useState(0)

  const heroes = [
    {
      type: 'pos',
      eyebrow: 'POS para tiendas',
      titleStart: 'Convierte tus productos variantes',
      titleEnd: 'en una venta más',
      text: 'Vende rápido, cuadra tu caja, controla el inventario de tus productos con variantes — talla, color, modelo — y emite facturación electrónica desde una sola plataforma.',
      image: '/mascotanovix.png',
      alt: 'POS en acción',
    },
    {
      type: 'assistance',
      eyebrow: 'Control de asistencias',
      titleStart: 'Registra asistencia con QR',
      titleEnd: 'sin hojas ni filas',
      text: 'El trabajador entra a su plataforma, escanea el QR autorizado y marca su entrada o salida con validacion por ubicacion y dispositivo registrado.',
      images: ['/asistencia 1.png', '/asistencia 2.png'],
      alt: 'Control de asistencias en acción',
    },
  ] as const

  const activeHero = heroes[heroIndex]
  const activeImage =
    activeHero.type === 'assistance'
      ? activeHero.images[assistanceImageIndex]
      : activeHero.image
  const imageSizeClass =
    activeHero.type === 'assistance'
      ? 'w-[70%] sm:w-[64%] lg:w-[72%]'
      : 'w-full sm:w-full lg:w-full'

  const showPreviousHero = () => {
    setSlideDirection(-1)
    setHeroIndex((prev) => (prev - 1 + heroes.length) % heroes.length)
  }

  const showNextHero = () => {
    setSlideDirection(1)
    setHeroIndex((prev) => (prev + 1) % heroes.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setAssistanceImageIndex((prev) => (prev + 1) % 2)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection(1)
      setHeroIndex((prev) => (prev + 1) % heroes.length)
    }, 15000)
    return () => clearInterval(timer)
  }, [heroes.length])

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
    <section className="relative bg-white pt-8 md:pt-10 pb-4 md:pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-24">
        <div className="relative h-[820px] sm:h-[760px] lg:h-[540px]">
          <button
            type="button"
            onClick={showPreviousHero}
            aria-label="Hero anterior"
            className="absolute left-[calc(50%-50vw+0.75rem)] top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-[#101d69] shadow-lg transition-all hover:border-[#101d69] hover:bg-[#101d69] hover:text-white"
          >
            <CaretLeft size={22} weight="bold" />
          </button>

          <button
            type="button"
            onClick={showNextHero}
            aria-label="Hero siguiente"
            className="absolute right-[calc(50%-50vw+0.75rem)] top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-[#101d69] shadow-lg transition-all hover:border-[#101d69] hover:bg-[#101d69] hover:text-white"
          >
            <CaretRight size={22} weight="bold" />
          </button>

          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={heroIndex}
              custom={slideDirection}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              variants={containerVariants}
              initial={{ opacity: 0, x: slideDirection * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection * -60 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
          {/* Text Content */}
          <motion.div className="flex flex-col gap-6 lg:col-span-7 z-10" variants={itemVariants}>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101d69] leading-tight"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroIndex}
                  className="block"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                >
                  {heroIndex === 0 ? (
                    <>
                      {activeHero.titleStart}{' '}
                      <span className="inline-block">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={wordIndex}
                            className="inline-block text-[#fd741a]"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                          >
                            {words[wordIndex]}
                          </motion.span>
                        </AnimatePresence>
                      </span>{' '}
                      <br />
                      {activeHero.titleEnd}
                    </>
                  ) : (
                    <>
                      {activeHero.titleStart}{' '}
                      <br />
                      <span className="text-[#fd741a]">{activeHero.titleEnd}</span>
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              className="text-sm md:text-base text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              {activeHero.text}
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 w-full pt-2" variants={itemVariants}>
              <a href="https://app.nuvex.pe/register" className="w-full sm:w-auto px-8 py-4 bg-[#101d69] text-white font-semibold rounded-full hover:bg-[#0d1650] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:bg-[#0d1650]">
                Empezar gratis 7 días
                <ArrowRight size={18} weight="bold" />
              </a>
              <a href="#planes" className="w-full sm:w-auto px-8 py-4 text-[#101d69] font-semibold rounded-full border-2 border-[#101d69] hover:bg-[#101d69] hover:text-white transition-all flex items-center justify-center gap-2">
                {activeHero.type === 'assistance' ? 'Ver asistencias' : 'Ver planes'}
              </a>
            </motion.div>

            {/* Trust indicators - Reference Style */}
            <motion.div className="pt-4 flex flex-col gap-3" variants={itemVariants}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-gray-500">
                <span>+100 tiendas activas</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>99.9% disponibilidad</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Soporte 24/7</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold border border-gray-200 rounded-full px-4 py-1.5 w-fit bg-gray-50">
                <span className="text-[#101d69]">4.9</span>
                <div className="flex text-yellow-400">
                  <Star weight="fill" size={14} />
                  <Star weight="fill" size={14} />
                  <Star weight="fill" size={14} />
                  <Star weight="fill" size={14} />
                  <Star weight="fill" size={14} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-first lg:order-last lg:col-span-5 relative h-72 sm:h-80 lg:h-[430px] w-full flex justify-center lg:justify-start items-center mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt={activeHero.alt}
                className={`absolute inset-0 m-auto ${imageSizeClass} max-w-none h-full object-contain drop-shadow-2xl`}
                initial={{ opacity: 0, x: 32, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -32, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#101d69]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#fd741a]/5 rounded-full blur-3xl" />
    </section>
  )
}
