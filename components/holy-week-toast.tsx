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
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, x: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed bottom-8 right-6 z-[120] max-w-[280px]"
        >
          {/* Slim Premium Card */}
          <div className="relative overflow-hidden group">
            {/* Subtle glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-xl -z-10 group-hover:from-primary/25 transition-all duration-700" />
            
            <div className="relative bg-[#FFFEFB]/95 dark:bg-black/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 shadow-[0_20px_50px_rgba(164,144,107,0.15)] overflow-hidden border-b-primary/40">
              
              {/* Premium Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/5">
                    <Sparkles size={16} className="animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/80 leading-tight font-inter">
                      Semana Santa
                    </span>
                    <span className="text-[7px] font-bold uppercase tracking-widest text-muted-foreground/60 leading-none font-inter">
                      2026
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="size-7 rounded-full hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center text-muted-foreground/50 hover:text-muted-foreground transition-all active:scale-90"
                  aria-label="Cerrar notificación"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="mt-4 relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-dancing font-medium text-primary tracking-tight leading-snug drop-shadow-sm"
                >
                  {greeting}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.5 }}
                  className="text-[11px] text-foreground/80 mt-2 font-sans tracking-wide leading-relaxed"
                >
                  Carolina Morales te desea paz y prosperidad en este día tan especial.
                </motion.p>
              </div>

              {/* Subtle Decorative element */}
              <div className="absolute -bottom-6 -right-6 size-20 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
