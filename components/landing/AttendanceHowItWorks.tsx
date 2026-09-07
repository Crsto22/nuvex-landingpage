'use client'

import { motion } from 'framer-motion'
import { Clock, DeviceMobile, MapPin, QrCode } from 'phosphor-react'

const attendanceFlowItems = [
  {
    icon: QrCode,
    title: 'Marcacion por QR',
    highlight: 'Punto autorizado',
    metric: 'QR seguro',
    text: 'El trabajador entra a su plataforma y escanea el QR asignado al punto de asistencia.',
  },
  {
    icon: Clock,
    title: 'QR dinamico o normal',
    highlight: 'Cada 20 segundos',
    metric: 'Flexible',
    text: 'Puedes usar QR dinamico que cambia cada 20 segundos o QR normal para un punto fijo.',
  },
  {
    icon: MapPin,
    title: 'Validacion por metros',
    highlight: 'Rango permitido',
    metric: 'Ubicacion',
    text: 'Cada punto QR puede exigir que el trabajador este dentro del rango permitido.',
  },
  {
    icon: DeviceMobile,
    title: 'Dispositivo registrado',
    highlight: 'Un equipo por trabajador',
    metric: 'Bloqueo',
    text: 'Al ingresar se registra su dispositivo; si intenta marcar desde otro, queda bloqueado.',
  },
] as const

export default function AttendanceHowItWorks() {
  return (
    <section id="asistencias" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#fd741a] md:text-base">
            Control de asistencias
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#101d69] md:text-4xl lg:text-5xl">
            Marcacion segura solo por QR
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Tus trabajadores ingresan a su plataforma, escanean el QR del punto autorizado y registran entrada o salida con control de ubicacion y dispositivo.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {attendanceFlowItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#101d69]/10 bg-white p-6 shadow-[0_18px_50px_rgba(16,29,105,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fd741a]/40 hover:shadow-[0_24px_70px_rgba(16,29,105,0.13)] md:p-7"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#101d69] text-white shadow-lg shadow-[#101d69]/20 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent weight="duotone" className="h-9 w-9 text-[#fd741a]" />
                  </div>
                  <span className="rounded-full border border-[#fd741a]/20 bg-[#fd741a]/10 px-3 py-1 text-xs font-bold text-[#fd741a]">
                    {item.metric}
                  </span>
                </div>

                <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-[#fd741a]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fd741a]/10 text-xs">
                    {index + 1}
                  </span>
                  {item.highlight}
                </p>

                <h3 className="text-xl font-bold leading-snug text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 md:text-base">
                  {item.text}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#101d69]/15 via-[#fd741a]/30 to-transparent" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
