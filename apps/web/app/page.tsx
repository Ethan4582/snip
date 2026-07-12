"use client"

import LandingNavbar from '../src/components/landing/LandingNavbar'
import HeroSection from '../src/components/landing/HeroSection'
import FeaturesSection from '../src/components/landing/FeaturesSection'
import LandingFooter from '../src/components/landing/LandingFooter'

export default function Home() {
  return (
    <div className="w-full bg-white text-black font-sans antialiased overflow-x-hidden">
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <LandingFooter />
    </div>
  )
}
