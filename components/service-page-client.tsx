"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { ArrowLeft, FileText, Landmark, Home, Users, Gavel, Car } from "lucide-react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { AnimatedLink } from "@/components/animated-link"
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
