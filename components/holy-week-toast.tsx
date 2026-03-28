"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles } from "lucide-react"

const HOLY_WEEK_DATES: Record<string, string> = {
  "2026-03-28": "Sábado de Pasión",
  "2026-03-29": "Domingo de Ramos",
  "2026-03-30": "Lunes Santo",
  "2026-03-31": "Martes Santo",
  "2026-04-01": "Miércoles Santo",
  "2026-04-02": "Jueves Santo",
  "2026-04-03": "Viernes Santo",
  "2026-04-04": "Sábado Santo",
  "2026-04-05": "Domingo de Resurrección",
}

export function HolyWeekToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    // Determine the current date in Europe/Madrid (Spain)
    const now = new Date()
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Madrid',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    const dateString = formatter.format(now) // Format: YYYY-MM-DD

    const dayName = HOLY_WEEK_DATES[dateString]
    if (dayName) {
      const storageKey = `holy-week-greeting-${dateString}`
      const hasSeenToday = localStorage.getItem(storageKey)

      if (!hasSeenToday) {
        setGreeting(`Feliz ${dayName}!`)
        // Delay appearance slightly for better UX (after hero animations)
        const timer = setTimeout(() => setIsVisible(true), 3500)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    const now = new Date()
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Madrid',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    const dateString = formatter.format(now)
    localStorage.setItem(`holy-week-greeting-${dateString}`, "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-[120] min-w-[320px] max-w-[400px]"
        >
          {/* Main Card with Glassmorphism */}
          <div className="relative overflow-hidden group">
            {/* Multi-layered Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/10 to-transparent blur-2xl -z-10 group-hover:from-primary/40 transition-all duration-1000" />

            <div className="relative bg-[#FFFEFB]/90 dark:bg-black/90 backdrop-blur-2xl border border-primary/20 rounded-[2rem] p-7 shadow-[0_25px_60px_rgba(164,144,107,0.2)] flex flex-col gap-1 overflow-hidden border-b-primary/40">

              {/* Premium Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              {/* Texture Mask */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
              />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary shadow-inner ring-1 ring-primary/20">
                    <Sparkles size={22} className="animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/90 font-inter">
                      Semana Santa
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-muted-foreground font-inter">
                      2026
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="size-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center text-muted-foreground transition-all active:scale-95 border border-transparent hover:border-black/5"
                  aria-label="Cerrar notificación"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5 px-1 relative z-10">
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-serif font-medium text-primary tracking-tight leading-tight drop-shadow-sm"
                >
                  {greeting}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-foreground/80 mt-3 font-sans tracking-wide leading-relaxed"
                >
                  Carolina Morales te desea mucha paz y prosperidad en este día tan especial.
                </motion.p>
              </div>

              {/* Decorative Floating Shape */}
              <div className="absolute -bottom-10 -right-10 size-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
