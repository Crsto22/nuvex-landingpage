'use client'

import { motion } from 'framer-motion'
import {
  ChartBar,
  CheckCircle,
  Cloud,
  Lightning,
  Package,
  ShieldCheck,
  Users,
} from 'phosphor-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Package,
      title: 'Inventario por variantes',
      highlight: 'Talla, color y modelo',
      description:
        'Controla existencias reales por tienda y evita vender productos que ya no tienes disponibles.',
      metric: 'Stock claro',
    },
    {
      icon: Lightning,
      title: 'Ventas rapidas',
      highlight: 'Caja lista para atender',
      description:
        'Registra ventas, cobros y comprobantes desde una pantalla pensada para trabajar sin friccion.',
      metric: 'Menos pasos',
    },
    {
      icon: ChartBar,
      title: 'Reportes accionables',
      highlight: 'Datos para decidir',
      description:
        'Consulta ventas, productos destacados y rendimiento para tomar mejores decisiones cada dia.',
      metric: 'Vision diaria',
    },
    {
      icon: Cloud,
      title: 'Todo en la nube',
      highlight: 'Acceso desde donde estes',
      description:
        'Gestiona tu tienda desde cualquier equipo conectado, sin depender de una sola computadora.',
      metric: 'Siempre activo',
    },
    {
      icon: Users,
      title: 'Equipo ordenado',
      highlight: 'Roles y permisos',
      description:
        'Asigna accesos por usuario y manten el control de lo que cada persona puede operar.',
      metric: 'Control interno',
    },
    {
      icon: ShieldCheck,
      title: 'Operacion protegida',
      highlight: 'Seguridad para tu negocio',
      description:
        'Trabaja con informacion organizada, respaldada y preparada para crecer con tu tienda.',
      metric: 'Confianza',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="beneficios" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#fd741a] md:text-base">
            Beneficios principales
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#101d69] md:text-4xl lg:text-5xl">
            Lo que Nuvex ofrece a tu tienda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Un sistema simple para vender, controlar inventario y mantener tu
            operacion ordenada desde el primer dia.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon

            return (
              <motion.div
                key={benefit.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#101d69]/10 bg-white p-6 shadow-[0_18px_50px_rgba(16,29,105,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fd741a]/40 hover:shadow-[0_24px_70px_rgba(16,29,105,0.13)] md:p-7"
                variants={cardVariants}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#101d69] text-white shadow-lg shadow-[#101d69]/20 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent weight="duotone" className="h-9 w-9 text-[#fd741a]" />
                  </div>
                  <span className="rounded-full border border-[#fd741a]/20 bg-[#fd741a]/10 px-3 py-1 text-xs font-bold text-[#fd741a]">
                    {benefit.metric}
                  </span>
                </div>

                <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-[#fd741a]">
                  <CheckCircle size={18} weight="fill" />
                  {benefit.highlight}
                </p>

                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-950 md:text-2xl">
                  {benefit.title}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-gray-600 md:text-base">
                  {benefit.description}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#101d69]/15 via-[#fd741a]/30 to-transparent" />
                <p className="mt-4 text-sm font-bold text-[#101d69]">
                  Ver modulo
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
