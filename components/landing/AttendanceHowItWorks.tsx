'use client'

import { motion } from 'framer-motion'

const attendanceFlowItems = [
  {
    image: '/iconos/marcaciones%20(4).png',
    title: 'Marcacion por QR',
    text: 'El trabajador entra a su plataforma y escanea el QR asignado al punto de asistencia.',
    card: 'bg-[#fef3c7]',
    circle: 'bg-[#fbbf24]',
  },
  {
    image: '/iconos/marcaciones%20(1).png',
    title: 'QR dinamico o normal',
    text: 'Puedes usar QR dinamico que cambia cada 20 segundos o QR normal para un punto fijo.',
    card: 'bg-[#cffafe]',
    circle: 'bg-[#22d3ee]',
  },
  {
    image: '/iconos/marcaciones%20(2).png',
    title: 'Validacion por metros',
    text: 'Cada punto QR puede exigir que el trabajador este dentro del rango permitido.',
    card: 'bg-[#f3e8ff]',
    circle: 'bg-[#c084fc]',
  },
  {
    image: '/iconos/marcaciones%20(3).png',
    title: 'Dispositivo registrado',
    text: 'Al ingresar se registra su dispositivo; si intenta marcar desde otro, queda bloqueado.',
    card: 'bg-[#dcfce7]',
    circle: 'bg-[#4ade80]',
  },
] as const

export default function AttendanceHowItWorks() {
  return (
    <section id="asistencias" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/fondos/fondo3.png')] bg-[length:100%_100%] bg-center bg-no-repeat"
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
            Marcacion <span className="text-[#fd741a]">segura</span> solo por QR
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {attendanceFlowItems.map((item) => {
            return (
              <motion.div
                key={item.title}
                className={`group flex h-full flex-col items-center rounded-[2rem] p-8 text-center shadow-[0_16px_45px_rgba(16,29,105,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(16,29,105,0.20)] ${item.card}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="relative mb-6 flex h-40 w-40 items-center justify-center">
                  <div className={`absolute h-24 w-24 rounded-full ${item.circle}`} />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 h-40 w-40 object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold leading-snug text-[#101d69]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
