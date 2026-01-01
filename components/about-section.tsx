"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="sobre-mi" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"
        />
        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] animate-glow"
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-up animation-delay-200">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                {t.about.title}{" "}
                <span className="font-vibes text-primary drop-shadow-[0_0_20px_rgba(164,144,107,0.4)]">
                  {t.about.name}
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-transparent" />
            </div>

            <div className="space-y-8 bg-card/40 p-10 rounded-[2.5rem] border-2 border-primary/10 backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p className="animate-fade-in">
                  {t.about.birthplace}
                </p>
                <p className="animate-fade-in animation-delay-200">
                  {t.about.education}
                </p>
                <div className="space-y-2 pl-4 border-l-2 border-primary/20 animate-fade-in animation-delay-400">
                  <p>• {t.about.mediation}</p>
                  <p>• {t.about.immigration}</p>
                  <p>• {t.about.canonicalLaw}</p>
                </div>
                <p className="text-xl font-dancing text-primary/90 leading-snug animate-fade-in animation-delay-600 pt-2">
                  {t.about.quote}
                </p>
              </div>
            </div>

          </div>

          <div className="relative animate-slide-in-up animation-delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/15 rounded-[3rem] blur-2xl" />

            {/* Rotating laser border container */}
            <div className="photo-laser-border relative aspect-[4/5] rounded-[3rem] p-[4px]">
              {/* Inner container for the image */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/15 rounded-[calc(3rem-4px)] overflow-hidden shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500">
                <Image
                  src="/carolina.jpeg"
                  alt="Carolina Morales - Abogada experta en Arraigos, Nacionalidad y Reagrupación Familiar"
                  width={500}
                  height={625}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
