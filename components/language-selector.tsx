'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe, Check } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { locales, localeNames, Locale } from '@/lib/translations'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

export function LanguageSelector({ dir = 'down' }: { dir?: 'up' | 'down' }) {
    const { locale, setLocale } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (newLocale: Locale) => {
        setLocale(newLocale)
        setIsOpen(false)
    }

    return (
        <div ref={dropdownRef} className="relative overflow-visible">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center gap-2.5 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-2xl relative overflow-hidden group/lang font-inter min-w-[130px] justify-between",
                    isOpen
                        ? "bg-primary text-primary-foreground shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-primary"
                        : "text-foreground/60 hover:text-foreground bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 hover:border-primary/20"
                )}
                style={isOpen ? { backgroundColor: 'var(--primary)' } : {}}
            >
                <div className="flex items-center gap-2.5">
                    <div className="relative">
                        <Globe className={cn("w-3.5 h-3.5 transition-all duration-700", isOpen ? "scale-110 rotate-[360deg] opacity-80" : "group-hover/lang:rotate-45")} />
                        {!isOpen && <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover/lang:scale-100 transition-transform duration-300" />}
                    </div>
                    <span className="font-bold">{localeNames[locale]}</span>
                </div>
                <ChevronDown className={cn("w-3 h-3 transition-transform duration-500 ease-out", isOpen ? 'rotate-180' : '')} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: dir === 'up' ? -15 : 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: dir === 'up' ? -10 : 10, scale: 1 }}
                        exit={{ opacity: 0, y: dir === 'up' ? -15 : 15, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                        }}
                        className={cn(
                            "absolute right-0 p-2 bg-white/95 dark:bg-neutral-900/98 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)] z-[999] min-w-[200px]",
                            dir === 'up' ? "bottom-full mb-2" : "top-full"
                        )}
                    >
                        <div className="grid gap-1">
                            <div className="px-4 py-2 mb-1 border-b border-black/5 dark:border-white/5">
                                <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em]">Seleccionar idioma</span>
                            </div>
                            {locales.map((loc) => (
                                <button
                                    key={loc}
                                    onClick={() => handleSelect(loc)}
                                    className={cn(
                                        "flex items-center justify-between w-full px-4 py-3 text-left text-[11px] font-bold tracking-wider transition-all duration-300 rounded-[1.2rem] group/item relative overflow-hidden",
                                        locale === loc
                                            ? "text-primary"
                                            : "text-foreground/50 hover:text-foreground"
                                    )}
                                >
                                    {/* Item background hover effect */}
                                    <div className={cn(
                                        "absolute inset-0 transition-opacity duration-300",
                                        locale === loc ? "bg-primary/10 opacity-100" : "bg-black/5 dark:bg-white/5 opacity-0 group-hover/item:opacity-100"
                                    )} />

                                    <span className="flex items-center gap-3 relative z-10">
                                        <div className={cn(
                                            "w-1.5 h-1.5 rounded-full transition-all duration-500",
                                            locale === loc ? "bg-primary scale-125 shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" : "bg-transparent scale-0 group-hover/item:scale-100 group-hover/item:bg-foreground/30"
                                        )} />
                                        {localeNames[loc]}
                                    </span>

                                    {locale === loc && (
                                        <motion.div
                                            initial={{ scale: 0, x: 10 }}
                                            animate={{ scale: 1, x: 0 }}
                                            className="relative z-10"
                                        >
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </motion.div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
