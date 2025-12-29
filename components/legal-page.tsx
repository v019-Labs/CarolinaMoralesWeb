"use client"

import Link from "next/link"
import { ArrowLeft, Scale, Shield, Cookie } from "lucide-react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/lib/i18n"
import { legalTranslations } from "@/lib/legal-translations"

interface LegalPageProps {
    pageType: 'avisoLegal' | 'privacidad' | 'cookies'
}

const icons = {
    avisoLegal: Scale,
    privacidad: Shield,
    cookies: Cookie
}

export function LegalPageContent({ pageType }: LegalPageProps) {
    const { locale } = useTranslation()
    const t = legalTranslations[locale] || legalTranslations.es
    const pageContent = t[pageType]
    const Icon = icons[pageType]

    return (
        <div className="min-h-screen bg-background animate-fade-in-scale">
            <FloatingNavbar />

            <article className="pt-32 pb-24 px-6">
                <div className="container mx-auto max-w-3xl">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                        {t.backToHome}
                    </Link>

                    {/* Header */}
                    <header className="mb-16 animate-slide-in-up">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent rtl:bg-gradient-to-l" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            {pageContent.title}
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            {pageContent.subtitle}
                        </p>
                    </header>

                    {/* Content */}
                    <div className="space-y-12 animate-slide-in-up animation-delay-200">
                        {pageContent.sections.map((section, index) => (
                            <section
                                key={index}
                                className="p-8 bg-card/50 rounded-3xl border border-border/50 hover:border-primary/20 transition-colors"
                            >
                                <h2 className="text-2xl font-bold mb-4 text-foreground">
                                    {section.title}
                                </h2>
                                {section.content && (
                                    <p className="text-foreground/80 leading-relaxed mb-4">
                                        {section.content}
                                    </p>
                                )}
                                {section.list && (
                                    <ul className="space-y-2 text-foreground/80">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <p className="text-sm text-muted-foreground mt-12 text-center">
                        {t.lastUpdated}: {t.lastUpdatedDate}
                    </p>
                </div>
            </article>

            <Footer />
        </div>
    )
}
