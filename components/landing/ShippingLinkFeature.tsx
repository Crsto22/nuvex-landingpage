'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BatteryFull,
  CellSignalFull,
  CheckCircle,
  PaperPlaneTilt,
  WifiHigh,
} from 'phosphor-react'

const points = [
  'Genera el link desde la venta',
  'El cliente elige agencia, método y fecha',
  'Los datos llegan solos a tu venta',
] as const

type ChatMessage = {
  from: 'client' | 'business'
  text: string
  link?: boolean
}

const beforeMessages: ChatMessage[] = [
  { from: 'client', text: 'Hola, quiero 2 polos negros talla M' },
  { from: 'business', text: '¡Claro! Serían S/ 70 😊' },
  {
    from: 'client',
    text: 'Listo, ya pagué. Me lo envía por Shalom a Arequipa, por favor.',
  },
  { from: 'business', text: '¡Muchas gracias por su compra! 😊' },
  { from: 'business', text: 'Pedido registrado' },
  {
    from: 'business',
    text: 'Para el envío por SHALOM:\n☑ Nombres y apellidos\n☑ DNI\n☑ Cel\n\n⚠️ Importante: Ingresar al siguiente enlace, tomar una captura de su destino y sede de SHALOM y enviarme al WhatsApp, por favor.',
  },
  { from: 'business', text: 'https://agencias.shalom.pe/', link: true },
  {
    from: 'client',
    text: '¿Tengo que buscar la agencia de Arequipa y mandarle una captura?',
  },
  {
    from: 'business',
    text: 'Sí, por favor. Necesito la captura para registrar correctamente el destino.',
  },
  {
    from: 'client',
    text: 'Ah, ya. Voy a revisar cuál me queda más cerca.',
  },
]

const afterMessages: ChatMessage[] = [
  { from: 'client', text: 'Hola, quiero 2 polos negros talla M' },
  { from: 'business', text: '¡Claro! Serían S/ 70 😊' },
  { from: 'client', text: 'Listo, ya pagué ✅' },
  {
    from: 'business',
    text: 'Venta registrada 👍 Completa tu envío aquí 👇',
  },
  { from: 'business', text: '🔗 nuvex.pe/envio/XXXX', link: true },
  { from: 'client', text: 'Listo ✅' },
  { from: 'business', text: 'Datos recibidos 🚚' },
]

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-3 pb-1 pt-2 text-[9px] font-semibold text-white">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <CellSignalFull size={10} weight="fill" />
        <WifiHigh size={10} weight="fill" />
        <BatteryFull size={13} weight="fill" />
      </div>
    </div>
  )
}

