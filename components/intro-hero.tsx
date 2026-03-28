"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/i18n"
import { WordRotate } from "@/components/ui/word-rotate"
import { ShinyButton } from "@/components/ui/shiny-button"
import { LuxuryGoldButton } from "@/components/ui/luxury-gold-button"
import { isChristmasTime } from "@/lib/utils-theme"
import { AnimatePresence } from "framer-motion"

export function IntroHero() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isChristmas, setIsChristmas] = useState(false)

  useEffect(() => {
    setIsChristmas(isChristmasTime())
  }, [])

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth the mouse values with gentler spring
  const smoothX = useSpring(x, { stiffness: 150, damping: 25, mass: 0.8 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 25, mass: 0.8 })

  const containerRect = useRef<DOMRect | null>(null)

  // Cache rect on mount and resize instead of every mouse move
  useEffect(() => {
    if (isMobile) return
    const updateRect = () => {
      if (containerRef.current) {
        containerRect.current = containerRef.current.getBoundingClientRect()
      }
    }
    updateRect()
    window.addEventListener("resize", updateRect)
    // Also update on scroll as the relative position to viewport changes
    window.addEventListener("scroll", updateRect, { passive: true })
    return () => {
      window.removeEventListener("resize", updateRect)
      window.removeEventListener("scroll", updateRect)
    }
  }, [isMobile])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRect.current || isMobile) return
    const { clientX, clientY } = event
    const { left, top, width, height } = containerRect.current
    
    // Use the cached values
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8 pt-24 lg:pt-0 bg-[#fcfbf9]"
      style={{ perspective: isMobile ? "none" : "1000px" }}
    >
      {/* Texture Overlay - Inline noise for better performance */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 -z-20 will-change-transform"
        style={{
          rotateX: isMobile ? 0 : rotateX_bg,
          rotateY: isMobile ? 0 : rotateY_bg,
          transformStyle: isMobile ? "flat" : "preserve-3d"
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-80" />
      </motion.div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">

        {/* Left Column: Text Content */}
        <motion.div
          className="order-2 lg:order-1 space-y-8 lg:space-y-10 text-center lg:text-left"
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
              <div className="flex items-center gap-3 lg:justify-start justify-center">
                <div className="h-[1px] w-12 bg-primary/40 hidden lg:block" />
                <span className="text-primary/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] font-sans">
                  Abogada de Extranjería
                </span>
              </div>
            </motion.div>

            <div className="space-y-1">
              <h2 className="text-base md:text-lg lg:text-xl text-muted-foreground font-serif italic tracking-wide">
                Especializada en
              </h2>
              <div className="h-[50px] sm:h-[70px] md:h-[80px] lg:h-[120px] flex lg:block justify-center lg:justify-start items-start relative">
                <WordRotate
                  words={[t.hero.nationality, t.hero.arraigo, t.hero.familyReunification]}
                  className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium text-primary tracking-tight drop-shadow-sm leading-[1.1] py-2"
                />
                
                {/* Christmas Snowflake Accents */}
                <AnimatePresence>
                  {isChristmas && (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-6 -right-12 text-primary/40 pointer-events-none"
                      >
                         <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                           <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" />
                         </svg>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 0.7 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -bottom-4 -left-8 text-primary/30 pointer-events-none"
                      >
                         <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                           <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" />
                         </svg>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <p className="text-muted-foreground/80 text-xs md:text-sm lg:text-base max-w-lg mx-auto lg:mx-0 font-light leading-relaxed font-sans">
              Experiencia y compromiso para resolver tus trámites de nacionalidad y residencia con éxito.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LuxuryGoldButton />
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="order-1 lg:order-2 relative perspective-1000 will-change-transform"
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
            className="relative w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[320px] xl:max-w-[340px] mx-auto aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] shadow-2xl shadow-primary/15"
            style={{ transform: isMobile ? "none" : "translateZ(20px)" }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Double Border Frame Effect */}
            <div className="absolute -inset-3 border border-primary/10 rounded-[2rem] z-0" />
            <div className="absolute -inset-1 border border-white/50 rounded-[1.8rem] z-10" />

            <div className={cn(
              "relative h-full w-full rounded-[1.5rem] overflow-hidden bg-white z-20 transition-all duration-700",
              isChristmas && "border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            )}>
              <Image
                src="/images/Nueva.jpg"
                alt="Carolina Morales Abogada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
                loading="eager"
                fetchPriority="high"
                style={{
                  filter: 'contrast(1.02) brightness(1.02)',
                }}
              />

              {/* Subtle inner shadow and gradient */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

              {/* Christmas Decorations */}
              <AnimatePresence>
                {isChristmas && (
                  <>
                    {/* Starburst Sparkles */}
                    <motion.div
                      animate={{ 
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-2 right-2 size-8 z-40 text-yellow-200 pointer-events-none drop-shadow-glow"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                        <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1, 0.8],
                        rotate: [0, -45, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-1/4 left-2 size-6 z-40 text-yellow-100/60 pointer-events-none"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                        <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
                      </svg>
                    </motion.div>

                    {/* Pine Branch CornerDecoration */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute -bottom-6 -right-6 size-40 z-30 pointer-events-none"
                    >
                      <Image 
                        src="/decorations/christmas-corner.png" 
                        alt="Decoración"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
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
