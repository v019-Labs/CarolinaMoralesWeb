"use client"

import Link from "next/link"
import { ArrowRight, FileText, Calendar } from "lucide-react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/lib/i18n"
import { getNewsItems } from "@/lib/news-translations"

export default function NovedadesPage() {
    const { t, locale } = useTranslation()
    const newsData = getNewsItems(locale)

    return (
        <div className="min-h-screen bg-background animate-fade-in-scale">
            <FloatingNavbar />

            <main className="pt-32 pb-24 px-6 md:px-8">
                <div className="container mx-auto max-w-5xl">
                    <header className="mb-16 text-center animate-slide-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            {t.newsPage.title}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {t.newsPage.subtitle}
                        </p>
                    </header>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {newsData.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/novedades/${item.slug}`}
                                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                            >
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {new Date(item.date).toLocaleDateString(locale, {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {item.title}
                                    </h2>

                                    <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center font-medium text-primary text-sm mt-auto">
                                        {t.newsPage.readMore} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
