"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useTranslation } from "@/lib/i18n"

export function IntroHero() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth the mouse values with gentler spring
  const smoothX = useSpring(x, { stiffness: 150, damping: 25, mass: 0.8 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 25, mass: 0.8 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current || isMobile) return
    const { clientX, clientY } = event
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const xPct = (clientX - (left + width / 2)) / (width / 2)
    const yPct = (clientY - (top + height / 2)) / (height / 2)
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Transformations for different layers - subtler movements (disabled on mobile)
  const rotateX_bg = useTransform(smoothY, [-1, 1], isMobile ? [0, 0] : [5, -5])
  const rotateY_bg = useTransform(smoothX, [-1, 1], isMobile ? [0, 0] : [-5, 5])

  const rotateX_logo = useTransform(smoothY, [-1, 1], isMobile ? [0, 0] : [4, -4])
  const rotateY_logo = useTransform(smoothX, [-1, 1], isMobile ? [0, 0] : [-4, 4])
  const translateZ_logo = useTransform(smoothX, [-1, 1], isMobile ? [0, 0] : [-10, 10])

  const rotateX_buttons = useTransform(smoothY, [-1, 1], isMobile ? [0, 0] : [2, -2])
  const rotateY_buttons = useTransform(smoothX, [-1, 1], isMobile ? [0, 0] : [-2, 2])
  const translateZ_buttons = useTransform(smoothY, [-1, 1], isMobile ? [0, 0] : [15, -15])

  const services = [
    t.hero.nationality,
    t.hero.arraigo,
    t.hero.familyReunification,
    t.hero.penal,
    t.hero.civil,
    t.hero.accidents
  ]

  return (
    <motion.section
      id="inicio"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-6 pt-20 md:pt-0"
      style={{ perspective: isMobile ? "none" : "1000px" }}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          rotateX: isMobile ? 0 : rotateX_bg,
          rotateY: isMobile ? 0 : rotateY_bg,
          transformStyle: isMobile ? "flat" : "preserve-3d"
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
      </motion.div>

      {/* Main Content with 3D effect */}
      <motion.div
        style={{ transformStyle: isMobile ? "flat" : "preserve-3d" }}
        className="text-center space-y-8 md:space-y-12 w-full"
      >
        {/* Banner with Parallax (desktop) or static (mobile) */}
        <motion.div
          style={{
            rotateX: isMobile ? 0 : rotateX_logo,
            rotateY: isMobile ? 0 : rotateY_logo,
            translateZ: isMobile ? 0 : translateZ_logo,
            transformStyle: isMobile ? "flat" : "preserve-3d",
          }}
          className="relative w-full max-w-5xl mx-auto px-4"
        >
          <motion.div
            style={{ transform: isMobile ? "none" : "translateZ(40px)" }}
            className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl shadow-primary/30 md:shadow-primary/40"
          >
            {/* Banner Image */}
            <Image
              src="/images/Nueva.jpg"
              alt="Carolina Morales - Abogada"
              fill
              className="object-cover object-center"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
              style={{
                imageRendering: 'auto',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                filter: 'contrast(1.02) brightness(1.02) saturate(1.02)',
              }}
            />
            {/* Golden border frame */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-2 ring-primary/50 ring-inset" />
          </motion.div>
        </motion.div>

        {/* Service Buttons */}
        <motion.div
          style={{
            rotateX: isMobile ? 0 : rotateX_buttons,
            rotateY: isMobile ? 0 : rotateY_buttons,
            translateZ: isMobile ? 0 : translateZ_buttons,
            transformStyle: isMobile ? "flat" : "preserve-3d",
          }}
          className="space-y-6 md:space-y-8"
        >
          <div className="h-[2px] w-1/3 md:w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />

          {/* Mobile: wrap with smaller gaps, Desktop: wrap with larger gaps */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 px-2 md:px-0">
            {services.map((item) => (
              <motion.div
                key={item}
                className="group relative flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  <div
                    className="relative px-5 py-2.5 md:px-8 md:py-4 bg-background/80 backdrop-blur-xl border border-primary/40 text-primary rounded-full
                               transition-all duration-400 overflow-hidden hover:border-primary/60"
                  >
                    <span className="relative text-sm md:text-2xl font-vibes tracking-wide block whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
