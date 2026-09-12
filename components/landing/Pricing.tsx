'use client'

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Barcode,
  Buildings,
  CaretLeft,
  CaretRight,
  Check,
  CheckCircle,
  Database,
  MagnifyingGlass,
  Minus,
  Package,
  Plus,
  Receipt,
  Storefront,
  Users,
  WhatsappLogo,
  XCircle,
} from 'phosphor-react'
import type { Icon } from 'phosphor-react'
import {
  AffiliateCodeResponse,
  AttendancePricing,
  PlanCode,
  PlanDefinition,
  apiRequest,
} from '@/lib/api'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [pricingView, setPricingView] = useState<'pos' | 'attendance'>('pos')
  const [plans, setPlans] = useState<PlanDefinition[]>([])
  const [attendancePricing, setAttendancePricing] = useState<AttendancePricing | null>(null)
  const [attendanceEmployees, setAttendanceEmployees] = useState(10)
  const [attendanceQrPoints, setAttendanceQrPoints] = useState(1)
  const [loadingPlans, setLoadingPlans] = useState(true)
  const [plansError, setPlansError] = useState('')
  const [affiliateCode, setAffiliateCode] = useState('')
  const [affiliate, setAffiliate] = useState<AffiliateCodeResponse | null>(null)
  const [validatingAffiliate, setValidatingAffiliate] = useState(false)
  const [posSlide, setPosSlide] = useState(0)

  useEffect(() => {
    let active = true

    Promise.all([
      apiRequest<PlanDefinition[]>('/plans'),
      apiRequest<AttendancePricing>('/plans/attendance-pricing').catch(() => null),
    ])
      .then(([result, attendance]) => {
        if (!active) return
        setPlans(result)
        setAttendancePricing(attendance)
        setPlansError('')
      })
      .catch(() => {
        if (!active) return
        setPlansError('No pudimos cargar los planes. Intenta nuevamente en unos minutos.')
      })
      .finally(() => {
        if (active) setLoadingPlans(false)
      })

    return () => {
      active = false
    }
  }, [])

  const highlightedCode = useMemo(() => getHighlightedCode(plans), [plans])
  const posPlans = useMemo(() => plans.filter((plan) => plan.code !== 'prueba'), [plans])
  const posCarouselRef = useRef<HTMLDivElement>(null)

  function handlePosScroll() {
    const el = posCarouselRef.current
    if (!el) return
    let closest = 0
    let minDistance = Infinity
    Array.from(el.children).forEach((child, index) => {
      const element = child as HTMLElement
      const distance = Math.abs(element.offsetLeft - el.scrollLeft)
      if (distance < minDistance) {
        minDistance = distance
        closest = index
      }
    })
    setPosSlide(closest)
  }

  function scrollToPosSlide(index: number) {
    const el = posCarouselRef.current
    if (!el) return
    const target = Math.max(0, Math.min(posPlans.length - 1, index))
    const child = el.children[target] as HTMLElement | undefined
    if (child) {
      el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' })
    }
    setPosSlide(target)
  }
  const activeAffiliate = affiliate?.valid ? affiliate : null
  const attendanceMonthlyTotal = attendancePricing
    ? roundMoney(
        Number(attendancePricing.employeeUnitPrice) * attendanceEmployees +
          Number(attendancePricing.qrPointUnitPrice) * attendanceQrPoints,
      )
    : 0
  const attendanceAffiliateDiscountPercent = Number(activeAffiliate?.discountPercent ?? 0)
  const attendanceBaseTotal = isAnnual
    ? roundMoney(
        attendanceMonthlyTotal *
          12 *
          (1 - Number(attendancePricing?.annualDiscountPercent ?? 0) / 100),
      )
    : attendanceMonthlyTotal
  const attendanceTotal =
    attendanceAffiliateDiscountPercent > 0
      ? roundMoney(
          attendanceBaseTotal -
            (attendanceBaseTotal * attendanceAffiliateDiscountPercent) / 100,
        )
      : attendanceBaseTotal
  const attendanceAffiliateDiscountAmount = roundMoney(attendanceBaseTotal - attendanceTotal)

  async function applyAffiliateCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const code = affiliateCode.trim()

    if (!code) {
      setAffiliate(null)
      return
    }

    setValidatingAffiliate(true)
    try {
      const result = await apiRequest<AffiliateCodeResponse>(
        `/plans/affiliate-code?code=${encodeURIComponent(code)}`,
      )
      setAffiliate(result)
      if (result.valid) setAffiliateCode(result.code)
    } catch {
      setAffiliate({
        valid: false,
        code: code.toUpperCase(),
        discountPercent: '0.00',
        reason: 'invalid',
      })
    } finally {
      setValidatingAffiliate(false)
    }
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="planes" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center"
      >
        <img
          src="/fondos/fondo6.png"
          alt=""
          className="w-full object-contain"
        />
      </div>
      <div className="relative z-10 mx-auto w-full px-3 sm:px-4 lg:px-6">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-[#101d69] md:text-3xl lg:text-4xl">
            Elige el plan perfecto{' '}
            <span className="text-[#fd741a]">para tu tienda</span>
          </h2>
        </motion.div>

        <div className="mb-12 flex flex-col gap-4 md:mb-20 lg:grid lg:grid-cols-3 lg:items-center">
          <form
            onSubmit={applyAffiliateCode}
            className="w-full lg:col-start-1 lg:max-w-xs lg:justify-self-start"
          >
            <div className="flex flex-row gap-0">
              <input
                type="text"
                value={affiliateCode}
                onChange={(event) => setAffiliateCode(event.target.value)}
                placeholder="Codigo de afiliado"
                className="min-h-12 flex-1 rounded-l-full rounded-r-none border border-gray-200 bg-gray-50 px-4 text-sm font-semibold uppercase text-[#101d69] outline-none transition focus:border-[#101d69] focus:ring-2 focus:ring-[#101d69]/15"
              />
              <button
                type="submit"
                aria-label="Buscar codigo de afiliado"
                disabled={validatingAffiliate || !affiliateCode.trim()}
                className="flex min-h-12 items-center justify-center rounded-l-none rounded-r-full bg-[#101d69] px-4 text-white transition hover:bg-[#0d1650] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <MagnifyingGlass size={20} weight="bold" />
              </button>
            </div>
            {affiliateMessage(affiliate)}
          </form>

          <div className="flex items-center justify-center gap-4 lg:col-start-2 lg:justify-self-center">
            <span
              className={`text-sm font-semibold md:text-base ${
                !isAnnual ? 'text-[#101d69]' : 'text-gray-600'
              }`}
            >
              Mensual
            </span>
            <button
              type="button"
              aria-label="Cambiar periodo de pago"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-10 w-16 items-center rounded-full bg-[#101d69]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:ring-offset-2 md:h-8 md:w-14"
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-[#101d69] shadow transition-transform duration-200 ease-in-out md:h-6 md:w-6 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold md:text-base ${
                isAnnual ? 'text-[#101d69]' : 'text-gray-600'
              }`}
            >
              Anual
              {isAnnual && (
                <span className="ml-2 rounded-full bg-[#fd741a] px-2 py-1 text-xs text-white">
                  Ahorro anual
                </span>
              )}
            </span>
          </div>

          <div className="grid w-full grid-cols-2 rounded-full bg-gray-100 p-1 lg:col-start-3 lg:w-auto lg:max-w-xs lg:justify-self-end">
            {[
              ['pos', 'POS'],
              ['attendance', 'Asistencias'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setPricingView(value as 'pos' | 'attendance')}
                className={`rounded-full px-4 py-3 text-sm font-bold transition-all ${
                  pricingView === value
                    ? 'bg-[#101d69] text-white shadow-sm'
                    : 'text-[#101d69] hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {loadingPlans && (
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-600 shadow-sm">
            Cargando planes...
          </div>
        )}

        {!loadingPlans && plansError && (
          <div className="rounded-xl border border-red-100 bg-red-50 p-8 text-center text-red-700 shadow-sm">
            {plansError}
          </div>
        )}

        {!loadingPlans && !plansError && pricingView === 'pos' && (
          <>
          <motion.div
            ref={posCarouselRef}
            onScroll={handlePosScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {posPlans.map((plan) => {
              const highlighted = plan.code === highlightedCode
              const price = getPlanPrice(plan, isAnnual, activeAffiliate)
              const showDiscount = price.previous !== price.current
              const cta = plan.code === 'prueba' ? '7 dias de prueba' : 'Solicitar por WhatsApp'
              const planHref =
                plan.code === 'prueba'
                  ? 'https://app.nuvex.pe/register'
                  : `https://wa.me/51923328058?text=${encodeURIComponent(planMessage(plan, isAnnual, activeAffiliate))}`

              return (
                <motion.div
                  key={plan.code}
                  className={`group relative flex w-full shrink-0 snap-center flex-col rounded-3xl bg-white transition-all duration-300 md:w-auto md:shrink md:snap-align-none ${
                    highlighted
                      ? 'z-10 border-2 border-[#101d69] shadow-2xl xl:scale-[1.02]'
                      : 'z-0 border border-[#dbe3f3] shadow-sm hover:border-[#101d69]'
                  }`}
                  variants={cardVariants}
                  whileHover={{ y: highlighted ? -8 : -4 }}
                >
                  {highlighted && (
                    <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#101d69] px-4 py-1 text-xs font-extrabold text-white shadow-lg">
                      Mas popular
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <h3 className="mb-2 text-xl font-extrabold text-[#101d69]">
                      {plan.name}
                    </h3>
                    <p className="mb-4 min-h-12 text-xs leading-relaxed text-[#1f2f6b]/75">
                      {planDescription(plan)}
                    </p>

                    <div className="mb-4">
                      {showDiscount && (
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <span className="text-sm font-medium text-gray-400 line-through">
                            S/. {formatMoney(price.previous)}
                          </span>
                          <span className="rounded-md bg-[#fd741a]/10 px-2 py-1 text-[11px] font-bold text-[#fd741a]">
                            -{price.discountPercent}% OFF
                          </span>
                        </div>
                      )}
                      <div className="mb-2 flex flex-wrap items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-black md:text-3xl">
                          {price.free ? price.label : `S/. ${formatMoney(price.current)}`}
                        </span>
                        {!price.free && (
                          <span className="text-xs font-semibold text-[#101d69]/80">
                            {isAnnual ? '/anio' : '/mes'}
                          </span>
                        )}
                      </div>
                      {isAnnual && !price.free && (
                        <p className="text-xs font-semibold text-[#fd741a]">
                          S/. {formatMoney(price.current / 12)} promedio mensual
                        </p>
                      )}
                      {!isAnnual &&
                        Number(plan.monthlyDiscountPercent) > 0 &&
                        !price.free && (
                          <p className="text-xs font-semibold text-[#fd741a]">
                            Oferta mensual incluida
                          </p>
                        )}
                    </div>

                    <div className="mb-5 border-t border-[#dbe3f3] pt-4">
                      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-wide text-[#101d69]">
                        Capacidad incluida
                      </p>
                      <div className="space-y-2.5">
                        {capacityItems(plan).map((item) => (
                          <PlanDetail key={item.label} {...item} />
                        ))}
                      </div>
                    </div>

                    <div className="mb-5 border-t border-[#dbe3f3] pt-4">
                      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-wide text-[#101d69]">
                        Funcionalidades
                      </p>
                      <div className="space-y-2.5">
                        {featureItems(plan).map((item) => (
                          <PlanFeature key={item.label} {...item} />
                        ))}
                      </div>
                    </div>

                    <a
                      href={planHref}
                      target={plan.code === 'prueba' ? undefined : '_blank'}
                      rel={plan.code === 'prueba' ? undefined : 'noopener noreferrer'}
                      className={`mt-auto flex w-full items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-extrabold transition-all ${
                        highlighted
                          ? 'bg-[#101d69] text-white shadow-lg hover:bg-[#0d1650] hover:shadow-xl'
                          : plan.code === 'prueba'
                            ? 'bg-gray-100 text-[#101d69] hover:bg-gray-200'
                            : 'bg-[#22c55e] text-white shadow-sm hover:bg-[#16a34a]'
                      }`}
                    >
                      {plan.code !== 'prueba' && <WhatsappLogo size={17} weight="bold" />}
                      {cta}
                    </a>

                    <p className="mt-3 text-center text-xs font-semibold text-gray-600">
                      o{' '}
                      <a
                        href="https://app.nuvex.pe/register"
                        className="font-bold text-[#101d69] underline underline-offset-2 transition-colors hover:text-[#fd741a]"
                      >
                        prueba gratis 30 días
                      </a>
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
            <button
              type="button"
              aria-label="Plan anterior"
              onClick={() => scrollToPosSlide(posSlide - 1)}
              disabled={posSlide === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#101d69] text-[#101d69] transition hover:bg-[#101d69] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <CaretLeft size={18} weight="bold" />
            </button>
            <span className="text-sm font-bold text-[#101d69]">
              {posSlide + 1} / {posPlans.length}
            </span>
            <button
              type="button"
              aria-label="Plan siguiente"
              onClick={() => scrollToPosSlide(posSlide + 1)}
              disabled={posSlide >= posPlans.length - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#101d69] text-[#101d69] transition hover:bg-[#101d69] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </div>
          </>
        )}

        {!loadingPlans && !plansError && pricingView === 'attendance' && attendancePricing && (
          <motion.div
            className="mx-auto max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid gap-16 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-24 sm:gap-8">
                  {[
                    {
                      name: 'Trabajadores',
                      image: '/iconos/trabajadores.png',
                      card: 'bg-[#101d69]',
                      value: attendanceEmployees,
                      helper: `S/. ${formatMoney(Number(attendancePricing.employeeUnitPrice))} por trabajador`,
                      min: 1,
                      onDecrease: () =>
                        setAttendanceEmployees((value) => Math.max(1, value - 1)),
                      onIncrease: () => setAttendanceEmployees((value) => value + 1),
                    },
                    {
                      name: 'Punto QR',
                      image: '/iconos/puntoqr.png',
                      card: 'bg-[#14b8a6]',
                      value: attendanceQrPoints,
                      helper: `S/. ${formatMoney(Number(attendancePricing.qrPointUnitPrice))} por punto QR`,
                      min: 1,
                      onDecrease: () =>
                        setAttendanceQrPoints((value) => Math.max(1, value - 1)),
                      onIncrease: () => setAttendanceQrPoints((value) => value + 1),
                    },
                  ].map((item) => (
                    <motion.div key={item.name} variants={cardVariants} className="group relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute -top-14 left-1/2 z-10 h-24 w-24 -translate-x-1/2 object-contain drop-shadow-[0_18px_30px_rgba(16,29,105,0.25)] transition-transform duration-300 ease-out group-hover:-translate-y-3 sm:-top-16 sm:h-32 sm:w-32"
                      />
                      <div
                        className={`flex flex-col items-center rounded-[2rem] px-4 pb-8 pt-16 text-center shadow-[0_18px_45px_rgba(16,29,105,0.15)] transition-shadow duration-300 ease-out group-hover:shadow-[0_40px_80px_rgba(16,29,105,0.35)] sm:px-6 sm:pt-20 ${item.card}`}
                      >
                        <h4 className="text-base font-bold text-white sm:text-xl md:text-2xl">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-xs text-white/80 sm:text-sm">
                          {item.helper}
                        </p>
                        <div className="mt-4 flex items-center gap-3 rounded-full bg-white/15 p-1">
                          <button
                            type="button"
                            onClick={item.onDecrease}
                            disabled={item.value <= item.min}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#101d69] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <Minus size={16} weight="bold" />
                          </button>
                          <span className="min-w-8 text-center text-xl font-extrabold text-white">
                            {item.value}
                          </span>
                          <button
                            type="button"
                            onClick={item.onIncrease}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#101d69] transition hover:scale-105"
                          >
                            <Plus size={16} weight="bold" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-20 grid gap-4 sm:grid-cols-2">
                {[
                  'Marcacion solo por QR',
                  'QR dinamico de 20 segundos o QR normal',
                  'Limite de metros por punto QR',
                  'Bloqueo por cambio de dispositivo',
                  'Historial de entradas y salidas',
                  'Reportes de asistencia',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <Check size={20} weight="bold" className="text-[#14b8a6]" />
                    </div>
                    <p className="text-sm text-gray-700 md:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
                </div>
              </div>

            <motion.div
              className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
              variants={cardVariants}
            >
              <div>
                <p className="mb-2 text-sm font-semibold text-[#101d69]/70">
                  Total {isAnnual ? 'anual' : 'mensual'}
                </p>
                <div className="mb-2 flex flex-wrap items-end gap-2">
                  <span className="text-4xl font-extrabold text-[#101d69] md:text-5xl">
                    S/. {formatMoney(attendanceTotal)}
                  </span>
                  <span className="pb-2 text-sm text-[#101d69]/70">
                    {isAnnual ? '/anio' : '/mes'}
                  </span>
                </div>
                {isAnnual && (
                  <p className="text-sm font-semibold text-[#fd741a]">
                    S/. {formatMoney(attendanceTotal / 12)} promedio mensual
                  </p>
                )}
                <div className="mt-8 space-y-3 rounded-xl bg-gray-50 p-4">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-500">{attendanceEmployees} trabajadores</span>
                    <span className="font-semibold text-[#101d69]">S/. {formatMoney(Number(attendancePricing.employeeUnitPrice) * attendanceEmployees)}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-500">{attendanceQrPoints} puntos QR</span>
                    <span className="font-semibold text-[#101d69]">S/. {formatMoney(Number(attendancePricing.qrPointUnitPrice) * attendanceQrPoints)}</span>
                  </div>
                  {isAnnual && Number(attendancePricing.annualDiscountPercent) > 0 && (
                    <div className="flex justify-between gap-4 border-t border-gray-200 pt-3 text-sm">
                      <span className="text-gray-500">Descuento anual</span>
                      <span className="font-semibold text-[#101d69]">-{attendancePricing.annualDiscountPercent}%</span>
                    </div>
                  )}
                  {attendanceAffiliateDiscountPercent > 0 && (
                    <div className="flex justify-between gap-4 border-t border-gray-200 pt-3 text-sm">
                      <span className="text-gray-500">Descuento afiliado</span>
                      <span className="font-semibold text-[#101d69]">-S/. {formatMoney(attendanceAffiliateDiscountAmount)}</span>
                    </div>
                  )}
                </div>
              </div>

              <a
                href={`https://wa.me/51923328058?text=${encodeURIComponent(attendanceMessage(attendanceTotal, isAnnual, activeAffiliate))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#22c55e] px-4 py-3 text-center font-bold text-white shadow-sm transition hover:bg-[#16a34a]"
              >
                <WhatsappLogo size={17} weight="bold" />
                Solicitar por WhatsApp
              </a>
            </motion.div>
            </div>
          </motion.div>
        )}

        <motion.div
          className="mt-12 text-center md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base text-gray-600">
            Preguntas?{' '}
            <a href="#contacto" className="font-semibold text-[#101d69] hover:underline">
              Contacta con nosotros
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function getHighlightedCode(plans: PlanDefinition[]): PlanCode | null {
  if (plans.some((plan) => plan.code === 'emprendedor')) return 'emprendedor'

  const paidPlans = plans.filter((plan) => plan.code !== 'prueba')
  return paidPlans[1]?.code ?? paidPlans[0]?.code ?? plans[0]?.code ?? null
}

function capacityItems(plan: PlanDefinition) {
  return [
    {
      icon: Storefront,
      label: 'Tiendas',
      value: formatLimit(plan.limits.branches),
    },
    {
      icon: Buildings,
      label: 'Almacenes',
      value: formatLimit(plan.limits.warehouses),
    },
    {
      icon: Users,
      label: 'Usuarios',
      value: formatLimit(plan.limits.users),
    },
    {
      icon: Package,
      label: 'Productos',
      value: formatLimit(plan.limits.products),
    },
    {
      icon: Barcode,
      label: 'Variantes',
      value: formatLimit(plan.limits.variants),
    },
    {
      icon: Receipt,
      label: 'Comprobantes',
      value:
        plan.code === 'prueba'
          ? `${formatLimit(plan.limits.documents)} / prueba`
          : `${formatLimit(plan.limits.documents)} / mes`,
    },
    {
      icon: Database,
      label: 'Consultas DNI/RUC',
      value:
        plan.code === 'prueba'
          ? `${formatLimit(plan.limits.documentQueries)} / prueba`
          : `${formatLimit(plan.limits.documentQueries)} / mes`,
    },
  ]
}

function featureItems(plan: PlanDefinition) {
  const keys = new Set(plan.moduleKeys)
  return [
    {
      label: 'Facturacion electronica',
      included: keys.has('comprobantes'),
    },
    {
      label: 'Ventas POS',
      included: keys.has('ventas-pos'),
    },
    {
      label: 'Caja',
      included: keys.has('caja'),
    },
    {
      label: 'Cotizaciones y clientes',
      included: keys.has('cotizaciones') && keys.has('clientes'),
    },
    {
      label: 'Catalogo, stock y Kardex',
      included: keys.has('productos') && keys.has('stock-kardex'),
    },
    {
      label: 'Administracion de usuarios',
      included: keys.has('usuarios'),
    },
    {
      label: 'Reportes de ventas y productos',
      included: keys.has('reportes-ventas') && keys.has('reportes-productos'),
    },
    {
      label: 'Reporte de clientes',
      included: keys.has('reportes-clientes'),
    },
    {
      label: 'Reporte de usuarios',
      included: keys.has('reportes-usuarios'),
    },
    {
      label: 'GRE y conductores',
      included: keys.has('gre-remitente') && keys.has('conductores'),
    },
    {
      label: plan.code === 'empresarial' ? 'Soporte prioritario' : 'Soporte estandar',
      included: true,
    },
  ]
}

function planDescription(plan: PlanDefinition) {
  const descriptions: Record<PlanCode, string> = {
    prueba: `${plan.trialDays ?? 7} dias para probar Nuvex`,
    basico: 'Para vender y controlar lo esencial',
    emprendedor: 'Para tiendas que empiezan a crecer',
    crecimiento: 'La opcion mas completa para operar',
    empresarial: 'Para operaciones con mas volumen',
    pos_basico: 'POS e inventario sin asistencias',
    asistencias_basico: 'Asistencias para equipos pequenos',
    asistencias_pro: 'Asistencias para equipos en crecimiento',
    completo_emprende: 'POS y asistencias para negocios pequenos',
    completo_empresa: 'POS y asistencias completo',
  }

  return descriptions[plan.code]
}

function planMessage(
  plan: PlanDefinition,
  isAnnual: boolean,
  affiliate: Extract<AffiliateCodeResponse, { valid: true }> | null,
) {
  const base = `Hola, deseo contratar el plan ${plan.name}${isAnnual ? ' anual' : ' mensual'} (S/. ${formatMoney(
    Number(isAnnual ? plan.annualPrice : plan.monthlyOfferPrice),
  )}).`
  const affiliateText = affiliate
    ? ` Estoy usando el codigo de afiliado ${affiliate.code} con ${
        affiliate.discountPercent
      }% de descuento.`
    : ''
  return `${base}
${affiliateText}¿Podrian ayudarme a activarlo?`
}

function attendanceMessage(
  total: number,
  isAnnual: boolean,
  affiliate: Extract<AffiliateCodeResponse, { valid: true }> | null,
) {
  const base = `Hola, deseo contratar el modulo de Asistencias${isAnnual ? ' anual' : ''} por S/. ${formatMoney(
    total,
  )}.`
  const affiliateText = affiliate
    ? ` Estoy usando el codigo de afiliado ${affiliate.code} con ${
        affiliate.discountPercent
      }% de descuento.`
    : ''
  return `${base}
${affiliateText}¿Podrian ayudarme a activarlo?`
}

function getPlanPrice(
  plan: PlanDefinition,
  isAnnual: boolean,
  affiliate: Extract<AffiliateCodeResponse, { valid: true }> | null,
) {
  if (plan.code === 'prueba') {
    return {
      free: true,
      label: plan.trialDays ? `${plan.trialDays} dias gratis` : 'Gratis',
      previous: 0,
      current: 0,
      discountPercent: '0.00',
    }
  }

  const base = Number(isAnnual ? plan.annualPrice : plan.monthlyOfferPrice)
  const discountPercent = Number(affiliate?.discountPercent ?? 0)
  const current =
    discountPercent > 0 ? roundMoney(base - (base * discountPercent) / 100) : base

  return {
    free: false,
    label: '',
    previous: base,
    current,
    discountPercent: affiliate?.discountPercent ?? '0.00',
  }
}

function affiliateMessage(affiliate: AffiliateCodeResponse | null) {
  if (!affiliate) return null

  if (affiliate.valid) {
    return (
      <p className="mt-3 text-sm font-semibold text-emerald-700">
        Codigo {affiliate.code} aplicado: {affiliate.discountPercent}% de descuento.
      </p>
    )
  }

  return (
    <p className="mt-3 text-sm font-semibold text-red-600">
      {affiliate.reason === 'inactive'
        ? 'Este codigo no esta disponible.'
        : 'Codigo de afiliado no valido.'}
    </p>
  )
}

function PlanDetail({
  icon: IconComponent,
  label,
  value,
}: {
  icon: Icon
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <IconComponent size={15} weight="bold" className="shrink-0 text-[#101d69]/65" />
      <span className="min-w-0 flex-1 text-[#101d69]/75">{label}</span>
      <span className="text-right font-extrabold text-black">{value}</span>
    </div>
  )
}

function PlanFeature({ label, included }: { label: string; included: boolean }) {
  const IconComponent = included ? CheckCircle : XCircle

  return (
    <div className={`flex items-center gap-2 text-xs ${included ? 'text-gray-800' : 'text-gray-400'}`}>
      <IconComponent
        size={15}
        weight="fill"
        className={included ? 'shrink-0 text-emerald-500' : 'shrink-0 text-gray-300'}
      />
      <span>{label}</span>
    </div>
  )
}

function roundMoney(value: number) {
  return Math.round(value * 100) / 100
}

function formatMoney(value: number) {
  return value.toLocaleString('es-PE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function formatLimit(value: number | null) {
  return value === null ? 'Ilimitados' : value.toLocaleString('es-PE')
}
