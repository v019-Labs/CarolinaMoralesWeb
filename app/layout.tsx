import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script, Great_Vibes } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { TranslationProvider } from "@/lib/i18n";
import { cookies } from "next/headers";
import { Locale, defaultLocale, locales } from "@/lib/translations";
import "./globals.css";
import { ChatWidget, CookieConsent } from "@/components/DynamicComponents"; // Importar los componentes dinámicos
import { HolyWeekToast } from "@/components/holy-week-toast";
import { ChristmasDecorations } from "@/components/christmas-decorations";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abogadosmigracionyextranjeria.es"),
  title: {
    default: "Carolina Morales Abogada | Extranjería y Nacionalidad Española",
    template: "%s | Carolina Morales Abogada",
  },
  description:
    "Abogada experta en Arraigos, Nacionalidad Española y Reagrupación Familiar. Asesoramiento legal especializado en Barcelona y online para extranjeros.",
  keywords: [
    "abogada extranjería",
    "arraigo social",
    "nacionalidad española",
    "reagrupación familiar",
    "arraigo para la formación",
    "arraigo laboral",
    "visados España",
    "permiso de residencia",
    "trámites de inmigración",
  ],
  authors: [{ name: "Carolina Morales López" }],
  creator: "Carolina Morales López",
  publisher: "Carolina Morales Abogada",
  category: "Legal Services",
  openGraph: {
    title: "Carolina Morales Abogada | Experta en Arraigos y Nacionalidad",
    description:
      "Especialista en trámites de extranjería: Arraigos, Nacionalidad Española y Reagrupación Familiar. Consultoría legal rápida y eficiente.",
    url: "https://www.abogadosmigracionyextranjeria.es",
    siteName: "Carolina Morales Abogada",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/carolina.jpeg",
        width: 800,
        height: 600,
        alt: "Carolina Morales - Abogada experta en Arraigos, Nacionalidad y Reagrupación Familiar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Morales Abogada | Experta en Arraigos y Nacionalidad",
    description:
      "Especialista en extranjería: Arraigos, Nacionalidad Española y Reagrupación Familiar. Tu residencia en buenas manos.",
    images: ["/carolina.jpeg"],
    creator: "@carolinamorales",
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Leer el idioma desde la cookie (establecido por el middleware)
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  const locale: Locale =
    localeCookie && locales.includes(localeCookie as Locale)
      ? (localeCookie as Locale)
      : defaultLocale;

  // Determinar la dirección del texto para idiomas RTL
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${playfair.variable} ${inter.variable} ${dancingScript.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        <TranslationProvider initialLocale={locale}>
          <ChristmasDecorations />
          {children}
        </TranslationProvider>
        <CookieConsent />
        <ChatWidget />
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <HolyWeekToast />
      </body>
    </html>
  );
}