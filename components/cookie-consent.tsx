'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Cookie consent translations
const cookieTranslations = {
    es: {
        description: 'Esta web utiliza únicamente cookies estrictamente necesarias para su correcto funcionamiento, como la adaptación del idioma según las preferencias del navegador. Usted puede otorgar, denegar o revocar su consentimiento en cualquier momento.',
        moreInfo: 'Más información',
        accept: 'Aceptar',
        reject: 'Rechazar'
    },
    en: {
        description: 'This website only uses strictly necessary cookies for its proper functioning, such as adapting the language according to browser preferences. You can grant, deny or revoke your consent at any time.',
        moreInfo: 'More info',
        accept: 'Accept',
        reject: 'Reject'
    },
    fr: {
        description: 'Ce site utilise uniquement des cookies strictement nécessaires à son bon fonctionnement, comme l\'adaptation de la langue selon les préférences du navigateur. Vous pouvez accorder, refuser ou révoquer votre consentement à tout moment.',
        moreInfo: 'Plus d\'infos',
        accept: 'Accepter',
        reject: 'Refuser'
    },
    ar: {
        description: 'يستخدم هذا الموقع فقط ملفات تعريف الارتباط الضرورية للغاية لعمله بشكل صحيح، مثل تكييف اللغة وفقًا لتفضيلات المتصفح. يمكنك منح أو رفض أو إلغاء موافقتك في أي وقت.',
        moreInfo: 'مزيد من المعلومات',
        accept: 'قبول',
        reject: 'رفض'
    },
    pt: {
        description: 'Este site utiliza apenas cookies estritamente necessários para o seu correto funcionamento, como a adaptação do idioma de acordo com as preferências do navegador. Você pode conceder, negar ou revogar seu consentimento a qualquer momento.',
        moreInfo: 'Mais informações',
        accept: 'Aceitar',
        reject: 'Rejeitar'
    },
    zh: {
        description: '本网站仅使用其正常运行所必需的Cookie，例如根据浏览器偏好调整语言。您可以随时授予、拒绝或撤销您的同意。',
        moreInfo: '更多信息',
        accept: '接受',
        reject: '拒绝'
    },
    ro: {
        description: 'Acest site folosește doar cookie-uri strict necesare pentru funcționarea corectă, cum ar fi adaptarea limbii conform preferințelor browserului. Puteți acorda, refuza sau revoca consimțământul în orice moment.',
        moreInfo: 'Mai multe informații',
        accept: 'Accept',
        reject: 'Refuz'
    }
}

type Locale = 'es' | 'en' | 'fr' | 'ar' | 'pt' | 'zh' | 'ro'

// Delay before showing banner (after intro animation)
const SHOW_DELAY_MS = 3500

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)
    const [locale, setLocale] = useState<Locale>('es')

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, SHOW_DELAY_MS)
            return () => clearTimeout(timer)
        }

        const localeCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('locale='))
            ?.split('=')[1] as Locale | undefined

        if (localeCookie && cookieTranslations[localeCookie]) {
            setLocale(localeCookie)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        document.cookie = 'cookieConsent=accepted;path=/;max-age=31536000;SameSite=Lax'
        setIsVisible(false)
        window.location.reload()
    }

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected')
        document.cookie = 'cookieConsent=rejected;path=/;max-age=31536000;SameSite=Lax'
        document.cookie = 'locale=es;path=/;max-age=31536000;SameSite=Lax'
        setIsVisible(false)
    }

    const t = cookieTranslations[locale]
    const isRTL = locale === 'ar'

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    className="fixed bottom-0 left-0 right-0 z-[100]"
                    dir={isRTL ? 'rtl' : 'ltr'}
                >
                    <div className="border-t border-border/40 bg-card/95 backdrop-blur-lg shadow-lg">
                        <div className="mx-auto max-w-7xl px-4 py-3">
                            {/* Horizontal layout */}
                            <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-3 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                                {/* Text */}
                                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                                    {t.description}{' '}
                                    <Link
                                        href="/legal/cookies"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        {t.moreInfo}
                                    </Link>
                                </p>

                                {/* Buttons */}
                                <div className={`flex gap-2 shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <button
                                        onClick={handleAccept}
                                        className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium text-xs transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
                                    >
                                        {t.accept}
                                    </button>
                                    <button
                                        onClick={handleReject}
                                        className="px-4 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-medium text-xs transition-all duration-200 hover:bg-secondary/80 active:scale-[0.98]"
                                    >
                                        {t.reject}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
