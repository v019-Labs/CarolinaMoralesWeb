import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale, Locale } from './lib/translations'

function getPreferredLocale(acceptLanguage: string | null): Locale {
    if (!acceptLanguage) return defaultLocale

    // Parse Accept-Language header
    // Format: "en-US,en;q=0.9,es;q=0.8,fr;q=0.7"
    const languages = acceptLanguage
        .split(',')
        .map(lang => {
            const [code, qValue] = lang.trim().split(';q=')
            return {
                code: code.split('-')[0].toLowerCase(), // Get base language code
                q: qValue ? parseFloat(qValue) : 1.0
            }
        })
        .sort((a, b) => b.q - a.q)

    // Find first matching locale
    for (const lang of languages) {
        if (locales.includes(lang.code as Locale)) {
            return lang.code as Locale
        }
    }

    return defaultLocale
}

export function middleware(request: NextRequest) {
    const response = NextResponse.next()

    // Check if user has given cookie consent
    const cookieConsent = request.cookies.get('cookieConsent')?.value

    // Check if user already has a locale preference saved
    const savedLocale = request.cookies.get('locale')?.value as Locale | undefined

    if (savedLocale && locales.includes(savedLocale)) {
        // User has a saved preference, use it
        return response
    }

    // Only detect Accept-Language if user has ACCEPTED cookies
    if (cookieConsent === 'accepted') {
        const acceptLanguage = request.headers.get('Accept-Language')
        const detectedLocale = getPreferredLocale(acceptLanguage)

        // Set the detected locale as a cookie
        response.cookies.set('locale', detectedLocale, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365, // 1 year
            sameSite: 'lax'
        })
    } else {
        // No consent or rejected: use default locale (Spanish)
        response.cookies.set('locale', defaultLocale, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365, // 1 year
            sameSite: 'lax'
        })
    }

    return response
}

export const config = {
    matcher: [
        // Match all paths except static files and api routes
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
    ],
}

