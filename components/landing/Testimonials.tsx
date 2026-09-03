'use client'

import { motion } from 'framer-motion'
import { Star } from 'phosphor-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Renzo Valdivia',
      role: 'Kiments.pe',
      initials: 'RV',
      color: 'bg-blue-100 text-blue-700',
      content:
        'Excelente plataforma. Ha optimizado por completo nuestra operación diaria y nos permite tener todo bajo control.',
      rating: 5,
    },
    {
      name: 'Milagros Paredes',
      role: 'Adaza.pe',
      initials: 'MP',
      color: 'bg-green-100 text-green-700',
      content:
        'Nuvex nos ha facilitado muchísimo el control de inventario por tallas. Es rápido y muy fácil de usar.',
      rating: 5,
    },
    {
      name: 'Alvaro Mendoza',
      role: 'Gerente - Donna Sweet',
      initials: 'AM',
      color: 'bg-purple-100 text-purple-700',
      content:
        'Me cambió la vida por completo. Ahora administro mi negocio sin complicaciones, sin estrés y con total tranquilidad.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
            Historias reales
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight max-w-3xl mx-auto">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#101d69] hover:shadow-lg transition-all duration-300 group flex flex-col"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    weight="fill"
                    className="text-[#fd741a]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 flex-1 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className={`w-16 h-16 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-xl font-bold ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm md:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
