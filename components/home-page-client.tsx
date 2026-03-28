"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { WebIntro } from "@/components/web-intro"
import { FloatingNavbar } from "@/components/floating-navbar"
import { IntroHero } from "@/components/intro-hero"
import dynamic from "next/dynamic"

// Dynamic imports for sections below the fold
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => mod.AboutSection))
const ServicesSection = dynamic(() => import("@/components/services-section").then(mod => mod.ServicesSection))
const ReviewsSection = dynamic(() => import("@/components/reviews-section").then(mod => mod.ReviewsSection))
const LocationsSection = dynamic(() => import("@/components/locations-section").then(mod => mod.LocationsSection), { ssr: false })
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer))

export function HomePageClient({ initialIntroSeen }: { initialIntroSeen: boolean }) {
  const [introComplete, setIntroComplete] = useState<boolean>(initialIntroSeen)
  const [hasCheckedSession, setHasCheckedSession] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Sync with session storage too as a fallback/secondary check
    const introSeen = sessionStorage.getItem("introSeen")
    if (introSeen === "true" || initialIntroSeen) {
      setIntroComplete(true)
    }
    setHasCheckedSession(true)
  }, [initialIntroSeen])


  useEffect(() => {
    if (introComplete && searchParams.has('scrollTo')) {
      const targetId = searchParams.get('scrollTo')
      if (targetId) {
        setTimeout(() => {
          const element = document.getElementById(targetId)
          if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            })
          } else if (targetId === "inicio") {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }

          // Clean up the URL
          const newUrl = window.location.pathname
          window.history.replaceState({}, '', newUrl)
        }, 300)
      }
    }
  }, [introComplete, searchParams])

  const handleIntroComplete = () => {
    sessionStorage.setItem("introSeen", "true")
    // Set cookie for server-side recognition in future visits
    document.cookie = "intro_seen=true; path=/; max-age=31536000; SameSite=Lax"
    setIntroComplete(true)
  }

  return (
    <>
      {!introComplete && !hasCheckedSession ? (
        <WebIntro onComplete={handleIntroComplete} />
      ) : !introComplete ? (
        <WebIntro onComplete={handleIntroComplete} />
      ) : (
        <main className="min-h-screen relative overflow-hidden bg-background">
          {/* Background effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-glow will-change-[transform,opacity]" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-glow animation-delay-2000 will-change-[transform,opacity]" />
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] animate-pulse will-change-[transform,opacity]" />
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[100px] animate-glow animation-delay-1000 will-change-[transform,opacity]" />
          </div>

          <FloatingNavbar />
          <IntroHero />
          <AboutSection />
          <ServicesSection />
          <ReviewsSection />
          <LocationsSection />
          <Footer />
        </main>
      )}
    </>
  )
}
