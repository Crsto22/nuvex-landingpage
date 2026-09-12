import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import BusinessTypes from '@/components/landing/BusinessTypes'
import FeaturedFeatures from '@/components/landing/FeaturedFeatures'
import AttendanceHowItWorks from '@/components/landing/AttendanceHowItWorks'
import Pricing from '@/components/landing/Pricing'
import FAQ from '@/components/landing/FAQ'
import CustomSystems from '@/components/landing/CustomSystems'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'

export default function Home() {
  return (
    <main className="relative w-full bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 z-0 h-[560px] w-[60%] bg-[url('/fondos/fondo1.png')] bg-right-top bg-no-repeat bg-contain lg:h-[660px]"
      />
      <Header />
      <Hero />
      <BusinessTypes />
      <FeaturedFeatures />
      <AttendanceHowItWorks />
      <Pricing />
      <CustomSystems />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
