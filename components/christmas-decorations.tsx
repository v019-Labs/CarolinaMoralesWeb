"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { isChristmasTime } from "@/lib/utils-theme"
import Image from "next/image"

/**
 * Premium Christmas Decorations - Stitch-inspired design
 * Features:
 *  - Corner pine branch decorations (top-left, top-right)
 *  - Gentle snowfall particles
 *  - Floating golden snowflake ornaments
 * Hidden during WebIntro animation.
 */

// Pre-generate snow data to avoid hydration mismatches
const SNOW_DATA = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 3.33 + 7) % 100}%`,
  delay: `${(i * 0.27) % 8}s`,
  duration: `${6 + (i % 7)}s`,
  opacity: 0.3 + ((i * 17) % 50) / 100,
  size: `${2 + (i % 4)}px`,
  drift: i % 2 === 0,
}))

const GOLDEN_FLAKES = [
  { top: "22%", left: "6%", size: 18, delay: 0, duration: 5 },
  { top: "35%", left: "2%", size: 12, delay: 1.5, duration: 6 },
  { top: "50%", left: "10%", size: 16, delay: 0.8, duration: 4.5 },
  { top: "28%", left: "14%", size: 10, delay: 2, duration: 5.5 },
  { top: "60%", left: "5%", size: 14, delay: 1, duration: 5 },
  { top: "18%", left: "92%", size: 12, delay: 0.5, duration: 6 },
  { top: "42%", left: "95%", size: 10, delay: 2.5, duration: 5 },
  { top: "70%", left: "90%", size: 14, delay: 1.8, duration: 4.5 },
]

export function ChristmasDecorations() {
  const [isActive, setIsActive] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    setIsActive(isChristmasTime())

    // Check if intro has been completed
    const checkIntro = () => {
      const sessionSeen = sessionStorage.getItem("introSeen") === "true"
      const cookieSeen = document.cookie.includes("intro_seen=true")
      return sessionSeen || cookieSeen
    }

    // If already seen (returning visitor), show immediately
    if (checkIntro()) {
      setIntroComplete(true)
      return
    }

    // Otherwise poll to catch when intro completes
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (checkIntro()) {
          setIntroComplete(true)
          clearInterval(interval)
        }
      }, 500)
      return () => clearInterval(interval)
    }, 3000)

    return () => clearTimeout(startDelay)
  }, [])

  if (!isActive) return null

  return (
    <AnimatePresence>
      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[80] pointer-events-none select-none overflow-hidden"
        >
          {/* ===== CORNER PINE BRANCHES ===== */}
          
          {/* Top-left corner */}
          <motion.div
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute -top-6 -left-6 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]"
          >
            <Image
              src="/decorations/christmas-corner.png"
              alt=""
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </motion.div>

          {/* Top-right corner (mirrored) */}
          <motion.div
            initial={{ x: 100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute -top-6 -right-6 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] -scale-x-100"
          >
            <Image
              src="/decorations/christmas-corner.png"
              alt=""
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </motion.div>

          {/* ===== SNOWFALL ===== */}
          {SNOW_DATA.map((snow) => (
            <div
              key={`snow-${snow.id}`}
              className={snow.drift ? "snow-particle-drift" : "snow-particle"}
              style={{
                left: snow.left,
                animationDelay: snow.delay,
                animationDuration: snow.duration,
                opacity: snow.opacity,
                width: snow.size,
                height: snow.size,
              }}
            />
          ))}

          {/* ===== GOLDEN SNOWFLAKES / ORNAMENTS ===== */}
          {GOLDEN_FLAKES.map((flake, i) => (
            <div
              key={`flake-${i}`}
              className="absolute golden-snowflake"
              style={{
                top: flake.top,
                left: flake.left,
                animationDuration: `${flake.duration}s`,
                animationDelay: `${flake.delay}s`,
              }}
            >
              <svg
                width={flake.size}
                height={flake.size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M12 2l2 4-2-1-2 1 2-4zM12 22l-2-4 2 1 2-1-2 4zM2 12l4 2-1-2 1-2-4 2zM22 12l-4-2 1 2-1 2 4-2z"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
