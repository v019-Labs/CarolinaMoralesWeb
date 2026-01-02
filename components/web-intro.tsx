"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function WebIntro({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [mounted, setMounted] = useState(false)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Refined timing for elegant reveal
    const timer1 = setTimeout(() => setStep(1), 100)   // Quicker start
    const timer2 = setTimeout(() => setStep(2), 500)   // Logo fades in fast
    const timer3 = setTimeout(() => setStep(3), 1500)  // Golden accents
    const timer4 = setTimeout(() => setStep(4), 2500)  // Text reveals
    const timer5 = setTimeout(() => setStep(5), 3800)  // Final flourish
    const timer6 = setTimeout(() => setStep(6), 5000)  // Graceful exit
    const timer7 = setTimeout(() => handleComplete(), 6000) // Reduced total duration


    return () => {
      [timer1, timer2, timer3, timer4, timer5, timer6, timer7].forEach(clearTimeout)
    }
  }, [handleComplete])


  return (
    <AnimatePresence mode="wait">
      {step < 6 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1.2, ease: [0.45, 0, 0.15, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background: "#FFFEFB"
          }}
        >
          {/* === SUBTLE WARM GRADIENT === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 40%, rgba(164, 144, 107, 0.06) 0%, transparent 60%)"
            }}
          />

          {/* === SOFT AMBIENT GLOW === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: step >= 1 ? 0.15 : 0,
              scale: step >= 1 ? 1 : 0.8
            }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(164, 144, 107, 0.2) 0%, transparent 70%)",
              filter: "blur(60px)"
            }}
          />

          {/* === MAIN CONTENT === */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6">

            {/* Logo Container */}
            <motion.div
              animate={{
                y: step >= 1 ? 0 : 40      // Only animate Y, let opacity be 1 by default
              }}
              transition={{
                duration: 1.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative mb-8 md:mb-12 opacity-100" // Force opacity 1 via CSS
            >
              {/* Elegant outer ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: step >= 3 ? 0.25 : 0,
                  scale: step >= 3 ? 1 : 0.9
                }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-[-20px] md:inset-[-40px] rounded-full"
                style={{
                  border: "1px solid rgba(164, 144, 107, 0.3)",
                }}
              />

              {/* Inner breathing ring */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: step >= 3 ? [0.2, 0.4, 0.2] : 0,
                  scale: step >= 3 ? [1, 1.02, 1] : 1
                }}
                transition={{
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-[-10px] md:inset-[-20px] rounded-full"
                style={{
                  border: "1px solid rgba(164, 144, 107, 0.4)",
                  boxShadow: "0 0 40px rgba(164, 144, 107, 0.1)"
                }}
              />

              {/* Soft glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: step >= 2 ? 0.3 : 0
                }}
                transition={{ duration: 2 }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(164, 144, 107, 0.15) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.5)"
                }}
              />

              <Image
                src="/images/png-202.png"
                alt="Carolina Morales"
                width={500}
                height={400}
                className="relative z-10 object-contain w-[240px] md:w-[500px] h-auto"
                style={{
                  filter: "drop-shadow(0 10px 40px rgba(164, 144, 107, 0.15))"
                }}
                priority
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>

            {/* === ELEGANT TEXT === */}
            <div className="text-center space-y-8">

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: step >= 4 ? 1 : 0,
                  opacity: step >= 4 ? 1 : 0
                }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-20 md:w-32 h-[1px] mx-auto origin-center"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(164, 144, 107, 0.6), transparent)"
                }}
              />

              {/* Main title */}
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: step >= 4 ? 0 : "100%",
                    opacity: step >= 4 ? 1 : 0
                  }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-xl md:text-4xl font-vibes tracking-wide"
                  style={{ color: "rgba(164, 144, 107, 0.9)" }}
                >
                  Abogada especializada en
                </motion.h2>
              </div>

              {/* Services */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 px-4">
                {["Extranjería", "Nacionalidad", "Arraigos"].map((text, idx) => (
                  <motion.span
                    key={text}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                      opacity: step >= 4 ? 1 : 0,
                      y: step >= 4 ? 0 : 15
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 * idx,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="text-xs md:text-xl font-light tracking-[0.15em] uppercase whitespace-nowrap"
                    style={{ color: "rgba(80, 70, 60, 0.7)" }}
                  >
                    {text}
                  </motion.span>
                ))}
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 5 ? 0.5 : 0 }}
                transition={{ duration: 1.5 }}
                className="text-[10px] md:text-sm tracking-[0.2em] uppercase font-light px-4"
                style={{ color: "rgba(164, 144, 107, 0.7)" }}
              >
                Experiencia • Compromiso • Resultados
              </motion.p>

              {/* Bottom line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: step >= 5 ? 1 : 0,
                  opacity: step >= 5 ? 0.4 : 0
                }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-32 md:w-48 h-[1px] mx-auto origin-center"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(164, 144, 107, 0.4), transparent)"
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
