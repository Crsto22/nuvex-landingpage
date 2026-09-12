'use client'

import { motion } from 'framer-motion'

const rubros = [
  {
    name: 'Carteras',
    image: '/rubro/carteras.png',
    card: 'bg-[#7c3aed]',
  },
  {
    name: 'Ropa',
    image: '/rubro/ropa.png',
    card: 'bg-[#e11d48]',
  },
  {
    name: 'Calzado',
    image: '/rubro/zapatilla.png',
    card: 'bg-[#0d9488]',
  },
  {
    name: 'Mochilas',
    image: '/rubro/mochila.png',
    card: 'bg-[#d97706]',
  },
  {
    name: 'Bodega',
    image: '/rubro/bodega.png',
    card: 'bg-[#0284c7]',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function BusinessTypes() {
  return (
    <section id="rubros" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/fondos/fondo3.png')] bg-[length:100%_100%] bg-center bg-no-repeat"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-28 max-w-3xl text-center md:mb-36"
        >
          <h2 className="text-3xl font-bold leading-tight text-[#101d69] md:text-4xl lg:text-5xl">
            Hecho para tu tipo de <span className="text-[#fd741a]">negocio</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-28 sm:grid-cols-2 lg:grid-cols-5 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {rubros.map((rubro) => (
            <motion.div
              key={rubro.name}
              variants={cardVariants}
              className="group relative"
            >
              <img
                src={rubro.image}
                alt={rubro.name}
                className="absolute -top-20 left-1/2 z-10 h-40 w-40 -translate-x-1/2 object-contain drop-shadow-[0_18px_30px_rgba(16,29,105,0.25)] transition-transform duration-300 ease-out group-hover:-translate-y-4"
              />
              <div
                className={`flex flex-col items-center rounded-[2rem] px-6 pb-10 pt-24 text-center shadow-[0_18px_45px_rgba(16,29,105,0.15)] transition-shadow duration-300 ease-out group-hover:shadow-[0_40px_80px_rgba(16,29,105,0.45)] ${rubro.card}`}
              >
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {rubro.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
