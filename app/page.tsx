import Header from "@/components/layout/Header"
import HeroSection from "@/components/sections/HeroSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import ShowcaseSection from "@/components/sections/ShowcaseSection"
import StoreBadgesSection from "@/components/sections/StoreBadgesSection"
import BetaSignupSection from "@/components/sections/BetaSignupSection"
import PrivacySection from "@/components/sections/PrivacySection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <StoreBadgesSection />
        <TestimonialsSection />
        <section id="beta-signup">
          <BetaSignupSection />
        </section>
        <PrivacySection />
      </div>
    </main>
  )
}
