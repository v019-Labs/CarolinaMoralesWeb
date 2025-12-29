"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useTranslation } from "@/lib/i18n"

export function IntroHero() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth the mouse values with gentler spring
  const smoothX = useSpring(x, { stiffness: 150, damping: 25, mass: 0.8 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 25, mass: 0.8 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return
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

  // Transformations for different layers - subtler movements
  const rotateX_bg = useTransform(smoothY, [-1, 1], [5, -5])
  const rotateY_bg = useTransform(smoothX, [-1, 1], [-5, 5])

  const rotateX_logo = useTransform(smoothY, [-1, 1], [4, -4])
  const rotateY_logo = useTransform(smoothX, [-1, 1], [-4, 4])
  const translateZ_logo = useTransform(smoothX, [-1, 1], [-10, 10])

  const rotateX_buttons = useTransform(smoothY, [-1, 1], [2, -2])
  const rotateY_buttons = useTransform(smoothX, [-1, 1], [-2, 2])
  const translateZ_buttons = useTransform(smoothY, [-1, 1], [15, -15])

  const services = [
    t.hero.immigration,
    t.hero.nationality,
    t.hero.arraigo,
    t.hero.familyReunification
  ]

  return (
    <motion.section
      id="inicio"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      style={{ perspective: "1000px" }}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ rotateX: rotateX_bg, rotateY: rotateY_bg, transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
      </motion.div>

      {/* Main Content with 3D effect */}
      <motion.div style={{ transformStyle: "preserve-3d" }} className="text-center space-y-12">
        {/* Logo */}
        <motion.div
          style={{
            rotateX: rotateX_logo,
            rotateY: rotateY_logo,
            translateZ: translateZ_logo,
            transformStyle: "preserve-3d",
          }}
          className="relative inline-block"
        >

          <motion.div
            style={{ transform: "translateZ(40px)" }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
          >
            <Image
              src="/images/png-202.png"
              alt="Carolina Morales - Abogada"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          style={{
            rotateX: rotateX_buttons,
            rotateY: rotateY_buttons,
            translateZ: translateZ_buttons,
            transformStyle: "preserve-3d",
          }}
          className="space-y-8"
        >
          <div className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {services.map((item) => (
              <motion.div
                key={item}
                className="group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  <div
                    className="relative px-8 py-4 bg-background/80 backdrop-blur-xl border border-primary/40 text-primary rounded-full
                               transition-all duration-400 overflow-hidden hover:border-primary/60"
                  >
                    <span className="relative text-lg md:text-2xl font-vibes tracking-wide block">
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
