import HeroSection from "@/components/sections/HeroSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import ShowcaseSection from "@/components/sections/ShowcaseSection"
import StoreBadgesSection from "@/components/sections/StoreBadgesSection"
import BetaSignupSection from "@/components/sections/BetaSignupSection"
import PrivacySection from "@/components/sections/PrivacySection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <ShowcaseSection />
      <StoreBadgesSection />
      <BetaSignupSection />
      <PrivacySection />
    </main>
  )
}
