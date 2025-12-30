"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, FileText, Download } from "lucide-react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { AnimatedLink } from "@/components/animated-link"
import { useTranslation } from "@/lib/i18n"
import { getNewsItem } from "@/lib/news-translations"

export default function NovedadPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const { t, locale } = useTranslation()
    const newsItem = getNewsItem(locale, slug)

    if (!newsItem) {
        return (
            <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
                <FloatingNavbar />
                <h1 className="text-4xl font-bold mb-4">{t.newsPage.notFound}</h1>
                <Link href="/novedades" className="text-primary hover:underline">
                    {t.newsPage.backToNews}
                </Link>
            </main>
        )
    }

    return (
        <div className="min-h-screen bg-background animate-fade-in-scale">
            <FloatingNavbar />

            <article className="pt-32 pb-24 px-6 md:px-8">
                <div className="container mx-auto max-w-4xl">

                    <AnimatedLink
                        href="/novedades"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t.newsPage.backToNews}
                    </AnimatedLink>

                    <header className="mb-10 animate-slide-in-up">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                                <Calendar className="w-3.5 h-3.5" />
                                {new Date(newsItem.date).toLocaleDateString(locale, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                                <FileText className="w-3.5 h-3.5" />
                                {newsItem.type === 'pdf' ? t.newsPage.pdfDocument : t.newsPage.article}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
                            {newsItem.title}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {newsItem.description}
                        </p>
                    </header>

                    <div className="border-t border-border pt-10">
                        {newsItem.type === 'pdf' && newsItem.url ? (
                            <div className="space-y-6">
                                <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground">{t.newsPage.viewerTitle}</p>
                                            <p className="text-sm text-muted-foreground">{t.newsPage.viewerSubtitle}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={newsItem.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium whitespace-nowrap"
                                    >
                                        <Download className="w-4 h-4" />
                                        {t.newsPage.downloadPdf}
                                    </a>
                                </div>

                                <div className="w-full h-[70vh] md:h-[850px] border border-border rounded-xl overflow-hidden bg-muted/20 shadow-inner relative group">
                                    <iframe
                                        src={`${newsItem.url}#toolbar=0&navpanes=0`}
                                        className="w-full h-full"
                                        title={newsItem.title}
                                    />

                                    {/* Mobile/Small Screen Overlay Tools */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <div className="flex items-center justify-center gap-3 pointer-events-auto">
                                            <a
                                                href={newsItem.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-xs font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                                            >
                                                <FileText className="w-4 h-4" />
                                                {t.newsPage.readMore}
                                            </a>
                                            <a
                                                href={newsItem.url}
                                                download
                                                className="bg-background/95 backdrop-blur-sm border border-border text-foreground px-4 py-2 rounded-full shadow-lg text-xs font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                                            >
                                                <Download className="w-4 h-4" />
                                                {t.newsPage.downloadPdf}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                                {newsItem.content}
                            </div>
                        )}
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    )
}
