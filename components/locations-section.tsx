"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { Map, MapMarker, MarkerContent, MapControls, MarkerPopup } from "@/components/ui/map"
import { Phone, MapPin, ExternalLink } from "lucide-react"

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

  const mapStyle = {
    light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
    dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Reus Office */}
          <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
            <div className="flex-1 p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{t.locationsSection.reus}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    {t.locationsSection.addressReus}
                  </p>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Reus</span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative">
              <Map
                center={[1.107479, 41.160855]}
                zoom={15}
                scrollZoom={false}
                styles={mapStyle}
              >
                <MapMarker longitude={1.107479} latitude={41.160855}>
                  <MarkerContent className="group">
                    <div className="relative size-10 flex items-center justify-center transition-transform hover:scale-110">
                      <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full" />
                      <div className="relative size-8 rounded-full border-2 border-primary bg-background shadow-xl overflow-hidden">
                        <Image src="/carolina.jpeg" alt="Carolina Morales" fill className="object-cover" />
                      </div>
                    </div>
                  </MarkerContent>
                  <MarkerPopup className="w-64">
                    <div className="space-y-3">
                      <h4 className="font-bold text-primary">{t.locationsSection.reus}</h4>
                      <p className="text-xs text-muted-foreground">{t.locationsSection.addressReus}</p>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Carrer+d'Antoni+Gaudí,+74,+43203+Reus"
                        target="_blank"
                        className="flex items-center gap-2 text-xs text-primary hover:underline"
                      >
                        <ExternalLink size={12} />
                        Cómo llegar
                      </a>
                    </div>
                  </MarkerPopup>
                </MapMarker>
                <MapControls showZoom showFullscreen position="top-right" />
              </Map>
            </div>
          </div>

          {/* Barcelona Office */}
          <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
            <div className="flex-1 p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{t.locationsSection.barcelona}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    {t.locationsSection.addressBarcelona}
                  </p>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Barcelona</span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative">
              <Map
                center={[2.1298463, 41.3995831]}
                zoom={15}
                scrollZoom={false}
                styles={mapStyle}
              >
                <MapMarker longitude={2.1298463} latitude={41.3995831}>
                  <MarkerContent className="group">
                    <div className="relative size-10 flex items-center justify-center transition-transform hover:scale-110">
                      <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full" />
                      <div className="relative size-8 rounded-full border-2 border-primary bg-background shadow-xl overflow-hidden">
                        <Image src="/carolina.jpeg" alt="Carolina Morales" fill className="object-cover" />
                      </div>
                    </div>
                  </MarkerContent>
                  <MarkerPopup className="w-64">
                    <div className="space-y-3">
                      <h4 className="font-bold text-primary">{t.locationsSection.barcelona}</h4>
                      <p className="text-xs text-muted-foreground">{t.locationsSection.addressBarcelona}</p>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Pg.+de+la+Bonanova,+10,+08022+Barcelona"
                        target="_blank"
                        className="flex items-center gap-2 text-xs text-primary hover:underline"
                      >
                        <ExternalLink size={12} />
                        Cómo llegar
                      </a>
                    </div>
                  </MarkerPopup>
                </MapMarker>
                <MapControls showZoom showFullscreen position="top-right" />
              </Map>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
