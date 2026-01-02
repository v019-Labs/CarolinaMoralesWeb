"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { WordRotate } from "@/components/ui/word-rotate"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [smoothScrollY, setSmoothScrollY] = useState(0)

  // Smooth interpolation for lag effect
  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }, [])

  useEffect(() => {
    setMounted(true)

    let animationFrameId: number
    let currentScrollY = 0

    const handleScroll = () => {
      currentScrollY = window.scrollY
      setScrollY(currentScrollY)
    }

    // Smooth animation loop for delayed parallax effect
    const animate = () => {
      setSmoothScrollY(prev => lerp(prev, currentScrollY, 0.08)) // Low factor = more lag/smoothness
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [lerp])

  // Parallax calculations with smooth interpolated scroll
  const logoParallax = smoothScrollY * 0.4
  const backgroundParallax1 = smoothScrollY * 0.15
  const backgroundParallax2 = smoothScrollY * 0.25
  const backgroundParallax3 = smoothScrollY * 0.35

  // Fade out effects
  const logoOpacity = Math.max(0, 1 - scrollY / 600)
  const badgesOpacity = Math.max(0, 1 - scrollY / 400)
  const lineOpacity = Math.max(0, 1 - scrollY / 500)

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-24">
      {/* Background orbs with parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[150px] animate-pulse"
          style={{
            transform: `translate(-50%, calc(-50% + ${backgroundParallax1}px))`,
            willChange: 'transform'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-glow"
          style={{
            transform: `translate(-50%, calc(-50% + ${backgroundParallax2}px))`,
            willChange: 'transform'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/40 rounded-full blur-[100px] animate-pulse animation-delay-1000"
          style={{
            transform: `translate(-50%, calc(-50% + ${backgroundParallax3}px))`,
            willChange: 'transform'
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-12">
          {/* Logo with smooth parallax and fade */}
          <div
            className={`relative inline-block transition-opacity duration-[1500ms] ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            style={{
              transform: `translateY(${logoParallax}px) scale(${mounted ? 1 : 0.9})`,
              opacity: mounted ? logoOpacity : 0,
              willChange: 'transform, opacity',
              transition: mounted ? 'none' : 'all 1.5s ease-out'
            }}
          >
            <div
              className="absolute inset-0 bg-primary/40 blur-[80px] rounded-full animate-pulse-glow"
              style={{
                transform: `translateY(${logoParallax * 0.5}px)`,
              }}
            />
            <Image
              src="/images/png-202.png"
              alt="Carolina Morales Abogada"
              width={450}
              height={340}
              className="relative z-10 drop-shadow-[0_0_60px_rgba(164,144,107,0.7)]"
              priority
            />
          </div>

          {/* Decorative line with parallax */}
          <div
            className={`space-y-4 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{
              transform: `translateY(${smoothScrollY * 0.3}px)`,
              opacity: mounted ? lineOpacity : 0,
              transition: mounted ? 'none' : 'all 1.2s ease-out 0.4s',
              willChange: 'transform, opacity'
            }}
          >
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Badges with subtle parallax and fade */}
          <div
            className={`space-y-6 ${mounted ? "opacity-100" : "opacity-0"}`}
            style={{
              transform: `translateY(${smoothScrollY * 0.2}px)`,
              opacity: mounted ? badgesOpacity : 0,
              transition: mounted ? 'none' : 'all 1s ease-out 0.8s',
              willChange: 'transform, opacity'
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide uppercase">Abogada especializada en</p>
              <WordRotate
                words={["Nacionalidad", "Arraigo", "Reagrupación Familiar"]}
                className="text-4xl md:text-6xl font-black text-primary tracking-tight drop-shadow-sm"
              />
            </div>
          </div>

          {/* CTA Button with parallax */}
          <div
            className={`pt-8 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              transform: `translateY(${smoothScrollY * 0.1}px)`,
              transition: mounted ? 'none' : 'all 1s ease-out 1.5s',
              willChange: 'transform'
            }}
          >
            <a
              href="#servicios"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary/90 text-primary-foreground rounded-full text-lg font-medium hover:bg-primary transition-all duration-500 shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-110"
            >
              Explorar servicios
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
