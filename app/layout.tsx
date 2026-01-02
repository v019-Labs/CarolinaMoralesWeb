import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Dancing_Script, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
  metadataBase: new URL('https://www.abogadosmigracionyextranjeria.es'),
  title: {
    default: "Carolina Morales Abogada | Extranjería y Nacionalidad Española",
    template: "%s | Carolina Morales Abogada"
  },
  description: "Abogada experta en Arraigos, Nacionalidad Española y Reagrupación Familiar. Asesoramiento legal especializado en Barcelona y online para extranjeros.",
  keywords: [
    "abogada extranjería",
    "arraigo social",
    "nacionalidad española",
    "reagrupación familiar",
    "arraigo para la formación",
    "arraigo laboral",
    "visados España",
    "permiso de residencia",
    "trámites de inmigración"
  ],
  authors: [{ name: "Carolina Morales López" }],
  creator: "Carolina Morales López",
  publisher: "Carolina Morales Abogada",
  category: "Legal Services",
  openGraph: {
    title: "Carolina Morales Abogada | Experta en Arraigos y Nacionalidad",
    description: "Especialista en trámites de extranjería: Arraigos, Nacionalidad Española y Reagrupación Familiar. Consultoría legal rápida y eficiente.",
    url: 'https://www.abogadosmigracionyextranjeria.es',
    siteName: 'Carolina Morales Abogada',
    locale: 'es_ES',
    type: 'website',
    images: [{
      url: '/carolina.jpeg',
      width: 800,
      height: 600,
      alt: 'Carolina Morales - Abogada experta en Arraigos, Nacionalidad y Reagrupación Familiar',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carolina Morales Abogada | Experta en Arraigos y Nacionalidad',
    description: "Especialista en extranjería: Arraigos, Nacionalidad Española y Reagrupación Familiar. Tu residencia en buenas manos.",
    images: ['/carolina.jpeg'],
    creator: '@carolinamorales',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <SpeedInsights />
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Carolina Morales Abogada",
              "image": "https://www.abogadosmigracionyextranjeria.es/og-image.jpg",
              "@id": "https://www.abogadosmigracionyextranjeria.es",
              "url": "https://www.abogadosmigracionyextranjeria.es",
              "telephone": "+34666333222",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pg. de la Bonanova, 10, Bj 2ª",
                "addressLocality": "Barcelona",
                "postalCode": "08022",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.3995831,
                "longitude": 2.1298463
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/carolinamoralesabogada/",
                "https://www.facebook.com/carolinamoraleslopezabogadaextranjeria/",
                "https://es.linkedin.com/in/carolina-morales-l%C3%B3pez-3332b2129",
                "https://www.google.com/maps/place/Carolina+Morales+Abogada/@41.3995831,2.1298463,17z"
              ],
              "knowsAbout": ["Arraigos", "Nacionalidad Española", "Reagrupación Familiar", "Derecho de Extranjería"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "4"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Ramiro Barreto Gutiérrez" },
                  "reviewBody": "Excelente profesional, una abogada de extranjería que realizó un trabajo impecable, logrando mi nacionalidad en muy poco tiempo.",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Carolyn Handley" },
                  "reviewBody": "10/10, would highly recommend to anyone going through a visa process!",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}

