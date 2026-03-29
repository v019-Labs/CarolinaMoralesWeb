"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { isChristmasTime } from "@/lib/utils-theme"

/**
 * Premium Christmas Decorations
 * Garland strip at the very top of the page (absolute, not fixed — doesn't follow scroll).
 * Plus subtle snowfall and golden snowflakes for a premium feel.
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

    const checkIntro = () => {
      const sessionSeen = sessionStorage.getItem("introSeen") === "true"
      const cookieSeen = document.cookie.includes("intro_seen=true")
      return sessionSeen || cookieSeen
    }

    if (checkIntro()) {
      setIntroComplete(true)
      return
    }

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
        <>
          {/* ===== SNOWFALL + GOLDEN FLAKES — fixed overlay ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="fixed inset-0 z-[80] pointer-events-none select-none overflow-hidden"
          >
            {/* Snow particles */}
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

            {/* Golden snowflakes */}
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
                    d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
