"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { isChristmasTime } from "@/lib/utils-theme"
import Image from "next/image"

/**
 * Premium Christmas Decorations Overhaul
 * Fixed transparency and layout for a high-end luxury feel.
 */
export function ChristmasDecorations() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(isChristmasTime())
  }, [])

  if (!isActive) return null

  return (
    <>
      {/* 1. Luxurious Full-Width Top Garland */}
      <motion.div 
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-[130] pointer-events-none w-full select-none"
      >
        <div className="relative w-full h-[15vh] md:h-[20vh] mix-blend-multiply brightness-110 contrast-110">
          <Image 
            src="/decorations/christmas-garland-top.png"
            alt="Corona de Navidad"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </motion.div>

      {/* 2. Advanced Multi-Layered Snowfall */}
      <div className="fixed inset-0 z-[10] pointer-events-none overflow-hidden select-none">
        
        {/* Layer 1: Background small snow (fast) */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`s1-${i}`}
            className="absolute bg-white/60 rounded-full blur-[1px]"
            initial={{ 
              top: "-5%",
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.2 + 0.1,
            }}
            animate={{ 
              top: "105%",
              left: [`${Math.random() * 100}%`, `${(Math.random() * 100) + (i % 2 === 0 ? 5 : -5)}%`],
            }}
            transition={{ 
              duration: Math.random() * 8 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            style={{ width: "8px", height: "8px" }}
          />
        ))}

        {/* Layer 2: Foreground large flakes (slow & blurry) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`s2-${i}`}
            className="absolute bg-white/40 rounded-full blur-[4px]"
            initial={{ 
              top: "-10%",
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.8 + 0.5,
            }}
            animate={{ 
              top: "110%",
              left: [`${Math.random() * 100}%`, `${(Math.random() * 100) + (i % 2 === 0 ? 15 : -15)}px`],
            }}
            transition={{ 
              duration: Math.random() * 20 + 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 15
            }}
            style={{ width: "20px", height: "20px" }}
          />
        ))}

        {/* Layer 3: Gold Dust particles (twinkling) */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`g1-${i}`}
            className="absolute bg-primary/40 rounded-full blur-[0.5px]"
            initial={{ 
              top: "-5%",
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.3 + 0.1,
              opacity: 0,
            }}
            animate={{ 
              top: "105%",
              opacity: [0, 1, 0, 1, 0],
              left: [`${Math.random() * 100}%`, `${(Math.random() * 100) + (i % 2 === 0 ? 10 : -10)}%`],
            }}
            transition={{ 
              duration: Math.random() * 12 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            style={{ width: "6px", height: "6px" }}
          />
        ))}
      </div>

      {/* 4. Ambient Warmth */}
      <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden opacity-[0.03] select-none scale-110">
        <div className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent" />
      </div>
    </>
  )
}
