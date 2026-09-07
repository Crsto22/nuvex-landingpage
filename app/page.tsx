import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import LaunchBanner from '@/components/landing/LaunchBanner'
import SunatCompliance from '@/components/landing/SunatCompliance'
import HowItWorks from '@/components/landing/HowItWorks'
import AttendanceHowItWorks from '@/components/landing/AttendanceHowItWorks'
import Pricing from '@/components/landing/Pricing'
import CTASection from '@/components/landing/CTASection'
import FAQ from '@/components/landing/FAQ'
import CustomSystems from '@/components/landing/CustomSystems'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <Hero />
      <LaunchBanner />
      <SunatCompliance />
      <HowItWorks />
      <AttendanceHowItWorks />
      <Pricing />
      <CTASection />
      <CustomSystems />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
