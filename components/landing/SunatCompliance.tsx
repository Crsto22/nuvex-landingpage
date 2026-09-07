'use client'

import { motion } from 'framer-motion'
import { Receipt, Storefront, Buildings, ArrowRight } from 'phosphor-react'

const features = [
  {
    icon: Receipt,
    title: 'Facturacion electronica SUNAT',
    desc: 'Boletas, facturas, notas, guias y retenciones. Envio directo a SUNAT.',
  },
  {
    icon: Storefront,
    title: 'Punto de venta (POS) e inventario',
    desc: 'Vende rapido y controla tu stock en tiempo real, conectado a tus ventas.',
  },
  {
    icon: Buildings,
    title: 'Multiples sucursales y cajas',
    desc: 'Gestiona todas tus tiendas desde un solo lugar: stock, ventas y usuarios por sucursal.',
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

export default function SunatCompliance() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-[#101d69] md:text-4xl lg:text-5xl">
            Todo en una plataforma
          </h2>
          <p className="mt-3 text-lg font-semibold text-[#fd741a] md:text-xl">
            Lo que necesitas para vender, facturar y declarar
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Sin saltar entre apps ni pagar tres herramientas distintas. Tu Nuvex conecta tu dia a dia con SUNAT.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="group flex flex-col rounded-[2rem] border border-[#101d69]/10 bg-gray-50 p-8 shadow-[0_16px_45px_rgba(16,29,105,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fd741a]/40 hover:bg-white hover:shadow-[0_24px_70px_rgba(16,29,105,0.12)]"
                variants={cardVariants}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white text-[#101d69] shadow-sm ring-1 ring-[#101d69]/10 transition-colors group-hover:bg-[#101d69]">
                  <Icon size={32} weight="duotone" className="group-hover:text-[#fd741a]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-950">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#101d69] bg-[#101d69]/5 rounded-full px-6 py-3">
            Todas tus ventas se envian directo a SUNAT
            <ArrowRight size={16} weight="bold" />
          </p>
        </motion.div>
      </div>
    </section>
  )
}
