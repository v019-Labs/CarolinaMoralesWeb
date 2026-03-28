"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { isChristmasTime } from "@/lib/utils-theme"
import Image from "next/image"

/**
 * Premium Christmas Decorations Overhaul
 * Garland strictly on top of the navbar and spanning the full width.
 * Only the garland is kept, all other decorations (snow, glow, etc.) are removed.
 * Hidden during WebIntro animation.
 */
export function ChristmasDecorations() {
  const [isActive, setIsActive] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    setIsActive(isChristmasTime())

    // Check if intro has been completed
    const checkIntro = () => {
      const sessionSeen = sessionStorage.getItem("introSeen") === "true"
      const cookieSeen = document.cookie.includes("intro_seen=true")
      setIntroComplete(sessionSeen || cookieSeen)
    }

    checkIntro()

    // Poll briefly to catch when intro completes (it sets sessionStorage)
    const interval = setInterval(checkIntro, 500)
    return () => clearInterval(interval)
  }, [])

  if (!isActive) return null

  return (
    <AnimatePresence>
      {introComplete && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-0 left-0 right-0 z-[90] pointer-events-none w-full select-none flex justify-center overflow-hidden h-[110px] md:h-[130px] items-start"
        >
          {[...Array(14)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1, 
                delay: i * 0.03, 
                ease: [0.23, 1, 0.32, 1] 
              }}
              className="relative flex-shrink-0 w-[18%] min-w-[300px] h-full -mx-24 mix-blend-multiply"
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
