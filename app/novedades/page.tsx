"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, FileText, Calendar, Search, File, Newspaper, X } from "lucide-react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/lib/i18n"
import { getNewsItems, NewsItem } from "@/lib/news-translations"
import { motion, AnimatePresence } from "framer-motion"

type FilterType = 'all' | 'pdf' | 'article'

export default function NovedadesPage() {
    const { t, locale } = useTranslation()
    const newsData = getNewsItems(locale)

    const [searchQuery, setSearchQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState<FilterType>('all')

    // Sort by date (most recent first) using Array.sort O(n log n)
    const sortedNews = useMemo(() => {
        return [...newsData].sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
    }, [newsData])

    // Filter and search with optimized algorithm
    const filteredNews = useMemo(() => {
        const query = searchQuery.toLowerCase().trim()

        return sortedNews.filter(item => {
            // Type filter
            if (activeFilter !== 'all' && item.type !== activeFilter) {
                return false
            }

            // Search filter (searches in title and description)
            if (query) {
                const titleMatch = item.title.toLowerCase().includes(query)
                const descMatch = item.description.toLowerCase().includes(query)
                return titleMatch || descMatch
            }

            return true
        })
    }, [sortedNews, searchQuery, activeFilter])

    // Split into featured (first) and rest
    const featuredItem = filteredNews[0]
    const restItems = filteredNews.slice(1)

    const filterButtons: { key: FilterType; label: string; icon: React.ReactNode }[] = [
        { key: 'all', label: t.newsPage.filterAll, icon: null },
        { key: 'pdf', label: t.newsPage.filterPdf, icon: <File className="w-3.5 h-3.5" /> },
        { key: 'article', label: t.newsPage.filterArticle, icon: <Newspaper className="w-3.5 h-3.5" /> }
    ]

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
            </div>

            <FloatingNavbar />

            <main className="pt-40 pb-32 px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <header className="mb-16 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground font-playfair tracking-tight">
                                {t.newsPage.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
                                {t.newsPage.subtitle}
                            </p>
                        </motion.div>
                    </header>

                    {/* Search and Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 relative z-10"
                    >
                        <div className="flex flex-col gap-4 items-stretch sm:flex-row sm:items-center sm:justify-between">
                            {/* Search Bar */}
                            <div className="relative w-full sm:max-w-sm lg:max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t.newsPage.searchPlaceholder}
                                    className="w-full pl-12 pr-10 py-3 sm:py-4 bg-card/30 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-xl sm:rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-foreground transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Filter Buttons */}
                            <div className="flex justify-center sm:justify-start gap-1.5 sm:gap-2 p-1 bg-card/30 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-xl sm:rounded-2xl overflow-x-auto scrollbar-none">
                                {filterButtons.map((filter) => (
                                    <button
                                        key={filter.key}
                                        onClick={() => setActiveFilter(filter.key)}
                                        className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === filter.key
                                            ? 'bg-primary text-black shadow-lg shadow-primary/25'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                            }`}
                                    >
                                        {filter.icon}
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                        <AnimatePresence mode="wait">
                            {filteredNews.length === 0 ? (
                                <motion.div
                                    key="no-results"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-card/50 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                                        <Search className="w-8 h-8 text-muted-foreground/50" />
                                    </div>
                                    <p className="text-xl text-muted-foreground">{t.newsPage.noResults}</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                                >
                                    {/* Featured Card - Takes 2 columns on large screens */}
                                    {featuredItem && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="lg:col-span-2"
                                        >
                                            <Link
                                                href={`/novedades/${featuredItem.slug}`}
                                                className="group h-full relative block"
                                            >
                                                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-2xl sm:rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition duration-500 blur-md" />

                                                <div className="relative h-full min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-xl sm:rounded-[2.25rem] p-6 sm:p-10 flex flex-col overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary/10">
                                                    {/* Badge */}
                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                                                        <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                                                            {t.newsPage.latestNews}
                                                        </span>
                                                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                                            <Calendar className="w-3.5 h-3.5" />
                                                            {new Date(featuredItem.date).toLocaleDateString(locale, {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* Type indicator */}
                                                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary/70 mb-6">
                                                        <FileText className="w-4 h-4" />
                                                        <span>{featuredItem.type === 'pdf' ? t.newsPage.pdfDocument : t.newsPage.article}</span>
                                                    </div>

                                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground font-playfair leading-[1.1] group-hover:text-primary transition-colors duration-300">
                                                        {featuredItem.title}
                                                    </h2>

                                                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-10 flex-grow line-clamp-3 sm:line-clamp-4">
                                                        {featuredItem.description}
                                                    </p>

                                                    <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                                                        <span className="text-sm sm:text-base font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                                                            {t.newsPage.readMore}
                                                        </span>
                                                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                                        </div>
                                                    </div>

                                                    {/* Decorative gradient */}
                                                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-xl sm:rounded-[2.25rem] pointer-events-none" />
                                                </div>
                                            </Link>
                                        </motion.div>
                                    )}

                                    {/* Rest items - Compact list */}
                                    <div className="lg:col-span-1 flex flex-col gap-4">
                                        {restItems.map((item, index) => (
                                            <motion.div
                                                key={item.slug}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                                            >
                                                <NewsListItem item={item} t={t} locale={locale} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

// Compact list item component
function NewsListItem({ item, t, locale }: { item: NewsItem; t: any; locale: string }) {
    return (
        <Link
            href={`/novedades/${item.slug}`}
            className="group relative block"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />

            <div className="relative bg-card/30 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-xl p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-card/50">
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <FileText className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wider font-medium">
                            <Calendar className="w-3 h-3" />
                            {new Date(item.date).toLocaleDateString(locale, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                            <span className="text-primary/60">•</span>
                            <span className="text-primary/80">{item.type === 'pdf' ? 'PDF' : t.newsPage.article}</span>
                        </div>

                        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {item.title}
                        </h3>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
