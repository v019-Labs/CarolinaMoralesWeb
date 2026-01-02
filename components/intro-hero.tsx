"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useTranslation } from "@/lib/i18n"
import { WordRotate } from "@/components/ui/word-rotate"
import { ShinyButton } from "@/components/ui/shiny-button"
import { LuxuryGoldButton } from "@/components/ui/luxury-gold-button"

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





  return (
    <motion.section
      id="inicio"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8 pt-24 md:pt-0 bg-[#fcfbf9]"
      style={{ perspective: isMobile ? "none" : "1000px" }}
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply z-0" />

      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          rotateX: isMobile ? 0 : rotateX_bg,
          rotateY: isMobile ? 0 : rotateY_bg,
          transformStyle: isMobile ? "flat" : "preserve-3d"
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-80" />
      </motion.div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">

        {/* Left Column: Text Content */}
        <motion.div
          className="order-2 md:order-1 space-y-8 md:space-y-10 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <div className="flex items-center gap-3 md:justify-start justify-center">
                <div className="h-[1px] w-12 bg-primary/40 hidden md:block" />
                <span className="text-primary/80 text-xs md:text-sm font-bold uppercase tracking-[0.25em] font-sans">
                  Abogada de Extranjería
                </span>
              </div>
            </motion.div>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-4xl text-muted-foreground font-serif italic tracking-wide">
                Especializada en
              </h2>
              <div className="h-[140px] md:h-[220px] flex md:block justify-center md:justify-start items-start">
                <WordRotate
                  words={[t.hero.nationality, t.hero.arraigo, t.hero.familyReunification]}
                  className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-primary tracking-tight drop-shadow-sm leading-[1.1] py-2"
                />
              </div>
            </div>

            <p className="text-muted-foreground/80 md:text-xl max-w-lg mx-auto md:mx-0 font-light leading-relaxed font-sans">
              Experiencia y compromiso para resolver tus trámites de nacionalidad y residencia con éxito.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <LuxuryGoldButton />


          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="order-1 md:order-2 relative perspective-1000"
          style={{
            rotateX: isMobile ? 0 : rotateX_logo,
            rotateY: isMobile ? 0 : rotateY_logo,
            translateZ: isMobile ? 0 : translateZ_logo,
            transformStyle: isMobile ? "flat" : "preserve-3d",
          }}
        >
          {/* Decorative Ring behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-[45%] border border-primary/10 -rotate-6 -z-10" />

          <motion.div
            className="relative w-full max-w-[480px] mx-auto aspect-[3/4] md:aspect-[4/5] rounded-[2rem] shadow-2xl shadow-primary/15"
            style={{ transform: isMobile ? "none" : "translateZ(20px)" }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Double Border Frame Effect */}
            <div className="absolute -inset-3 border border-primary/10 rounded-[2.5rem] z-0" />
            <div className="absolute -inset-1 border border-white/50 rounded-[2.2rem] z-10" />

            <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-white z-20">
              <Image
                src="/images/Nueva.jpg"
                alt="Carolina Morales Abogada"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                style={{
                  filter: 'contrast(1.02) brightness(1.02)',
                }}
              />

              {/* Subtle inner shadow and gradient */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Organic blur shapes */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-20 mix-blend-multiply" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#d4c5a6]/20 rounded-full blur-3xl -z-20 mix-blend-multiply" />
        </motion.div>
      </div>
    </motion.section>
  )
}
