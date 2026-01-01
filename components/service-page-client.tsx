"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { ArrowLeft, FileText, Landmark, Home, Users, Gavel, Car } from "lucide-react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { AnimatedLink } from "@/components/animated-link"
import { Globe } from "@/components/ui/globe"
import { useTranslation } from "@/lib/i18n"
import { getServiceContent } from "@/lib/service-translations"

const serviceIcons: Record<string, any> = {
    "nacionalidad": Landmark,
    "arraigo": Home,
    "reagrupacion-familiar": Users,
    "derecho-penal": Gavel,
    "derecho-civil": Users,
    "reclamacion-accidentes": Car
}

interface ServicePageClientProps {
    slug: string
}

export function ServicePageClient({ slug }: ServicePageClientProps) {
    const { locale, t } = useTranslation()
    const service = getServiceContent(locale, slug)

    if (!service) {
        return (
            <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
                <FloatingNavbar />
                <h1 className="text-4xl font-bold mb-4">{t.servicePage.notFound || "Servicio no encontrado"}</h1>
                <Link href="/?scrollTo=servicios" className="text-primary hover:underline">
                    {t.servicePage.backToServices}
                </Link>
            </main>
        )
    }

    const Icon = serviceIcons[slug] || FileText

    return (
        <div className="min-h-screen bg-background animate-fade-in-scale">
            <FloatingNavbar />

            {/* Clean Article Layout */}
            <article className="pt-32 pb-24 px-6">
                <div className="container mx-auto max-w-3xl">

                    {/* Back Link */}
                    <AnimatedLink
                        href="/?scrollTo=servicios"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t.servicePage.backToServices}
                    </AnimatedLink>

                    {/* Header */}
                    <header className="mb-16 animate-slide-in-up">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {service.title}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </header>

                    {slug === 'nacionalidad' && (
                        <div className="mb-16 flex items-center justify-center">
                            <div className="bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border px-4 md:px-40 pt-8 pb-40 md:pb-60">
                                <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-6xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10 z-10">
                                    Nacionalidad
                                </span>
                                <Globe className="top-20 md:top-28" />
                                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                            </div>
                        </div>
                    )}

                    {/* Content Area - Full Text */}
                    <div className="max-w-none">
                        {service.content}
                    </div>

                    {/* Simple CTA at the bottom */}
                    <div className="mt-20 pt-12 border-t border-border">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-lg font-medium mb-1">{t.servicePage.quickQuestion}</p>
                                <p className="text-muted-foreground">{t.servicePage.contactForConsultation}</p>
                            </div>
                            <Link
                                href="https://wa.me/34651465005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
                            >
                                {t.servicePage.contactWhatsApp}
                            </Link>
                        </div>
                    </div>

                </div>
            </article>

            <Footer />
        </div>
    )
}
