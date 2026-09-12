export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? 'http://localhost:3000'

export const CPE_API_BASE_URL =
  process.env.NEXT_PUBLIC_CPE_API_URL?.replace(/\/$/, '') || API_BASE_URL

export type PlanCode =
  | 'prueba'
  | 'basico'
  | 'emprendedor'
  | 'crecimiento'
  | 'empresarial'
  | 'pos_basico'
  | 'asistencias_basico'
  | 'asistencias_pro'
  | 'completo_emprende'
  | 'completo_empresa'

export type PlanLimits = {
  users: number
  branches: number
  warehouses: number | null
  products: number
  variants: number
  documents: number
  documentQueries: number
  storageBytes: number
  attendanceEmployees: number
  attendanceQrPoints: number
}

export type PlanDefinition = {
  code: PlanCode
  name: string
  priceMonthly: string
  monthlyDiscountPercent: string
  monthlyOfferPrice: string
  annualDiscountPercent: string
  annualPrice: string
  pricingUpdatedAt: string
  currency: 'PEN'
  includesIgv: true
  trialDays: number | null
  limits: PlanLimits
  moduleKeys: string[]
  highlights: string[]
}

export type AffiliateCodeResponse =
  | {
      valid: true
      code: string
      discountPercent: string
      currency: 'PEN'
    }
  | {
      valid: false
      code: string
      discountPercent: '0.00'
      reason: 'invalid' | 'inactive'
    }

export type AttendancePricing = {
  employeeUnitPrice: string
  qrPointUnitPrice: string
  annualDiscountPercent: string
  currency: 'PEN'
  includesIgv: true
  updatedAt: string
  updatedBy?: {
    id: string
    name: string
    email: string
  } | null
}

export async function apiRequest<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`)
  const body = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(readApiError(body))
  }

  return body as T
}

function readApiError(body: unknown) {
  if (!body || typeof body !== 'object') {
    return 'No se pudo completar la solicitud.'
  }

  const value = body as { message?: string | string[]; error?: string }
  if (Array.isArray(value.message)) return value.message.join(' ')
  return value.message ?? value.error ?? 'No se pudo completar la solicitud.'
}
