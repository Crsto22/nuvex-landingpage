import Pricing from './Pricing'
import { getPlans } from '@/lib/plans'

/**
 * Sección de precios renderizada en el servidor: los planes llegan en el HTML
 * inicial para que Google pueda leer precios y características.
 */
export default async function PricingSection() {
  const plans = await getPlans()

  return (
    <div id="planes" className="scroll-mt-24">
      <Pricing initialPlans={plans} />
    </div>
  )
}