function ChatView({
  messages,
  visible,
  phase,
}: {
  messages: ChatMessage[]
  visible: number
  phase: 'before' | 'after'
}) {
  return (
    <div className="flex h-full w-full flex-col bg-[#efeae2]">
      <div className={phase === 'before' ? 'bg-[#b91c1c]' : 'bg-[#059669]'}>
        <StatusBar />
        <div className="flex items-center justify-center px-3 pb-2 pt-1">
          <span className="text-sm font-black uppercase tracking-wide text-white">
            {phase === 'before' ? 'Antes' : 'Después'}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden px-2 py-2">
        {messages.slice(0, visible).map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`flex ${message.from === 'client' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[86%] rounded-xl px-2.5 py-1.5 text-[9px] leading-snug shadow-sm ${
                message.from === 'client'
                  ? 'rounded-tl-sm bg-white text-gray-800'
                  : 'rounded-tr-sm bg-[#d9fdd3] text-gray-800'
              }`}
            >
              <p
                className={`whitespace-pre-line ${
                  message.link
                    ? 'break-all font-semibold text-[#0b4f9c] underline'
                    : ''
                }`}
              >
                {message.text}
              </p>
              <p className="mt-0.5 text-right text-[7px] text-gray-500">10:24</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-2 bg-[#f0f0f0] px-2.5 py-2">
        <div className="flex-1 rounded-full bg-white px-3 py-1.5 text-[8px] text-gray-400">
          Escribe un mensaje
        </div>
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white">
          <PaperPlaneTilt size={12} weight="fill" />
        </div>
      </div>
    </div>
  )
}

function DeviceMockup() {
  const [phase, setPhase] = useState<'before' | 'after' | 'form'>('before')
  const [visible, setVisible] = useState(1)
  const messages = phase === 'before' ? beforeMessages : afterMessages

  useEffect(() => {
    if (phase === 'form') {
      const timer = window.setTimeout(() => {
        setPhase('before')
        setVisible(1)
      }, 6000)
      return () => window.clearTimeout(timer)
    }

    if (visible >= messages.length) {
      const timer = window.setTimeout(() => {
        if (phase === 'before') {
          setPhase('after')
        } else {
          setPhase('form')
        }
        setVisible(1)
      }, 2800)
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(() => {
      setVisible((current) => current + 1)
    }, 1100)
    return () => window.clearTimeout(timer)
  }, [messages.length, phase, visible])

  return (
    <div className="relative w-[min(210px,70vw)] sm:w-[250px] lg:w-[275px]">
      <div className="absolute -left-[4px] top-[78px] h-6 w-[3px] rounded-l-full bg-[#2c2c2e]" />
      <div className="absolute -left-[4px] top-[112px] h-10 w-[3px] rounded-l-full bg-[#2c2c2e]" />
      <div className="absolute -left-[4px] top-[152px] h-10 w-[3px] rounded-l-full bg-[#2c2c2e]" />
      <div className="absolute -right-[4px] top-[120px] h-12 w-[3px] rounded-r-full bg-[#2c2c2e]" />

      <div className="relative rounded-[2.5rem] border-2 border-[#2c2c2e] bg-[#050507] p-[5px] shadow-[0_30px_60px_rgba(16,29,105,0.28)]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem] bg-black">
          <AnimatePresence mode="wait">
            {phase === 'form' ? (
              <motion.div
                key="form"
                className="relative h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Image
                  src="/capturas/formulario.jpeg"
                  alt="Formulario de envío"
                  fill
                  sizes="(max-width: 640px) 210px, 275px"
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute inset-x-0 top-0 z-10 bg-[#059669]">
                  <StatusBar />
                  <div className="flex items-center justify-center px-3 pb-2 pt-0.5">
                    <span className="text-sm font-black uppercase tracking-wide text-white">
                      Formulario con Nuvex
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={phase}
                className="h-full w-full"
                initial={{ opacity: 0, x: phase === 'before' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: phase === 'before' ? -20 : 20 }}
                transition={{ duration: 0.35 }}
              >
                <ChatView messages={messages} visible={visible} phase={phase} />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute left-1/2 top-1.5 z-20 h-[18px] w-[74px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  )
}

export default function ShippingLinkFeature() {
  return (
    <section
      id="enlaces-envios"
      className="relative overflow-hidden bg-white pt-4 md:pt-6 pb-12 md:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0 h-full w-[70%] bg-[url('/fondos/fondo2.webp')] bg-left-top bg-no-repeat bg-contain"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
        <div className="relative grid grid-cols-1 items-center gap-8 py-6 sm:gap-10 sm:py-8 lg:grid-cols-12 lg:gap-12 lg:py-4 lg:pl-16">
          <motion.div
            className="order-first flex justify-center lg:col-span-5 lg:justify-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <DeviceMockup />
          </motion.div>

          <motion.div
            className="z-10 flex flex-col gap-5 lg:order-last lg:col-span-7 lg:gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <span className="inline-flex w-fit items-center rounded-full bg-[#fd741a] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Nuevo
            </span>
            <h2 className="text-[1.75rem] font-extrabold leading-tight text-[#101d69] md:text-[2.1rem] lg:text-[2.6rem]">
              Un enlace en vez de{' '}
              <span className="text-[#fd741a]">30 mensajes</span>.
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
              Tu cliente completa su envío y los datos llegan solos a tu venta.
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-[#10b981]"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="https://app.nuvex.pe/register"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#101d69] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0d1650] hover:shadow-xl active:bg-[#0d1650] sm:w-fit"
            >
              Empieza gratis 14 días
              <ArrowRight size={18} weight="bold" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
