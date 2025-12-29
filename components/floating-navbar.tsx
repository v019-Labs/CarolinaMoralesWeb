"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { LanguageSelector } from "./language-selector"

export function FloatingNavbar() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const shouldBeIsland = scrollY > 20

      // Calculate smooth progress from 0 to 1 over 150px of scroll
      const progress = Math.min(scrollY / 150, 1)
      setScrollProgress(progress)

      if (shouldBeIsland !== isScrolled) {
        setIsScrolled(shouldBeIsland)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolled])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a section on the home page
    if (href.startsWith("/#") || href === "/inicio" || href === "/") {
      e.preventDefault()
      const targetId = href.includes("#") ? href.split("#")[1] : "inicio"

      if (pathname === "/") {
        const element = document.getElementById(targetId)
        if (element) {
          const offset = 80 // Offset for navbar
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
        setIsMobileMenuOpen(false)
      } else {
        router.push(`/?scrollTo=${targetId}`)
      }
    }
  }

  // Calculate intermediate values for smooth transition
  const borderRadius = `${scrollProgress * 9999}px`
  const paddingX = `${24 + scrollProgress * 24}px` // 24px -> 48px
  const paddingY = `${12 + scrollProgress * 4}px` // 12px -> 16px
  const maxWidth = `${100 - scrollProgress * 10}%` // 100% -> 90%
  const marginTop = `${scrollProgress * 24}px` // 0px -> 24px (New Island spacing)
  const blur = `${4 + scrollProgress * 12}px`

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#sobre-mi", label: t.nav.about },
    { href: "/#servicios", label: t.nav.services },
    { href: "/novedades", label: t.nav.news },
    { href: "/#resenas", label: t.nav.reviews },
    { href: "/#ubicaciones", label: t.nav.locations },
  ]

  return (
    <nav className="fixed left-0 right-0 z-50 top-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
      <div
        className="mx-auto transition-all duration-700 ease-out"
        style={{
          maxWidth,
          marginTop
        }}
      >
        <div
          className={cn(
            "border mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",

            isScrolled
              ? "bg-card/90 border-primary/20 shadow-[0_10px_40px_-10px_rgba(164,144,107,0.2)]"
              : "bg-transparent border-transparent",
          )}
          style={{
            borderRadius,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            paddingTop: paddingY,
            paddingBottom: paddingY,
            backdropFilter: `blur(${blur})`,
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Carolina Morales Abogada"
                width={isScrolled ? 120 : 150}
                height={isScrolled ? 40 : 50}
                className="transition-all duration-700"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}

              <LanguageSelector />

              <Link
                href="https://wa.me/34651465005"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/35"
              >
                {t.nav.bookAppointment}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-card/98 backdrop-blur-md mt-3 -mx-6 px-6">
              <div className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="py-2">
                  <LanguageSelector />
                </div>
                <Link
                  href="https://wa.me/34651465005"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all text-center"
                >
                  {t.nav.bookAppointment}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
