import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Dancing_Script, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import { TranslationProvider } from "@/lib/i18n"
import { CookieConsent } from "@/components/cookie-consent"
import { cookies } from "next/headers"
import { Locale, defaultLocale, locales } from "@/lib/translations"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
})

export const metadata: Metadata = {
  title: "Carolina Morales Abogada",
  description: "Abogada de migración y extranjería",
  keywords: [
    "abogada extranjería",
    "abogada migración",
    "visados España",
    "permiso de residencia",
    "permiso de trabajo",
    "nacionalidad española",
    "reagrupación familiar",
    "arraigo social",
    "trámites de inmigración"
  ],
  authors: [{ name: "Carolina Morales López" }],
  creator: "Carolina Morales López",
  publisher: "Carolina Morales Abogada",
  category: "Legal Services"
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Read locale from cookie (set by middleware)
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')?.value
  const locale: Locale = (localeCookie && locales.includes(localeCookie as Locale))
    ? localeCookie as Locale
    : defaultLocale

  // Determine text direction for RTL languages
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${playfair.variable} ${inter.variable} ${dancingScript.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        <TranslationProvider initialLocale={locale}>
          {children}
        </TranslationProvider>
        <CookieConsent />
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}

