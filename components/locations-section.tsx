"use client"

import { useEffect, useRef } from "react"
import { useTranslation } from "@/lib/i18n"

export function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrollY = window.scrollY
      const elements = sectionRef.current.querySelectorAll("[data-parallax]")

      elements.forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-parallax") || "0")
        const yPos = -(scrollY * speed)
          ; (el as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="ubicaciones" className="py-20 px-6 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          data-parallax="0.08"
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            {t.locationsSection.title} <span className="text-primary">{t.locationsSection.subtitle}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-foreground">{t.locationsSection.reus}</h3>
              <p className="text-muted-foreground mb-4">
                {t.locationsSection.addressReus}
              </p>
            </div>
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <iframe
                src="https://maps.google.com/maps?q=Carrer+d'Antoni+Gaudí,+74,+43203+Reus,+Tarragona&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-foreground">{t.locationsSection.barcelona}</h3>
              <p className="text-muted-foreground mb-4">
                {t.locationsSection.addressBarcelona}
              </p>
            </div>
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <iframe
                src="https://maps.google.com/maps?q=Pg.+de+la+Bonanova,+10,+08022+Barcelona&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
