"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { isChristmasTime } from "@/lib/utils-theme"
import Image from "next/image"

/**
 * Global Christmas Decorations Component
 * Heavily inspired by the user's reference image.
 */
export function ChristmasDecorations() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(isChristmasTime())
  }, [])

  if (!isActive) return null

  return (
    <>
      {/* 1. Premium Top Garland */}
      <motion.div 
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-[130] pointer-events-none w-full h-[12vh] md:h-[18vh]"
      >
        <Image 
          src="/decorations/christmas-garland-top.png"
          alt="Navidad"
          fill
          className="object-contain object-top brightness-105"
          priority
        />
      </motion.div>

      {/* 2. Soft Snowfall */}
      <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden opacity-40 select-none">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full blur-[2px]"
            initial={{ 
              top: "-5%",
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.4 + 0.1,
              opacity: Math.random() * 0.6 + 0.2
            }}
            animate={{ 
              top: "105%",
              left: [`${Math.random() * 100}%`, `${(Math.random() * 100) + (i % 2 === 0 ? 2 : -2)}%`],
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            style={{ width: "12px", height: "12px" }}
          />
        ))}
      </div>

      {/* 3. Subtle background Bokeh (warm gold) */}
      <div className="fixed inset-0 z-[4] pointer-events-none overflow-hidden opacity-10 select-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-[100px]"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </>
  )
}
