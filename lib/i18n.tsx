'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, defaultLocale, translations, getTranslation } from './translations'

type TranslationContextType = {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: ReturnType<typeof getTranslation>
    isTransitioning: boolean
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({
    children,
    initialLocale
}: {
    children: ReactNode
    initialLocale?: Locale
}) {
    const [locale, setLocaleState] = useState<Locale>(initialLocale || defaultLocale)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const setLocale = (newLocale: Locale) => {
        if (newLocale === locale) return

        // Start transition animation
        setIsTransitioning(true)

        // After fade out, change locale
        setTimeout(() => {
            setLocaleState(newLocale)
            // Save to cookie for middleware to read
            document.cookie = `locale=${newLocale};path=/;max-age=31536000`

            // After a brief moment, fade back in
            setTimeout(() => {
                setIsTransitioning(false)
            }, 50)
        }, 200)
    }

    // On mount, check for saved preference
    useEffect(() => {
        const savedLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith('locale='))
            ?.split('=')[1] as Locale | undefined

        if (savedLocale && translations[savedLocale]) {
            setLocaleState(savedLocale)
        }
    }, [])

    const t = getTranslation(locale)

    return (
        <TranslationContext.Provider value={{ locale, setLocale, t, isTransitioning }}>
            <div
                className="transition-opacity duration-300 ease-out"
                style={{ opacity: isTransitioning ? 0 : 1 }}
            >
                {children}
            </div>
        </TranslationContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(TranslationContext)
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider')
    }
    return context
}
