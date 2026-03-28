"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { isChristmasTime } from "@/lib/utils-theme"
import Image from "next/image"

/**
 * Premium Christmas Decorations Overhaul
 * Garland strictly on top of the navbar and spanning the full width.
 * Only the garland is kept, all other decorations (snow, glow, etc.) are removed.
 */
export function ChristmasDecorations() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(isChristmasTime())
  }, [])

  if (!isActive) return null

  return (
    <>
      {/* Repeating Top Garlands (Above everything) */}
      <div className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none w-full select-none flex justify-center overflow-hidden h-[12vh] md:h-[18vh] items-start">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1, 
              delay: i * 0.05, 
              ease: [0.23, 1, 0.32, 1] 
            }}
            className="relative flex-shrink-0 w-[15%] min-w-[280px] h-full -mx-10 mix-blend-multiply"
          >
            <Image 
              src="/decorations/guinarla.png"
              alt="Guirnalda de Navidad"
              fill
              className="object-contain object-top"
              priority
            />
          </motion.div>
        ))}
      </div>
    </>
  )
}
