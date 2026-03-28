"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

function ParallaxBlob({ speed, className }: { speed: number; className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate parallax movement based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("absolute will-change-transform", className)}
    />
  )
}

export function ServicesSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax is now handled by the ParallaxBlob component using framer-motion

  const mainServices = [
    {
      title: t.services.nacionalidad.title,
      slug: "nacionalidad",
      description: t.services.nacionalidad.description,
      image: "/images/nacionalidad.png",
      className: "md:col-span-2",
    },
    {
      title: t.services.arraigo.title,
      slug: "arraigo",
      description: t.services.arraigo.description,
      image: "/images/arraigo.png",
      className: "md:col-span-1",
    },
    {
      title: t.services.reagrupacion.title,
      slug: "reagrupacion-familiar",
      description: t.services.reagrupacion.description,
      image: "/images/reagrupacion.jpg",
      className: "md:col-span-3",
    },
  ]

  const otherServices = [
    {
      title: t.services.penal.title,
      slug: "derecho-penal",
      description: t.services.penal.description,
      image: "/images/penal.jpg",
      className: "md:col-span-1",
    },
    {
      title: t.services.civil.title,
      slug: "derecho-civil",
      description: t.services.civil.description,
      image: "/images/matrimonial.jpg",
      className: "md:col-span-1",
    },
    {
      title: t.services.accidentes.title,
      slug: "reclamacion-accidentes",
      description: t.services.accidentes.description,
      image: "/images/accidente.jpg",
      className: "md:col-span-1",
    },
  ]

  return (
    <section ref={sectionRef} id="servicios" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParallaxBlob
          speed={0.7}
          className="top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[130px] animate-glow"
        />
        <ParallaxBlob
          speed={0.5}
          className="bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse animation-delay-1000"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16 animate-slide-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-balance leading-tight">
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

        <BentoGrid className="mb-24">
          {mainServices.map((service, index) => (
            <BentoCard
              key={index}
              name={service.title}
              className={service.className}
              background={
                <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes={
                      service.className === "md:col-span-2" 
                        ? "(max-width: 768px) 100vw, 850px"
                        : service.className === "md:col-span-1"
                        ? "(max-width: 768px) 100vw, 420px"
                        : "(max-width: 768px) 100vw, 1280px"
                    }
                    className={`${service.slug === 'arraigo' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
              }
              description={service.description}
              href={`/servicios/${service.slug}`}
              cta={t.services.learnMore}
            />
          ))}
        </BentoGrid>

        <div className="space-y-12 animate-slide-in-up animation-delay-400">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold font-dancing text-primary">
              {t.services.otherServices}
            </h3>
            <div className="w-24 h-0.5 bg-primary/30 mx-auto" />
          </div>

          <BentoGrid>
            {otherServices.map((service, index) => (
              <BentoCard
                key={index}
                name={service.title}
                className={service.className}
                background={
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>
                }
                description={service.description}
                href={`/servicios/${service.slug}`}
                cta={t.services.learnMore}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}
