'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { locales, localeNames, Locale } from '@/lib/translations'

export function LanguageSelector() {
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
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                aria-label="Select language"
            >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{localeNames[locale]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 bg-card border border-border rounded-xl shadow-lg min-w-[140px] z-50 animate-fade-in-scale">
                    {locales.map((loc) => (
                        <button
                            key={loc}
                            onClick={() => handleSelect(loc)}
                            className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-primary/5 ${locale === loc ? 'text-primary font-medium' : 'text-foreground/80'
                                }`}
                        >
                            {localeNames[loc]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
