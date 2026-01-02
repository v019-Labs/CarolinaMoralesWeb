"use client"

import Link from "next/link"
import { ArrowRight, FileText, Calendar, Clock } from "lucide-react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/lib/i18n"
import { getNewsItems } from "@/lib/news-translations"
import { motion } from "framer-motion"

export default function NovedadesPage() {
    const { t, locale } = useTranslation()
    const newsData = getNewsItems(locale)

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
                    <header className="mb-24 text-center relative z-10">
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

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                        {newsData.map((item, index) => (
                            <motion.div
                                key={item.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/novedades/${item.slug}`}
                                    className="group h-full relative block"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-md" />

                                    <div className="relative h-full bg-card/30 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-[1.75rem] p-8 flex flex-col overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary/5">
                                        {/* Card Content */}
                                        <div className="flex items-center justify-between mb-8 opacity-80">
                                            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                                                <FileText className="w-4 h-4" />
                                                <span>Actualidad</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(item.date).toLocaleDateString(locale, {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                        </div>

                                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground font-playfair leading-[1.1] group-hover:text-primary transition-colors duration-300">
                                            {item.title}
                                        </h2>

                                        <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-8 flex-grow">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                                            <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                                                {t.newsPage.readMore}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>


                </div>
            </main>

            <Footer />
        </div>
    )
}
