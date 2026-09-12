'use client'

import { motion } from 'framer-motion'

const features = [
  {
    image: '/iconos/caracteristica%20(1).png',
    title: 'Facturacion electronica SUNAT',
    card: 'bg-[#fef3c7]',
    circle: 'bg-[#fbbf24]',
  },
  {
    image: '/iconos/caracteristica%20(2).png',
    title: 'Punto de venta (POS) e inventario',
    card: 'bg-[#cffafe]',
    circle: 'bg-[#22d3ee]',
  },
  {
    image: '/iconos/caracteristica%20(3).png',
    title: 'Multiples sucursales y cajas',
    card: 'bg-[#f3e8ff]',
    circle: 'bg-[#c084fc]',
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
    transition: { duration: 0.5 },
  },
}

export default function FeaturedFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/fondos/fondo4.png')] bg-[length:100%_100%] bg-center bg-no-repeat"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-[#101d69] md:text-4xl lg:text-5xl">
            Caracteristicas <span className="text-[#fd741a]">destacadas</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className={`group flex flex-col items-center rounded-[2rem] p-8 text-center shadow-[0_16px_45px_rgba(16,29,105,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(16,29,105,0.20)] ${feature.card}`}
              variants={cardVariants}
            >
              <div className="relative mb-6 flex h-40 w-40 items-center justify-center">
                <div className={`absolute h-24 w-24 rounded-full ${feature.circle}`} />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative z-10 h-40 w-40 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#101d69]">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
