import { API_BASE_URL, type PlanDefinition } from './api'

/**
 * Obtiene los planes desde la API para renderizarlos en el servidor.
 * Si la API falla, devuelve una lista vacía y el componente cliente
 * vuelve a intentar la carga desde el navegador.
 */
export async function getPlans(): Promise<PlanDefinition[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/plans`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) return []

    const body = await response.json().catch(() => null)
    const plans = Array.isArray(body) ? body : body?.data

    return Array.isArray(plans) ? (plans as PlanDefinition[]) : []
  } catch {
    return []
  }
}

export function cheapestPaidPlan(plans: PlanDefinition[]) {
  const paid = plans.filter(
    (plan) => plan.code !== 'prueba' && Number(plan.monthlyOfferPrice) > 0,
  )

  return paid.sort(
    (a, b) => Number(a.monthlyOfferPrice) - Number(b.monthlyOfferPrice),
  )[0]
}
