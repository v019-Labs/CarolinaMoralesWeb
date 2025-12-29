"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { AnimatedLink } from "@/components/animated-link"

export function ServicesSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrollY = window.scrollY
      const elements = sectionRef.current.querySelectorAll("[data-parallax]")

      elements.forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-parallax") || "0")
        const rect = el.getBoundingClientRect()
        const elementTop = rect.top + scrollY
        const elementVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (elementVisible) {
          const yPos = (scrollY - elementTop / 2) * speed * 1.5
            ; (el as HTMLElement).style.transform = `translateY(${yPos}px) translateZ(0)`
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainServices = [
    {
      title: t.services.nacionalidad.title,
      slug: "nacionalidad",
      description: t.services.nacionalidad.description,
      image: "/images/nacionalidad.png"
    },
    {
      title: t.services.arraigo.title,
      slug: "arraigo",
      description: t.services.arraigo.description,
      image: "/images/arraigos.png",
    },
    {
      title: t.services.reagrupacion.title,
      slug: "reagrupacion-familiar",
      description: t.services.reagrupacion.description,
      image: "/images/reagrupacion.jpg"
    },
  ]

  const otherServices = [
    {
      title: t.services.penal.title,
      slug: "derecho-penal",
      description: t.services.penal.description,
      image: "/images/penal.jpg",
    },
    {
      title: t.services.civil.title,
      slug: "derecho-civil",
      description: t.services.civil.description,
      image: "/images/matrimonial.jpg",
    },
    {
      title: t.services.accidentes.title,
      slug: "reclamacion-accidentes",
      description: t.services.accidentes.description,
      image: "/images/accidente.jpg",
    },
  ]

  return (
    <section ref={sectionRef} id="servicios" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          data-parallax="0.7"
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[130px] animate-glow"
        />
        <div
          data-parallax="0.5"
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse animation-delay-1000"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16 animate-slide-in-up">
          <h2 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
            {t.services.title}{" "}
            <span className="font-vibes text-primary drop-shadow-[0_0_25px_rgba(164,144,107,0.5)]">
              {t.services.specialization}
            </span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} learnMore={t.services.learnMore} />
          ))}
        </div>

        <div className="space-y-12 animate-slide-in-up animation-delay-400">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold font-dancing text-primary">
              {t.services.otherServices}
            </h3>
            <div className="w-24 h-0.5 bg-primary/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index + 4} learnMore={t.services.learnMore} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, learnMore }: { service: any; index: number; learnMore: string }) {
  return (
    <AnimatedLink href={`/servicios/${service.slug}`} className="block h-full">
      <div
        className="group relative p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-primary/15 rounded-3xl hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-500 ease-out hover:-translate-y-1 animate-slide-in-up h-full cursor-pointer flex flex-col"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative space-y-6 flex-grow">
          {service.image && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-2">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}

          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-dancing text-3xl">
            {service.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
        </div>

        <div className="relative pt-6 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-y-2 group-hover:translate-y-0 text-sm">
          <span className="text-primary font-medium inline-flex items-center gap-2">
            {learnMore}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </AnimatedLink>
  )
}
