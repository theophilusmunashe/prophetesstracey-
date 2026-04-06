import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  )
}
