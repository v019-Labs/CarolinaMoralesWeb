"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function AnimatedChristmasTree({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Generate random lights
  const lights = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    top: `${20 + Math.random() * 65}%`,
    left: `${15 + Math.random() * 70}%`,
    color: ['#ff0000', '#00ff00', '#ffff00', '#D4AF37'][Math.floor(Math.random() * 4)],
    delay: Math.random() * 2,
    duration: 0.5 + Math.random() * 1.5
  }))

  return (
    <div className={cn("relative flex flex-col items-center justify-end w-32 h-48", className)}>
      {/* Star */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-[#D4AF37] z-20 -mb-2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </motion.div>

      {/* Tree Layers */}
      <div className="relative flex flex-col items-center w-full z-10 drop-shadow-lg">
        <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-l-transparent border-r-transparent border-b-[#0b3d0b] relative z-30" />
        <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[50px] border-l-transparent border-r-transparent border-b-[#0d4d0d] relative z-20 -mt-6" />
        <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[60px] border-l-transparent border-r-transparent border-b-[#0f5c0f] relative z-10 -mt-8">
          {/* Animated Lights overlaying the bottom tier to simulate full tree lights */}
          <div className="absolute top-0 -left-[50px] w-[100px] h-[60px] overflow-hidden pointer-events-none">
            {lights.map(light => (
              <motion.div
                key={light.id}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  top: light.top,
                  left: light.left,
                  backgroundColor: light.color,
                  boxShadow: `0 0 4px ${light.color}`
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: light.duration,
                  repeat: Infinity,
                  delay: light.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trunk */}
      <div className="w-6 h-8 bg-[#4a2e00] z-0 -mt-2 rounded-sm" />
      
      {/* Snow Base */}
      <div className="w-24 h-4 bg-white/40 rounded-full blur-[2px] absolute bottom-0 -z-10" />
    </div>
  )
}
