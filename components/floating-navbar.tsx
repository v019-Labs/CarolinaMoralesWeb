"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { LanguageSelector } from "./language-selector"
import { ShinyButton } from "./ui/shiny-button"
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useSpring, useMotionValue } from "motion/react"

/** 
 * Magnetic component for premium hover interaction
 */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const rect = useRef<DOMRect | null>(null)

  const handleMouseEnter = () => {
    if (ref.current) {
      rect.current = ref.current.getBoundingClientRect()
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rect.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = rect.current
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    x.set(distanceX * 0.15)
    y.set(distanceY * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    rect.current = null
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export function FloatingNavbar() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")


  // Scroll state
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 20
    if (shouldBeScrolled !== isScrolled) {
      setIsScrolled(shouldBeScrolled)
    }
  })

  useEffect(() => {
    const sections = ["inicio", "sobre-mi", "servicios", "resenas", "ubicaciones"]
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { threshold: 0.5, rootMargin: "-80px 0px -50% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (href.startsWith("/#") || href === "/inicio" || href === "/") {
      e.preventDefault()
      const targetId = href.includes("#") ? href.split("#")[1] : "inicio"

      if (pathname === "/") {
        const element = document.getElementById(targetId)
        if (element) {
          const offset = 80
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        } else if (targetId === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        setIsOpen(false)
      } else {
        router.push(`/?scrollTo=${targetId}`)
      }
    }
  }

  const navLinks = [
    { href: "/", label: t.nav.home, id: "inicio" },
    { href: "/#sobre-mi", label: t.nav.about, id: "sobre-mi" },
    { href: "/#servicios", label: t.nav.services, id: "servicios" },
    { href: "/novedades", label: t.nav.news, id: "novedades" },
    { href: "/#resenas", label: t.nav.reviews, id: "resenas" },
    { href: "/#ubicaciones", label: t.nav.locations, id: "ubicaciones" },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-4 px-4 pointer-events-none">
        <motion.nav
          className={cn(
            "pointer-events-auto flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] relative group/nav",
            isScrolled
              ? "w-full max-w-5xl bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-black/10 dark:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-full py-2 px-6"
              : "w-full max-w-6xl bg-transparent border-transparent py-4 px-2"
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Micro-grain texture - Inline for optimization */}
          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />

          {/* 1. Logo Section */}
          <div className="flex-none flex items-center">
            <Magnetic>
              <Link
                href="/"
                onClick={(e) => handleNavClick(e, "/")}
                className="block group/logo"
              >
                <Image
                  src="/logo.png"
                  alt="Carolina Morales Abogada"
                  width={140}
                  height={40}
                  className={cn(
                    "transition-all duration-700 w-auto object-contain brightness-100 group-hover/logo:scale-105 active:scale-95",
                    isScrolled ? "h-5 md:h-6" : "h-7 md:h-9"
                  )}
                  priority
                />
              </Link>
            </Magnetic>
          </div>

          {/* 2. Navigation Links (Center) */}
          <div className="hidden xl:flex items-center justify-center flex-1 z-10 px-2 lg:px-4">
            <div className="flex items-center gap-0.5 p-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 backdrop-blur-3xl relative">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id || (pathname === link.href && !activeSection && link.id === "inicio")
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative px-2 py-2 text-[9px] font-bold uppercase tracking-[0.1em] transition-all duration-300 rounded-full whitespace-nowrap font-inter group/link text-foreground/60 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* 3. CTA & Language Section */}
          <div className="flex-none flex items-center justify-end gap-2 sm:gap-4 translate-z-0 z-10">
            <div className="hidden xl:flex items-center gap-2 scale-90 origin-right">
              <LanguageSelector />
            </div>

            <div className="hidden sm:flex">
              <Link
                href="https://wa.me/34651465005"
                target="_blank"
                className="relative cursor-pointer rounded-2xl px-3 py-2 font-bold backdrop-blur-3xl transition-all duration-500 ease-in-out hover:shadow-[0_10px_30px_-5px_color-mix(in_srgb,var(--primary),transparent_80%)] bg-white/5 dark:bg-white/5 overflow-hidden border border-black/5 dark:border-white/10 hover:border-primary/20 text-[9px] font-black uppercase tracking-[0.1em] font-inter text-foreground/60 hover:text-foreground whitespace-nowrap inline-flex items-center justify-center"
              >
                {t.nav.bookAppointment}
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-3 rounded-2xl bg-primary/10 text-primary hover:bg-primary/20 transition-all active:scale-95 group relative border border-primary/20"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative size-5">
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu size={20} />
                </motion.div>
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X size={20} />
                </motion.div>
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Immersive Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] xl:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-background/40 backdrop-blur-3xl"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-card/95 border-l border-white/10 shadow-2xl p-10 pt-32 flex flex-col"
            >
              <div className="flex flex-col gap-2 overflow-y-auto flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href)
                        setIsOpen(false)
                      }}
                      className="text-3xl font-black text-foreground/90 hover:text-primary transition-all flex items-center gap-4 py-4 group"
                    >
                      <span className="text-[10px] font-mono text-primary/40 pt-1">0{i + 1}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/10 space-y-10">
                <div className="flex items-center justify-between px-2">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Idioma</span>
                  <LanguageSelector dir="up" />
                </div>
                <button
                  onClick={(e) => {
                    handleNavClick(e, "/#contacto")
                    setIsOpen(false)
                  }}
                  className="w-full py-6 bg-primary text-primary-foreground font-black rounded-3xl shadow-xl shadow-primary/20 active:scale-95 transition-all text-xs uppercase tracking-[0.2em]"
                >
                  {t.nav.bookAppointment}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
